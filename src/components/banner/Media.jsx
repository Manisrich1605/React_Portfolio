import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact, FaPython } from "react-icons/fa";
import { SiFlask, SiCsharp, SiDjango } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.facebook.com/mani.sri.925602?mibextid=LQQJ4d'><FaFacebookF /></a>
          </span>
          <span className="bannerIcon">
            <a href='https://instagram.com/manisri_dimpu_?igshid=MzRlODBiNWFlZA=='><FaInstagram /></a>
          </span>
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/chippa-manisri-5486a8286'><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiDjango />
          </span>
          <span className="bannerIcon">
            <SiFlask />
          </span>
          <span className="bannerIcon">
            <SiCsharp />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media