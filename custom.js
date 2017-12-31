
//alert("Nothing is Loaded....");
//window.addEventListener("load",bindEvents);
//function bindEvents(){
window.addEventListener("load",()=>{
document.querySelector("#greetBt").addEventListener("click", sayHello);
});

function sayHello() {
            var firstName = document.querySelector("#firstname").value;
            var lastName = document.querySelector("#lastname").value;
            document.querySelector("p").innerHTML = `<h2>${initCap(firstName) + initCap(lastName)}</h2>`;
        }
        const initCap = (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();