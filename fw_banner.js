var draw = SVG('banner').size('100%', '100%');
var text = draw
    .text("FREE WIFI")
    .fill('#0025EE')
    .font({ size: 100, family: 'Roboto Mono' })
    .path('M ' + 0 + ' ' + 0 + ' C ' + 500 + ' ' + 0 + ' ' + 0 + ' ' + 0 + ' ' + 1000 + ' ' + 0);

var drop = function() {
    text.animate(2000, '<>')
        .plot(
            'M ' +
            0 +
            ' ' +
            Math.round(window.innerHeight * (2 / 3)) +
            ' C ' +
            0 +
            ' ' +
            0 +
            ' ' +
            0 +
            ' ' +
            0 +
            ' ' +
            0 +
            ' ' +
            0
        );
};

document.addEventListener('scroll', function(event) {
    drop();
});

document.addEventListener('click', function(event) {
    drop();
});