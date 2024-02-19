
// function bgcolor(event){

//     const back = event.target.classList;
//     back.remove("bg-[#F7F8F8]");
//     back.add("bg-[#1DD100]");
//     back.add("text-white");

    
//     const seat = document.getElementById("seat-left");
//     const seatLeft = seat.innerText;
//     const seatInt = parseInt(seatLeft);
//     const seatLeftCount = seatInt - 1;
//     seat.innerText=seatLeftCount;

//     if(seatLeftCount === 4){
//         alert("You can select more than 4 Seat");
//     }
//         const idid = event.target.innerText;
//     document.getElementById(idid).disabled = true;

// }

const seat = document.getElementById("A1");
seat.addEventListener("click", bcolor)

 function bcolor(){
     seat.classList.remove("bg-[#F7F8F8]");
     seat.classList.add("bg-[#1DD100]");
     seat.classList.add("text-white")
    //  seat left 
     const seatle = document.getElementById("seat-left");
     const seatleText = seatle.innerText;
     const seatleInit = parseInt(seatleText);
     const seatLeftCount = seatleInit - 1;
     seatle.innerText=seatLeftCount;
    // seat
    const seatpl = document.getElementById("seat-plus");
    const seatplText = seatpl.innerText;
    const seatplInit = parseInt(seatplText);
    const seatPlusCount = seatplInit + 1;
    seatpl.innerText=seatPlusCount;
    // apend child
    const ta1 = document.getElementById("ta1");
    ta1.classList.remove("hidden")
    // total price
    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextInt = parseInt(totalPriceText);
    const totalPriceCount = totalPriceTextInt + 550;
    totalPrice.innerText=totalPriceCount;
    // grand total
    const grandPrice = document.getElementById("grand-total");
    const grandPriceText = grandPrice.innerText;
    const grandPriceTextInt = parseInt(grandPriceText);
    const grandPriceCount = grandPriceTextInt + 550;
    grandPrice.innerText=grandPriceCount;

     console.log('hello world');
     seat.removeEventListener("click", bcolor)



 }