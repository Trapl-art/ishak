
const mers = document.getElementById("mers");
const vaz = document.getElementById("vaz");
const svj = document.getElementById("svj");

function m1() {
    const srsmers = document.querySelector("#fmers").srs;
    localStorage.setItem('Merssrs', srsmers);
    window.location.href = 'isbran.html';

 mers.style.backgroundColor  = mers.style.backgroundColor  === 'red';
 console.log(srsmers);  
};

function v1() {
 if (vaz.classList.contains("active")) {
 const ivaz = document.querySelectorALL("#fvaz");
 const srsvaz = ivaz.srs;
 vaz.style.backgroundColor  = vaz.style.backgroundColor  === 'red' ? 'black' : 'red';
 }
};

function s1() {
 if (svj.classList.contains("active")) {
 const isvj = document.querySelectorALL("#fsvj");
 const srssvj = isvj.srs;
 svj.style.backgroundColor  = svj.style.backgroundColor  === 'red' ? 'black' : 'red';
 }
};
function f1() {
    window.location.href = "http://127.0.0.1:5501/isbran.html";

}