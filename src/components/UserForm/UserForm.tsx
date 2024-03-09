import styles from "./UserForm.module.css";

interface UserFormPartProps {
  className?: string;
}

const UserFormPart = (props: UserFormPartProps): JSX.Element => {
  const { className } = props;
  const { container } = styles;

  return (
    <div className={`${className} ${container}`}>
      <label>Name:</label>
      <input />
      <label>Email:</label>
      <input />
      <label>Phone:</label>
      <input />
      <label>Address</label>
      <input />
    </div>
  );
};

export default UserFormPart;
