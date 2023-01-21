import { useState } from 'react';
import * as BooksAPI from '../BooksAPI'
import Books from '../components/Book/Book'
 
const Search =() =>{
    const [query, setQuery] = useState("");
    const [ListBooks, setListBooks] = useState([]);
    const updateSearch = async (query) => {
        setQuery(query.trim());
        const res = await BooksAPI.search(query.trim());
        setListBooks(res)
        
      };
    //   const filteredBooks =
    //   query === ""
    //     ? ListBooks
    //     : ListBooks.filter((b) =>
    //         b.name.toLowerCase().includes(query.toLowerCase())
    //       );
  

    return(
        <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            href='/'
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => updateSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
        {ListBooks.error !=="empty query" && (
        
            <Books ListBooks={ListBooks} />
        )}
          
        </div>
      </div>

    );
}

export default Search;