import React from 'react'

interface FlipCardProps {
  frontText: string
  backText: string[]
}

const FlipCard: React.FC<FlipCardProps> = ({ frontText, backText }) => (
  <div className="w-full h-24 position [perspective:1000px] relative group">
    <div className="[transform:rotatey(0deg)] rounded-lg group-hover:[transform:rotatey(-180deg)]  w-full h-full flex z-10 justify-center items-center border-2 border-blue-500 bg-white text-blue-500 absolute [transform-style:preserve-3d] [backface-visibility:hidden] transition-all duration-500">
      {frontText}
    </div>
    <div className="[transform:rotatey(180deg)] rounded-lg group-hover:[transform:rotatey(0deg)] w-full h-full flex z-0 justify-center items-center border-2 border-blue-500 bg-blue-500 text-white absolute [transform-style:preserve-3d] [backface-visibility:hidden] transition-all duration-500">
      <ul className="w-full flex flex-col gap-2 text-sm px-8 text-start">
        {backText.map(item => (
          <li className="list-disc" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default FlipCard
