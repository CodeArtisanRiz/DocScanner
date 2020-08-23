var up = document.getElementById('GFG_UP');
        up.innerHTML = "Click on the btn to add image";
        var down = document.getElementById('GFG_DOWN');

        function GFG_Fun() {
            var img = document.createElement('img');
            img.src = 'logo.jpg';
            document.getElementById('body').appendChild(img);
            down.innerHTML = "Image Added";
        }