// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      // Construct the SMS link using the new format
      const smsLink = `sms://888222/;?&body=${encodeURIComponent(code)}`;
      
      // Log the SMS link for debugging
      console.log('Attempting to open SMS link:', smsLink);

      // Directly set the window location to the SMS link
      window.location.href = smsLink;

      // As a fallback, create an anchor element and click it
      setTimeout(() => {
        const anchor = document.createElement('a');
        anchor.href = smsLink;
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      }, 150); // Delay to ensure the browser processes the initial attempt
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
