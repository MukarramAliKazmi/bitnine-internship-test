import React from 'react'

import NavLink from '@/components/nav-link'
import SearchBar from '@/components/search-bar'
import SocialLinks from '@/components/social-links'

const SuperNavBar: React.FC = () => (
  <nav className="h-10 bg-zinc-50 justify-end gap-20 hidden lg:flex">
    <div className="flex items-center justify-end gap-5">
      <SearchBar placeholder="SEARCH" onChange={() => true} />
      <NavLink text="CONTACT" url="#" />
    </div>
    <SocialLinks />
  </nav>
)

export default SuperNavBar
