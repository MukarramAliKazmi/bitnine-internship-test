import React from 'react'
import { useRouter } from 'next/router'

import NavItem from '@/components/nav-item'
import NavSubItem from '@/components/nav-sub-item'
import Button from '@/components/button'

interface NavBarItemsProps {}

const NavBarItems: React.FC<NavBarItemsProps> = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-end h-full w-full">
      <NavItem href="#" label="PRODUCTS">
        <NavSubItem href="#" label="Graph Database">
          <NavSubItem href="#" label="AgensGraph" />
          <NavSubItem href="#" label="Apache AGE" />
          <NavSubItem href="#" label="AG Cloud" />
          <NavSubItem href="#" label="Visualization & Analytics" />
        </NavSubItem>
        <NavSubItem href="#" label="Relational Database">
          <NavSubItem href="#" label="AgensSQL" />
        </NavSubItem>
      </NavItem>
      <NavItem href="#" label="USE CASES" />
      <NavItem href="#" label="SERVICES" />
      <NavItem href="#" label="PESOURCES">
        <NavSubItem href="#" label="Documentation" />
        <NavSubItem href="#" label="Learn" />
      </NavItem>
      <NavItem href="#" label="BLOG" />
      <NavItem href="#" label="COMPANY">
        <NavSubItem href="#" label="About Us" />
        <NavSubItem href="#" label="Contact" />
      </NavItem>
      <NavItem href="#" label="IR">
        <NavSubItem href="#" label="IR 공고" />
        <NavSubItem href="#" label="IR 공고" />
        <NavSubItem href="#" label="IR 공고" />
      </NavItem>
      <div className="bg-white flex gap-2 z-50 py-2 xl:px-2">
        <Button>TRY FREE</Button>
        <Button onClick={() => router.push('/login')}>Login</Button>
        <Button onClick={() => router.push('/signup')}>Signup</Button>
      </div>
    </div>
  )
}

export default NavBarItems
