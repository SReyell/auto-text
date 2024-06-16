// pages/index.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;
  const [smsLink, setSmsLink] = useState('');

  useEffect(() => {
    if (code) {
      // Construct the SMS link
      setSmsLink(`sms:888222?body=${encodeURIComponent(code)}`);
    }
  }, [code]);

  const handleClick = () => {
    if (smsLink) {
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
  };

  return (
    <div>
      <h1>Send Code via SMS v2</h1>
      {code ? (
        <button onClick={handleClick}>Send SMS</button>
      ) : (
        <p>No code provided. Please use the URL with a ?code= parameter.</p>
      )}
    </div>
  );
}
