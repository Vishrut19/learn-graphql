import React, { useState } from "react";

function CreateQuote() {
  const [quote, setQuote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
  };

  return (
    <div className="container my-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          placeholder="Write your Quote here."
          onChange={(e) => setQuote(e.target.value)}
        />
        <button className="btn green">Create</button>
      </form>
    </div>
  );
}

export default CreateQuote;
