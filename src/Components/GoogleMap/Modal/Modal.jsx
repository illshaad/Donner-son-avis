import React from "react";
import { StarFilled } from "@ant-design/icons";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ModalComponsant({ moyenne, open, onCancel, children }) {
  return (
    <Modal
      title={
        <>
          Bienvenue la moyenne de ce restaurant est de :
          <span>
            {moyenne} <StarFilled />
          </span>
        </>
      }
      onCancel={onCancel}
      visible={open}
      footer={[]}
    >
      <div>{children}</div>
    </Modal>
  );
}
