$(function() {
    $( "#intro" ).click(function(){
        var container = document.getElementById('intro');
        var dot = document.getElementById("punct1");
        var culoareElement = container.style.color;

        if (culoareElement === "rgb(255, 0, 0)") {
            $( "#intro" ).animate({ color:"#444444" });
            dot.style.display = 'none';
        } else {
            $( "#intro" ).animate({ color: "red"});
            dot.style.display = 'block';
            var point = document.getElementById('punct1');
            var rectWidth = 20, rectHeight = 10;
            var x = 0, y = 0, dx = 2, dy = 0;
            function movePoint() {
                x += dx;
                y += dy;
                const maxX = container.offsetWidth - rectWidth, maxY = container.offsetHeight - rectHeight;
                if (x >= maxX || x <= 0 || y >= maxY || y <= 0) {
                    const temp = dx;
                    dx = -dy;
                    dy = temp;
                }
                point.style.left = x + 'px';
                point.style.top = y + 'px';
                requestAnimationFrame(movePoint);
            }
            movePoint();
        }
    });

    $( "#sec1" ).click(function(){
        var container = document.getElementById("sec1");
        var dot = document.getElementById("pctsec1");
        var culoareElement = container.style.color;

        if (culoareElement === "rgb(255, 255, 0)") {
            $( "#sec1" ).animate({ color:"#444444" });
            dot.style.display = 'none';
        } else {
            $( "#sec1" ).animate({ color: "yellow"});
            dot.style.display = 'block';
            var point = document.getElementById('pctsec1');
            var rectWidth = 20, rectHeight = 10;
            var x = 0, y = 0, dx = 2, dy = 0;
            function movePoint() {
                x += dx;
                y += dy;
                const maxX = container.offsetWidth - rectWidth, maxY = container.offsetHeight - rectHeight;
                if (x >= maxX || x <= 0 || y >= maxY || y <= 0) {
                    const temp = dx;
                    dx = -dy;
                    dy = temp;
                }
                point.style.left = x + 'px';
                point.style.top = y + 'px';
                requestAnimationFrame(movePoint);
            }
            movePoint();
        }
    });
    $( "#sec2" ).click(function(){
        var container = document.getElementById("sec2");
        var dot = document.getElementById("pctsec2");
        var culoareElement = container.style.color;

        if (culoareElement === "rgb(0, 0, 255)") {
            $( "#sec2" ).animate({ color:"#444444" });
            dot.style.display = 'none';
        } else {
            $( "#sec2" ).animate({ color: "blue"});
            dot.style.display = 'block';
            var point = document.getElementById('pctsec2');
            var rectWidth = 20, rectHeight = 10;
            var x = 0, y = 0, dx = 2, dy = 0;
            function movePoint() {
                x += dx;
                y += dy;
                const maxX = container.offsetWidth - rectWidth, maxY = container.offsetHeight - rectHeight;
                if (x >= maxX || x <= 0 || y >= maxY || y <= 0) {
                    const temp = dx;
                    dx = -dy;
                    dy = temp;
                }
                point.style.left = x + 'px';
                point.style.top = y + 'px';
                requestAnimationFrame(movePoint);
            }
            movePoint();
        }
    });
    tippy('#intro', { content: 'Apasat aici !', allowHTML: true, });
    tippy('#sec1', { content: 'Apasat aici !', allowHTML: true, });
    tippy('#sec2', { content: 'Apasat aici !', allowHTML: true, });

    tippy('#notred', { content: 'Cathedral Notre-Dame de Paris', allowHTML: true, });
    tippy('#chartres', { content: 'Cathedral of Our Lady of Chartres', allowHTML: true, });
    tippy('#westminster', { content: 'Cathedral Westminster Abbey', allowHTML: true, });
    tippy('#Westfassade', { content: 'Cathedral Church of Saint Peter', allowHTML: true, });


});

// $( document ).click(function() {

// });
