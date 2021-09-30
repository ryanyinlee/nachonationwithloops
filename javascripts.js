    
function starvingOrphans() {
        var orphansFed = parseInt(prompt("How many plates would you like to send?"));
        if  (orphansFed < 0)
        {
            document.getElementById("orphansFed").innerHTML =
            "You have taken food from orphans. You monster";
        }
        else if (orphansFed == 0)
        {
            document.getElementById("orphansFed").innerHTML =
            "Really? No food at all? For the orphans?";
        }    

        else if (orphansFed%1 != 0) {
            document.getElementById("orphansFed").innerHTML =
            "Please enter a numerical value.";
                } /* thank stackexchange for this one */

        else if (orphansFed != null) {
                    document.getElementById("orphansFed").innerHTML =
                    "You have fed " + orphansFed + " orphans.";
             }
        
    }
    
    function backgroundYellow(){
        var html = 'Welcome to team YellowCorn!';
        document.getElementById('background').innerHTML = html;
        document.getElementById('background').style.backgroundColor = "yellow";
    }

    function backgroundBlue(){
        var html = 'Welcome to team BlueCorn!';
        document.getElementById('background').innerHTML = html;
        document.getElementById('background').style.backgroundColor = "blue";
    }

    function backgroundWhite(){
        var html = 'Welcome to team WhiteCorn!';
        document.getElementById('background').innerHTML = html;
        document.getElementById('background').style.backgroundColor = "beige";
    }

   /* document.getElementById('blueCorn').addEventListener('click', backgroundBlue);
    document.getElementById('yellowCorn').addEventListener('click', backgroundYellow);
    document.getElementById('whiteCorn').addEventListener('click', backgroundWhite); */

    function metric() {
        var plates = document.getElementById('plates').value;

        var tons = plates * 0.00033433102;

        var html1 = 'You have had ' + plates + '  servings?!';

        var html2 = 'That is approximately ' + tons + ' tons of nachos.';

        document.getElementById('result').innerHTML = html1;
        document.getElementById('result1').innerHTML = html2;

    }

    document.getElementById('platesSubmit').addEventListener('click', metric);

   

function dipslay() {

    var guacrate = document.getElementById('diprate').value;

    if (guacrate > 5) {
        document.getElementById ('display1').innerHTML ='Please enter a number from 0 to 5.';
    }
    else if (guacrate < 0) {
        document.getElementById ('display1').innerHTML ='Please enter a number from 0 to 5.';
    }
    else {
        let num = 1;
        while (guacrate > 0) {
                       
            document.getElementById ('display' + num).innerHTML ='<img src="https://raw.githubusercontent.com/ryanyinlee/nachonationwithloops/main/pexels-photo-8479389.jpeg" width="128" height="136"/>';
            document.getElementById ('numeric' + num).innerHTML =' ' + num + ' ';           
            ++num;
            --guacrate;
        }

    }


 

        


           
       
    }