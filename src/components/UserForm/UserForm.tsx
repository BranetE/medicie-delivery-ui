// import { useEffect, useState } from "react";
import styles from "./UserForm.module.css";
import { useCart } from "../../context/CartContext";
import setStateField from "../../util/setStatesField";

interface UserFormPartProps {
  className?: string;
}

const UserFormPart = (props: UserFormPartProps): JSX.Element => {
  const { userData, setUser } = useCart();
  const { className } = props;
  const { container } = styles;

  return (
    <div className={`${className} ${container}`}>
      <label>Name:</label>
      <input
        name="name"
        defaultValue={userData?.name}
        onChange={(e) => setStateField(e, setUser)}
      />
      <label>Email:</label>
      <input
        name="email"
        defaultValue={userData?.email}
        onChange={(e) => setStateField(e, setUser)}
      />
      <label>Phone:</label>
      <input
        name="phone"
        defaultValue={userData?.phone}
        onChange={(e) => setStateField(e, setUser)}
      />
      <label>Address</label>
      <input
        name="address"
        defaultValue={userData?.address}
        onChange={(e) => setStateField(e, setUser)}
      />
    </div>
  );
};

export default UserFormPart;
