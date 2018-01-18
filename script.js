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
        if((TotalHw/PointsHw) * 100 >= 90){
            document.getElementById("HwTotal").style.background = "green";
        }
        if((TotalHw/PointsHw) * 100 <= 89.9 && (TotalHw/PointsHw) * 100 >= 80){
            document.getElementById("HwTotal").style.background = "lightblue";
        }
        if((TotalHw/PointsHw) * 100 <= 79.9 && (TotalHw/PointsHw) * 100 >= 70){
            document.getElementById("HwTotal").style.background = "yellow";
        }
        if((TotalHw/PointsHw) * 100 <= 69.9 && (TotalHw/PointsHw) * 100 >= 60){
            document.getElementById("HwTotal").style.background = "orange";
        }
        if((TotalHw/PointsHw) * 100 <= 59.9){
            document.getElementById("HwTotal").style.background = "red";
        }
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
        if((TotalQz/PointsQz) * 100 >= 90){
            document.getElementById("QzTotal").style.background = "green";
        }
        if((TotalQz/PointsQz) * 100 <= 89.9 && (TotalQz/PointsQz) * 100 >= 80){
            document.getElementById("QzTotal").style.background = "lightblue";
        }
        if((TotalQz/PointsQz) * 100 <= 79.9 && (TotalQz/PointsQz) * 100 >= 70){
            document.getElementById("QzTotal").style.background = "yellow";
        }
        if((TotalQz/PointsQz) * 100 <= 69.9 && (TotalQz/PointsQz) * 100 >= 60){
            document.getElementById("QzTotal").style.background = "orange";
        }
        if((TotalQz/PointsQz) * 100 <= 59.9){
            document.getElementById("QzTotal").style.background = "red";
        }
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
        if((TotalTT/PointsTT) * 100 >= 90){
            document.getElementById("TTTotal").style.background = "green";
        }
        if((TotalTT/PointsTT) * 100 <= 89.9 && (TotalTT/PointsTT) * 100 >= 80){
            document.getElementById("TTTotal").style.background = "lightblue";
        }
        if((TotalTT/PointsTT) * 100 <= 79.9 && (TotalTT/PointsTT) * 100 >= 70){
            document.getElementById("TTTotal").style.background = "yellow";
        }
        if((TotalTT/PointsTT) * 100 <= 69.9 && (TotalTT/PointsTT) * 100 >= 60){
            document.getElementById("TTTotal").style.background = "orange";
        }
        if((TotalTT/PointsTT) * 100 <= 59.9){
            document.getElementById("TTTotal").style.background = "red";
        }
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
        if((TotalMd/PointsMd) * 100){
            document.getElementById("MdTotal").style.background = "green";
        }
        if((TotalMd/PointsMd) * 100 <= 89.9 && (TotalMd/PointsMd) * 100 >= 80){
            document.getElementById("MdTotal").style.background = "lightblue";
        }
        if((TotalMd/PointsMd) * 100 <= 79.9 && (TotalMd/PointsMd) * 100 >= 70){
            document.getElementById("MdTotal").style.background = "yellow";
        }
        if((TotalMd/PointsMd) * 100 <= 69.9 && (TotalMd/PointsMd) * 100 >= 60){
            document.getElementById("MdTotal").style.background = "orange";
        }
        if((TotalMd/PointsMd) * 100 <= 59.9){
            document.getElementById("MdTotal").style.background = "red";
        }
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
    if(currentGrade >= 90){
        document.getElementById("CurrentGrade1").style.background = "green";
    }
    if(currentGrade <= 89.9 && currentGrade >= 80){
        document.getElementById("CurrentGrade1").style.background = "lightblue";
    }
    if(currentGrade <= 79.9 && currentGrade >= 70){
        document.getElementById("CurrentGrade1").style.background = "yellow";
    }
    if(currentGrade <= 69.9 && currentGrade >= 60){
        document.getElementById("CurrentGrade1").style.background = "orange";
    }
    if(currentGrade <= 59.9){
        document.getElementById("CurrentGrade1").style.background = "red";
    }
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