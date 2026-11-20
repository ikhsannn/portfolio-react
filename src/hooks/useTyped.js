import { useEffect, useState } from 'react'

// Efek mengetik bergantian, pengganti typed.js
export default function useTyped(words, { typeSpeed = 100, backSpeed = 50, pause = 2000 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? backSpeed : typeSpeed
    if (!deleting && text === word) delay = pause
    if (deleting && text === '') delay = 400

    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, backSpeed, pause])

  return text
}
