
document.getElementById("blogButton").onclick = function () {
    location.href = "4QuestionAnswer.html";
};




// function display_alert()
//  {
//  alert("Type The Values");
//  }





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

   
       if(isNaN(baseValue)||isNaN(hightValue))
       {
             alert("Please Give Valid Input");
             return;
       }
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

    if(isNaN(WValue)||isNaN(LValue))
    {
          alert("Please Give Valid Input");
          return;
    }

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


// set Random color Bg
function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor(ids) {
    ids.forEach(function(id) {
      var element = document.getElementById(id);
      element.addEventListener("mouseover", function() {
        var randomColor = generateRandomColor();
        element.style.backgroundColor = randomColor;
      });
    });
  }
  setRandomColor(["c1", "c2", "c3","c4", "c5", "c6"]);



