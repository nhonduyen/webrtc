'use strict';
let myStream;
// check if browser support WebRTC
function hasUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mediaDevices.getUserMedia);
}

if (hasUserMedia()) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mediaDevices.getUserMedia;
    // enabling video and audio channels
    navigator.getUserMedia({ video: true, audio: true }, function(stream) {
        myStream = stream;
        let video = document.querySelector('video');

        video.src = window.URL.createObjectURL(myStream);
    }, function(err) {
        console.log(err);
    });
} else {
    console.warn('WebRTC is not supported');
}

document.getElementById('btnGetAudioTracks').addEventListener('click', function() {
    console.log('btnGetAudioTracks');
    console.log(myStream.getAudioTracks());
});
document.getElementById('btnGetTrackById').addEventListener('click', function() {
    console.log('btnGetTrackById');
    console.log(myStream.getTrackById(myStream.getAudioTracks()[0].id));
});
document.getElementById('btnGetTracks').addEventListener('click', function() {
    console.log('btnGetTracks');
    console.log(myStream.getTracks());
});
document.getElementById('btnGetVideoTracks').addEventListener('click', function() {
    console.log('btnGetVideoTracks');
    console.log(myStream.getVideoTracks());
});
document.getElementById('btnRemoveAudioTrack').addEventListener('click', function() {
    console.log('btnRemoveAudioTrack');
    console.log(myStream.getAudioTracks()[0]);
});
document.getElementById('btnRemoveVideoTrack').addEventListener('click', function() {
    console.log('btnRemoveVideoTrack');
    console.log(myStream.getVideoTracks()[0]);
});