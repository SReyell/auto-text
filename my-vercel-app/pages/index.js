const express = require('express');
const app = express();

app.get('/send-sms', (req, res) => {
  const bodyText = encodeURIComponent('whatever'); // You can dynamically change 'whatever' based on your requirements.
  res.redirect(302, `sms://888222/;?&body=${bodyText}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
