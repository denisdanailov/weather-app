import React from "react";

const api = {
  key: "408aab490d1822580b40a7499b56eb22",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
     <main>
       <div className="search-box">
         <input 
         type="text"
         className="search-bar"
         placeholder="Search..."
         />
       </div>
     </main>
    </div>
  );
}

export default App;
