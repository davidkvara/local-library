import React from "react";
import NavItem from "./NavItem";
import { Route } from "react-router-dom";
import Home from "../routes/index";
import Books from "../routes/Books";
import Author from "../routes/Authors";
import Genre from "../routes/Genres";
import BookInstance from "../routes/BookInstances";
import GenreDetail from "./GenreDetail";
import BookDetail from "./BookDetail";

const App = () => {
  return (
    <div className="wrapper">
      <nav className="nav">
        <NavItem to="/catalog">Home</NavItem>
        <NavItem to="/catalog/books">All books</NavItem>
        <NavItem to="/catalog/authors">All authors</NavItem>
        <NavItem to="/catalog/genres">All genres</NavItem>
        <NavItem to="/catalog/bookinstances">All book-instances</NavItem>
      </nav>
      <main className="main">
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Home} />
        <Route exact path="/catalog/books" component={Books} />
        <Route exact path="/catalog/book/:bookId" component={BookDetail} />
        <Route exact path="/catalog/authors" component={Author} />
        <Route exact path="/catalog/genres" component={Genre} />
        <Route exact path="/catalog/genre/:id" component={GenreDetail} />
        <Route exact path="/catalog/bookinstances" component={BookInstance} />
      </main>
    </div>
  );
};

export default App;
