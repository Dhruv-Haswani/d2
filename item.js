import React, { useState } from "react";

function Item({ item }) {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px"
    }}>
      <h4>{item.title}</h4>
      <p>{item.body}</p>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "Liked ❤️" : "Like 🤍"}
      </button>
    </div>
  );
}

export default Item;