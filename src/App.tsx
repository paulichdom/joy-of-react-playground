import { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState<string | number>('cats!');
  return (
    <div className="wrapper">
      <header>
        <h1>Playground</h1>
      </header>
      <main>
        <section className='data-binding'>
          <form>
            <label htmlFor="search-input">Search:</label>
            <input
              type="text"
              id="search-input"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </form>

          <p>Search term: {searchTerm}</p>

          <button onClick={() => setSearchTerm(Math.random())}>Click me</button>
        </section>
      </main>
      <footer>
        <p>2024</p>
      </footer>
    </div>
  );
}

export default App;
