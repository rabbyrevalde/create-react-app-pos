// import React, { useState, useEffect } from "react";
import React from "react";
import data from "./data/categories";
import Layout from "./components/Layout";
// import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import categories from "./pages/categories";
// import uuid from "uuid";
const App = () => {
  // const [items, setItems] = useState([]);
  // const [loading, setloading] = useState(false);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     setloading(true);
  //     const res = await axios.get(`https://jsonplaceholder.typicode.com/photos
  //     `);
  //     setItems(res.data);
  //     setloading(false);
  //   };
  //   fetchItems();
  // }, []);
  // items.length = Math.min(items.length, 50);
  // console.log(items);
  // console.log(data);
  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => (
          <React.Fragment>
            <Layout>
              <div className="App container">
                <h1 className="text-center py-3">Categories</h1>
                <div className="categories container">
                  {data.map(item => (
                    <div className="category" key={item.id}>
                      <Link
                        to={`/pages/categories/${convertToSlug(item.category)}`}
                        className="category-link"
                      />
                      <p className="total-item-per-cat">{item.items.length}</p>
                      <p className="category-name">{item.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Layout>
          </React.Fragment>
        )}
      />
      <Route path="/pages/categories/:id" component={categories} />
    </Router>
  );
};

export default App;

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
