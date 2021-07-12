import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ModalComponsant({ open, onCancel, children }) {
  return (
    <Modal title="XD" onCancel={onCancel} visible={open}>
      {children}
    </Modal>
  );
}
