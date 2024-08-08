//nomer 3
//data rhodey
let tinggiCm = 170
let beratKg = 90

//hitung BMI
let tinggiMeter = tinggiCm/100
let BMI = beratKg/(tinggiMeter*tinggiMeter)

//cari status berat badan
let status
if(BMI < 18.5) {
    status = "kurus"
} else if (BMI >= 18.5 && BMI < 24.9){
    status = "normal"
} else if (BMI >= 25 && BMI < 29.9){
    status = "kelebihanBeratBadan"
} else {
    status = "obesitas"
}

console.log("BMI Rhodey: " + BMI.toFixed(2));
console.log("Status berat badan Rhodey: " + status);

