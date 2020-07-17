import { useState, useEffect } from 'react'

export const useFetch = url => {
  const [data, setData] = useState({ data: null, loading: true, error: null })
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData({ loading: false, error: null, data })
      })
  }, [url])

  return data
}
