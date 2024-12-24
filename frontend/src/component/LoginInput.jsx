import React from "react";

const LoginInput = ({
  placeHolder,
  inputState,
  inputStateFunc,
  type,
  name
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        className="form-control"
        value={inputState}
        onChange={(e) => inputStateFunc(e)}
      />
    </div>
  );
};

export default LoginInput;
