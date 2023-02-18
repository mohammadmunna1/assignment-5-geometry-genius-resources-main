
document.getElementById("blogButton").onclick = function () {
    location.href = "4QuestionAnswer.html";
};

// get the value and parsefloat
function getInputValueByID(inputId)
{
    const inputField = document.getElementById(inputId);
    const inputField_string = inputField.value;
    const inputFieldValue = parseFloat(inputField_string);
    inputField.value='';
    return inputFieldValue;
}

// set the value and show 
function SetTextElementValueById(elementId, newValue){
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
    // console.log(TextElement,newValue);

}

// getting values using the function

document.getElementById('Triangle_Calculate_Button').addEventListener
('click',function()

{
    const baseValue = getInputValueByID('bValue');
    const hightValue = getInputValueByID('hValue');
    const TriangleArea= hightValue*baseValue;
    SetTextElementValueById('Calculate_Values1',TriangleArea);

}
)

//Rectangle_Calculate_Button

document.getElementById('Rectangle_Calculate_Button').addEventListener
('click',function()

{
    const WValue = getInputValueByID('wvalue');
    const LValue = getInputValueByID('lvalue');
    const Rectangle= WValue*LValue;
    SetTextElementValueById('Calculate_Values4',Rectangle);

}
)

// =================================================================

document.getElementById('Parallelogram_Calculate_Button').addEventListener
('click',function()

{

const ParallelogramCalculation = 10*12;
const ParallelogramCalculateValue = ParallelogramCalculation;

SetTextElementValueById('Calculate_Values3',ParallelogramCalculateValue);

}
)

// Rhombus_Calculate_Button

document.getElementById('Rhombus_Calculate_Button').addEventListener
('click',function()

{

const RhombusCalculation = 16*8*0.5;
const RhombusCalculateValue = RhombusCalculation;

SetTextElementValueById('Calculate_Values5',RhombusCalculateValue);

}

)

//Pentagon
document.getElementById('Pentagon_Calculate_Button').addEventListener
('click',function()

{

const PentagonCalculation = 0.5*6*10;
const PentagonCalculateValue = PentagonCalculation;

SetTextElementValueById('Calculate_Values6',PentagonCalculateValue);

}

)


//Ellipse

document.getElementById('Ellipse_Calculate_Button').addEventListener
('click',function()

{

const EllipseCalculation = 3.1416*10*4;
const EllipseCalculateValue = EllipseCalculation;

SetTextElementValueById('Calculate_Values2',EllipseCalculateValue);

}

)
