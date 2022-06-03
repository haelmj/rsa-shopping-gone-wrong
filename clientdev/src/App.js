import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import BookList from "./components/BookList";
import About from "./pages/About";
import data from "./models/local-books.json";

const App = () => {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [price, setPrice] = useState(0);


  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  const handleCheckout = async () => {
    console.log('called')
    const result = await fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "price": price,
        "books": [...bookcase.map((book)=> book.volumeInfo.title)]
      })
    }).then((res) => res.text());
    window.alert(result);
  }

  const calculateBookcase = () => {
    let amount = 0;
    bookcase.forEach((book)=>{
      book.saleInfo.retailPrice ? amount += book.saleInfo.retailPrice.amount : amount += 0;
    })
    setPrice(amount);
  }

  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter((book) => book.id === id)));
    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = true;
        }
        return book;
      }),
    ]);
  };

  const removeFromBookcase = (id) => {
    setBookcase(bookcase.filter((book) => book.id !== id));
    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = false;
        }
        return book;
      }),
    ]);
  };

  useEffect(() => {
    document.title = `My Library ${bookcase.length} Read`;
    Array.from(document.getElementsByClassName("bookLink")).forEach((el) => {
      el.innerText = ` Bookcase (${bookcase.length})`;
    });
  });

  return (
    <Router>
      <div className="container">
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Header bookLength={bookcase.length} />
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />

              <BookList
                books={books}
                stored="library"
                addToBookcase={addToBookcase}
                removeFromBookcase={removeFromBookcase}
              />
            </Fragment>
          )}
        />
        <Route
          path="/bookcase"
          render={() => (
            <Fragment>
              <Header bookLength={bookcase.length} price={price}/>
              <Search
                findBooks={findBooks}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <BookList
                price={price}
                books={bookcase}
                handleCheckout={handleCheckout}
                stored="bookcase"
                addToBookcase={addToBookcase}
                removeFromBookcase={removeFromBookcase}
                calculateBookcase={calculateBookcase}
              />
            </Fragment>
          )}
        />
        <Route
          path="/about"
          component={() => <About bookcaseLength={bookcase.length} />}
        />
      </div>
    </Router>
  );
};

export default App;
