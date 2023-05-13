function homestep2() {

    document.getElementById("home-Step1").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("home-step2").style.visibility = "visible";

}

function step1() {

    document.getElementById("home").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("step1").style.visibility = "visible";

}

function placetheodolite() {
    document.getElementById("step1-png1").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "visible";
    document.getElementById("arr2").style.visibility = "visible";
    document.getElementById("trans2").style.visibility = "visible";
    document.getElementById("step1-png2").style.visibility = "hidden";
    document.getElementById("step1-png5").style.visibility = "visible";
    // document.getElementById("next1").style.visibility = "visible";


    // myTimeout = setTimeout(myGreeting, 2500);

}


function placetheodolite1() {
    document.getElementById("step1-png5").style.visibility = "hidden";
    document.getElementById("arr2").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "visible";
    document.getElementById("arr3").style.visibility = "visible";
    document.getElementById("trans3").style.visibility = "visible";
    document.getElementById("step1-png3").style.visibility = "hidden";
    document.getElementById("step1-png6").style.visibility = "visible";
    // document.getElementById("next1").style.visibility = "visible";


    // myTimeout = setTimeout(myGreeting, 2500);

}

function placetheodolite2() {
    document.getElementById("step1-png6").style.visibility = "hidden";
    document.getElementById("arr3").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "visible";
    // document.getElementById("arr3").style.visibility = "visible";
    // document.getElementById("trans3").style.visibility = "visible";
    document.getElementById("step1-png4").style.visibility = "hidden";
    document.getElementById("step1-png7").style.visibility = "visible";
    // document.getElementById("next1").style.visibility = "visible";


    // myTimeout = setTimeout(myGreeting, 2500);

}



// step2

function step2() {
    document.getElementById("step2").style.visibility = "visible";
    document.getElementById("step1").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("arr3").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("step1-png7").style.visibility = "hidden";
    document.getElementById("step1-png4").style.visibility = "hidden";
    document.getElementById("step2-png1").style.visibility = "visible";
    document.getElementById("step2-png2").style.visibility = "visible";
    document.getElementById("2trans1").style.visibility = "visible";
    document.getElementById("2arr1").style.visibility = "visible";
}

function ammeter() {
    document.getElementById("step2-png1").style.visibility = "hidden";
    document.getElementById("step2-png2").style.visibility = "hidden";
    document.getElementById("2arr1").style.visibility = "hidden";
    document.getElementById("2trans1").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "visible";
    document.getElementById("step2-png3").style.visibility = "visible";

}


// Step3

function step3() {
    document.getElementById("step3").style.visibility = "visible";
    document.getElementById("step2").style.visibility = "hidden";
    document.getElementById("step2-png3").style.visibility = "hidden";
    document.getElementById("step3-png1").style.visibility = "visible";
    document.getElementById("step3-png2").style.visibility = "visible";
    document.getElementById("next2").style.visibility = "hidden";
    document.getElementById("3trans1").style.visibility = "visible";
    document.getElementById("3arr1").style.visibility = "visible";
    // document.getElementById("step2").style.visibility = "hidden";

}


function poten(){
    document.getElementById("step3-png3").style.visibility = "visible";
    document.getElementById("step3-png1").style.visibility = "hidden";
    document.getElementById("step3-png2").style.visibility = "hidden";
    // document.getElementById("step3-png1").style.visibility = "visible";
    // document.getElementById("step3-png2").style.visibility = "visible";
    document.getElementById("next3").style.visibility = "visible";
    document.getElementById("3trans1").style.visibility = "hidden";
    document.getElementById("3arr1").style.visibility = "hidden";

}
  

// Step5

function step4() {

    document.getElementById("Step4").style.visibility = "visible";
    document.getElementById("step3").style.visibility = "hidden";
    document.getElementById("next3").style.visibility = "hidden";
    document.getElementById("step3-png3").style.visibility = "hidden";
    document.getElementById("step4-png1").style.visibility = "visible";
    document.getElementById("step4-png2").style.visibility = "visible";
    document.getElementById("4trans1").style.visibility = "visible";
    document.getElementById("4arr1").style.visibility = "visible";
}

function voltmeter(){
    document.getElementById("step4-png3").style.visibility = "visible";
    document.getElementById("step4-png1").style.visibility = "hidden";
    document.getElementById("step4-png2").style.visibility = "hidden";
    // document.getElementById("step3-png1").style.visibility = "visible";
    // document.getElementById("step3-png2").style.visibility = "visible";
    document.getElementById("next4").style.visibility = "visible";
    document.getElementById("4trans1").style.visibility = "hidden";
    document.getElementById("4arr1").style.visibility = "hidden";

}



// Step 5


function step5() {

    document.getElementById("Step5").style.visibility = "visible";
    document.getElementById("Step4").style.visibility = "hidden";
    document.getElementById("next4").style.visibility = "hidden";
    document.getElementById("step4-png3").style.visibility = "hidden";
    document.getElementById("step5-png1").style.visibility = "visible";
    // document.getElementById("step4-png2").style.visibility = "visible";
    document.getElementById("5trans1").style.visibility = "visible";
    document.getElementById("5arr1").style.visibility = "visible";
}
  

function flow_cur(){
    document.getElementById("step5-png1").style.visibility = "hidden";
    document.getElementById("step4-png3").style.visibility = "hidden";
    document.getElementById("step5-png2").style.visibility = "visible";
    document.getElementById("5trans1").style.visibility = "hidden";
    document.getElementById("5arr1").style.visibility =   "hidden";
    document.getElementById("next5").style.visibility = "visible";

}


// Step 6

function step6(){
    document.getElementById("Step6").style.visibility = "visible";
    document.getElementById("Step5").style.visibility = "hidden";
    document.getElementById("step5-png2").style.visibility = "hidden";
    document.getElementById("next5").style.visibility = "hidden";
    document.getElementById("E_table").style.visibility = "visible";
}


function readingsfill(){
    document.getElementById("f_table").style.visibility = "visible";
    document.getElementById("check").style.visibility = "visible";
    document.getElementById("E_table").style.visibility = "hidden";
    document.getElementById("fill").style.visibility = "hidden";
}

function calc(){
    document.getElementById("r_table").style.visibility = "visible";
    document.getElementById("next7").style.visibility = "visible";
    document.getElementById("f_table").style.visibility = "hidden";
    document.getElementById("check").style.visibility = "hidden";

}

// Step 7

function step7(){
    document.getElementById("Step7").style.visibility = "visible";
    document.getElementById("Step6").style.visibility = "hidden";
    document.getElementById("r_table").style.visibility = "hidden";
    document.getElementById("next5").style.visibility = "hidden";
    document.getElementById("step6-png1").style.visibility = "visible";
}
