import React from 'react'
import {
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
  FaMedium,
} from 'react-icons/fa'

import IconLink from '@/components/icon-link'

const SocialLinks = () => (
  <div className="flex items-start justify-end h-9">
    <IconLink
      icon={<FaGithub />}
      backgroundColor="bg-black"
      fill="fill-yellow-500"
      url="#"
    />
    <IconLink icon={<FaYoutube />} backgroundColor="bg-red-500" url="#" />
    <IconLink icon={<FaLinkedinIn />} backgroundColor="bg-sky-600" url="#" />
    <IconLink icon={<FaFacebook />} backgroundColor="bg-blue-500" url="#" />
    <IconLink icon={<FaMedium />} backgroundColor="bg-green-500" url="#" />
  </div>
)

export default SocialLinks
