const API_URL = process.env.NEXT_PUBLIC_API_URL

export const http = async <T>(url: string, options?: RequestInit) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: options?.method ?? 'GET',
    cache: options?.cache ?? 'no-store',
    ...(options?.body && { body: JSON.stringify(options.body) }),
    ...options,
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<T>
}
