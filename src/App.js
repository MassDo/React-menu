import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

function App() {
  // tester la transmission de données
  //  faire la fonction filterByCat
  const [items, setItems] = useState(data);
  const [cat, setCat] = useState([
    "All",
    ...new Set(items.map((item) => item.category)),
  ]);
  const filterByCat = (catToFilter) => {
    console.log(catToFilter);
    if (catToFilter === "All") {
      return setItems(data);
    }
    const newItems = data.filter((item) => item.category === catToFilter);
    setItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {cat.map((category, i) => (
            <Categories key={i} category={category} filterByCat={filterByCat} />
          ))}
        </div>
        <div className="section-center">
          {items.map((item) => (
            <Menu {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
