import React from 'react'
import Image from 'next/image'

const Section2 = () => (
  <div className="flex flex-col items-center justify-center py-12 sm:py-20 md:py-28 px-4 text-center bg-slate-100">
    <Image
      src="/section_2.png"
      alt="AgensSQL Logo"
      width={250}
      height={37}
      unoptimized
      priority
      className="w-full max-w-4xl mb-8"
    />
  </div>
)

export default Section2
