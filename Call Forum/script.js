			// The Timer Logic & Code
            
            document.getElementById("name").innerText = "Aje Johns";
			document.getElementById("team").innerText = "Storage Support Team";

			document.getElementById("hold-button").addEventListener("click", function() {
      var content = document.getElementById("hold-content");
				content.classList.toggle("hidden");
			});

          
            document.getElementById("hold-button").addEventListener("click", function() {
                var content = document.getElementById("hold-content");
                content.classList.toggle("hidden");

                var timerElement = document.getElementById("timer");
                var seconds = 0;

                var timerInterval = setInterval(function() {
                seconds++;
                var minutes = Math.floor(seconds / 60);
                var remainingSeconds = seconds % 60;
                timerElement.innerText = "On Hold: " + minutes.toString().padStart(2, "0") + ":" + remainingSeconds.toString().padStart(2, "0");
                }, 1000);

                setTimeout(function() {
                clearInterval(timerInterval);
                timerElement.innerText = "";
                }, 300000); // 5 minutes (300000 milliseconds)
            });


//************** */ NATO Code Confirmation ********************

// Define the NATO phonetic alphabet codes
const natoCodes = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliet",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
    " ": " ",
    '@': " ",
    '.': " ", 
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "0": "zero",
  };
//Name
const inputField = document.getElementById("inputField");
const content = document.getElementById("content");
const toggleButton = document.getElementById("toggleButton");

// Event listener for the input field : Name
inputField.addEventListener("input", () => {
const text = inputField.value.toUpperCase();
let contentHTML = "";

for (let i = 0; i < text.length; i++) {
const character = text.charAt(i);
const code = natoCodes[character];
if (code) {
  if (character === " ") {
    contentHTML += `<div class="character space">&lt;SPACE&gt;</div>`;
  }else if (character === "@"){
    contentHTML += `<div class="character space">@</div>`;
  } else if (character === "."){
    contentHTML += `<div class="character space">Dot</div>`;
  } 
  else {
    contentHTML += `<div class="character">${character} - ${code}</div>`;
  }
}
}

content.innerHTML = contentHTML;
});

// Event listener for the name toggle button
toggleButton.addEventListener("click", () => {
content.classList.toggle("hidden");
toggleButton.textContent = content.classList.contains("hidden") ? "Show Content" : "Hide Content";
});


//Email
const EmailInputField = document.getElementById("EmailInputField");
const EmailContent = document.getElementById("EmailContent");
const EmailtoggleButton = document.getElementById("EmailToggleButton");

// Event listener for the input field : Email
EmailInputField.addEventListener("input", () => {
    const text = EmailInputField.value.toUpperCase();
    let contentHTML = "";
    
    for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i);
    const code = natoCodes[character];
    if (code) {
      if (character === " ") {
        contentHTML += `<div class="character space">&lt;SPACE&gt;</div>`;
      }else if (character === "@"){
        contentHTML += `<div class="character space">@</div>`;
      } else if (character === "."){
        contentHTML += `<div class="character space">Dot</div>`;
      } 
      else {
        contentHTML += `<div class="character">${character} - ${code}</div>`;
      }
    }
    }
    
    EmailContent.innerHTML = contentHTML;
    });
    
    // Event listener for the name toggle button
    EmailtoggleButton.addEventListener("click", () => {
    EmailContent.classList.toggle("hidden");
    EmailtoggleButton.textContent = content.classList.contains("hidden") ? "Show Content" : "Hide Content";
    });

//Asset Serial Number
const assetSerialNumberInputField = document.getElementById("assetSerialNumberInputField");
const assetSerialNumberContent = document.getElementById("assetSerialNumberContent");
const assetSerialNumberToggleButton = document.getElementById("assetSerialNumberToggleButton");

// Event listener for the input field : Email
assetSerialNumberInputField.addEventListener("input", () => {
    const text = assetSerialNumberInputField.value.toUpperCase();
    let contentHTML = "";
    
    for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i);
    const code = natoCodes[character];
    if (code) {
      if (character === " ") {
        contentHTML += `<div class="character space">&lt;SPACE&gt;</div>`;
      }else if (character === "@"){
        contentHTML += `<div class="character space">@</div>`;
      } else if (character === "."){
        contentHTML += `<div class="character space">Dot</div>`;
      } 
      else {
        contentHTML += `<div class="character">${character} - ${code}</div>`;
      }
    }
    }
    
    assetSerialNumberContent.innerHTML = contentHTML;
    });
    
    // Event listener for the name toggle button
    assetSerialNumberToggleButton.addEventListener("click", () => {
    assetSerialNumberContent.classList.toggle("hidden");
    EmailtoggleButton.textContent = content.classList.contains("hidden") ? "Show Content" : "Hide Content";
    });

// extracting information

const customerInformation = {
  'First name':'',
  'Last name':'',
  'Issue Description':'',
  'Case Type':'',
  'Phone Number':'',
  'Alternative Contact Number':'',
  'Alternative Contact Number Holders Name':'',
  'Email Address':'',
  'Asset Serial Number':'',
  'System Location':'',
  'Name of the Company':'',
  'Operating System':'',
  'Issue Start Date':'',
  'Case ID':'',
  'Summary':'',
  'Further Assistance':'',
}

const conslLogBtn = document.getElementById('consoleLog');
conslLogBtn.addEventListener('click' , ()=>{
  customerInformation['First name'] = 'Aje';
  console.log(customerInformation)
})