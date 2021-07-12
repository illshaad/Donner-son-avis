import React, { useState } from "react";
import TextArea from "../../../Components/GoogleMap/ui/form/Textarea";
import { Card, Button, Rate } from "antd";
import ModalComponsant from "../Modal/Modal";
import styled from "styled-components";
import smallKey from "../../../services/smallKeyGen";
import "antd/dist/antd.css";
import { useForm } from "react-hook-form";

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const P = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

export default function RestaurantComponent({ e }) {
  const [defaultValues, setDefaultValues] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);

  const { handleSubmit, watch } = useForm({
    defaultValues,
  });

  const submit = (data) => {
    console.log(data);
  };

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
            <TextArea rows={4} name="comment" />
            <P>Evaluer moi</P>
            <Rate name="rating" />
          </form>
        </ModalComponsant>
      </ContainerFlex>
    </Card>
  );
}
