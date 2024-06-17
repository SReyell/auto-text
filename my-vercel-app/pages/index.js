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

      // Create an iframe and set its src to the SMS link
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = smsLink;
      document.body.appendChild(iframe);

      // Optionally, remove the iframe after some time
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
