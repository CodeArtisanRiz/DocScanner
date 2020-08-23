        var up = document.getElementById('GFG_UP');
        up.innerHTML = "Click on the btn to add image";
        var down = document.getElementById('GFG_DOWN');
        var images = ["logo.jpg","logo.png"];

        function Fun() {
            var img = document.createElement('img');
            img.src = 'logo.jpg';
            document.getElementById('body').appendChild(img);
            down.innerHTML = "Image Added";
        }
        function Print(){
        }

// var images = ["logo.jpg","logo.png"];
// var target = document.getElementById('target');
// function GFG_Fun() {
// images.forEach(function(imgSrc){
//     var newImg = document.createElement("img");
//     newImg.src = imgSrc;
//     target.appendChild(newImg);
// })
// }