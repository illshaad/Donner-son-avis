import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default function ModalComponsantRestaurant({
  open,
  onCancel,
  children,
}) {
  return (
    <Modal
      title={<>Ajouter un nouveau restaurant </>}
      onCancel={onCancel}
      visible={open}
      footer={[]}
    >
      <div>{children}</div>
    </Modal>
  );
}
