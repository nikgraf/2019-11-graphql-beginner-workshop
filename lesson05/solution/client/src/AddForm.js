import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { gql } from "apollo-boost";

const addPlaceMutation = gql`
  mutation AddPlaceMutation($name: String!, $phone: String, $email: String) {
    createPlace(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

function AddForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addPlace] = useMutation(addPlaceMutation);

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        if (!name) return;
        addPlace({ variables: { name, phone, email } });
        setName("");
        setPhone("");
        setEmail("");
      }}
    >
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={evt => setName(evt.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="phone"
        onChange={evt => setPhone(evt.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={evt => setEmail(evt.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddForm;
