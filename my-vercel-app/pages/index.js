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

      // Automatically open the SMS link after a short delay
      setTimeout(() => {
        window.location.href = smsLink;
      }, 250);  // Adjust the delay as needed
    }
  }, [code]);

  return (
    <div>
      <p>If you are not redirected automatically, please click <a href={`sms:888222?body=${encodeURIComponent(code)}`}>here</a>.</p>
    </div>
  );
}
