const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());

// In-memory database to store subscribed emails
const subscribedEmails = new Set();

app.post("http://localhost:3000/subscribe", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (subscribedEmails.has(email)) {
    return res.status(400).json({ error: "Email is already subscribed" });
  }

  // Add the email to the subscription list
  subscribedEmails.add(email);
  res.json({ message: "Subscription successful" });
});

app.post("http://localhost:3000/unsubscribe", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!subscribedEmails.has(email)) {
    return res.status(400).json({ error: "Email is not subscribed" });
  }

  subscribedEmails.delete(email);
  res.json({ message: "Unsubscription successful" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const response = await sendHttpRequest("POST", "/subscribe", {
//   email: emailInput,
// });
