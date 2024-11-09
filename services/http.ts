const API_URL = process.env.NEXT_PUBLIC_API_URL

export const http = async <T>(url: string, options?: RequestInit) => {
  try {
    const res = await fetch(`${API_URL}${url}`, {
      method: options?.method ?? 'GET',
      cache: options?.cache ?? 'force-cache',
      ...(options?.body && { body: JSON.stringify(options.body) }),
      ...options,
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json() as Promise<T>
  } catch (error) {
    console.error(error)
    return null
  }
}
