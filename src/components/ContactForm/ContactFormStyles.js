const formInput_textarea = {
  width: "500px",
  fontSize: "1.5rem",
  margin: "1rem auto",
};

const formInput_textarea_formButton= {
  borderTop: "1px solid gainsboro",
  borderLeft: "1px solid gainsboro",
  borderRight: "1px solid gainsboro",
  borderRadius: "0.4rem",
  borderBottom: "solid",
};

//============
const ContactFormContainerStyle = {
  width: "fit-content",  
  margin: "2rem auto",
};  

const formInputStyle = {
  height: "2rem",
  width: formInput_textarea.width,
  fontSize: formInput_textarea.fontSize,
  margin: formInput_textarea.margin,
  borderTop: formInput_textarea_formButton.borderTop,
  borderLeft: formInput_textarea_formButton.borderLeft,
  borderRight: formInput_textarea_formButton.borderRight,
  borderRadius: formInput_textarea_formButton.borderRadius,
  borderBottom: formInput_textarea_formButton.borderBottom,
};

const textareaStyle = {
  height: "10rem",
  resize: "none",
  width: formInput_textarea.width,
  fontSize: formInput_textarea.fontSize,
  margin: formInput_textarea.margin,
  borderTop: formInput_textarea_formButton.borderTop,
  borderLeft: formInput_textarea_formButton.borderLeft,
  borderRight: formInput_textarea_formButton.borderRight,
  borderRadius: formInput_textarea_formButton.borderRadius,
  borderBottom: formInput_textarea_formButton.borderBottom,
};

const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
};
const formButtonStyle = {
  cursor: "pointer",
  padding:  "0.8rem 4rem",
  fontSize: "1rem",
  color: "black",
  backgroundColor: "rgb(243, 243, 240)",
  borderTop: formInput_textarea_formButton.borderTop,
  borderLeft: formInput_textarea_formButton.borderLeft,
  borderRight: formInput_textarea_formButton.borderRight,
  borderRadius: formInput_textarea_formButton.borderRadius,
  borderBottom: formInput_textarea_formButton.borderBottom,
}

module.exports = {
  ContactFormContainerStyle,
  formInputStyle,
  textareaStyle,
  buttonContainerStyle,
  formButtonStyle,
};