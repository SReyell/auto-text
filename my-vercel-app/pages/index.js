// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      setTimeout(() => {
        // Construct the SMS link
        const smsLink = `sms:888222?body=${encodeURIComponent(code)}`;
        // Using window location to attempt a direct redirect
        window.location.href = smsLink;
      }, 50); // Small timeout to ensure the page loads sufficiently
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
