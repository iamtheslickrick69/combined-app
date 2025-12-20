import { useState, useEffect } from 'react'

export function usePreloadImages(imageUrls: string[]) {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    const totalImages = imageUrls.length

    if (totalImages === 0) {
      setImagesLoaded(true)
      return
    }

    const imageElements: HTMLImageElement[] = []

    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url

      img.onload = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }

      img.onerror = () => {
        console.warn(`Failed to preload image: ${url}`)
        loadedCount++
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }

      imageElements.push(img)
    })

    // Cleanup
    return () => {
      imageElements.forEach(img => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [imageUrls])

  return imagesLoaded
}
