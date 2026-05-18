'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { PromoSlider } from '@/components/promo-slider'
import { HeroSection } from '@/components/hero-section'
import { CategorySlider } from '@/components/category-slider'
import { NewReleases } from '@/components/new-releases'
import { FeaturedProducts } from '@/components/featured-products'
import { VideoSection } from '@/components/video-section'
import { PremiumGallery } from '@/components/premium-gallery'
import { CorporateValues } from '@/components/corporate-values'
import { PremiumExperiences } from '@/components/premium-experiences'
import { MapSection } from '@/components/map-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Footer } from '@/components/footer'
import { AgeVerificationModal } from '@/components/age-verification-modal'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { InstagramButton } from '@/components/instagram-button'

function HomeContent() {
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already verified age
    const verified = localStorage.getItem('vpee_age_verified')
    if (verified) {
      setIsVerified(true)
    }
    setIsLoading(false)
  }, [])

  const handleVerified = (_idNumber: string) => {
    setIsVerified(true)
    // Track verification event (for analytics)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'age_verification', {
        event_category: 'engagement',
        event_label: 'verified',
      })
    }
  }

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#F3FF00]/30 border-t-[#F3FF00] rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      {/* Age Verification Modal - SEO friendly: content is always in DOM */}
      {!isVerified && (
        <AgeVerificationModal onVerified={handleVerified} />
      )}
      
      {/* Main Content - Always rendered for SEO, just visually blocked */}
      <div className={!isVerified ? 'blur-sm pointer-events-none' : ''}>
        <Header />
        <main>
          <HeroSection />
          <PromoSlider />
          <CategorySlider />
          <NewReleases />
          <FeaturedProducts />
          <VideoSection />
          <PremiumGallery />
          <CorporateValues />
          <PremiumExperiences />
          <MapSection />
          <WhyChooseUs />
        </main>
        <Footer />
        <WhatsAppButton />
        <InstagramButton />
      </div>
    </>
  )
}

export default function Home() {
  return <HomeContent />
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}
