import React from "react";

import { BsCheckLg } from "react-icons/bs";

import "./MessageSuccess.css";

const MessageSuccess = ({orderId}) => {
  return (
    <div className="message-container">
      <p className="message-item">
        <BsCheckLg /> Su compra con id: "{orderId}" se ha registrado con exito
      </p>
    </div>
  );
};

export default MessageSuccess;
