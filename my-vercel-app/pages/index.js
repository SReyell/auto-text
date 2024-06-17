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

      // Create a form element
      const form = document.createElement('form');
      form.method = 'get';
      form.action = smsLink;

      // Submit the form
      document.body.appendChild(form);
      form.submit();
      
      // Clean up the form
      document.body.removeChild(form);
    }
  }, [code]);

  return null;  // Render nothing to the DOM
}
