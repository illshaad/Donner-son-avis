/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ListRestaurant from "./Restaurants/ListRestaurant";
import styled from "styled-components";
import { PositionMaps, styledMap } from "./MapGoogle.style";
import dataJson from "../../Data/data.json";
import { Input } from "antd";
import ModalComposantRestaurant from "./Modal/ModalAddRestaurant";
import { useForm } from "react-hook-form";
import Axios from "axios";

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
  const [data, setData] = useState(dataJson);
  const [position, setPosition] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    const update = {
      restaurantName: data.restaurantName,
      address: position.address,
      lat: position.lat,
      lng: position.lng,
      ratings: [
        {
          stars: null,
          comment: null,
        },
      ],
      // description: data.description,
    };
    setData((prevState) => [...prevState, update]);
    setIsModalVisible(false);
  };

  const addRestaurant = async (lat, lng) => {
    const { data: geo } = await Axios.get(`
      https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat.lat},${lat.lng}&key=AIzaSyCKOfitYFhHUcLB1_VIy6WdK9VqXO7jSyM
      `);
    setPosition({
      address: geo.results[0].formatted_address,
      lat: lat.lat,
      lng: lat.lng,
    });
    setIsModalVisible(true);
    return geo;
  };

  // console.log(position.address);

  const mapStyles = {
    width: "1080px",
    height: "600px",
  };

  return (
    <ContainerFlex>
      <div>
        <PositionMaps>
          <LoadScript googleMapsApiKey="AIzaSyCKOfitYFhHUcLB1_VIy6WdK9VqXO7jSyM">
            <GoogleMap
              onDblClick={(e) =>
                addRestaurant({ lat: e.latLng.lat(), lng: e.latLng.lng() })
              }
              mapContainerStyle={mapStyles}
              zoom={12}
              center={{ lat: 48.866667, lng: 2.333333 }}
              options={options}
            >
              {data &&
                data.map((item, index) => {
                  const lagLng = {
                    lat: item.lat,
                    lng: item.lng,
                  };
                  return <Marker index={index} position={lagLng} />;
                })}

              <ModalComposantRestaurant
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
              >
                <form onSubmit={handleSubmit(submit)}>
                  <P>Nom - Prenom du Restaurant</P>
                  <Input
                    placeholder="Nom - Prenom"
                    {...register("restaurantName")}
                  ></Input>
                  <P>Adresse du Restaurant</P>
                  <Input
                    placeholder="Adresse"
                    {...register("address")}
                    defaultValue={position?.address}
                  ></Input>
                  {/* <P>Description du restaurant</P>
                  <Input
                    placeholder="Description"
                    {...register("description")}
                  ></Input> */}

                  <button type="submit">Ajouter</button>
                </form>
              </ModalComposantRestaurant>
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

export const P = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;
