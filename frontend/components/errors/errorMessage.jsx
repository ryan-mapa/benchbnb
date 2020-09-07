import React from 'react';

const errorMessage = ({errors, type}) => {
  const keyString = String(type)[0].toUpperCase() + String(type).slice(1)
  const message = type === "general" ? errors[type] : keyString + " " + errors[type];
  const messageBox = errors[type] ? <div className="error-message">{message}</div> : null;
  return messageBox;
}

export default errorMessage;