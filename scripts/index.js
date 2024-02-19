
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
    




          if(seatplInit === 3){
            
            seat2.removeEventListener("click", bcolora)
            seat3.removeEventListener("click", bcolorb)
            seat4.removeEventListener("click", bcolorc)
            seat5.removeEventListener("click", bcolord)
            seat6.removeEventListener("click", bcolore)
            seat7.removeEventListener("click", bcolorf)
            seat8.removeEventListener("click", bcolorg)
            
    }
    
    // const one = document.getElementById("apply")
    
    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;


     seat.removeEventListener("click", bcolor)
    
    
    

 }




//  two
const seat2 = document.getElementById("A2");
seat2.addEventListener("click", bcolora)

 function bcolora(){
     seat2.classList.remove("bg-[#F7F8F8]");
     seat2.classList.add("bg-[#1DD100]");
     seat2.classList.add("text-white")
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
    const ta1 = document.getElementById("ta2");
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

     
          if(seatplInit === 3){
            seat.removeEventListener("click", bcolor)
            
            seat3.removeEventListener("click", bcolorb)
            seat4.removeEventListener("click", bcolorc)
            seat5.removeEventListener("click", bcolord)
            seat6.removeEventListener("click", bcolore)
            seat7.removeEventListener("click", bcolorf)
            seat8.removeEventListener("click", bcolorg)
            
    }

    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;

     seat2.removeEventListener("click", bcolora)



 }



//  three

const seat3 = document.getElementById("A3");
seat3.addEventListener("click", bcolorb)

 function bcolorb(){
     seat3.classList.remove("bg-[#F7F8F8]");
     seat3.classList.add("bg-[#1DD100]");
     seat3.classList.add("text-white")
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
    const ta1 = document.getElementById("ta3");
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

     
          if(seatplInit === 3){
            seat.removeEventListener("click", bcolor)
            seat2.removeEventListener("click", bcolora)
            
            seat4.removeEventListener("click", bcolorc)
            seat5.removeEventListener("click", bcolord)
            seat6.removeEventListener("click", bcolore)
            seat7.removeEventListener("click", bcolorf)
            seat8.removeEventListener("click", bcolorg)
            
    }

    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;

     seat3.removeEventListener("click", bcolorb)

     

 }

//  four

const seat4 = document.getElementById("A4");
seat4.addEventListener("click", bcolorc)

 function bcolorc(){
     seat4.classList.remove("bg-[#F7F8F8]");
     seat4.classList.add("bg-[#1DD100]");
     seat4.classList.add("text-white")
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
    const ta1 = document.getElementById("ta4");
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

     
          if(seatplInit === 3){
            seat.removeEventListener("click", bcolor)
            seat2.removeEventListener("click", bcolora)
            seat3.removeEventListener("click", bcolorb)
            
            seat5.removeEventListener("click", bcolord)
            seat6.removeEventListener("click", bcolore)
            seat7.removeEventListener("click", bcolorf)
            seat8.removeEventListener("click", bcolorg)
            
    }

    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;

     seat4.removeEventListener("click", bcolorc)

     

 }

//  five

const seat5 = document.getElementById("B1");
seat5.addEventListener("click", bcolord)

 function bcolord(){
     seat5.classList.remove("bg-[#F7F8F8]");
     seat5.classList.add("bg-[#1DD100]");
     seat5.classList.add("text-white")
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
    const ta1 = document.getElementById("tb1");
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

     
          if(seatplInit === 3){
            seat.removeEventListener("click", bcolor)
            seat2.removeEventListener("click", bcolora)
            seat3.removeEventListener("click", bcolorb)
            seat4.removeEventListener("click", bcolorc)
            
            seat6.removeEventListener("click", bcolore)
            seat7.removeEventListener("click", bcolorf)
            seat8.removeEventListener("click", bcolorg)
            
    }


    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;

     seat5.removeEventListener("click", bcolord)

     

 }

//  six

const seat6 = document.getElementById("B2");
seat6.addEventListener("click", bcolore)

 function bcolore(){
     seat6.classList.remove("bg-[#F7F8F8]");
     seat6.classList.add("bg-[#1DD100]");
     seat6.classList.add("text-white")
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
    const ta1 = document.getElementById("tb2");
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

     
          if(seatplInit === 3){
            seat.removeEventListener("click", bcolor)
            seat2.removeEventListener("click", bcolora)
            seat3.removeEventListener("click", bcolorb)
            seat4.removeEventListener("click", bcolorc)
            seat5.removeEventListener("click", bcolord)
            
            seat7.removeEventListener("click", bcolorf)
            seat8.removeEventListener("click", bcolorg)
           
    }


    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;

     seat6.removeEventListener("click", bcolore)

     

 }

//  seven

const seat7 = document.getElementById("B3");
seat7.addEventListener("click", bcolorf)

 function bcolorf(){
     seat7.classList.remove("bg-[#F7F8F8]");
     seat7.classList.add("bg-[#1DD100]");
     seat7.classList.add("text-white")
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
    const ta1 = document.getElementById("tb3");
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

     
     if(seatplInit === 3){
        seat.removeEventListener("click", bcolor)
        seat2.removeEventListener("click", bcolora)
        seat3.removeEventListener("click", bcolorb)
        seat4.removeEventListener("click", bcolorc)
        seat5.removeEventListener("click", bcolord)
        seat6.removeEventListener("click", bcolore)
        
        seat8.removeEventListener("click", bcolorg)
        
    }


    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;

     seat7.removeEventListener("click", bcolorf)

     

 }

//  eight

 const seat8 = document.getElementById("B4");
 seat8.addEventListener("click", bcolorg)

  function bcolorg(){
      seat8.classList.remove("bg-[#F7F8F8]");
      seat8.classList.add("bg-[#1DD100]");
      seat8.classList.add("text-white")
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
     const ta8 = document.getElementById("tb4");
     ta8.classList.remove("hidden")
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
     

      

      if(seatplInit === 3){
        seat.removeEventListener("click", bcolor)
        seat2.removeEventListener("click", bcolora)
        seat3.removeEventListener("click", bcolorb)
        seat4.removeEventListener("click", bcolorc)
        seat5.removeEventListener("click", bcolord)
        seat6.removeEventListener("click", bcolore)
        seat7.removeEventListener("click", bcolorf)
        
        
    }


    function kilo(){
        if(document.getElementById("input").value === "NEW15"){
            grandPrice.innerText = grandPriceCount * 0.85 ;
            document.getElementById("lab").classList.add("hidden");
        }
        else if(document.getElementById("input").value === "Couple 20"){
            grandPrice.innerText = grandPriceCount * 0.80 ;
            document.getElementById("lab").classList.add("hidden");
        }
    }
    document.getElementById("apply").onclick = kilo;

      seat8.removeEventListener("click", bcolorg)
      


        

  }

  console.log(grandPrice)

