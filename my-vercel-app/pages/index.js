// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      // Attempt redirect using the format that was indicated to work
      const smsLink = `sms:888222&body=${code}`;
      window.location.href = smsLink;
    }
  }, [code]);  // Remove 'key' if it's not defined elsewhere in your script


  return null; // Ensuring no visual content might interfere
}
