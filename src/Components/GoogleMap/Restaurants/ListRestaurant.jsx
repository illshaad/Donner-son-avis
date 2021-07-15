import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./index.css";
import data from "../../../Data/data.json";
import Axios from "axios";
import styled from "styled-components";
import RestaurantComponent from "../Restaurant/Restaurant";
import { Select } from "antd";
export default function ListRestaurant() {
  const { Option } = Select;

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

  return (
    <div>
      <H1>Liste des restaurants</H1>
      <Select style={{ width: 200 }}>
        <Option value="1">1 etoile</Option>
        <Option value="2">2 etoiles</Option>
        <Option value="3">3 etoiles</Option>
        <Option value="4">4 etoiles</Option>
        <Option value="5">5 etoiles</Option>
      </Select>

      {data.map((e) => (
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
