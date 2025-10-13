import Image from 'next/image';

export function TestImage() {
  return (
    <div>
      <h2>Test Image Component</h2>
      <Image 
        src="/optimized/beautiful-custom-wedding-cake-elegant-design.webp" 
        alt="Test" 
        width={300}
        height={200}
        style={{objectFit: 'cover'}}
      />
    </div>
  )
}
