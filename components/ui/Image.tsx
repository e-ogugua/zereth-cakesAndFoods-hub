import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import { forwardRef } from "react"

interface CustomImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  containerClassName?: string
  unoptimized?: boolean
  // Add static prop to handle static file serving
  static?: boolean
}

export const CustomImage = forwardRef<HTMLDivElement, CustomImageProps>(
  ({
    src,
    alt,
    className,
    containerClassName,
    width,
    height,
    static: isStatic = false,
    unoptimized = false, // Set to false by default for proper optimization
    ...props
  }, ref) => {
    // Handle static file paths
    const getImagePath = () => {
      if (isStatic) {
        // For static files, use direct path
        return src.startsWith('/') ? src : `/${src}`
      }
      // For dynamic images, use the regular path
      return src.startsWith('/') ? src : `/${src}`
    }
    
    const imagePath = getImagePath()
    
    return (
      <div 
        ref={ref}
        className={cn(
          'relative overflow-hidden',
          containerClassName
        )}
      >
        {isStatic ? (
          // Use Next.js Image for static files as well
          <Image
            src={imagePath}
            alt={alt}
            width={width}
            height={height}
            className={cn(
              'object-cover',
              className
            )}
            {...props}
          />
        ) : (
          // Use Next.js Image for dynamic content
          <Image
            src={imagePath}
            alt={alt}
            width={width}
            height={height}
            className={cn(
              'object-cover',
              className
            )}
            unoptimized={unoptimized}
            {...props}
          />
        )}
      </div>
    )
  }
)

CustomImage.displayName = 'CustomImage'
