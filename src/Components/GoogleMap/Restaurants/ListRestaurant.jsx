import React, { useState } from "react";
import { useQuery } from "react-query";
import "antd/dist/antd.css";
import "./index.css";
import data from "../../../Data/data.json";
import Axios from "axios";

import styled from "styled-components";
import RestaurantComponent from "../Restaurant/Restaurant";

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-weight: 500;
  font-size: 30px;
`;

export default function ListRestaurant() {
  // <script
  //   async
  //   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYp9N3XPj-uQynBag2rvGZBcpMvibpJ8Q&libraries=places&callback=initMap"
  // ></script>;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await Axios.get(
  //       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.8499198,2.6370411&radius=1500&type=restaurant&key=AIzaSyAYp9N3XPj-uQynBag2rvGZBcpMvibpJ8Q`
  //     );
  //     console.log(result);
  //     setDataRestaurant(result.results);
  //   };
  //   fetchData();
  // }, []);

  // console.log(dataRestaurant);

  // const somme = data.map((e) => {
  //   return e.ratings[0].stars;
  // });

  // const reducer = (a, b) => (a + b) / data[0].ratings.length;
  // const final = somme.reduce(reducer);

  return (
    <div>
      <H1>Liste des restaurants</H1>
      {data.map((e) => (
        <RestaurantComponent e={e} />
      ))}
    </div>
  );
}
