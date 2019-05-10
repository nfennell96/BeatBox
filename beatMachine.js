var soundKit = [
    {key: "a", link: "./drums/bassdrum01.ogg"},
    {key: "b", link: "./drums/bassdrum02.ogg"},
    {key: "c", link: "./drums/bassdrum03.ogg"},
    {key: "d", link: "./drums/bassdrum04.ogg"},
    {key: "e", link: "./drums/clap01.ogg"},
    {key: "f", link: "./drums/clap02.ogg"},
    {key: "g", link: "./drums/clap03.ogg"},
    {key: "h", link: "./drums/clap04.ogg"},
    {key: "i", link: "./drums/clav01.ogg"},
    {key: "j", link: "./drums/clav02.ogg"},
    {key: "k", link: "./drums/hihat_closed01.ogg"},
    {key: "l", link: "./drums/hihat_closed02.ogg"},
    {key: "m", link: "./drums/hihat_closed03.ogg"},
    {key: "n", link: "./drums/hihat_closed04.ogg"},
    {key: "o", link: "./drums/hihat_closed05.ogg"},
    {key: "p", link: "./drums/hihat_opened01.ogg"},
    {key: "q", link: "./drums/hihat_opened02.ogg"},
    {key: "r", link: "./drums/hihat_opened03.ogg"},
    {key: "s", link: "./drums/kick01.ogg"},
    {key: "t", link: "./drums/kick02.ogg"},
    {key: "u", link: "./drums/kick03.ogg"},
    {key: "v", link: "./drums/kick04.ogg"},
    {key: "w", link: "./drums/snare01.ogg"},
    {key: "x", link: "./drums/snare02.ogg"},
    {key: "y", link: "./drums/snare03.ogg"},
    {key: "z", link: "./drums/snare04.ogg"}
]

document.onkeydown = function(event) {

var playSound = event.key;

for (let i = 0; i < soundKit.length; i++) {
   
if (playSound === soundKit[i].key) {
    console.log(soundKit[i].link);
    var audio = new Audio(soundKit[i].link);
    audio.play();
    return false;      }
}
};