'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface AgeVerificationModalProps {
  onVerified: (idNumber: string) => void
}

export function AgeVerificationModal({ onVerified }: AgeVerificationModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [idType, setIdType] = useState<string>('')
  const [idNumber, setIdNumber] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user has already verified
    const verified = localStorage.getItem('vpee_age_verified')
    if (!verified) {
      setIsVisible(true)
    }
  }, [])

  const handleVerify = () => {
    setError('')
    
    if (!idType) {
      setError('Selecciona un tipo de documento')
      return
    }
    
    if (!idNumber || idNumber.length < 6) {
      setError('Ingresa un numero de documento valido')
      return
    }

    setIsLoading(true)
    
    // Simulate verification
    setTimeout(() => {
      localStorage.setItem('vpee_age_verified', 'true')
      localStorage.setItem('vpee_verification_id', `${idType}-${idNumber.slice(-4)}`)
      onVerified(idNumber)
      setIsVisible(false)
      setIsLoading(false)
    }, 500)
  }

  const handleDeny = () => {
    window.location.href = 'https://www.google.com'
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D]/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-verification-title"
    >
      <div className="w-full max-w-md mx-4 p-8 rounded-2xl bg-[#1A1A1A] border border-[#F3FF00]/20 shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AEFV9991.PNG-y1e9m6BMvT59OVBfZoTtx7HnvIT0mn.png"
            alt="Vpee Logo"
            width={120}
            height={60}
            className="invert"
            priority
          />
        </div>

        {/* Title */}
        <h2 
          id="age-verification-title"
          className="text-2xl font-bold text-center text-[#F7F8FC] mb-2"
        >
          Verificacion de Edad
        </h2>
        
        <p className="text-center text-[#8A8A8A] mb-6 text-sm leading-relaxed">
          Este sitio web contiene productos destinados exclusivamente para mayores de 18 anos.
          Por favor, verifica tu edad para continuar.
        </p>

        {/* Warning Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 rounded-full bg-[#F3FF00] text-[#0D0D0D] font-semibold text-sm neon-glow-sm">
            Solo +18
          </span>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="id-type" className="text-[#F7F8FC] mb-2 block">
              Tipo de Documento
            </Label>
            <Select value={idType} onValueChange={setIdType}>
              <SelectTrigger 
                id="id-type"
                className="w-full bg-[#0D0D0D] border-[#333333] text-[#F7F8FC] focus:border-[#F3FF00] focus:ring-[#F3FF00]/20"
              >
                <SelectValue placeholder="Selecciona un tipo" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-[#333333]">
                <SelectItem value="CC" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 focus:text-[#F7F8FC]">
                  Cedula de Ciudadania (CC)
                </SelectItem>
                <SelectItem value="CE" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 focus:text-[#F7F8FC]">
                  Cedula de Extranjeria (CE)
                </SelectItem>
                <SelectItem value="NIT" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 focus:text-[#F7F8FC]">
                  NIT
                </SelectItem>
                <SelectItem value="PP" className="text-[#F7F8FC] focus:bg-[#F3FF00]/20 focus:text-[#F7F8FC]">
                  Pasaporte (PP)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="id-number" className="text-[#F7F8FC] mb-2 block">
              Numero de Documento
            </Label>
            <Input
              id="id-number"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Ingresa tu numero de documento"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-[#0D0D0D] border-[#333333] text-[#F7F8FC] placeholder:text-[#8A8A8A]/50 focus:border-[#F3FF00] focus:ring-[#F3FF00]/20"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleDeny}
              variant="outline"
              className="flex-1 border-[#333333] text-[#8A8A8A] hover:bg-[#252525] hover:text-[#F7F8FC]"
            >
              Soy menor de 18
            </Button>
            <Button
              onClick={handleVerify}
              disabled={isLoading}
              className={cn(
                "flex-1 bg-[#F3FF00] text-[#0D0D0D] font-semibold",
                "hover:bg-[#D8FF3E] disabled:opacity-50",
                "neon-glow"
              )}
            >
              {isLoading ? 'Verificando...' : 'Soy mayor de 18'}
            </Button>
          </div>
        </div>

        {/* Legal Notice */}
        <p className="mt-6 text-xs text-center text-[#8A8A8A]/60 leading-relaxed">
          Al continuar, confirmas que tienes 18 anos o mas y aceptas nuestra{' '}
          <Link href="/politica-privacidad" className="text-[#F3FF00] hover:underline">
            Politica de Privacidad
          </Link>{' '}
          y{' '}
          <Link href="/terminos" className="text-[#F3FF00] hover:underline">
            Terminos y Condiciones
          </Link>.
        </p>
      </div>
    </div>
  )
}
