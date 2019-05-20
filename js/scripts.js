console.log('OK');

$('h1').lettering();

const player = new Plyr('#player', {

    controls: ['play', 'progress', 'fullscreen', 'current-time', 'volume', 'settings'],
    muted: false,
    setting: ['quality', 'speed', 'loop'],

});