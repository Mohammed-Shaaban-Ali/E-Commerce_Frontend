import { Modal } from "antd";

const CustomModal = ({ open, title, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Delete!..."
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="OK"
      cancelText="Cancel"
    >
      {title}
    </Modal>
  );
};

export default CustomModal;
