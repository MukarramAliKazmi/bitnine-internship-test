import React from 'react'

import HoverCard from '@/components/hover-card'

const cardsData = [
  {
    image: '/password_profile.png',
    text: [
      'user password policy reinforces login security',
      'excessive failed login attempts lock an account',
      'define rules for password complexity',
    ],
  },
  {
    image: '/data_redaction.png',
    text: [
      'enhanced data security of user personal information',
      'resolve privacy issues in preparation for security audits',
      'encryption or masking with unidentifiable special characters',
    ],
  },
  {
    image: '/auditing.png',
    text: [
      'monitors database activities and collects data',
      'traces object accessed or DDL & DML statements executed by a user',
      'records all actions in logs',
    ],
  },
]

const Section4 = () => (
  <div className="flex flex-col items-center justify-center py-12 sm:py-20 md:py-28 px-4 text-center bg-slate-100">
    <h1 className="text-4xl font-bold mb-6">AgensSQL DB Engine</h1>
    <p className="text-zinc-800 mb-8 font-semibold text-xl underline">
      Enhanced Data Security
    </p>
    <p className="text-zinc-600 max-w-sm mb-12">
      AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security and
      stability.
    </p>
    <div className="flex-col px-0 md:flex-row w-full gap-6 flex items-center justify-center">
      {cardsData.map(data => (
        <HoverCard key={data.text[0]} image={data.image} text={data.text} />
      ))}
    </div>
  </div>
)

export default Section4
