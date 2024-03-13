const setStateField = <T>(
  event: React.ChangeEvent<HTMLInputElement>,
  setter: React.Dispatch<React.SetStateAction<T>>
): void => {
  const name = event.target.name;
  const value = event.target.value;
  setter((values) => ({ ...values, [name]: value }));
};

export default setStateField;
