function doItC(){
    var PointsHw = document.getElementById("HwPP").value;
    var WeightHw = document.getElementById("HwWeight").value;
    var PointsQz = document.getElementById("QuizPP").value;
    var WeightQz = document.getElementById("QuizWeight").value;
    var PointsTT = document.getElementById("TestPP").value;
    var WeightTT = document.getElementById("TestWeight").value;
    var PointsMd = document.getElementById("MidPP").value;
    var WeightMd = document.getElementById("MidWeight").value;
    var WW = parseInt(WeightHw) + parseInt(WeightMd) + parseInt(WeightQz) + parseInt(WeightTT);
    var TotalHw = 0;
    var strToArrHw = document.getElementById("HwGrade").value;
    var ArrHw = strToArrHw.split(",");
    for(var a = 0; a < ArrHw.length; a++){
        TotalHw += parseInt(ArrHw[a]);
    }
    if(TotalHw > PointsHw){
        alert("Your homework data is invalid, please re-enter.")
    }
    else{
        var HwGrade = (TotalHw/PointsHw) * (WeightHw / WW);
        console.log(HwGrade);
        document.getElementById("HwTotal").innerHTML = (TotalHw/PointsHw) * 100 + "%";
        colorRows("HwTotal", (TotalHw/PointsHw) * 100);
    }





    var TotalQz = 0;
    var strToArrQz = document.getElementById("QuizGrade").value;
    var ArrQz = strToArrQz.split(",");
    for(var b = 0; b < ArrQz.length; b++){
        TotalQz += parseInt(ArrQz[b]);
    }
    if(TotalQz > PointsQz){
        alert("Your quiz data is invalid, please re-enter.")
    }
    else{
        var QzGrade = (TotalQz/PointsQz) * (WeightQz / WW);
        console.log(QzGrade);
        document.getElementById("QzTotal").innerHTML = (TotalQz/PointsQz) * 100 + "%";
        colorRows("QzTotal", (TotalQz/PointsQz) * 100);
    }





    var TotalTT = 0;
    var strToArrTT = document.getElementById("TestGrade").value;
    var ArrTT = strToArrTT.split(",");
    for(var c = 0; c < ArrTT.length; c++){
        TotalTT += parseInt(ArrTT[c]);
    }
    if(TotalTT > PointsTT){
        alert("Your test data is invalid, please re-enter.")
    }
    else{
        var TTGrade = (TotalTT/PointsTT) * (WeightTT / WW);
        console.log(TTGrade);
        document.getElementById("TTTotal").innerHTML = (TotalTT/PointsTT) * 100 + "%";
        colorRows("TTTotal", (TotalTT/PointsTT) * 100);
    }





    var TotalMd = 0;
    var strToArrMd = document.getElementById("MidGrade").value;
    var ArrMd = strToArrMd.split(",");
    for(var d = 0; d < ArrMd.length; d++){
        TotalMd += parseInt(ArrMd[d]);
    }
    if(TotalMd > PointsMd){
        alert("Your midterm data is invalid, please re-enter.")
    }
    else{
        var MdGrade = (TotalMd/PointsMd) * (WeightMd / WW);
        console.log(MdGrade);
        document.getElementById("MdTotal").innerHTML = (TotalMd/PointsMd) * 100 + "%";
        colorRows("MdTotal", (TotalMd/PointsMd) * 100);
    }



    console.log(WeightTT);
    console.log(WeightHw);
    console.log(WeightQz + WeightTT);
    console.log((WeightHw) + (WeightMd) + (WeightQz) + (WeightTT));

    var currentGrade = (HwGrade + QzGrade + TTGrade + MdGrade) * 100;
    _common = currentGrade;
    console.log(currentGrade);
    document.getElementById("CurrentGrade").innerHTML = "Your current grade is " + Math.round(currentGrade) + "%";
    document.getElementById("CurrentGrade1").innerHTML = Math.round(currentGrade) + "%";
    colorRows("CurrentGrade1", currentGrade);
}




function doItF(){
    var currentGrade = _common;
    var desiredGrade = document.getElementById("Desired").value;
    var finalWeight = document.getElementById("FinalWeight").value;
    console.log(currentGrade);
    console.log(desiredGrade);
    console.log(finalWeight);
    var percentFW = finalWeight / 100;
    var finalGrade = (desiredGrade - (1 - percentFW)*(currentGrade)) / percentFW;
    console.log(1 - percentFW);
    document.getElementById("FinalGradeNeeded").innerHTML = "The final grade needed to aquire your desired grade is " + Math.round(finalGrade) + "%";
    document.getElementById("FinalGradeNeeded1").innerHTML = Math.round(finalGrade) + "%";
}

function colorRows(row, grade) {
    if(grade >= 90){
        document.getElementById(row).style.background = "green";
    }
    if(grade <= 89.9 && grade >= 80){
        document.getElementById(row).style.background = "lightblue";
    }
    if(grade <= 79.9 && grade >= 70){
        document.getElementById(row).style.background = "yellow";
    }
    if(grade <= 69.9 && grade >= 60){
        document.getElementById(row).style.background = "orange";
    }
    if(grade <= 59.9){
        document.getElementById(row).style.background = "red";
    }
}