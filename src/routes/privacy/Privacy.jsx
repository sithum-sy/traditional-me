import { useEffect } from "react";
import privacyContent from "../../data/privacyContent";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy | Traditional Me";
  }, []);
  return (
    <main className="terms">
      <h2>Privacy</h2>
      <p>
        This Privacy Policy ("Policy") outlines how Traditional Me ("Traditional
        Me," "we," "our," or "us") collects, uses, and protects your personal
        information when you use our growth services. By using our services, you
        ("you," "your," or "user") consent to the practices described in this
        Policy.
      </p>
      {privacyContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
      <p>
        If you have any questions or concerns regarding our Privacy Policy,
        please contact us at info@traditionalme.com. Thank you for trusting
        Traditional Me with your personal information.
      </p>
    </main>
  );
};

export default Privacy;
