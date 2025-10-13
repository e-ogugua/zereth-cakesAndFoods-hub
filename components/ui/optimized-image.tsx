import { cn } from "@/lib/utils"
import { getOptimizedImagePath } from "@/lib/image-utils"

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
        <img
          src={optimizedSrc}
          alt={alt}
          className={cn(
            'object-cover w-full h-full',
            className
          )}
          loading={priority ? 'eager' : 'lazy'}
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

  // For non-fill images, return regular img
  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={cn(className)}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  )
}
