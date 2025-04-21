// 侧边栏js
const sidebarLis = document.querySelectorAll('.sidebar ul li');
sidebarLis.forEach(li => {
    li.addEventListener('click', function () {
    sidebarLis.forEach(otherLi => {
        otherLi.classList.remove('active');
    });
    this.classList.add('active');
});
});

//轮播图js有淡入和淡出的效果
let num = 0;
let time = setInterval(function () {
    num++;
    if (num == 3)
        num = 0;
    $('.banner ul li').eq(num % 3).fadeIn();
    $('.banner ul li').not(':eq(' + num % 3 + ')').fadeOut();
}, 3000)

//Tob栏的切换，参考教材代码
let number=$('.Tob_list_nav ul li').outerWidth();
$('.Tob_list_nav ul li').mouseover(function() {
    let index=$(this).index();
    $('span').stop().animate({
        left:number*index+(60+(index*10)),
    },300);
});
let lis=document.querySelectorAll('.Tob_list_nav ul li');
let item=document.querySelectorAll('.Tob_list_content');
for(let i=0;i<lis.length;i++){
    lis[i].setAttribute('index',i);
    lis[i].onclick=function(){
        let index=this.getAttribute('index');
        for(let i=0;i<item.length;i++){
            if(item[i]!=item[index]){
                item[i].style.display='none';
            }
            else{
                item[index].style.display='block';
            }
        }
    }
}
let list=document.querySelectorAll('.lunbo2_list li');
let items=document.querySelectorAll('.lunbo2_list_content li');
for(let i=0;i<list.length;i++){
    list[i].setAttribute('index',i);
    list[i].onclick=function(){
        let index=this.getAttribute('index');
        for(let i=0;i<items.length;i++){
            if(items[i]!=items[index]){
                items[i].style.display='none';
            }
            else{
                items[index].style.display='block';
            }
        }
    }
}


const shellitem = document.querySelectorAll('.shellitem');
    const videoPlayer = document.getElementById('videoPlayer');
    shellitem.forEach(shellitem => {
        shellitem.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            if (videoUrl) {
                videoPlayer.src = videoUrl;
                videoPlayer.style.display = 'block'; // 显示视频
                videoPlayer.play(); // 播放视频
            }
        });
    });
    videoPlayer.addEventListener('click', function() {
        if (videoPlayer.style.display === 'block') {
            videoPlayer.style.display = 'none'; // 隐藏视频
            videoPlayer.pause(); // 暂停视频
        }
    });

    let imgArr = [{
       
        imgPath: '../img/轮播图41.jpg'
    },
    {
      
        imgPath: '../img/轮播图42.jpg'
    },
    {
     
        imgPath: '../img/轮播图43.jpg'
    },
    {
       
        imgPath: '../img/轮播图44.jpg'
    },
    {
       
        imgPath: '../img/轮播图45.jpg'
    }
];
new Swiper({
    imgArr: imgArr, 
    imgWidth: 320, 
    aniTime: 1000, 
    intervalTime: 1500, 
    scale: 0.8, 
    autoplay: true,
    gap: 0,
    clsSuffix: '-card'
}).init();
