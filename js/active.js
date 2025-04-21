function toggleContent(targetId) {
    var divs = document.querySelectorAll('.Tob');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none'; // 先将所有的.Tob盒子隐藏
    }
    var targetDiv = document.getElementById(targetId);
    if (targetDiv) {
        targetDiv.style.display = 'block'; // 显示点击对应的目标盒子
    }
}

window.addEventListener('load', function () {
let openNav = document.querySelector('.Tob_nav');
let openImg = document.querySelector('.openImg');
openImg.onmouseover = function () {
    openNav.style.display = 'block';
};
function handleMouseLeave() {
    openNav.style.display = 'none';
}
openNav.addEventListener('mouseleave', handleMouseLeave);
});

let listA = document.querySelectorAll('.Tob_nav li a');
        listA.forEach(function (aTag) {
            aTag.addEventListener('click', function () {
                document.querySelectorAll('.Tob_nav li').forEach(function (liTag) {
                    liTag.classList.remove('enlarged');
                });
                let currentLi = this.closest('li');
                if (currentLi) {
                    currentLi.classList.add('enlarged');
                }
            });
        });
const backToTopButton = document.getElementById('backToTop');
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});