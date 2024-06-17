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

      // Add a slight delay before triggering the SMS link
      setTimeout(() => {
        // Create a button element
        const button = document.createElement('button');
        button.style.display = 'none';
        button.onclick = () => {
          window.location.href = smsLink;
        };

        // Append the button to the body
        document.body.appendChild(button);

        // Simulate a click event on the button
        button.click();

        // Remove the button after clicking
        setTimeout(() => {
          document.body.removeChild(button);
        }, 1000);
      }, 1000); // Delay of 1 second
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
