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

      // Create a hidden form element
      const form = document.createElement('form');
      form.action = smsLink;
      form.method = 'get';
      form.style.display = 'none';

      // Append the form to the body
      document.body.appendChild(form);

      // Programmatically submit the form
      form.submit();

      // Remove the form from the document
      document.body.removeChild(form);
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
