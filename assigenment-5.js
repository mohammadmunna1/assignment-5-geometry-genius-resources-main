
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
}

// getting values using the function

document.getElementById('Triangle_Calculate_Button').addEventListener
('click',function()

{
    const baseValue = getInputValueByID('bValue');
    const hightValue = getInputValueByID('hValue');
    const TriangleArea= hightValue*baseValue;
    const TriangleAreaValue = TriangleArea.value;


    SetTextElementValueById('Calculate_Values1',TriangleAreaValue);


}
)

// =================================================================

document.getElementById('Parallelogram_Calculate_Button').addEventListener
('click',function()

{

const ParallelogramCalculation = 10*12;
const ParallelogramCalculateValue = ParallelogramCalculate;

SetTextElementValueById('Calculate_Values3',ParallelogramCalculateValue);


}

)
