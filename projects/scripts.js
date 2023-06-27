/* These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID  'billTotalInput' = User input for bill total
#2 ID  'tipInput' = User input for tip
#3 ID  'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID  'perPersonTotal' = Total dollar value owed per person
*/
const billInputDiv= document.getElementById('billTotalInput')
const tipInputDiv= document.getElementById('tipInput')
const  numberOfPeopleDiv=document.getElementById('numberOfPeople')
const perPersonTotalDiv=document.getElementById('perPersonTotal')
 // Get number of people from number of people div
 let numberOfPeople=Number(numberOfPeopleDiv.innerText)


 const calculateBill=()=>{
    const bill=Number(billInputDiv.value)
    const tipPercentage=Number(tipInputDiv.value)/100
    const tipTotal=bill*tipPercentage
    const totalbill=bill+tipTotal
    const perPersonTotalAmount=totalbill/numberOfPeople
    perPersonTotalDiv.innerText=`$${perPersonTotalAmount.toFixed(2)}`
 }

 // ** Splits the bill between more people **
 const increasePeople=()=>{
     // increment the amount
      numberOfPeople +=1
  
     // update the DOM with the new number of people
     numberOfPeopleDiv.innerText=numberOfPeople

    // calculate the bill based on the new number of people
     calculateBill()
 }

 // ** Splits the bill between fewer people **
  
 const decreasePeople=()=>{
     // guard clause
     // if amount is 1 or less simply return
     // (a.k.a you can't decrease the number of people to 0 or negative!)
   
     if(numberOfPeople<=1){
        return
     }

    // decrement the amount
      numberOfPeople-=1

    // update the DOM with the new number of people
      numberOfPeopleDiv.innerText=numberOfPeople

    // calculate the bill based on the new number of people
      calculateBill()
 }