const messages = document.getElementById('messages');
const formMsg = document.getElementById('formMsg');



var socket = io('http://localhost:3000');
socket.on('message', data => {
  console.log(data)
  appendMessages(data)
})

formMsg.addEventListener('submit', e=>{
  e.preventDefault();
  socket.emit('chatmessage', formMsg.msg.value);
  msgForm.msg.value = '';
})

function appendMessages(message){
  const html = `<div>${message}</div>`
  messages.innerHTML+= html;
}