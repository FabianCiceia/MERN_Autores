const UserController = require("../controllers/author.controller");

module.exports = app => {
  app.get("/api/authors", UserController.findAllUsers);
  app.get("/api/authors/:id", UserController.findOneSingleUser);
  app.put("/api/authors/update/:id", UserController.updateExistingUser);
  app.post("/api/authors/new", UserController.createNewUser);
  app.delete("/api/authors/delete/:id", UserController.deleteAnExistingUser);
};