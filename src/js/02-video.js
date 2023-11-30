import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

let currentTime = 0;

if (localStorage.getItem('videoplayer-current-time') != null) {
  currentTime = localStorage.getItem('videoplayer-current-time');
}

player.setCurrentTime(currentTime);
