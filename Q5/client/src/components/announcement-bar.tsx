import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import useScrollY from '@/hooks/use-scroll-y'

interface AnnouncementBarProps {
  announcement: string
  link: string
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  link,
  announcement,
}) => {
  const scrollY = useScrollY()

  return (
    <div
      className={`relative w-full overflow-hidden transition-transform duration-200 ${
        scrollY > 100 ? 'translate-y-0 h-12' : '-translate-y-12 h-0'
      }`}
    >
      <Image
        src="/announcement_bar6.jpeg"
        alt="Background image"
        unoptimized
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 text-white font-bold text-lg p-1 flex items-center text-center justify-center z-10">
        <Link href={link}>
          <h1>{announcement}</h1>
        </Link>
      </div>
    </div>
  )
}

export default AnnouncementBar
