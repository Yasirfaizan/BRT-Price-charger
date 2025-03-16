let Distance = Number(prompt("Please Enter Distance in KM"))
if(Distance<=5 && Distance >=0.1){
    console.log("Amount is 15")
}
else if(Distance<=0){
    console.log("Distance Never Be Zero Or Less Than Zero")
}
else if(Distance>=5.1 && Distance <=10){
    console.log("Amount is 20")
}
else if(Distance>=10.1 && Distance <=15){
    console.log("Amount is 25")
}
else if(Distance>=15.1 && Distance <=20){
    console.log("Amount is 30")
}
else if(Distance>=20.1 && Distance <=25){
    console.log("Amount is 35")
}
else if(Distance>=25.1 && Distance <=30){
    console.log("Amount is 40")
}
else if(Distance>=30.1 && Distance <=35){
    console.log("Amount is 50")
}
else if(Distance>=40.1 && Distance <=45){
    console.log("Amount is 60")
}
else(
    console.log("BRT Line IS Not Long Enough")
)