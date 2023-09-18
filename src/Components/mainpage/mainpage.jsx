
// import Card from "./Components/Card/Card";

import Form from "../Form/Form"

import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import './mainpage.css';
import Card from "../Card/Card";

const Main = () => {
  const [Values, setValues] = useState({
   
  });

  const inputs = [
    {
      label: "Cardholder Name",
      name: "fullName",
      required:true,

      type: "text",
      value: "",
      placeholder: "e.g. Jane Appleseed",
      errorMessage:"Cardholder name can't be empty",
      id: 0,
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
      pattern:"\d{3}",

      required:true,

    },
  ];
  const detailsObj = {
    fullName: "JANE APPLESEED",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "00",
    cvc: "000",
  }
  
  const detailsObj2 = {
    fullName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  }



  const [personDetail, setPersonDetail] = useState(detailsObj2);
  const [personData, setPersonData] = useState(detailsObj);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setPersonDetail({...personDetail, [name]: value});
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonData(personDetail);
    setPersonDetail(detailsObj2);

  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  // const onChange = (e) =>{
  //   setValues({...Values,[e.target.name]:e.target.value});
  // }
  // console.log(Values);
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>


        <div className="formbox">
        <FormInput key={inputs[0].id} {...inputs[0]} value={personDetail[inputs[0].name]} onChange={handleChange} />
          <FormInput key={inputs[1].id} {...inputs[1]} value={personDetail[inputs[1].name]} onChange={handleChange} />
          <div className="my">
          <FormInput key={inputs[2].id} {...inputs[2]} value={personDetail[inputs[2].name]} onChange={handleChange} className="month"/>
          <FormInput key={inputs[3].id} {...inputs[3]} value={personDetail[inputs[3].name]} onChange={handleChange} className="year" />
          <FormInput key={inputs[4].id} {...inputs[4]} value={personDetail[inputs[4].name]} onChange={handleChange} className="cvc" />    
          </div>
        </div>

          <button>Confirm</button>
        </form>
      </div>
      <div className="c">
      <Card {...personData}/>
      </div>
    </>
  );
};

export default Main;
