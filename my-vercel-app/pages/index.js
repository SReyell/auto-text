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

      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Write an HTML document into the iframe
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <body>
          <a id="smsLink" href="${smsLink}">Send SMS</a>
          <script>
            document.getElementById('smsLink').click();
          </script>
        </body>
        </html>
      `);
      iframe.contentWindow.document.close();
    }
  }, [code]);

  return (
    <div>
      <h1>Redirecting...</h1>
      {!code && <p>No code provided. Please use the URL with a ?code= parameter.</p>}
    </div>
  );
}
