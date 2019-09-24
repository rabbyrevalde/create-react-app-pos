import React from "react";
import data from "./data/categories";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <div className="App container">
        <h1 className="text-center py-3">Categories</h1>
        <div className="categories container">
          {data.map(item => (
            <div className="category" key={item.id}>
              {/* <CategoryLink catid={item.id} slug={item.category} /> */}
              <p className="total-item-per-cat">{item.items.length}</p>
              <p className="category-name">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
