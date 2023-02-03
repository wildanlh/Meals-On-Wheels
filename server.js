const stripe = require("stripe")(
  "sk_test_51MXFMGHeuibgm1RfXL9ZHj9580bqr9qE46baS3RgclW4MfeO9tlJ3YiEC10x5NVMw2t5ZBunrHoeNfKbgOHIjdXQ00vAEFSmbw"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000/";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1MXLLdHeuibgm1RfdPyJYv3l",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}thankyou`,
    cancel_url: `${YOUR_DOMAIN}`,
  });

  res.redirect(303, session.url);
});

app.listen(5252, () => console.log("Success, Server running on port 5252"));
