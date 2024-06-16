import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      // Construct the SMS link
      const smsLink = `sms:888222&body=${encodeURIComponent(code)}`;

      // Automatically redirect to the SMS link
      window.location.href = smsLink;
    }
  }, [code]);

  return (
    <div>
      <h1>Send Code via SMS</h1>
      {code ? (
        <p>Redirecting to SMS app...</p>
      ) : (
        <p>No code provided. Please use the URL with a ?code= parameter.</p>
      )}
    </div>
  );
}
