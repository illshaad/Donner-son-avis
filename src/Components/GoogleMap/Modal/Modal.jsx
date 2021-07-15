import React from "react";
import { StarFilled } from "@ant-design/icons";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ModalComponsant({
  restaurantName,
  open,
  onCancel,
  children,
}) {
  return (
    <Modal
      title={<>Bienvenue chez {restaurantName} </>}
      onCancel={onCancel}
      visible={open}
      footer={[]}
    >
      <div>{children}</div>
    </Modal>
  );
}
