import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./index.css";
import data from "../../../Data/data.json";
import Axios from "axios";
import styled from "styled-components";
import RestaurantComponent from "../Restaurant/Restaurant";
import { Slider } from "antd";
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

  const newData = [];
  data.length > 0 &&
    data.map((e) => {
      const moy = e.ratings
        .map((item) => item.stars)
        .reduce((a, b) => (a + b) / e.ratings.length);
      const obj = { ...e, moyenne: moy };
      return newData.push(obj);
    });

  console.log(newData);
  const filter = (value) => {
    console.log(value);
    const filtered = newData.filter(
      (e) => e.moyenne > value[0] && e.moyenne < value[1]
    );
    console.log(filtered);
  };

  return (
    <div>
      <H1>Liste des restaurants</H1>
      <h2>Filtrer part moyenne d'un réstaurant</h2>
      <Slider
        range={{ draggableTrack: true }}
        defaultValue={[1, 5]}
        min={1}
        max={5}
        onChange={(e) => filter(e)}
      />
      {newData.map((e) => (
        <RestaurantComponent e={e} />
      ))}
    </div>
  );
}

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-weight: 500;
  font-size: 30px;
`;
