import React from 'react'
import Link from 'next/link'

import SocialLinks from '@/components/social-links'

const BottomBar = () => (
  <div className="flex justify-center bg-white w-full">
    <div className="flex items-center justify-between p-4 w-full max-w-6xl px-10">
      <p className="text-zinc-400">
        © 2023 by Bitnine Global Inc. All Rights Reserved.
      </p>
      <div className="flex space-x-4 items-center">
        <div className="hidden lg:flex">
          <SocialLinks />
        </div>
        <Link
          href="https://age.apache.org/"
          className="text-zinc-400 hover:font-semibold hover:text-blue-500"
        >
          Apache AGE
        </Link>
        <Link
          href="/contact"
          className="text-zinc-400 hover:font-semibold hover:text-blue-500"
        >
          CONTACT
        </Link>
      </div>
    </div>
  </div>
)

export default BottomBar
