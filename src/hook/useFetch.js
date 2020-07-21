import { useState, useEffect } from 'react'

export const useFetch = url => {
  const [data, setData] = useState({ data: null, loading: true, error: null })
  useEffect(() => {
    setData({ data: null, loading: true, error: null })
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData({ loading: false, error: null, data })
      })
  }, [url])

  return data
}
