'use client'

import { useState } from 'react'
import { Play, Volume2, VolumeX, Maximize2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const videos = [
  {
    id: 1,
    title: 'Geek Bar Pulse 15000 Review',
    description: 'Descubre el nuevo Geek Bar con 15000 puffs y pantalla LED',
    thumbnail: '/images/products/vape-premium-1.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Como elegir tu primer vape',
    description: 'Guia completa para principiantes en el mundo del vapeo',
    thumbnail: '/images/products/vape-premium-2.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    duration: '5:20',
  },
  {
    id: 3,
    title: 'Coleccion Bongs Premium',
    description: 'Los mejores bongs de cristal en Vpee Smokeshop',
    thumbnail: '/images/products/vape-premium-3.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    duration: '4:15',
  },
  {
    id: 4,
    title: 'CBD: Beneficios y Usos',
    description: 'Todo lo que necesitas saber sobre el CBD',
    thumbnail: '/images/products/vape-premium-6.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    duration: '6:30',
  },
]

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
            Reviews, tutoriales y contenido exclusivo sobre nuestros productos. 
            Aprende de los expertos antes de comprar.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group text-left"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1A1A1A] border border-[#252525] hover:border-[#F3FF00]/40 transition-all duration-300">
                {/* Thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0D0D0D]/60 group-hover:bg-[#0D0D0D]/40 transition-colors" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#F3FF00] animate-pulse-ring" />
                    <div className="relative w-14 h-14 rounded-full bg-[#F3FF00] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg neon-glow-sm">
                      <Play className="h-6 w-6 text-[#0D0D0D] fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-[#0D0D0D]/80 text-xs font-medium text-[#F7F8FC]">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="mt-3">
                <h3 className="font-semibold text-[#F7F8FC] group-hover:text-[#F3FF00] transition-colors line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-sm text-[#8A8A8A] mt-1 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl w-[95vw] bg-[#0D0D0D] border-[#252525] p-0 overflow-hidden">
            <VisuallyHidden>
              <DialogTitle>{selectedVideo?.title || 'Video'}</DialogTitle>
            </VisuallyHidden>
            
            {selectedVideo && (
              <div className="relative">
                <div className="aspect-video w-full">
                  <iframe
                    src={selectedVideo.embedUrl}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 border-t border-[#252525]">
                  <h3 className="text-lg font-semibold text-[#F7F8FC]">{selectedVideo.title}</h3>
                  <p className="text-sm text-[#8A8A8A] mt-1">{selectedVideo.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
