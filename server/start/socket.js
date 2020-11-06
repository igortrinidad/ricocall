const Server = use('Server')
const io = use('socket.io')(Server.getInstance())
const find = require('lodash/find')

const onlineUsers = []

io.on('connection', function (socket) {
  // console.log('Socket STARTED the connection to SOCKET ID: ', socket.id)

  socket.on('joinRoom', ({userId}) => {

    try {
      socket.userId = userId

      socket.join('onlineUsers')

      const finded = find(onlineUsers, { userId })

      if(!finded) {
        onlineUsers.push({
          userId,
          sockets: [socket.id],
          status: 'online'
      })
      } else {
        finded.sockets.push(socket.id)
      }

      io.to('onlineUsers').emit('onlineUsers', {onlineUsers})

    } catch (error) {
      console.log(error)
    }
  })

  socket.on('updateUserStatus', ({ userId, status }) => {
    const finded = find(onlineUsers, { userId })
    if(finded) {
      finded.status = status
      io.to('onlineUsers').emit('onlineUsers', {onlineUsers})
    }
  })

  socket.on('leaveRoom', () => {
    const finded = find(onlineUsers, { userId: socket.userId })
    if(finded) {
      finded.sockets.splice(finded.sockets.indexOf(socket.id), 1)
      if(!finded.sockets.length) {
        onlineUsers.splice(onlineUsers.indexOf(finded), 1)
        io.to('onlineUsers').emit('onlineUsers', {onlineUsers})
      }
    }
  })

  socket.on('disconnect', () => {
    console.log(`CONNECTION DISCONNECTED SOCKET ${socket.userId}`)
    const finded = find(onlineUsers, { userId: socket.userId })
    if(finded) {
      finded.sockets.splice(finded.sockets.indexOf(socket.id), 1)
      if(!finded.sockets.length) {
        onlineUsers.splice(onlineUsers.indexOf(finded), 1)
        io.to('onlineUsers').emit('onlineUsers', {onlineUsers})
      }
    }
  })

  socket.on('connect_error', () => {
    console.log(`CONNECTION ERROR SOCKET ${socket.userId}`)
    const finded = find(onlineUsers, { userId: socket.userId })
    if(finded) {
      finded.sockets.splice(finded.sockets.indexOf(socket.id), 1)
      if(!finded.sockets.length) {
        onlineUsers.splice(onlineUsers.indexOf(finded), 1)
        io.to('onlineUsers').emit('onlineUsers', {onlineUsers})
      }
    }
  })

})


