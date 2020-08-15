import React from 'react';
import {
  ContactFormContainerStyle,
  formInputStyle,
  textareaStyle,
  buttonContainerStyle,
  formButtonStyle,
} from './ContactFormStyles';

class ContactForm extends React.Component {
  render() {
    return(
      <div className="ContactFormContainer" style={ContactFormContainerStyle}>
        <form method="" action="">
          <input style={formInputStyle} id="formInput" type="text" name="name"  autoComplete="on" maxLength="25" placeholder="Name" required/><br></br>
          <input style={formInputStyle} id="formInput" type="email" name="email" autoComplete="on" maxLength="25" placeholder="email@email.com" required/><br></br>
          <textarea style={textareaStyle} name="message" placeholder="Let us now what can help you here..." required/><br></br>
          <div className="buttonContainer" style={buttonContainerStyle}>
            <button style={formButtonStyle} id="formButton" type="submit" >Submit</button>
          </div>
        </form>
      </div>
    );
  } 
}

export default ContactForm;