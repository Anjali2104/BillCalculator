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
  // get bill from user input & convert it into a number
    const bill=Number(billInputDiv.value)

  // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercentage=Number(tipInputDiv.value)/100

  // get the total tip amount
    const tipTotal=bill*tipPercentage

  // calculate the total (tipTotal + bill)
    const totalbill=bill+tipTotal
  // calculate the per person total (total divided by number of people)
    const perPersonTotalAmount=totalbill/numberOfPeople
  // update the perPersonTotal on DOM & show it to user
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
      alert('You cannot have less than one person')
        return
     }

    // decrement the amount
      numberOfPeople-=1

    // update the DOM with the new number of people
      numberOfPeopleDiv.innerText=numberOfPeople

    // calculate the bill based on the new number of people
      calculateBill()
 }
