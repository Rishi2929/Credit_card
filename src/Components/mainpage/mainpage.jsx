
// import Card from "./Components/Card/Card";
import Card from "../Card/Card";
import Form from "../Form/Form"

import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import './mainpage.css';

const Main = () => {
  const [Values, setValues] = useState({
    Cardholdername: "",
    CardNumber: "",
    ExpDate: "",
    MMYY: "",
    CVC: "",
  });

  const inputs = [
    {
      label: "Cardholder Name",
      name: "fullName",
      type: "text",
      value: "",
      placeholder: "e.g. Jane Appleseed",
      errorMessage:"Cardholder name can't be empty",
      id: 0,
      required:true,
    },
    {
      label: "Card Number",
      name: "cardNumber",
      type: "number",
      value: "",
      placeholder: "e.g. 1234 5678 9123 0000",
      errorMessage:"Card Number required",
      id: 1,
      required:true,

    },
    {
      label: "Exp. Month",
      name: "expMonth",
      type: "number",
      value: "",
      placeholder: "MM",
      errorMessage:"Enter valid month",
      id: 2,
      required:true,

    },
    {
      label: "Exp. Year",
      name: "expYear",
      type: "number",
      value: "",
      placeholder: "YY",
      errorMessage:"Enter valid year",
      id: 3,
      required:true,

    },
    {
      label: "CVC",
      name: "cvc",
      type: "number",
      value: "",
      placeholder: "e.g. 123",
      errorMessage:"CVC must be numeric",
      id: 4,
      required:true,

    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) =>{
    setValues({...Values,[e.target.name]:e.target.value});
  }
  console.log(Values);
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={Values[input.name]} onChange={onChange} />
          ))}


          <button>Confirm</button>
        </form>
      </div>
    </>
  );
};

export default Main;
