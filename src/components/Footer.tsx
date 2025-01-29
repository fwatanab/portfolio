import React from 'react';
import '../styles/footer.css';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
