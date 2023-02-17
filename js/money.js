
document.getElementById('btn-calculate').addEventListener('click',function(){
 const foodField=document.getElementById('food-field').value;
 const foodValueInt=parseInt(foodField);

 const rentValue=document.getElementById('rent-field').value;
 const rentValueInt=parseInt(rentValue);
 

 const clothValue=document.getElementById('cloth-field').value;
 const clothValueInt=parseInt(clothValue);
 
 const total=foodValueInt+rentValueInt+clothValueInt;

  const totalExValue=document.getElementById('total-Ex');
  const newTotal= totalExValue.innerText;
  totalExValue.innerText=total;

  const incomeField=document.getElementById('income-field').value;
  const incomeValueInt=parseInt(incomeField);
  

   const mainBalance=document.getElementById('balance');
   const newb=mainBalance.innerText;
   const balanceTotal=incomeValueInt-total;
   mainBalance.innerText=balanceTotal;
   

  
  
 
})
 
document.getElementById('save-btn').addEventListener('click',function(){
    const saveValue=document.getElementById('save-field').value;
    const saveValueInt=parseInt(saveValue);
    const mainBalance=document.getElementById('balance');
   const newbalancestring=mainBalance.innerText;
   const newbalance=parseInt(newbalancestring);

   
     
   

    const saving=(saveValueInt/100)*newbalance;
    const totalrem=(newbalance-saving);
    const savingValue=document.getElementById('saving-m');
    const newsavestring=savingValue.innerText;
    const newsave=parseInt(newsavestring);
    
    savingValue.innerText=saving;

    const remainingValue=document.getElementById('remain-b');
    const newremainstring=remainingValue.innerText;
    const newremain=parseInt(newbalancestring);

    remainingValue.innerText=totalrem;


    
    

})