import { useState, useEffect } from "react"

const defaultOptions = {
  threshold: 0.25
}

const useIntersectionObserver = (ref, options = defaultOptions) => {
  const [inView, setInView] = useState(false)
  const [wasTriggered, setWasTriggered] = useState(false)
  const [entry, setEntry] = useState(null)

  let observer;

  useEffect(() => {
    if (observer && ref.current && !wasTriggered) {
      observer.observe(ref.current)
    }
  }, [observer, ref, wasTriggered])

  if (!window || !window.IntersectionObserver) {
    return [false, null]
  }

  observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].intersectionRatio >= options.threshold) {
      setInView(true)
      setWasTriggered(true)
      setEntry(entries[0])
      obs.unobserve(ref.current)
    }
  }, options)

  return [inView, entry]
}

export default useIntersectionObserver