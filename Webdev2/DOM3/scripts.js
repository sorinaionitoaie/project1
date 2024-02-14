// 1. Create a button that will display your name on the screen, when clicked
// 2. Create another button that will target all the names you've put on the screen(if you clicked 3 times, your name should be there 3 times) and delete them
// 3. Create 5 circles on the screen; color them differently from javascript
// 4. When you click them, make them dissapear and show on the screen your score


document.getElementById('displayNameBtn').addEventListener('click', function() {
    const nameBox = document.getElementById('nameBox');
    const currentContent = nameBox.innerHTML; 
    const newContent = '<p>Sorin</p>'; 
    nameBox.innerHTML = currentContent + newContent; 
});


let score = 0;

document.querySelectorAll('.circle').forEach(function(circle) {
    circle.addEventListener('click', function() {
        this.style.display = 'none';
        score++;
        document.getElementById('score').innerText = score;
    });
});