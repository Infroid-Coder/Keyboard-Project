function bodyDisplay() {
    document.body.style.backgroundColor = "#000000";
    setTimeout(() => {
        document.getElementById("body").style.display = "block";
        document.getElementById("preloader").style.display = "none"
        document.body.style.backgroundColor = "none";
        document.body.style.backgroundImage = "url(Background.jpg)";
        document.body.style.animationName = "bodydisplay";
        document.body.style.animationDuration = "1s";
    }, 3000);
}

function NUMBER1() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "1";
    outputField[0].focus();
}
function NUMBER2() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "2";
    outputField[0].focus();
}
function NUMBER3() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "3";
    outputField[0].focus();
}
function NUMBER4() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "4";
    outputField[0].focus();
}
function NUMBER5() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "5";
    outputField[0].focus();
}
function NUMBER6() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "6";
    outputField[0].focus();
}
function NUMBER7() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "7";
    outputField[0].focus();
}
function NUMBER8() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "8";
    outputField[0].focus();
}
function NUMBER9() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "9";
    outputField[0].focus();
}
function NUMBER0() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "0";
    outputField[0].focus();
}
function LETTERa() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "a";
    outputField[0].focus();
}
function LETTERb() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "b";
    outputField[0].focus();
}
function LETTERc() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "c";
    outputField[0].focus();
}
function LETTERd() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "d";
    outputField[0].focus();
}
function LETTERe() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "e";
    outputField[0].focus();
}
function LETTERf() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "f";
    outputField[0].focus();
}
function LETTERg() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "g";
    outputField[0].focus();
}
function LETTERh() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "h";
    outputField[0].focus();
}
function LETTERi() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "i";
    outputField[0].focus();
}
function LETTERj() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "j";
    outputField[0].focus();
}
function LETTERk() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "k";
    outputField[0].focus();
}
function LETTERl() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "l";
    outputField[0].focus();
}
function LETTERm() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "m";
    outputField[0].focus();
}
function LETTERn() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "n";
    outputField[0].focus();
}
function LETTERo() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "o";
    outputField[0].focus();
}
function LETTERp() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "p";
    outputField[0].focus();
}
function LETTERq() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "q";
    outputField[0].focus();
}
function LETTERr() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "r";
    outputField[0].focus();
}
function LETTERs() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "s";
    outputField[0].focus();
}
function LETTERt() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "t";
    outputField[0].focus();
}
function LETTERu() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "u";
    outputField[0].focus();
}
function LETTERv() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "v";
    outputField[0].focus();
}
function LETTERw() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "w";
    outputField[0].focus();
}
function LETTERx() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "x";
    outputField[0].focus();
}
function LETTERy() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "y";
    outputField[0].focus();
}
function LETTERz() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "z";
    outputField[0].focus();
}
function space() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += " ";
    outputField[0].focus();
}
function selectAll() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].select();
}
function backSpace(){
    let outputField = document.getElementsByTagName("input");
    outputField[0].value = outputField[0].value.substring(0 , outputField[0].value.length - 1);
    outputField[0].focus();
}
function Copy() {
    let outputField = document.getElementsByTagName("input");
    let targetElem = document.querySelector(".fa-arrow-up");
    outputField[0].focus();
    outputField[0].select();
    outputField[0].setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputField[0].value);
}
function textClear() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].focus();
    outputField[0].value = "";
}
function symbol1() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "~";
    outputField[0].focus();
}
function symbol2() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "!";
    outputField[0].focus();
}
function symbol3() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "@";
    outputField[0].focus();
}
function symbol4() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "#";
    outputField[0].focus();
}
function symbol5() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "$";
    outputField[0].focus();
}
function symbol6() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "%";
    outputField[0].focus();
}
function symbol7() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "^";
    outputField[0].focus();
}
function symbol8() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "&";
    outputField[0].focus();
}
function symbol9() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "*";
    outputField[0].focus();
}
function symbol10() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "(";
    outputField[0].focus();
}
function symbol11() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += ")";
    outputField[0].focus();
}
function symbol12() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "_";
    outputField[0].focus();
}
function symbol13() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "+";
    outputField[0].focus();
}
function symbol14() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "{";
    outputField[0].focus();
}
function symbol15() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "}";
    outputField[0].focus();
}
function symbol16() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "<";
    outputField[0].focus();
}
function symbol17() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += ">";
    outputField[0].focus();
}
function symbol18() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += ":";
    outputField[0].focus();
}
function symbol19() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += ";";
    outputField[0].focus();
}
function symbol20() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += '"';
    outputField[0].focus();
}
function symbol21() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "'";
    outputField[0].focus();
}
function symbol22() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "?";
    outputField[0].focus();
}
function symbol23() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "/";
    outputField[0].focus();
}
function symbol24() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += ".";
    outputField[0].focus();
}
function symbol25() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += ",";
    outputField[0].focus();
}
function symbol26() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "[";
    outputField[0].focus();
}
function symbol27() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "]";
    outputField[0].focus();
}
function symbol28() {
    let outputField = document.getElementsByTagName("input");
    outputField[0].value += "|";
    outputField[0].focus();
}
