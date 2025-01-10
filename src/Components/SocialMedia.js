import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      {/* Social Media Text */}
      <div className="social-media-text">Social Media</div>
      
      {/* Icons */}
      <div className="social-media-icons">
        <a
          href="https://www.linkedin.com/in/darren-sim-296523243"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link linkedin"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://www.instagram.com/darren_034?igsh=MTV6Y2FwdXF1YnJkMA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link instagram"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://github.com/darrensimmx"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-link github"
        >
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
