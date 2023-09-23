import axios from 'axios'

export type Category = { id: number; name: string }

export function getCategories(): Promise<Category[]> {
  return axios.get('https://backend.getlinked.ai/hackathon/categories-list').then((res) => res.data)
}
