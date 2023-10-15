
var yosh = +prompt("Yoshingizni kiriting")

if (yosh <= 0) {
    alert("Chaqaloq ")
}
else if (yosh <= 18) {
    alert("Yoshsiz,O'qishingiz kerak ")
}

else if (yosh <= 50) {
    alert(" Ishlashingiz kerak")
}
else if (yosh <= 60) {
    alert("Yaqinda Pensiaga chiqasz ")
}
else if (yosh <= 150) {
    alert("Pensianerga o'xshaysz, hali tirik bo'lsangiz   ")
}
else if (yosh <= 100000000) {
    alert("Hech kim bu yoshga kirmaydi O'ladi")
}
else {
    alert("Xatolik, Iltimos Son kiriting")
}

var hisob = prompt(" Siz bn O'rtacha Son qiymatini topamiz , Tayyormisz ")
alert(" Qani boshladik ")

var son = +prompt(" 1. Biror son kiriting ")
var son2 = +prompt("2. Biror son kiriting ")
var son3 = +prompt("3. Biror son kiriting ")
if (son > son2 && son < son3 || son < son2 && son > son3 ) {
    alert(" son " + son)
}
else if (son3>son && son3<son2 || son3<son && son3>son2) {
    alert("son "+ son3)
}
else {
    alert(" son " + son2)
}