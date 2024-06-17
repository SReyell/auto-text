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

      // Open the SMS link in a new window
      window.open(smsLink, '_self');
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
