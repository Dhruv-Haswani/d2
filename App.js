import React, { useEffect, useState } from "react";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setItems(data.slice(0, 5))); 
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Item List (Fetched from API)</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;