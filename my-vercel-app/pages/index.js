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

      // Directly set the window location to the SMS link
      window.location.href = smsLink;
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
