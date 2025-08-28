import React from 'react';
import '../styles/footer.css';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} fwatanab. All rights reserved.</p>

      <div className="footer-links">
        <a href="https://github.com/fwatanab" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:heisei14business@gmail.com">Email</a>
      </div>

      <p className="footer-message">Thank you for watching</p>
    </footer>
  );
}

export default Footer;

