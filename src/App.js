import React, { useState, useEffect } from 'react';
import './App.css';
import InputFormComponent from './component/inputFormComponent';

/**
 * calculating age according to year of birth
 * @param {Date} birth date of birth set as parameter
 * @returns {number} age of date of birth
 */
export const calculatingAge = function (birth) {
  let dateDiff = new Date(Date.now() - new Date(birth).getTime())
  return Math.abs(dateDiff.getUTCFullYear() - 1970);
}

function App() {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [mail, setmail] = useState("")
  const [birthDate, setbirthDate] = useState(new Date())
  const [city, setcity] = useState("")
  const [zipCode, setzipCode] = useState(0)
  const [isValidFirstname, setIsValidFirstname] = useState(false)
  const [isValidLastname, setIsValidLastname] = useState(false)
  const [isValidMail, setIsValidMail] = useState(false)
  const [isValidBirthDate, setIsValidBirthDate] = useState(false)
  const [isValidCity, setIsValidCity] = useState(false)
  const [isValidZipCode, setIsValidZipCode] = useState(false)
  const [firstnameError, setFirstnameError] = useState("")
  const [lastnameError, setLastnameError] = useState("")
  const [mailError, setMailError] = useState("")
  const [birthDateError, setBirthDateError] = useState("")
  const [cityError, setCityError] = useState("")
  const [zipCodeError, setZipCodeError] = useState("")
  const [isValidForm, setIsValidForm] = useState(false)

  let regexForName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-]+$/;
  let isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * change firstname
   * @param {*} event current event
   */
  const handleChangeFirstname = function (event){
    if(regexForName.test(event.target.value)){
      setfirstname(event.target.value);
      setIsValidFirstname(true);
      setFirstnameError("");
    }
    else {
      setIsValidFirstname(false);
      setFirstnameError("nom invalide");
    }
  }

  /**
   * change lastname
   * @param {*} event current event
   */
  const handleChangeLastname = function (event){
    if(regexForName.test(event.target.value)){
      setlastname(event.target.value);
      setIsValidLastname(true);
      setLastnameError("");
    }
    else {
      setIsValidLastname(false);
      setLastnameError("prénom invalide");
    }
  }

  /**
   * change mail
   * @param {*} event current event
   */
  const handleChangeMail = function (event){
    if(isEmailValid.test(event.target.value)){
      setmail(event.target.value);
      setIsValidMail(true);
      setMailError("");
    }
    else {
      setIsValidMail(false);
      setMailError("mail invalide");
    }
  }

  /**
   * change birthdate
   * @param {*} event current event
   */
  const handleChangeBirthDate = function (event){
    if (calculatingAge(event.target.value) >=  18) {
      setbirthDate(event.target.value);
      setIsValidBirthDate(true);
      setBirthDateError("");
    }
    else {
      setIsValidBirthDate(false);
      setBirthDateError("age inférieur à 18 ans");
    }
  }

  /**
   * change city
   * @param {*} event current event
   */
  const handleChangeCity = function (event){
    setcity(event.target.value);
    setIsValidCity(true);
    setCityError("");
  }

  /**
   * change zipcode
   * @param {*} event current event
   */
  const handleChangeZipCode = function (event){
    if(event.target.value.toString().length === 5){
      setzipCode(event.target.value);
      setIsValidZipCode(true);
      setZipCodeError("");
    }
    else {
      setIsValidZipCode(false);
      setZipCodeError("zipcode non formalisé");
    }
  }

  /**
   * useEffect calling the method for checking whether the form is valid
   */
  useEffect(() => {
    checkValidForm();
  }, [isValidFirstname, isValidLastname, isValidMail, isValidBirthDate, isValidCity, isValidZipCode]);

  /**
   * checks whether the form is valid
   */
  const checkValidForm = function() {
    setIsValidForm(isValidFirstname && isValidLastname && isValidMail && isValidBirthDate && isValidCity && isValidZipCode);
  }

  /**
   * submit data in local storage
   */
  const handleSubmit = function() {
    window.localStorage.setItem("firstname", firstname);
    window.localStorage.setItem("lastname", lastname);
    window.localStorage.setItem("mail", mail);
    window.localStorage.setItem("birthDate", birthDate);
    window.localStorage.setItem("city", city);
    window.localStorage.setItem("zipCode", zipCode);

    const input1 = document.getElementById('firstnameInput');
    const input2 = document.getElementById('lastnameInput');
    const input3 = document.getElementById('mailInput');
    const input4 = document.getElementById('dateInput');
    const input5 = document.getElementById('cityInput');
    const input6 = document.getElementById('zipcodeInput');
    
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
    input6.value = '';
    window.alert("les données ont bien été sauvegardées");
  }

  return (
    <div className="App">
      <form style={formStyle} onSubmit={handleSubmit}>
        <InputFormComponent
          labelName="Nom"
          inputTestId="firstnameInput"
          inputType="text"
          inputName="firstname"
          errorTestId="firstnameErrorMessage"
          errorMessage={firstnameError}
          handleChange={handleChangeFirstname}
        />
        <InputFormComponent
          labelName="Prénom"
          inputTestId="lastnameInput"
          inputType="text"
          inputName="lastname"
          errorTestId="lastnameErrorMessage"
          errorMessage={lastnameError}
          handleChange={handleChangeLastname}
        />
        <InputFormComponent
          labelName="Mail"
          inputTestId="mailInput"
          inputType="text"
          inputName="mail"
          errorTestId="mailErrorMessage"
          errorMessage={mailError}
          handleChange={handleChangeMail}
        />
        <InputFormComponent
          labelName="Date de naissance"
          inputTestId="dateInput"
          inputType="date"
          inputName="birthDate"
          errorTestId="dateErrorMessage"
          errorMessage={birthDateError}
          handleChange={handleChangeBirthDate}
        />
        <InputFormComponent
          labelName="Ville"
          inputTestId="cityInput"
          inputType="text"
          inputName="city"
          errorTestId="cityErrorMessage"
          errorMessage={cityError}
          handleChange={handleChangeCity}
        />
        <InputFormComponent
          labelName="Code postal"
          inputTestId="zipcodeInput"
          inputType="number"
          inputName="zipcode"
          errorTestId="zipcodeErrorMessage"
          errorMessage={zipCodeError}
          handleChange={handleChangeZipCode}
        />
        <input data-testid="submitButton" type="submit" value="Envoyer" disabled={!isValidForm} />
      </form>
    </div>
  );
}

const formStyle = {
  display: 'grid',
  justifyContent: 'center',
};

export default App;
