const app = require('express')();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

let ranNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    l = 0

function generateBoard(){
        let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
        board = [],
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
        board.push(indexNum);
        nums.splice(j,1);
    }
    return board
}

function sendRandNum() {
    let k = ranNum.length
    l = Math.floor(Math.random() * (k+1));
    ranNum.splice(l,1);
    return ranNum[l]
}


let totalPlayers = 3
for (let i = 0; i < totalPlayers.length; i++){
    console.log(board[i])
}


let nickNames = []
let saveboard = []


io.on('connection',(socket) => {
    console.log('a user connected');
    // console.log(sendRandNum())

    socket.on('nickName', function(payload) {
        let newBoard = {
            cell: generateBoard(),
            nickName: payload.nickName
        }
        saveboard.push(newBoard)
        console.log(saveboard)
        nickNames.push(payload)
        console.log(nickNames)
        
        socket.emit('board', saveboard)
        socket.broadcast.emit('saveboard', saveboard)
    })
    // socket.on('saveboards', function(payload) {
    //     socket.broadcast.emit('saveboard', saveboard)
    // })

    socket.on('changeStatus', function(num) {
        console.log(num, '<<<<<<changestatus server')
        saveboard.forEach(cellObj => {
            cellObj.cell.forEach(item => {
                if(item.value === num) {
                    item.status = true
                }
            })
        })
        let senNumber = sendRandNum()
        socket.broadcast.emit('randomNumber', senNumber)
        socket.emit('randomNumber', senNumber)
        socket.broadcast.emit('saveboard', saveboard)
    })
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});