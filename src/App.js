import './App.css';
import { useState } from 'react';

function App() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [type, setType] = useState("all");

  return (
    <>
      <header>
        <h1>Find a Car</h1>
      </header>

      <main>
        <section className="infoInput">
          <h2>Search</h2>
          <form>
            <label htmlFor="min">Min Price</label>
            <input type="number" id="min" name="min" onChange={(e) => setMinPrice(e.target.value)}/>

            <label htmlFor="max">Max Price</label>
            <input type="number" id="max" name="max" onChange={(e) => setMaxPrice(e.target.value)}/>

            <label htmlFor="type">Type</label>
            <select id="type" name="type">
              <option value="all">All</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="coupe">Coupe</option>
              <option value="convertible">Convertible</option>
              <option value="hatchback">Hatchback</option>
              <option value="wagon">Wagon</option>
              <option value="van">Van</option>  
            </select>


            <button>Search</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
