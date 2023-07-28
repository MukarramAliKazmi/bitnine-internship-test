import React from 'react'
import Image from 'next/image'

import FlipCard from '@/components/flip-card'

const cardsData = [
  {
    frontText: 'Backup/Restore',
    backText: [
      'provides a convenient interface for backup & restore',
      'provides backup & restore features for DB and table objects',
    ],
  },
  {
    frontText: 'DB Monitoring Dashboard',
    backText: [
      'monitors real-time session & transaction lock',
      'provides status for server CPU & memory',
    ],
  },
  {
    frontText: 'Schedule Management',
    backText: [
      'provides module for script, SQL job, and scheduling management',
      'provides UX dedicated to scheduling',
    ],
  },
  {
    frontText: 'Database Audit',
    backText: [
      'enables auditing via user interface',
      'view audit results via user interface',
    ],
  },
  {
    frontText: 'SQL Monitoring',
    backText: [
      'collects query statistics required for performance analysis',
      'extracts monitoring results in query',
    ],
  },
  {
    frontText: 'Performance Management',
    backText: [
      'monitors and collects operation status & statistical data',
      'provides status reports required for improving performance',
    ],
  },
]

const Section5 = () => (
  <div className="flex flex-col items-center justify-center py-12 sm:py-20 md:py-28 px-4 text-center bg-white">
    <h1 className="text-4xl font-bold mb-6">Agens Enterprise Package</h1>
    <p className="text-zinc-600 max-w-4xl mb-12">
      Agens Enterprise Package comes with a high availability management server
      that supports backup and data monitoring dashboard that helps enterprise
      customers manage their data efficiently.
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-2 sm:px-16 md:px-24 gap-8">
      <div>
        <h2 className="text-xl font-bold mb-6">Agens HA Manager</h2>
        <h2 className="text-xl mb-6">
          <span className="text-blue-500 font-bold">HA Clustering</span> -
          Failover/Failback, Load-balancing
        </h2>
        <Image
          src="/section_5.png"
          alt="AgensSQL Logo"
          width={250}
          height={37}
          unoptimized
          priority
          className="w-full max-w-6xl mb-8"
        />
        <h2 className="text-xl mb-6">Replication</h2>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-6">Agens Enterprise Manager</h2>
        <div className="flex flex-col gap-2 xl:gap-4">
          {cardsData.map(data => (
            <FlipCard
              key={data.frontText}
              frontText={data.frontText}
              backText={data.backText}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Section5
