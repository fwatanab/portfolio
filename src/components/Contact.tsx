import React from 'react';
import '../styles/contact.css';

// お問い合わせセッション
const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="contact">
      <h2>お問い合わせ</h2>
      <p>ご質問やご相談があれば、お気軽にご連絡ください。</p>
      <a href="/contact" className="contact-button">お問い合わせはこちら</a>
    </section>
  );
};

export default Contact;
