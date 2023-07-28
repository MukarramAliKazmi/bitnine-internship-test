import React from 'react'
import Image from 'next/image'

const Section3 = () => (
  <div className="flex flex-col bg-white items-center justify-center py-12 sm:py-20 md:py-24 px-4 text-center">
    <h1 className="text-4xl font-bold mb-6">Key features</h1>
    <p className="text-zinc-600 mb-0.5">
      Manage your data with Agens Enterprise Package
    </p>
    <p className="text-zinc-600 mb-10">
      Essential enterprise features such as high availability and sharding are
      provided
    </p>
    <Image
      src="/section_3.png"
      alt="AgensSQL Logo"
      width={250}
      height={37}
      unoptimized
      priority
      className="w-full max-w-6xl mb-8"
    />
  </div>
)

export default Section3
