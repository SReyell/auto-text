// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      // Update the SMS link structure
      const smsLink = `sms://888222/;?&body=${encodeURIComponent(code)}`;
      window.location.href = smsLink;
    }
  }, [code]);

  return null;  // Ensure nothing is rendered
}
