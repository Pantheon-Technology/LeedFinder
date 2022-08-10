const inputBtn = document.getElementById("input-btn");
let myLeads = ["https://www.pantheontechnology.co.uk/"];
const inputEl = document.getElementById("input-el");
const saved = document.getElementById("saved-el");
const clearBtn = document.getElementById("clear-btn");
const saveTabBtn = document.getElementById("saveTab-btn");
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
    let userInput = inputEl.value;
    myLeads.push(userInput);
    myLeads = JSON.stringify(myLeads);
    myLeads = JSON.parse(myLeads);
    inputEl.value = "";
    renderLeads();

})

function renderLeads(leads){
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


clearBtn.addEventListener("click", function(){
    localStorage.clear("leads");
    saved.innerHTML = localStorage.getItem("leads");
    let myLeads = [];
})
saveTabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let url = tabs[0].url;
        myLeads.push(url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads();
    })
    
})

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

// //              parameters
// function add(num1, num2){
//     return num1 + num2;
// }
// //              arguements
// console.log(add(90,40));
// //                  Parameters
// function greetings($name, $message){
//     return $name + $message;
// }
// //                      arguements
// console.log(greetings("Myles", " is learning to use JS"));

// function getArrayItem(itemNum){
// return myLeads[itemNum]
// }
// console.log(getArrayItem(0))