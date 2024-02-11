import React from "react"

function InputFormComponent(props) {
    return(<>
        <label>
          {props.labelName} : 
          <input id={props.inputTestId} data-testid={props.inputTestId} type={props.inputType} name={props.inputName} onChange={props.handleChange} />
          <label style={{color: "red"}} data-testid={props.errorTestId}>{props.errorMessage}</label>
        </label>
    </>)
}

export default InputFormComponent