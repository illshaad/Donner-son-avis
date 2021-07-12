import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ModalComponsant({ open, onCancel, children }) {
  console.log(open);
  return (
    <Modal title="Basic Modal" onCancel={onCancel} visible={open}>
      {children}
    </Modal>
  );
}
