import Player from '@vimeo/player';
import { throttle } from "lodash";

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
// console.log("🚀 ~ iframe", iframe);
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    // console.log("🚀 ~ e", event.seconds);   
    localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
};
const getLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY); 

if (getLocalStorage === null || getLocalStorage === undefined) {
    return ;
} else {
    player.setCurrentTime(getLocalStorage);
};