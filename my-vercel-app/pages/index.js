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

      // Create an iframe to hold the link
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head></head>
        <body>
          <a id="smsLink" href="${smsLink}">Send SMS</a>
          <script>
            document.getElementById('smsLink').click();
          </script>
        </body>
        </html>
      `);
      iframeDoc.close();
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...v7</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
