let num1 = 0
let num2 = 0;
let point1 = document.getElementById("point1");
let point2 = document.getElementById("point2");

let homeTeam = document.getElementById("home-team");
let guestTeam = document.getElementById("guest-team");


let homePlusOne = document.getElementById("one-home");
let homePlusTwo = document.getElementById("two-home");
let homePlusThree = document.getElementById("three-home");
let guestPlusOne = document.getElementById("one-guest");
let guestPlusTwo = document.getElementById("two-guest");
let guestPlusThree = document.getElementById("three-guest");

let resetBtn = document.getElementById("reset-btn");


homePlusOne.addEventListener("click", () => {
    num1 += 1;
    point1.textContent = num1;
    
    if(num1 > num2){
        homeTeam.style.color = "green";
        guestTeam.style.color = "white";
    } else if (num2 > num1){
        guestTeam.style.color = "green";
        homeTeam.style.color = "white";
    } else if (num1 == num2){
        homeTeam.style.color = "white";
        guestTeam.style.color = "white";
    }
})

homePlusTwo.addEventListener("click", () => {
   num1 += 2;
   point1.textContent = num1;  
   
       if(num1 > num2){
        homeTeam.style.color = "green";
        guestTeam.style.color = "white";
    } else if (num2 > num1){
        guestTeam.style.color = "green";
        homeTeam.style.color = "white";
    } else if (num1 == num2){
        homeTeam.style.color = "white";
        guestTeam.style.color = "white";
    }
})

homePlusThree.addEventListener("click", () => {
    num1 += 3;
    point1.textContent = num1;
    
        if(num1 > num2){
        homeTeam.style.color = "green";
        guestTeam.style.color = "white";
    } else if (num2 > num1){
        guestTeam.style.color = "green";
        homeTeam.style.color = "white";
    } else if (num1 == num2){
        homeTeam.style.color = "white";
        guestTeam.style.color = "white";
    }
})

guestPlusOne.addEventListener("click", () => {
    num2 += 1;
    point2.textContent = num2;
    
        if(num1 > num2){
        homeTeam.style.color = "green";
        guestTeam.style.color = "white";
    } else if (num2 > num1){
        guestTeam.style.color = "green";
        homeTeam.style.color = "white";
    } else if (num1 == num2){
        homeTeam.style.color = "white";
        guestTeam.style.color = "white";
    }
})

guestPlusTwo.addEventListener("click", () => {
   num2 += 2;
   point2.textContent = num2;  
   
       if(num1 > num2){
        homeTeam.style.color = "green";
        guestTeam.style.color = "white";
    } else if (num2 > num1){
        guestTeam.style.color = "green";
        homeTeam.style.color = "white";
    } else if (num1 == num2){
        homeTeam.style.color = "white";
        guestTeam.style.color = "white";
    }
})

guestPlusThree.addEventListener("click", () => {
    num2 += 3;
    point2.textContent = num2;
    
        if(num1 > num2){
        homeTeam.style.color = "green";
        guestTeam.style.color = "white";
    } else if (num2 > num1){
        guestTeam.style.color = "green";
        homeTeam.style.color = "white";
    } else if (num1 == num2){
        homeTeam.style.color = "white";
        guestTeam.style.color = "white";
    }
})

resetBtn.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    point1.textContent = num1;
    point2.textContent = num2;
    homeTeam.style.color = "white";
    guestTeam.style.color = "white";
})