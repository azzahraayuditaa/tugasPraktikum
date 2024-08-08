//nomer 4
let sukuPertama = 4
let rasio = 3

//hitung jumlah 10 suku pertama
let jumlah = 0
let suku = sukuPertama

for(let i = 0; i <10; i++){
    jumlah += suku
    suku *= rasio //mengalikan suku dgn rasio untuk mendapatkan suku berikutnya
}

console.log("Jumlah suku pertama dari deret pertama adalah: " + jumlah)