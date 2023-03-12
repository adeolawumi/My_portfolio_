import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
      <div className="headerSocials">
          <a href="https://github.com/" target="_blank"><BsGithub/></a>
          <a href="https://facebook.com/" target="_blank"><FaFacebook/></a>
          <a href="https://linkedin.com/" target="_blank"><FaLinkedinIn/></a>  
    </div>
  )
}

export default HeaderSocials