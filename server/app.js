const app = require('express')();
const http = require('http').createServer(app);
var io = require('socket.io')(http);

function generateBoard(){
        var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
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


let totalPlayers = 3
for (let i = 0; i < totalPlayers.length; i++){
    console.log(board[i])
}


let nickNames = []
let saveboard = []


io.on('connection',(socket) => {
    console.log('a user connected');

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

    socket.on('changeStatus', function(id) {
        console.log(id)
        saveboard.forEach(cellObj => {
            cellObj.cell.forEach(item => {
                if(item.id == id) {
                    item.status = true
                }
            })
        })

        socket.broadcast.emit('saveboard', saveboard)
    })
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});