var deposit;
var name;
var pastDeposits = [];
var totalMoney = 0;

$(".newDeposit").click(function() {
    deposit = $('.accountDeposit').val();
    name = $(".accountName").val();
     $('.ledger').append("<p>" + name + "</p><p>" + "$" + deposit + "</p>");
     
    deposit = parseInt(deposit);
    
    pastDeposits.push(deposit);
    var numOfdeposits = pastDeposits.length;
    console.log(numOfdeposits);
    console.log(pastDeposits);
    $(".number").text("Number of Transactions: " + numOfdeposits);
    
    
     pastDeposits.forEach(function(d) {
         console.log(d); 
         
         
         totalMoney = totalMoney + d;
        //$("body").append("<img src=" + picture + ">");
        
    });

    console.log(totalMoney);
    
    
});