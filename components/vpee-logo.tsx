'use client'

import { cn } from '@/lib/utils'

interface VpeeLogoProps {
  className?: string
  variant?: 'full' | 'icon'
  color?: 'neon' | 'navy' | 'white'
}

export function VpeeLogo({ className, variant = 'full', color = 'neon' }: VpeeLogoProps) {
  const fillColor = {
    neon: '#F3FF00',
    navy: '#0B1D5A',
    white: '#F7F8FC',
  }[color]

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('h-10 w-auto', className)}
        aria-label="Vpee Logo"
      >
        {/* Cloud/Vapor Symbol */}
        <ellipse cx="50" cy="25" rx="20" ry="18" fill={fillColor} />
        <ellipse cx="30" cy="30" rx="15" ry="14" fill={fillColor} />
        <ellipse cx="70" cy="30" rx="15" ry="14" fill={fillColor} />
        {/* Droplet */}
        <path
          d="M50 45 L45 55 Q45 62 50 62 Q55 62 55 55 Z"
          fill={fillColor}
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-12 w-auto', className)}
      aria-label="Vpee Logo"
    >
      {/* Cloud/Vapor Symbol above 'i' */}
      <g transform="translate(85, 0)">
        <ellipse cx="15" cy="12" rx="10" ry="9" fill={fillColor} />
        <ellipse cx="5" cy="15" rx="8" ry="7" fill={fillColor} />
        <ellipse cx="25" cy="15" rx="8" ry="7" fill={fillColor} />
        {/* Droplet */}
        <path
          d="M15 22 L12 28 Q12 32 15 32 Q18 32 18 28 Z"
          fill={fillColor}
        />
      </g>
      
      {/* "vpee" wordmark */}
      <g transform="translate(10, 35)">
        {/* v */}
        <path
          d="M0 10 L15 55 L30 10 L25 10 L15 45 L5 10 Z"
          fill={fillColor}
        />
        
        {/* p with bookmark descender */}
        <g transform="translate(35, 0)">
          <path
            d="M5 10 L5 65 L0 60 L0 10 L0 10 Q0 0 15 0 Q30 0 30 15 Q30 30 15 30 L5 30"
            fill={fillColor}
          />
          <circle cx="15" cy="15" r="10" fill={fillColor} />
          <rect x="0" y="10" width="5" height="55" fill={fillColor} />
          <path d="M0 65 L5 60 L5 65 Z" fill={fillColor} />
        </g>
        
        {/* First e */}
        <g transform="translate(75, 0)">
          <path
            d="M15 0 Q30 0 30 15 L30 18 L5 18 Q5 25 15 25 Q22 25 27 20 L30 25 Q22 32 15 32 Q0 32 0 16 Q0 0 15 0 Z M15 5 Q8 5 6 12 L25 12 Q23 5 15 5 Z"
            fill={fillColor}
          />
        </g>
        
        {/* Second e */}
        <g transform="translate(115, 0)">
          <path
            d="M15 0 Q30 0 30 15 L30 18 L5 18 Q5 25 15 25 Q22 25 27 20 L30 25 Q22 32 15 32 Q0 32 0 16 Q0 0 15 0 Z M15 5 Q8 5 6 12 L25 12 Q23 5 15 5 Z"
            fill={fillColor}
          />
        </g>
      </g>
    </svg>
  )
}
