'use client'

import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import { Category, getCategories } from '@/lib/api'

import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const FormSchema = z.object({
  name: z.string().min(1, { message: 'Name required.' }),
  number: z
    .string()
    .min(1, { message: 'Phone Number required' })
    .refine(
      (value) => {
        // You can adjust the regex pattern as per your requirements for phone number validation
        const phonePattern = /^[0-9()-]*$/
        return phonePattern.test(value)
      },
      { message: 'Invalid phone number format' }
    ),
  email: z.string().email({ message: 'Invalid email address.' }),
  topic: z.string().min(1, { message: 'topic must be selected' }),
  category: z.string({ required_error: 'Category must be selected' }),
  group_size: z.string({ required_error: 'Group Size must be selected' }),
  policy: z.boolean().refine((value) => value === true, {
    message: 'Policy must be checked',
  }),
})

export default function RegisterForm() {
  const [categories, setCategories] = useState<Category[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      number: '',
      email: '',
      topic: '',
      policy: false,
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch(`https://backend.getlinked.ai/hackathon/registration`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          phone_number: data.number,
          team_name: data.name,
          group_size: parseInt(data.group_size),
          project_topic: data.topic,
          category: categories.filter((c) => c.name === data.category)[0].id,
          privacy_poclicy_accepted: data.policy,
        }),
      })

      if (response.ok) {
        toast.success('Success')
        form.reset()
      } else {
        toast.error('There was an error while submitting')
      }
    } catch (err) {
      toast.error('There was an error while submitting')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data)
    })
  }, [])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="flex items-center gap-4 maxMd:flex-col">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Team&apos;s Name</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="Enter the name of your group" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} type="tel" placeholder="Enter your Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-4 maxMd:flex-col">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Project Topic</FormLabel>
                <FormControl>
                  <Input disabled={isLoading} placeholder="What is your group project topic" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-4 maxMd:flex-col">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Category</FormLabel>
                <Select disabled={isLoading} onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue className="w-full" placeholder="Select your Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.length > 0 &&
                      categories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="group_size"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Group Size</FormLabel>
                <Select disabled={isLoading} onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Group Size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="15">15</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <span className="text-primary">Please review your registration details before submitting</span>
          <FormField
            control={form.control}
            name="policy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-3">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="m-0 flex flex-col gap-2">
                  <FormLabel className="!m-0">I agreed with the event terms and conditions and privacy policy</FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <Button disabled={isLoading} type="submit" className="mx-auto flex">
          Submit
        </Button>
      </form>
    </Form>
  )
}
