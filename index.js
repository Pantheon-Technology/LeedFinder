const inputBtn = document.getElementById("input-btn");
let myLeads = ["https://www.pantheontechnology.co.uk/"];
const inputEl = document.getElementById("input-el");
const saved = document.getElementById("saved-el");
let msg = "";
localStorage.setItem("leads", JSON.stringify(myLeads));


function onStart(){

    myLeads = localStorage.getItem("leads");
    myLeads = JSON.parse(myLeads);

     for (i = 0; i < myLeads.length; i++){

         msg += 
          `<li><a target='_blank' href="${myLeads[i]}">${myLeads[i]}</a></li>`;
         saved.innerHTML = msg;
     }
}
onStart();

inputBtn.addEventListener("click", function(){

    renderLeads();

})

function renderLeads(){

    let userInput = inputEl.value;
    myLeads.push(userInput);
    myLeads = JSON.stringify(myLeads);
    myLeads = JSON.parse(myLeads);
    inputEl.value = "";
    msg = "";

    for (i = 0; i < myLeads.length; i++){

         msg += 
         `<li>
         <a target='_blank' href="${myLeads[i]}">${myLeads[i]}
            </a>
         </li>`;
         saved.innerHTML = msg;
    }
}


function clearAllLeads(){
    localStorage.clear("leads");
    saved.innerHTML = localStorage.getItem("leads");
    let myLeads = [];
}


//LOCAL STORAGE PRACTICE

// localStorage.setItem("Practice", "Hello!");
// console.log(localStorage);
// localStorage.clear();

// localStorage.setItem("myLeads", "test");
// console.log(localStorage.getItem("myLeads"));

//END

// let boxBtn = document.getElementById("box-el");
// boxBtn.addEventListener("click", function(){
//     console.log("I said don't press me!");
// })

// //Practice
// const email = "Myles.hoult@gmail.com";
// const reciever = "JeffBezos@Amazon.com";

// const EmailMsg = `Hey ${reciever} can I have your money? Sincerely ${email}`;
// console.log(EmailMsg);