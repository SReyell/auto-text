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

      // Create a div to capture the tap event
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.zIndex = 9999;
      overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
      overlay.style.color = 'white';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.innerHTML = 'Tap anywhere to continue';
      document.body.appendChild(overlay);

      // Add a click event listener to the overlay
      overlay.addEventListener('click', () => {
        // Remove the overlay
        document.body.removeChild(overlay);

        // Open the SMS link
        window.location.href = smsLink;
      });
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
