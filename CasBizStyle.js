
/*--------------------------------Pricing--Essential Business Security----------------------------------- */

function changuser() {
    var baseprice = 36.99;
    var User = document.getElementById("user").value;
    var Year = document.getElementById("year").value;
    
    var totaluserprice = User * baseprice ;
    var total = (totaluserprice*Year).toFixed(2);
   
    
    document.getElementById("udateprice").innerHTML = total;
    
    document.getElementById("showyear").innerHTML = Year;

}
/*--------------------------------Premium Business Security----------------------------------- */
function changuser2() {
    var baseprice = 36.99;

    var User2 = document.getElementById("user2").value;
    var Year2 = document.getElementById("year2").value;
    
    var totaluserprice = User2 * baseprice ;
    var total2 = (totaluserprice*Year2).toFixed(2);
   
    
    document.getElementById("udateprice2").innerHTML = total2;
    
    document.getElementById("showyear2").innerHTML = Year2;

}
/*--------------------------------Ultimate Business Security----------------------------------- */
function changuser3() {

    var baseprice = 36.99;
    var User3 = document.getElementById("user3").value;
    var Year3 = document.getElementById("year3").value;
    
    var totaluserprice = User3 * baseprice ;
    var total3 = (totaluserprice*Year3).toFixed(2);
   
    
    document.getElementById("udateprice3").innerHTML = total3;
    
    document.getElementById("showyear3").innerHTML = Year3;

}