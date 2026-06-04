import { useRef, useEffect, useState } from 'react'

import type { CSSProperties } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: CSSProperties
}

export default function LazyImage({ src, alt, width, height, className, style }: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <img
      ref={imgRef}
      src={inView ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      style={{
        opacity: loaded ? 1 : 0.3,
        transition: 'opacity 0.3s ease-in-out',
        background: '#e0e0e0',
        ...style,
      }}
    />
  )
}