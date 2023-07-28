import React from 'react'
import Image from 'next/image'

interface HoverCardProps {
  image: string
  text: string[]
}

const HoverCard: React.FC<HoverCardProps> = ({ image, text }) => (
  <div className="relative flex px-16 py-10 items-center aspect-[2/1] rounded-xl justify-center w-full md:max-w-[21rem] border border-zinc-300 bg-white shadow-[rgba(89,113,162,0.314)_0px_0px_10px_0px] hover:border-blue-400 hover:shadow-[rgba(0,39,119,0.22)_0px_0px_20px_0px] transition-all ease-in-out duration-300">
    <Image
      src={image}
      alt={text.join(' ')}
      width={250}
      height={37}
      unoptimized
      priority
      className="w-full"
    />
    <div className="group absolute rounded-xl bg-white inset-0 w-full h-full flex items-center opacity-0 hover:opacity-100 transition-all duration-1000">
      <ul className="w-full flex flex-col gap-4 text-sm pl-16 pr-10 text-start text-zinc-600 scale-0 transition-all duration-1000 group-hover:scale-100">
        {text.map(item => (
          <li className="list-disc" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default HoverCard
