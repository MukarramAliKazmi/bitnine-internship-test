import React from 'react'

interface IconLinkProps {
  icon: React.ReactElement
  backgroundColor: string
  fill?: string
  url: string
}

const IconLink: React.FC<IconLinkProps> = ({
  icon,
  backgroundColor,
  fill,
  url,
}) => (
  <a
    href={url}
    className={`${backgroundColor} relative w-9 flex justify-center items-center h-0 hover:h-9 origin-bottom ease-in-out duration-300 transition-[height]`}
  >
    {React.cloneElement(icon, {
      className: `${
        fill || 'fill-zinc-500'
      } hover:fill-white w-8 h-10 p-2 absolute top-0 transition-colors duration-300`,
    })}
  </a>
)

export default IconLink
