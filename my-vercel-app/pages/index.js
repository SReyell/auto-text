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

      // Create an invisible anchor element
      const anchor = document.createElement('a');
      anchor.style.display = 'none';
      anchor.href = smsLink;

      // Append the anchor to the body
      document.body.appendChild(anchor);

      // Simulate a click event on the anchor
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      anchor.dispatchEvent(event);

      // Remove the anchor after the event
      setTimeout(() => {
        document.body.removeChild(anchor);
      }, 1000);
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
