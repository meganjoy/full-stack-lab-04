
//added button
var btn = document.createElement('button');
var text = document.createTextNode('Add square');
//or btn.innerText = 'Add Square';
btn.appendChild(text);
document.body.appendChild(btn);
//event listener for what's happening with the boxes
btn.addEventListener('click', createBox);

//set-up a separate container so that there wasn't overlap between the button
var container = document.createElement('div');
container.id = 'square-container';
document.body.appendChild(container);


//create a function to call for the event listeners
function createBox () {
    var sq = document.createElement('div');
       sq.className = 'square';
       var existingSquares = document.getElementsByClassName('square').length;
       sq.id = existingSquares;
//added click event listener for div id
       sq.addEventListener('mouseenter', function () {
           sq.innerText = sq.id;
       });
       sq.addEventListener('mouseleave', function () {
           sq.innerText = '';
       });
//added double click
       sq.addEventListener('dblclick', removeNeighbor);  
            function removeNeighbor() {
            if (sq.id % 2 === 0) {
                //var id = this.id;
                //if even, remove the square after
                if (this.nextSibling) {
                    this.nextSibling.remove();
                } else {
                    alert('There are no elements to the right to remove.');
                }
            } else {
                //if odd, remove the square before
                if (this.previousSibling) {
                    this.previousSibling.remove();
                } else {
                    alert ('There are no elements to the left to remove.');
                }
            } 
        
            
        }
//adding single click
       sq.addEventListener('click', function() {
           var color = ['red', 'yellow', 'green', 'purple', 'cyan'];
           var randomColor = Math.floor(Math.random() * color.length);
           this.style.backgroundColor = color[randomColor];
       });
       container.appendChild(sq);

};






// //get random color function
//    function changeColor(event) {
//      event.target.style.backgroundColor = newColor; will tell which html element was clicked
//    }
// could have also done sq.onclick = changeColor;

//he used functions for all different parts of things
//examples for the insert id/remove id
//function insertId() {
//     var id = this.id;
//     this.innerText = id;
// }

// function removeId() {
//     this.innerText = '';
// }

