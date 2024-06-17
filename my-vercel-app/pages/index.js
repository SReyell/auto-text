// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      window.open(`sms:888222?body=${encodeURIComponent(code)}`, '_blank');
    }
  }, [code]);
  

  return null;  // Render nothing to the DOM
}
