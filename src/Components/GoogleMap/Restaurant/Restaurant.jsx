import React, { useState, useEffect } from "react";
import TextArea from "../ui/form/Textarea";
import { Card, Rate } from "antd";
import ModalComponsant from "../Modal/Modal";
import styled from "styled-components";
import smallKey from "../../../services/smallKeyGen";
import "antd/dist/antd.css";
import { useForm } from "react-hook-form";

export default function RestaurantComponent({ e, index, data, setData }) {
  console.log({ data });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);
  const [currentValue, setCurrentValue] = useState();
  const [avis, setAvis] = useState(e.ratings);
  const { Meta } = Card;
  const { register, handleSubmit } = useForm();

  const submit = (dataTest) => {
    const update = {
      comment: dataTest.message,
      stars: currentValue,
    };

    setAvis((preState) => [...preState, update]);

    // const nouveauRating = [...data[index].ratings, update];
    // ESSAYER DE METTRE A JOUR LE STATE DATA DANS UN PRESTATE//
    // setData((preState) => {
    //   [...preState[index].rating = nouveauRating];
    // });

    setIsModalVisibleTwo(!true);
    setIsModalVisible(!false);
  };

  // console.log(avis, "AVIS ICI");

  return (
    <>
      <Card
        style={{ marginTop: "50px", width: 250 }}
        cover={
          <img
            alt="example"
            src={`https://maps.googleapis.com/maps/api/streetview?size=250x150&location=${e.lat},${e.lng}&heading=151.78&pitch=-0.76&key=AIzaSyC0iQDHGXaDAQ_Os9Boc6vxGrPZHcYQHzo`}
          />
        }
        actions={[
          <p onClick={() => setIsModalVisible(true)}>Avis</p>,
          <ModalComponsant
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            restaurantName={e.restaurantName}
          >
            {avis &&
              avis.map((e) => (
                <div key={smallKey(10)}>
                  <P>{e.comment}</P>
                  <Rate disabled="true" defaultValue={e.stars} />
                </div>
              ))}
          </ModalComponsant>,

          <p onClick={() => setIsModalVisibleTwo(true)}>Ajouter</p>,
          <ModalComponsant
            restaurantName={e.restaurantName}
            open={isModalVisibleTwo}
            onCancel={() => setIsModalVisibleTwo(false)}
          >
            <P>Veuillez laissez un avis </P>
            <form onSubmit={handleSubmit(submit)}>
              <TextArea {...register("message")}></TextArea>
              <P>Noter moi !</P>

              <Rate
                onChange={(value) => {
                  setCurrentValue(value);
                }}
                value={currentValue}
              />
              <button type="submit">Je note !</button>
            </form>
          </ModalComponsant>,
        ]}
      >
        <Meta
          title={e.restaurantName}
          description={<Address>{e.address}</Address>}
        />
        <Rate disabled="true" allowHalf defaultValue={e.moyenne} />
      </Card>
    </>
  );
}

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const P = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

export const Address = styled.p`
  font-size: 14px;
`;
