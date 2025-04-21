let phones = document.getElementById('phone');
let phonetishi = document.querySelector('.phone-tishi');
let password=document.getElementById('password');
let logobtn=document.querySelector('.logobutton')

function validatePhone() {
    let phoneValue = phones.value;
    if (!phoneValue.match(/^1[3-9]\d{9}$/)) {
        phonetishi.style.display = 'block';
    } else {
        phonetishi.style.display = 'none';
    }
}
password.onfocus = function () {
    validatePhone();
};

logobtn.onclick=function(){
  if(password.value=='123456')
  window.location.href = "官网首页.html";
};

let phones2 = document.getElementById('phone2');
let phonetishi2 = document.querySelector('.phone-tishi2');
let passwords2=document.getElementById('password2');
let passwordtishi2 = document.querySelector('.mima-tishi2');


function validatePhone2() {
    let phoneValue = phones2.value;
    if (!phoneValue.match(/^1[3-9]\d{9}$/)) {
        phonetishi2.style.display = 'block';
    } else {
        phonetishi2.style.display = 'none';
    }
}
passwords2.onfocus = function () {
    validatePhone2();
};


let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/;
let passwords3=document.getElementById('password3');
let passwordtishi3 = document.querySelector('.mima-tishi3');
function validatePassword2() {
    let passwordValue2 = passwords2.value;
    if (!passwordValue2.match(regex)) {
        passwordtishi2.style.display = 'block';
    } else {
        passwordtishi2.style.display = 'none';
    }
}
passwords3.onfocus = function () {
    validatePassword2();
};

let zhuce=document.getElementById('zhucebt');
function validatePassword3() {
    let passwordValue2 = passwords2.value;
    let passwordValue3 = passwords3.value;
    if (passwordValue2!=passwordValue3) {
        passwordtishi3.style.display = 'block';
    } else {
        passwordtishi3.style.display = 'none';
    }
}
zhuce.onclick = function () {
    validatePassword3();
};

let zhucebt=document.querySelector('.zhucebt');
let logoboxzhuce=document.querySelector('.logoboxzhuce');
let fanhui=document.querySelector('.fanhui');
zhucebt.onclick=function(){
logoboxzhuce.style.display='block';
}
fanhui.onclick=function(){
logoboxzhuce.style.display='none';
}
let btn=document.querySelector('button');

let phones3 = document.getElementById('phone3');
let phonetishi3 = document.querySelector('.phone-tishi3');
btn.addEventListener('click',function(){
phones3.onfocus = function () {
btn.disabled = false;
btn.innerHTML = '发送';
};
let phoneValue = phones3.value;
if (!phoneValue.match(/^1[3-9]\d{9}$/)){
    btn.disabled=true;
    btn.innerHTML='号码有误';
}else{

let time=10;
btn.disabled=true;
btn.innerHTML='还剩下'+time--+'秒';
let timer=setInterval(function(){
    if(time==0){
        clearInterval(timer);
        btn.disabled=false;
        btn.innerHTML='发送';
    }else{
        btn.innerHTML='还剩下'+time--+'秒';
    }
},1000);
}
})

let wangji=document.querySelector('.wangji');
let yanzhengbox=document.querySelector('.yanzhengbox');
let fanhui2=document.querySelector('.fanhui2')
wangji.onclick=function(){
yanzhengbox.style.display='block';
} 
fanhui2.onclick=function(){
yanzhengbox.style.display='none';
}

let weixin=document.querySelector('.iconfont-icon-weixin');
let weixindenglu=document.querySelector('.weixindenglu');
let fanhui3=document.querySelector('.fanhui3')
weixin.onclick=function(){
weixindenglu.style.display='block';
} 
fanhui3.onclick=function(){
weixindenglu.style.display='none';
}

let weibo=document.querySelector('.iconfont-icon-weibo');
let weibodenglu=document.querySelector('.weibodenglu');
let fanhui4=document.querySelector('.fanhui4')
weibo.onclick=function(){
weibodenglu.style.display='block';
} 
fanhui4.onclick=function(){
weibodenglu.style.display='none';
}

let QQ=document.querySelector('.iconfont-icon-ai-qq');
let qqdenglu=document.querySelector('.qqdenglu');
let fanhui5=document.querySelector('.fanhui5')
QQ.onclick=function(){
qqdenglu.style.display='block';
} 
fanhui5.onclick=function(){
qqdenglu.style.display='none';
}

