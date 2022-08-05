const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const saved = document.getElementById("saved-el");
let msg = "";

inputBtn.addEventListener("click", function(){

    let userInput = inputEl.value;
    myLeads.push(userInput);
    inputEl.value = "";
    renderLeads();
})

function renderLeads(){
    msg = "";

    for (i = 0; i < myLeads.length; i++){

         msg += 
         `<li>
         <a target='_blank' href="${myLeads[i]}">${myLeads[i]}
            </a>
         </li>`;
         saved.innerHTML = msg;

        // //DOES THE SAME...
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        //  saved.append(li);
    }
}


// let boxBtn = document.getElementById("box-el");
// boxBtn.addEventListener("click", function(){
//     console.log("I said don't press me!");
// })

//Practice
const email = "Myles.hoult@gmail.com";
const reciever = "JeffBezos@Amazon.com";

const EmailMsg = `Hey ${reciever} can I have your money? Sincerely ${email}`;
console.log(EmailMsg);