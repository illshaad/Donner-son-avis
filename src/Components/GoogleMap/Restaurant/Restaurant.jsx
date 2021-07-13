import React, { useState } from "react";
import TextArea from "../../../Components/GoogleMap/ui/form/Textarea";
import { Card, Button, Rate, Form, Input } from "antd";
import ModalComponsant from "../Modal/Modal";
import styled from "styled-components";
import smallKey from "../../../services/smallKeyGen";
import "antd/dist/antd.css";
import { useForm, Controller, set } from "react-hook-form";

export default function RestaurantComponent({ e }) {
  console.log(e);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);
  const [valueRating, setValueRating] = useState();

  const { register, handleSubmit, watch } = useForm();

  const Text = watch("message");
  console.log(Text);

  const submit = (data) => {
    setIsModalVisibleTwo(!true);
    setIsModalVisible(!false);
  };

  const somme = e[0].map((f) => {
    return f.ratings[0].stars;
  });

  console.log(somme);

  const reducer = (a, b) => (a + b) / e.ratings.length;
  const final = somme.reduce(reducer);
  console.log(final, " MOYENNE");

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
          open={isModalVisibleTwo}
          onCancel={() => setIsModalVisibleTwo(false)}
        >
          <P>Mon avis</P>
          <form onSubmit={handleSubmit(submit)}>
            <TextArea {...register("message")}></TextArea>
            <P>Notez moi !</P>
            <Rate />
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
