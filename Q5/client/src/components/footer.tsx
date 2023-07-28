import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const footerItems = [
    {
      title: 'PRODUCTS',
      links: [
        { name: 'Relational Database', href: '/products/relational-database' },
        { name: 'Graph Database', href: '/products/graph-database' },
        {
          name: 'Graph-based Solution',
          href: '/products/graph-based-solution',
        },
      ],
    },
    {
      title: 'USE CASES',
      href: '#',
      links: [],
    },
    {
      title: 'SERVICES',
      href: '#',
      links: [],
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Documentation', href: '/use-cases/documentation' },
        { name: 'Learn', href: '/services/learn' },
      ],
    },
    {
      title: 'BLOG',
      href: '#',
      links: [],
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About Us', href: '/company/about-us' },
        { name: 'Contact', href: '/company/contact' },
      ],
    },
  ]

  return (
    <footer className="bg-white text-zinc-400 hidden lg:flex items-center justify-center">
      <div className="px-10 py-8 w-full max-w-6xl">
        <div className="grid grid-cols-6 gap-4 text-sm">
          {footerItems.map(item => (
            <div key={item.title} className="flex flex-col">
              {item.href ? (
                <Link href={item.href}>
                  <h4 className="font-bold mb-2 hover:text-blue-500">
                    {item.title}
                  </h4>
                </Link>
              ) : (
                <h4 className="font-bold mb-2">{item.title}</h4>
              )}
              <ul className="space-y-3">
                {item.links.map(link => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <div className="hover:text-blue-500 hover:font-semibold">
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
