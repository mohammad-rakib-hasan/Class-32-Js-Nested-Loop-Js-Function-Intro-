let Number =[
    [100, 11, 26, 93, 40, 31],
    [76, 45, 24, 98, 70, 19],
    [29, 38, 59, 68, 88, 10],
    [55, 65, 85, 95, 15, 25]
];
 
for (R =0; R<=3; R++){
 if(R == 0){
    console.log("SectionA");
 }
 else if(R ==1){
    console.log("SectionB");
 } 
 else if(R ==2){
    console.log("SectionC");
 }
 else if(R ==3){
    console.log("SectionD");
 }
 
 for (C =0; C<=5; C++){

    console.log(Number[R][C]);

  if (Number[R][C] >= 80) {
        console.log( Number[R][C] + "=A+" + "=Passed");
    }

else if (Number[R][C] >= 70) {
    console.log( Number[R][C] + "=A" + "=Passed");
}

else if (Number[R][C] >= 60) {
    console.log( Number[R][C] + "=A-" + "=Passed");
}

else if (Number[R][C] >= 50) {
    console.log( Number[R][C] + "=B" + "=Passed");
}

else if (Number[R][C] >= 40) {
    console.log( Number[R][C] + "=C" + "=Passed");
}

else if (Number[R][C] >= 33) {
    console.log( Number[R][C] + "=D" + "=Passed");
}

else {
    console.log( Number[R][C] + "=F" + "=Failed");
}
 }
}

