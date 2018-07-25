const express = require("express");
const path = require("path");
const Quote = require("./models/Quote");
const Category = require("./models/Category");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

// Allow override of HTTP methods based on the query string ?_method=DELETE
app.use(methodOverride("_method"));

// Add the HTTP body onto the request object in all route handlers.
app.use(bodyParser.urlencoded({ extended: false }));

// Allow the port to be set by an environment variable when run (PORT=4000 node server.js)
// and fallback to a default to 4567 if it's not supplied.
const PORT = process.env.PORT || 4567;

// Serve any files in the public folder at the "/public" route.
app.use("/public", express.static("public"));

// Set the folder for where our views are.
//we're turning off the app.set funciton because express defaults to the views directory by convention now. 
// app.set("views", path.join(__dirname, "views"));

// Tell Express that we use EJS in our views.
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  Category.all().then(categoryData => {
  response.render("homepage", {categories: categoryData});
})});

app.get("/quotes", (request, response) => {
  Quote.all().then(quotesData => {
    response.render("quotes/index", { quotes: quotesData });
  });
});

app.post("/quotes", (request, response) => {
  const newQuote = request.body; 
  Quote.create(newQuote).then(quoteData => {
    response.redirect(302, "/quotes");
  })
});

app.get("/quotes/new", (request, response) => {
  response.render("quotes/new");
});


app.get("/quotes/:id/edit", (request, response) => {
  const id = Number(request.params.id);
  Quote.findById(id).then(quoteData => {
    response.render("quotes/show", { quote: quoteData })
  })
});

app.put("/quotes/:id", (request, response => {
  const id = Number(request.params.id);
  const updatedQuote = request.body;
  Quote.updateById(id, updatedQuote).then(quoteData => {
    response.render("quotes/show", { quote: quoteData });
  })
}))

app.get("/quotes/:id", (request, response) => {
  const id = Number(request.params.id);
  Quote.findById(id).then(quoteData => {
    response.render("quotes/show", {quote: quoteData})
  })
});

app.delete("/quotes/:id", (request, response) => {
  const id = Number(request.params.id);
  Quote.delete(id).then(quote => {
    response.redirect(302, "/quotes");
  })
})

app.get ("/categories/:id", (request, response) => {
  const id = Number(request.params.id);
  Promise.all([
    Category.findById(id), 
    Quote.allByCategoryId(id)
  ]).then(([category, quotes]) => {
    response.render("categories/show", {category: category, quotes: quotes})
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
