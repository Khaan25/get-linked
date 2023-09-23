'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  number: z.string().refine(
    (value) => {
      // You can adjust the regex pattern as per your requirements for phone number validation
      const phonePattern = /^[0-9()-]*$/
      return phonePattern.test(value)
    },
    {
      message: 'Invalid phone number format',
    }
  ),
  message: z.string().min(2, { message: 'Message must be at least 2 characters.' }),
})

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true)
    try {
      const response = await fetch(`https://backend.getlinked.ai/hackathon/contact-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: data.name,
          email: data.email,
          phone_number: data.email,
          message: data.message,
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled={isLoading} placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled={isLoading} placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input disabled={isLoading} type="tel" placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea disabled={isLoading} rows={6} placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="mx-auto flex">
          Submit
        </Button>
      </form>
    </Form>
  )
}
