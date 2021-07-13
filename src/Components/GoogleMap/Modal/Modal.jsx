import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ModalComponsant({ text, open, onCancel, children }) {
  return (
    <Modal
      title="Bienvenue"
      onOk={() => console.log("test")}
      onCancel={onCancel}
      visible={open}
      footer={[]}
    >
      <div>{children}</div>
    </Modal>
  );
}
