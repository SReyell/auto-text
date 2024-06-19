// pages/api/send-sms.js

export default function handler(req, res) {
    const bodyText = encodeURIComponent('whatever'); // Change 'whatever' as needed.
    res.redirect(302, `sms://888222/;?&body=${bodyText}`);
  }
  