import { useEffect, useState } from 'react'

const useFetch = <TData>(url: string, key: string | undefined = undefined) => {
  const [data, setData] = useState<TData>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => {
        if (key) {
          setData(data[key])
        } else {
          setData(data)
        }
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
