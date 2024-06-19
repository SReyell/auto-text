// pages/api/send-sms.js

export default function handler(req, res) {
  const { code } = req.query; // Extract 'code' from the query parameters
  const bodyText = encodeURIComponent(code || 'default message'); // Encode and use 'code', or a default message if 'code' is not provided
  res.redirect(302, `sms://888222/;?&body=${bodyText}`);
}
