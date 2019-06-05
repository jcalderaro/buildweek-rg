import React from 'react';

const Contact = props => {
  console.log("Hi")
  return (
    <div>
      <h3>{props.first}:: First </h3>
      <h3>{props.last}:: Last </h3>
      <h3>{props.phone}:: Phone </h3>
      <h3>{props.relation}:: Relation </h3>
    </div>
  );
};

export default Contact;
