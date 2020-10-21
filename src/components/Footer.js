import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
      </div>
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span> AldiAnu</span> all right reserved
      </h4>
    </footer>
  )
}

export default Footer
