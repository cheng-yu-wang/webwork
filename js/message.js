
    document.getElementById('submitBtn').addEventListener('click', function () {
        let username = document.getElementById('username').value;
        let message = document.getElementById('message').value;
        let names= document.getElementById('names').value;
        let eml= document.getElementById('eml').value;
        let dh= document.getElementById('dh').value;
        if (message === '') {
            alert('请输入内容');
            return;
        }
        if (username === '') {
            username = '匿名';
        }
        let messageBoard = document.getElementById('messageBoard');
        let newMessage = document.createElement('div');

        newMessage.innerHTML = '<div id="message-container" class="message-container">'+'<div class="message-info"><div class="info"><img src="../img/小舞tx.png"><strong>'
            + username + '</strong></div><span>发布于：' + getCurrentTime() +
            '</span></div><div class="content">' + message +'</div>'+'</div>';
        messageBoard.insertBefore(newMessage, messageBoard.firstChild);
        document.getElementById('username').value = '';
        document.getElementById('message').value = '';
        document.getElementById('names').value = '';
        document.getElementById('dh').value = '';
        document.getElementById('eml').value = '';
    });
    function getCurrentTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = ('0' + (now.getMonth() + 1)).slice(-2);
        let day = ('0' + now.getDate()).slice(-2);
        let hours = ('0' + now.getHours()).slice(-2);
        let minutes = ('0' + now.getMinutes()).slice(-2);
        let seconds = ('0' + now.getSeconds()).slice(-2);
        return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }

   let messagehz=document.querySelector('.message');
   let messageBoards=document.getElementById('messageBoard');
   let liuyanbt=document.querySelector('.liuyandengxuan');
   liuyanbt.onclick=function(){
    messagehz.style.display='none';
    messageBoards.style.display='block';
   }
   let fanhui6=document.querySelector('.fanhui6');
   fanhui6.onclick=function(){
    messagehz.style.display='block';
    messageBoards.style.display='none';
   }