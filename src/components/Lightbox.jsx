import { useEffect } from 'react'

// Popup preview gambar (pengganti GLightbox)
export default function Lightbox({ images, index, onClose, onChange }) {
  const open = index !== null && index !== undefined

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, images.length, onClose, onChange])

  if (!open) return null
  const current = images[index]

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute top-4 right-4 text-4xl text-white/80 hover:text-white"
        onClick={onClose}
      >
        <i className="bi bi-x-lg" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-2 text-4xl text-white/70 hover:text-white sm:left-6"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index - 1 + images.length) % images.length)
            }}
          >
            <i className="bi bi-chevron-left" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-2 text-4xl text-white/70 hover:text-white sm:right-6"
            onClick={(e) => {
              e.stopPropagation()
              onChange((index + 1) % images.length)
            }}
          >
            <i className="bi bi-chevron-right" />
          </button>
        </>
      )}

      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={current.src} alt={current.title} className="max-h-[80vh] w-auto rounded-md object-contain" />
        {current.title && <figcaption className="mt-3 text-center text-white">{current.title}</figcaption>}
      </figure>
    </div>
  )
}
