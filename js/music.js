'use strict'

const music = document.getElementById('music');

let question = confirm("Do you like rock?");



const createMusic = (track, nameTrack) => {
   const MusicBlock = document.createElement('div');
   MusicBlock.innerHTML = 
   `<figure>
      <figcaption>You listen to the:<br> ${nameTrack}</figcaption>
      <audio autoplay controls src="${track}"></audio>
   </figure>`
   return MusicBlock;
}

if (question == true) {
   alert('Welcome friend!');
   music.append(createMusic('audio/godsmack_i_stand_alone.mp3', 'Godsmack - I Stand Alone'));
   
} else {
   alert('You have a bad test')
   music.append(createMusic('audio/little-big.mp3', 'LITTLE BIG - GO BANANAS'));

}