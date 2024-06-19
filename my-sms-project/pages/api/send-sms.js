export default function handler(req, res) {
    const bodyText = encodeURIComponent('whatever'); // Customize the message as needed.
    res.redirect(302, `sms://888222/;?&body=${bodyText}`);
  }
  