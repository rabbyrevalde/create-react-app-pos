import React, { useEffect } from "react";
// import React, { useState, useEffect } from "react";
import data from "../data/categories";
import Layout from "../components/Layout";
import fruits from "../static/images/fruits.jpeg";
import ModalSelect from "../components/ModalSelect";

const Categories = ({ match }) => {
  const dataitems = data.filter(
    item => convertToSlug(item.category) === match.params.id
  );
  // console.log(dataitems[0].items);
  // useEffect(() => {
  //   console.log(match);
  // });
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   const fetchItem = async () => {
  //     const data = await fetch(`https://fortnite-api.theapinetwork.com/items/popular
  //     `);
  //     const DataItem = await data.json();
  //     console.log(DataItem);
  //   };
  //   fetchItem();
  // }, []);

  return (
    <Layout>
      <h1 className="text-center py-3">{dataitems[0].category}</h1>
      <div className="categories container">
        {dataitems[0].items.map(item => (
          <div className="category item">
            <p className="selected-count p-title py-2 font-weight-bold text-white">
              {item.title}
            </p>
            <p className="selected-count py-1">1pc selected</p>
            <h5 className="selected-count price-selected py-1">
              ${item.price}
            </h5>
            <img src={fruits} alt="fruits" />
            <ModalSelect title={item.title} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
