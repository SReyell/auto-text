// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const smsLink = `sms:888222?body=${encodeURIComponent(code)}`;
      
      // Create a temporary link element and trigger click event
      const tempLink = document.createElement('a');
      tempLink.href = smsLink;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);

      // Programmatically click the link to open SMS app
      tempLink.click();

      // Remove the link from the DOM
      document.body.removeChild(tempLink);
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
