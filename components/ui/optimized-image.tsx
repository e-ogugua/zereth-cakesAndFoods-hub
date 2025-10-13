import { cn } from "@/lib/utils"
import { getOptimizedImagePath } from "@/lib/image-utils"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  overlayClassName?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  unoptimized?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  overlayClassName,
  priority = false,
  fill = true,
  ...props
}: OptimizedImageProps) {
  // Get the optimized image path
  const optimizedSrc = getOptimizedImagePath(src)

  // Use regular img tag for maximum compatibility
  if (fill) {
    return (
      <div
        className={cn(
          'relative overflow-hidden',
          containerClassName
        )}
      >
        <Image
          src={optimizedSrc}
          alt={alt}
          fill
          className={cn(
            'object-cover',
            className
          )}
          priority={priority}
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

  // For non-fill images, return Next.js Image
  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      width={800}
      height={600}
      className={cn(className)}
      priority={priority}
      {...props}
    />
  )
}
