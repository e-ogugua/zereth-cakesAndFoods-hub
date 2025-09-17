import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import { forwardRef } from "react"

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  containerClassName?: string
  overlayClassName?: string
  priority?: boolean
  unoptimized?: boolean
}

export const OptimizedImage = forwardRef<HTMLDivElement, OptimizedImageProps>(
  ({
    src,
    alt,
    className,
    containerClassName,
    overlayClassName,
    priority = false,
    fill = true,
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    unoptimized = process.env.NODE_ENV === 'development',
    ...props
  }, ref) => {
    // Ensure src is properly formatted
    const cleanSrc = src.startsWith('/') ? src : `/${src}`
    
    return (
      <div 
        ref={ref}
        className={cn(
          'relative overflow-hidden',
          containerClassName
        )}
      >
        <Image
          src={cleanSrc}
          alt={alt}
          fill={fill}
          sizes={sizes}
          className={cn(
            'object-cover',
            className
          )}
          priority={priority}
          unoptimized={unoptimized}
          {...props}
        />
        {/* Optional overlay for better text readability */}
        {overlayClassName && (
          <div 
            className={cn(
              'absolute inset-0',
              overlayClassName
            )} 
            aria-hidden="true"
          />
        )}
      </div>
    )
  }
)

OptimizedImage.displayName = 'OptimizedImage'
