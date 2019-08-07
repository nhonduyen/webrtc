'use strict';
var myStream;

let noti = document.getElementById('noti');
let video = document.getElementsByTagName('video');

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => video.srcObject = stream)
    .catch(err => noti.innerText = err.name + " " + err.message);

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