import React from "react";
import FormInputs from "./FormInputs";
import { FormWrapper } from "./FormInputsStyle";
import WaitingList from "./WaitingList";

function Forms() {
  return (
    <FormWrapper>
      <div style={{ display: "flex", marginBottom: "2rem" }}>
        <FormInputs placeholder="First Name.." />
        <FormInputs placeholder="Last Name.." />
      </div>
      <WaitingList />
    </FormWrapper>
  );
}

export default Forms;
