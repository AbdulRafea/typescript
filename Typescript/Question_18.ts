let place:string[]  = ["turkey","china","saudia arabia","japan"];
// @ts-ignore
document.write(place);
// @ts-ignore
document.write(place.slice().sort())
// @ts-ignore
document.write(place)
// @ts-ignore
document.write(place.slice().sort().reverse())
// @ts-ignore
document.write(place)
place.reverse();
// @ts-ignore
document.write(place)
place.reverse()
// @ts-ignore
// @ts-ignore
document.write(place);
document.write("<br> <br>")
// @ts-ignore
document.write(place.slice().sort());
document.write("<br> <br>")
// @ts-ignore
document.write(place.slice());
output:turkey,china,saudia arabia,japan

china,japan,saudia arabia,turkey

turkey,china,saudia arabia,japan

turkey,saudia arabia,japan,china

turkey,china,saudia arabia,japan

japan,saudia arabia,china,turkey

turkey,china,saudia arabia,japan

china,japan,saudia arabia,turkey

turkey,china,saudia arabia,japan
