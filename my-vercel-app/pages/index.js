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

      // Create a hidden link element
      const link = document.createElement('a');
      link.href = smsLink;
      link.style.display = 'none';
      document.body.appendChild(link);

      // Programmatically click the link with a minimal delay
      setTimeout(() => {
        link.click();
        document.body.removeChild(link);
      }, 100); // 100ms delay to simulate user interaction
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
