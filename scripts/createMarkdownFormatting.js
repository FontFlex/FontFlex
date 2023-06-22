/*
Function getElement(id) is used to get the element by its ID.
It takes one parameter, which is the ID of the element you want to get.
The parametes example is shown below in functions
It returns the element with the ID you passed in.
*/
function getElement(id) {
  return document.getElementById(id);
}

/*
Function getObjProperties(testObj) is used to get the properties of the object you pass in.
It takes one parameter, which is the object you want to get the properties of.
The parametes example is shown below in functions addH1, addH2, addH3
It returns the properties of the object you passed in, as array.
return [ textarea, currentLine, lines ]
Here testObj is 'test-textarea' which is the ID of the textarea you want to get the properties of.
*/
function getObjProperties(testObj) {
  const textarea = getElement(testObj);
  const currentLine = textarea.value.substr(0, textarea.selectionStart).split('\n').length;
  const lines = textarea.value.split('\n');
  
  return [ textarea, currentLine, lines ]; // Return the textarea, currentLine, and lines in an array
}

/*
Function setStyle is used to set the style of the textarea.
It takes seven parameters, which are the textarea, currentLine, lines, span, fontSize, fontWeight, and color.
The parametes example is shown below in functions addH1, addH2, addH3
*/ 
function setStyle(textarea, currentLine, lines, span, fontSize, fontWeight, color) {
  if (currentLine <= lines.length) {
  const currentLineText = lines[currentLine - 1];
  textarea.value += '<span id="' + span + '">' + currentLineText + '</span>';
  textarea.style.fontSize = fontSize;
  textarea.style.fontWeight = fontWeight;
  textarea.style.color = color;
  }
}

/*
Function formatTextArea is used to format the textarea.
It takes five parameters, which are the props, span, fontSize, fontWeight, and color.
The parametes example is shown below in functions addH1, addH2, addH3
*/
function formatTextArea(props, span, fontSize, fontWeight, color) {
  if (!Array.isArray(props)) {
    throw new Error('Props must be an array');
  }

  const textarea = props[0];
  const currentLine = props[1];
  const lines = props[2];

  setStyle(textarea, currentLine, lines, span, fontSize, fontWeight, color);
}

function addH1() {
  const objProps = getObjProperties('test-textarea'); //! Make sure to change this to be the YOUR textarea ID, if you dont FontFlex will not work properly
  formatTextArea(objProps, 'frmt-h1', '32px', 'bold', '#3662E3');
}

function addH2() {
  const objProps = getObjProperties('test-textarea'); //! Make sure to change this to be the YOUR textarea ID, if you dont FontFlex will not work properly
  formatTextArea(objProps, 'frmt-h2', '28px', 'bold', '#3662E3');
}

function addH3() {
  objProps = getObjProperties('test-textarea'); //! Make sure to change this to be the YOUR textarea ID, if you dont FontFlex will not work properly
  formatTextArea(objProps, 'frmt-h3', '24px', 'bold', '#3662E3');
}

function returnToNormalFont() {
  const textarea = getElement('test-textarea'); //! Make sure to change this to be the YOUR textarea ID, if you dont FontFlex will not work properly
  textarea.value = textarea.value.replace(/<[^>]+>/g, ''); // Remove HTML tags
  textarea.style.fontSize = '14px';
  textarea.style.fontWeight = '400';
  textarea.style.color = '#000000';
}

function makeCurrentLineTextBold() {
  const objProps = getObjProperties('test-textarea'); //! Make sure to change this to be the YOUR textarea ID, if you dont FontFlex will not work properly

  const textarea = getElement('test-textarea'); //! Make sure to change this to be the YOUR textarea ID, if you dont FontFlex will not work properly
  const currentLine = textarea.value.substr(0, textarea.selectionStart).split('\n').length;
  const lines = textarea.value.split('\n');
  
  if (currentLine <= lines.length) {
    const currentLineText = lines[currentLine - 1];
    textarea.value += '<span id="frmt-h3">' + currentLineText + '</span>';
    textarea.style.fontWeight = 'bold';
  }
}