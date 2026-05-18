'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const videos = [
  {
    id: 1,
    title: 'Vpee Smoke Shop — Ambiente',
    description: 'Conoce el ambiente unico de Vpee Smoke Shop en Zipaquira',
    youtubeId: 'zbatXX8tqN8',
    isShort: true,
  },
  {
    id: 2,
    title: 'Productos Exclusivos Vpee',
    description: 'Descubre nuestra exclusiva seleccion de productos premium',
    youtubeId: 'ACOsXYnz9bA',
    isShort: true,
  },
  {
    id: 3,
    title: 'Vpee — El Smoke Shop Lider',
    description: 'Por que Vpee es el smoke shop numero 1 en Zipaquira',
    youtubeId: 'AA2T5vqesR4',
    isShort: false,
  },
  {
    id: 4,
    title: 'Novedades y Lanzamientos 2026',
    description: 'Los productos mas nuevos y exclusivos que llegaron a Vpee',
    youtubeId: 'S93zVzHFW0A',
    isShort: true,
  },
]

function getEmbedUrl(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
}

function getThumbnailUrl(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
}

export function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
            <Play className="h-4 w-4 text-red-500 fill-current" />
            <span className="text-sm font-medium text-red-400">Video Content</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F7F8FC] mb-4">
            Videos <span className="text-[#F3FF00]">Exclusivos</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            Conoce nuestros productos, el ambiente de la tienda y los ultimos lanzamientos.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group text-left"
              aria-label={`Ver video: ${video.title}`}
            >
              <div className="relative rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#252525] hover:border-[#F3FF00]/40 transition-all duration-300"
                style={{ aspectRatio: video.isShort ? '9/16' : '16/9' }}
              >
                {/* YouTube thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${getThumbnailUrl(video.youtubeId)})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0D0D0D]/50 group-hover:bg-[#0D0D0D]/30 transition-colors" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="h-6 w-6 text-white fill-current ml-1" />
                  </div>
                </div>

                {/* Short badge */}
                {video.isShort && (
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-red-600 text-white text-xs font-bold">
                    SHORT
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="mt-3">
                <h3 className="font-semibold text-[#F7F8FC] group-hover:text-[#F3FF00] transition-colors line-clamp-1 text-sm">
                  {video.title}
                </h3>
                <p className="text-xs text-[#8A8A8A] mt-1 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-2xl w-[95vw] bg-[#0D0D0D] border-[#252525] p-0 overflow-hidden">
            <VisuallyHidden>
              <DialogTitle>{selectedVideo?.title || 'Video'}</DialogTitle>
            </VisuallyHidden>
            {selectedVideo && (
              <div className="relative" style={{ aspectRatio: selectedVideo.isShort ? '9/16' : '16/9' }}>
                <iframe
                  src={getEmbedUrl(selectedVideo.youtubeId)}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
