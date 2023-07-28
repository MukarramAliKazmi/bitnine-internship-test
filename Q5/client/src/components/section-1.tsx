import React from 'react'
import Image from 'next/image'

import Button from '@/components/button'

const Section1 = () => (
  <div className="flex flex-col bg-white items-center justify-center py-12 sm:py-20 md:py-28 px-4 text-center">
    <Image
      src="/agens_sql_logo.png"
      alt="AgensSQL Logo"
      width={250}
      height={37}
      priority
      className="w-72 mb-8"
    />
    <h2 className="text-[1.31rem] font-bold text-zinc-700 mb-1.5">
      An integration of Bitnine&rsquo;s DB technology and PG expertise
    </h2>
    <p className="max-w-2xl mb-6 text-zinc-600">
      AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of
      expertise and knowledge accumulated through database research and
      development.
    </p>
    <p className="max-w-3xl px-8 mb-6 text-zinc-600">
      The enterprise package, along with AgensSQL engine, is an all-in-one
      solution that ensures the efficiency and scalability of data management.
    </p>
    <p className="max-w-2xl mb-16 text-zinc-600">
      Get AgensSQL now for stable operation and management services at a reduced
      maintenance cost.
    </p>
    <div className="flex sm:gap-6 gap-0.5 justify-around w-full max-w-md sm:w-max">
      <Button className="sm:px-5 sm:py-2.5 text-sm font-bold">CONTACT</Button>
      <Button className="sm:px-5 sm:py-2.5 text-sm font-bold">BROCHURE</Button>
      <Button className="sm:px-5 sm:py-2.5 text-sm font-bold">BLOG</Button>
    </div>
  </div>
)

export default Section1
