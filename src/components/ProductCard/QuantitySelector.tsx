interface QuantitySelectorProps {
  defaultValue: number;
  onChange: () => void;
}

const QuantitySelector = (props: QuantitySelectorProps) => {
  const { defaultValue, onChange } = props;

  return (
    <input
      name="quantity"
      type="number"
      defaultValue={defaultValue}
      min={1}
      onChange={onChange}
    />
  );
};

export default QuantitySelector;
