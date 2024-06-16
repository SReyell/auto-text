// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      // Construct the SMS link
      const smsLink = `sms:888222?body=${encodeURIComponent(code)}`;

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = smsLink;

      // Append the link to the body
      document.body.appendChild(link);

      // Simulate a user click
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    }
  }, [code]);

  return (
    <div>
      <h1>Send Code via SMS</h1>
      {code ? (
        <p>Redirecting to SMS app...</p>
      ) : (
        <p>No code provided. Please use the URL with a ?code= parameter.</p>
      )}
    </div>
  );
}
