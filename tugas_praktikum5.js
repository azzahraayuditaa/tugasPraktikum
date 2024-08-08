//nomer 5
//(1)menghitung volume dan luas permukaan bola
//menghitung volume bola
function volumeBola(jariJari){
    return (4/3) * Math.PI * Math.pow(jariJari, 3)
}

let jariJari = 15
let volume = volumeBola(jariJari)

console.log("Volume bola dengan jari jari 15 cm adalah: " + volume.toFixed(2)+"cm^3")

//menghitung luas permukaan bola 
function luasPermukaanBola(jariJari){
    return 4 * Math.PI * Math.pow(jariJari, 2)
}

let jariJari2 = 15
let luasPermukaan = luasPermukaanBola(jariJari2)

console.log("Luas permukaan bola dengan jari jari 15 cm adalah: "+luasPermukaan.toFixed(2)+"cm^2")

//(2)menghitung volume, luas permukaan dan luas selimut tabung
//menghitung volume tabung
function volumeTabung(jariJari, tinggi){
    return Math.PI * Math.pow(jariJari, 2) * tinggi
}

let jariJari3 = 7.5
let tinggi = 50
let volume2 = volumeTabung(jariJari, tinggi)

console.log("Volume tabung dengan jari jari dan tinggi 7.5 dan 50 cm adalah: "+volume2.toFixed(2)+"cm^3")

//luas permukaan tabung
function luasPermukaanTabung(jariJari, tinggi){
    return 2 * Math.PI * jariJari * (jariJari+tinggi)
}

let jariJari4 = 7.5
let tinggi2 = 50
let luasPermukaan2 = luasPermukaanTabung(jariJari, tinggi)

console.log("Luas permukaan tabung dengan jari jari dan tinggi 7.5 dan 50 adalah: "+luasPermukaan2.toFixed(2)+"cm^2")

//selimut tabung
function selimutTabung(diameter, tinggi){
    return Math.PI * diameter * tinggi
}

let diameter = 15
let tinggi3 = 50
let luasSelimut = selimutTabung(diameter, tinggi)

console.log("Luas seimut tabung adalah: "+luasSelimut.toFixed(2)+"cm^2")

//(3)menghitung volume, luas permukaan dan luas selimut kerucut
//hitung volume kerucut
function volumeKerucut(jariJari, tinggi){
    return 1/3 * Math.PI * Math.pow(jariJari, 2) * tinggi
}

let jariJari5 = 10
let tinggi4 = 40
let volume3 = volumeKerucut(jariJari, tinggi)

console.log("Volume kerucut adalah: "+volume3.toFixed(2)+"cm^3")

//luas permukaan kerucut
function permukaanKerucut(jariJari, tinggi, sisi){
    return Math.PI * jariJari * (jariJari+sisi)
}

let sisi 