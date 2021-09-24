import React, { useState, useEffect } from "react";
import "./index.css";
import styled from "styled-components";
import RestaurantComponent from "../Restaurant/Restaurant";
import { Slider } from "antd";

export default function ListRestaurant({ data, setData }) {
  const calculeMoyenne = (restaurants) => {
    return restaurants.map((e) => {
      const moy = e.ratings
        .map((item) => item.stars)
        .reduce((a, b) => (a + b) / e.ratings.length);
      return { ...e, moyenne: moy };
    });
  };

  const [array, setArray] = useState(calculeMoyenne(data));

  const [newData, setNewData] = useState(array);

  const filter = (value) => {
    const filtered =
      array &&
      array.filter((e) => e.moyenne > value[0] && e.moyenne < value[1]);
    setNewData(filtered);
  };

  useEffect(() => {
    setArray(calculeMoyenne(data));
  }, [data]);

  useEffect(() => {
    setNewData(array);
  }, [array]);

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
      {newData?.map((e, index) => (
        <RestaurantComponent
          e={e}
          data={data}
          setData={setData}
          index={index}
        />
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
