import { useRef } from "react"
import useIntersectionObserver from "./useIntersectionObserver"

const useFadeIn = () => {
  const ref = useRef(null)
  const [isInView] = useIntersectionObserver(ref)
  const props = {
    animate: isInView ? "show" : "hide",
    initial: "hide",
    transition,
    variants,
  }
  return [ref, props]
}

export default useFadeIn

const transition = {
  type: "tween",
  ease: "easeOut",
}

const variants = {
  hide: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
}
