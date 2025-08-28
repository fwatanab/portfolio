import React from "react";
import "../styles/last-section.css";

const LastSection = (): JSX.Element => {
  return (
    <section id="last" className="last-section">
      <div className="last-content">
        <h2>Thank you</h2>
        <p className="closing-message">
          ここまでご覧いただきありがとうございました。
          技術の習得や開発を通じて常に成長を目指しています。
          ご興味を持っていただけましたら、ぜひお気軽にご連絡ください。
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/fwatanab"
            target="_blank"
            rel="noreferrer"
            className="contact-button github"
          >
            GitHub
          </a>
          <a
            href="mailto:heisei14business@gmail.com"
            className="contact-button mail"
          >
            メール
          </a>
        </div>
      </div>
    </section>
  );
};

export default LastSection;

