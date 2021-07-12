import React, { useState } from "react";
import { Card, Button, Rate } from "antd";
import ModalComponsant from "../Modal/Modal";
import styled from "styled-components";
import smallKey from "../../../services/smallKeyGen";
import "antd/dist/antd.css";

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function RestaurantComponent({ e }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false);

  return (
    <Card title={e.restaurantName} style={{ width: 300 }}>
      <p>{e.address}</p>
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
              <p>{e.comment}</p>
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
          Donner son avis
        </ModalComponsant>
      </ContainerFlex>
    </Card>
  );
}
