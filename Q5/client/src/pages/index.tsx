import React from 'react'
import AnnouncementBar from '@/components/announcement-bar'
import BottomBar from '@/components/bottom-bar'
import Footer from '@/components/footer'
import Navbar from '@/components/nav-bar'
import ScrollToTop from '@/components/scroll-to-top'
import Section1 from '@/components/section-1'
import Section2 from '@/components/section-2'
import Section3 from '@/components/section-3'
import Section4 from '@/components/section-4'
import Section5 from '@/components/section-5'
import SuperNavBar from '@/components/super-nav-bar'

const Home = () => (
  <main>
    <div className="fixed z-50 top-0 left-0 right-0">
      <AnnouncementBar
        link="https://agcloud.bitnine.net/"
        announcement="AG Cloud Express : Experience graph database in a cloud environment for FREE!"
      />
      <SuperNavBar />
      <Navbar />
    </div>
    <div className="pt-12 md:pt-16 lg:pt-24 bg-white">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
    <div>
      <Footer />
      <BottomBar />
    </div>
    <ScrollToTop />
  </main>
)

export default Home
