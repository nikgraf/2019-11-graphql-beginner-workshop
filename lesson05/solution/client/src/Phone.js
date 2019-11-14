import React from "react";

export default function Phone(props) {
  const phone = props.phone.replace("+43", "0");
  return <div>{phone}</div>;
}
