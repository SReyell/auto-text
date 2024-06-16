// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const smsLink = `sms:888222?body=${encodeURIComponent(code)}`;

      // Create a temporary iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Create a temporary link element inside the iframe
      const doc = iframe.contentWindow.document;
      const link = doc.createElement('a');
      link.href = smsLink;

      // Append the link to the iframe's body
      doc.body.appendChild(link);

      // Simulate a user click
      link.click();

      // Remove the iframe from the document
      document.body.removeChild(iframe);
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
