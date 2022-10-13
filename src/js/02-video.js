import Player from '@vimeo/player';
import { throttle } from "lodash";

  const iframe = document.querySelector('iframe');

// console.log("🚀 ~ iframe", iframe);

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    // console.log("🚀 ~ e", event.seconds);   
localStorage.setItem("videoplayer-current-time", event.seconds);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    .catch(function (error) {
        console.log(error);
});   