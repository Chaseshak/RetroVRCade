$(window).on('resize', checkWidth(25));

function checkWidth(oldWidth){
    var windowWidth = $(window).width();

    console.log("OLD: " + oldWidth + "NEW: " + windowWidth);
}


// $(window).on('resize', function(){
//     var win = $(this); //this = window
//
//     var newHeight = (winHeight);
//     var newWidth = (winWidth);
//
//     var coin = $('.draggable');
//     var leftPos = parseInt(coin.css('left'));
//
//     alert("OLD: " + winWidth + "NEW: " + newWidth);
//
//     alert("DIFF: " + (winWidth - newWidth));
//
//     var newLeft = leftPos - (winWidth - newWidth);
//
//     coin.css({left: newLeft + 'px', top: '325px'});
//
// });

// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy)|0) + 'px');
        }
    });

function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;