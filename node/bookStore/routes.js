const routes = require("express").Router();
const AllBooks = require("./Book_dump");
const bcrypt = require("bcrypt");
// for fetching all books from the database AND sendding to the client
routes.get("/all", (req, res) => {
  res.send(AllBooks);
});
// books exist in the database
function check(id) {
  const isExist = AllBooks.some((book) => book.isbn === id);
  console.log("req.params.id :", id, "isExist :", isExist);
  if (isExist) {
    return true;
  } else {
    return false;
  }
}
// fetching a book from the database
routes.get("/:id", (req, res) => {
  if (check(req.params.id)) {
    res.send(AllBooks.find((book) => book.isbn === req.params.id)).status(200);
  } else {
    res.send("Book not found").status(404);
  }
});

// for adding a book to the database
routes.post("/add", async (req, res) => {
  const createBook = req.body;
  console.log("req.body :", req.body);
  // add the book to the database
  if (check(createBook.isbn)) {
    res.send("Book already exists").status(400);
  } else {
    // create a hash isbn for the book using bycrypt
    await bcrypt
      .hash(createBook.title, 10)
      .then((x) => {
        createBook.isbn = x.split("/")[0];
      })
      .catch((err) => res.send(err));
    AllBooks.push(createBook);
    // res.send("Book added").status(200);
    res.send(`books is added : ${createBook.isbn}`).status(200);
  }
});
// for updating a book in the database
routes.put("/update/:id", (req, res) => {
  const updateBook = req.body;
  const isExist = check(req.params.id);
  if (isExist) {
    const findBook = AllBooks.find((book) => book.isbn === req.params.id);
    const index = AllBooks.findIndex((book) => book.isbn === req.params.id);
    const updatedBook = { ...findBook, ...updateBook };
    AllBooks[index] = updatedBook;
    res.send("Book updated").status(200);
  } else {
    res.send("Book not found").status(404);
  }
});

// for deleting a book from the database
routes.delete("/delete/:id", (req, res) => {
  const isExist = check(req.params.id);
  if (isExist) {
    // const findBook = AllBooks.find((book) => book.isbn === req.params.id);
    const index = AllBooks.findIndex((book) => book.isbn === req.params.id);
    AllBooks.splice(index, 1);
    res.send("Book deleted").status(200);
  } else {
    res.send("Book not found").status(404);
  }
});

module.exports = routes;
