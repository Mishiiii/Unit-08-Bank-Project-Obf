var deposit;
var name;
var pastDeposits = [];

$(".newDeposit").click(function() {
    var totalMoney = 0;
    deposit = $('.accountDeposit').val();
    name = $(".accountName").val();
     $('.ledger').append("<p>" + name + "</p><p>" + "$" + deposit + "</p>");
     
    deposit = parseInt(deposit);
    
    pastDeposits.push(deposit);
    var numOfdeposits = pastDeposits.length;
    console.log(numOfdeposits);
    console.log(pastDeposits);
    $(".number").text("Number of Transactions: " + numOfdeposits);
    
    
     pastDeposits.forEach(function(price) {
         console.log(price); 
         
         totalMoney = totalMoney + price;
         $(".total").text( "Total Amount Deposited: " + totalMoney);
        //$(".total").append("<img src=" + picture + ">");
        
    });

    console.log(totalMoney);
       
});



$(".update").click(function() {
    alert("Your last deposit amount was" + " " + deposit + " " + "by" + " " + name);
});