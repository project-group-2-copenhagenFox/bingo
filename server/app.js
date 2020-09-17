const app = require('express')();
const http = require('http').createServer(app);
var io = require('socket.io')(http);


var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    ranNums = [],
    i = 25,
    j = 0
    
while (i--) {
  let indexNum = {
        id: i + 1,
        value: 0,
        status: false
    }
    j = Math.floor(Math.random() * (i+1));
    indexNum.value = nums[j]
    ranNums.push(indexNum);
    nums.splice(j,1);
}

let totalPlayers = 3
for (let i = 0; i < totalPlayers.length; i++){
    console.log(ranNums[i])
}

console.log(ranNums)

io.on('connection',(socket) => {
    console.log('a user connected');
    socket.emit('board', ranNums)
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});