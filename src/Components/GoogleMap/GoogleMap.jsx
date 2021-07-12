/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Circle } from "@react-google-maps/api";
import ListRestaurant from "./Restaurants/ListRestaurant";
import styled from "styled-components";
import { PositionMaps, styledMap } from "./MapGoogle.style";
import data from "../../Data/data.json";

const defaultCenter = {
  lat: 48.8499198,
  lng: 2.6370411,
};

const options = {
  styles: styledMap,
  strokeColor: "#c22420",
  strokeOpacity: 1.2,
  strokeWeight: 5,
  fillColor: "#c22420",
  fillOpacity: 0.5,
  clickable: true,
  editable: false,
  visible: true,
  radius: 300,
  zIndex: 1,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
};

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function MapGoogle() {
  // const [data, setData] = useState([]);
  // const [dataGeo, setDataGeo] = useState();
  // const { latitude, longitude } = usePosition();

  const mapStyles = {
    width: "1080px",
    height: "600px",
  };

  return (
    <ContainerFlex>
      <div>
        <PositionMaps>
          <LoadScript googleMapsApiKey="AIzaSyD4afasVA6806Yo13HuY4DdrwoAs_4O9g0">
            <GoogleMap
              defaultCenter={{ lat: 48.8499198, lng: 2.6370411 }}
              mapContainerStyle={mapStyles}
              zoom={12}
              center={defaultCenter}
              options={options}
            >
              return (
              {data &&
                data.map((item, index) => {
                  const lagLng = {
                    lat: item.lat,
                    lng: item.long,
                  };
                  return (
                    <Circle
                      key={index}
                      id="circle-example"
                      center={lagLng}
                      options={options}
                    />
                  );
                })}
            </GoogleMap>
          </LoadScript>
        </PositionMaps>
      </div>
      <div>
        <ListRestaurant data={data} />
      </div>
    </ContainerFlex>
  );
}
