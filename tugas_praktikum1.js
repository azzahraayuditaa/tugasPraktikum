//nomor 1
let panjang = 20.5
let lebar = 30
let hargaPerMeter = 1500000
let PPN = 0.15
let luasTanah = panjang*lebar
let hargaTanahSebelumPPN = luasTanah*hargaPerMeter
let totalPPN = hargaTanahSebelumPPN*PPN
let totalHarga = hargaTanahSebelumPPN + totalPPN

console.log("Luas tanah: "+ luasTanah + "m^2")
console.log("Harga tanah sebelum PPN: Rp " + hargaTanahSebelumPPN)
console.log("Total PPN: Rp " + totalPPN)
console.log("Total harga yang harus dibayarkan: Rp " + totalHarga)
