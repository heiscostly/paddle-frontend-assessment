import React from "react";
import { FormInputContainer } from "./FormInputsStyle";

function FormInputs({ placeholder }) {
  return (
    <FormInputContainer>
      <input className="input-holder" type="text" placeholder={placeholder} />
    </FormInputContainer>
  );
}

export default FormInputs;
