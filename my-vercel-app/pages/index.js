// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const smsLink = `sms:888222?body=${encodeURIComponent(code)}`;

      // Create an iframe to hold the meta refresh
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.srcdoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta http-equiv="refresh" content="0; url=${smsLink}" />
        </head>
        <body></body>
        </html>
      `;

      // Append iframe to the body
      document.body.appendChild(iframe);
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
