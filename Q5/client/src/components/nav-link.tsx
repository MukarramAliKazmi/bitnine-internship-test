import React from 'react'

type NavLinkProps = {
  text: string
  url: string
}

const NavLink: React.FC<NavLinkProps> = ({ text, url }) => (
  <a href={url} className="text-zinc-500 hover:font-semibold">
    {text}
  </a>
)

export default NavLink
