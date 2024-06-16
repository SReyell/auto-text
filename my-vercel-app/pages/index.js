// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      // Attempt to direct redirect without any delay or additional interaction
      window.location.href = `sms:888222?body=${encodeURIComponent(code)}`;
    }
  }, [code]);

  return null; // Render nothing visually
}
