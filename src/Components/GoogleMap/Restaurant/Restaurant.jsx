import React, { useLayoutEffect, useState } from "react";
import TextArea from "../../../Components/GoogleMap/ui/form/Textarea";
import { Card, Button, Rate, Form, Input } from "antd";
import ModalComponsant from "../Modal/Modal";
import styled from "styled-components";
import smallKey from "../../../services/smallKeyGen";
import "antd/dist/antd.css";
import { useForm } from "react-hook-form";

export default function RestaurantComponent({ e }) {
  // console.log(e.ratings);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const { register, handleSubmit } = useForm();

  // const message = watch("message");
  // console.log(message);

  const submit = (data) => {
    // console.log(data, "  dataaaa");

    setIsModalVisibleTwo(!true);
    setIsModalVisible(!false);
  };

  const ratings = e.ratings;
  const total = [];
  for (let i = 0; i < ratings.length; i++) {
    total.push(ratings[i].stars);
  }
  const reducer = (a, b) => (a + b) / total.length;
  const moyenne = total.reduce(reducer);

  return (
    <Card title={e.restaurantName} style={{ width: 300 }}>
      <P>{e.address}</P>
      <ContainerFlex>
        <Button onClick={() => setIsModalVisible(true)} size="small">
          Voir les avis
        </Button>
        <ModalComponsant
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          moyenne={moyenne}
        >
          {e.ratings.map((e) => (
            <div key={smallKey(10)}>
              <P>{e.comment}</P>
              <Rate defaultValue={e.stars} />
            </div>
          ))}
        </ModalComponsant>
        <Button
          onClick={() => setIsModalVisibleTwo(true)}
          style={{ borderColor: "#DA70D6" }}
          size="small"
        >
          Ajouter un avis
        </Button>
        <ModalComponsant
          moyenne={moyenne}
          open={isModalVisibleTwo}
          onCancel={() => setIsModalVisibleTwo(false)}
        >
          <P>Mon avis</P>
          <form onSubmit={handleSubmit(submit)}>
            <TextArea {...register("message")}></TextArea>
            <P>Notez moi !</P>
            <Rate
              onChange={(value) => {
                setCurrentValue(value);
              }}
              value={currentValue}
            />
            <button type="submit">cliquer</button>
          </form>
        </ModalComponsant>
      </ContainerFlex>
    </Card>
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
