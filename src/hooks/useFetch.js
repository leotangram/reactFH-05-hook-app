import { useState, useEffect, useRef } from 'react'

export const useFetch = url => {
  const isMountedRef = useRef(true)

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const [data, setData] = useState({ data: null, loading: true, error: null })
  useEffect(() => {
    setData({ data: null, loading: true, error: null })
    fetch(url)
      .then(response => response.json())
      .then(data => {
        isMountedRef.current && setData({ loading: false, error: null, data })
      })
  }, [url])

  return data
}
