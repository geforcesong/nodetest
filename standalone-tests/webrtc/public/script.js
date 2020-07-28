const socket = io('/');
const videoGrid = document.getElementById('video-grid');
const myPeer = new Peer(undefined, {
    host: '/',
    port: 3001
});
const peers = {};
const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream=>{
    addVideoStream(myVideo, stream);

    myPeer.on('call', call=>{
        call.answer(stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream=>{
            addVideoStream(video, userVideoStream);
        });
    });

    

    socket.on('user-connected', userId => {
        connectToNewUse(userId, stream);
    })
});

socket.on('user-disconnected', userId=>{
    console.log(userId);
    if(peers[userId]){
        peers[userId].close();
    }
})

myPeer.on('open', id=>{

    socket.emit('join-room', ROOM_ID, id);
});

function connectToNewUse(userId, stream){
    const call = myPeer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', userVideoStream=>{
        addVideoStream(video, userVideoStream);
    });
    call.on('close',()=>{
        video.remove();
    });

    peers[userId] = call;
}

function addVideoStream(video, stream){
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    });
    videoGrid.append(video);
}