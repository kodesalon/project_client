import React from 'react';

const InputBox = (props) => {
  const { className, placeholder, type, value, name, setInput, changeInput } =
    props;

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    changeInput(name, value);
  };
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={handleOnChangeInput}
      />
    </>
  );
};

export default React.memo(InputBox);
