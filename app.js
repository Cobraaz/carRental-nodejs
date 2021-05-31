// * Load modules
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

// * Create port
const PORT = process.env.PORT || 3000;

// * Setup view engine
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

// * Connect client side to serve css and js files
app.use(express.static("public"));

// * Handle home route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Us",
  });
});

app.get("/signup", (req, res) => {
  res.render("signupForm", {
    title: "Register",
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
