window.addEventListener('load', function(){

    const boxView = document.getElementsByClassName("boxView");
    const imageZoom = document.getElementById('imageZoom');
    const linkMenu = document.getElementsByTagName('a');
    const all = document.getElementById('all');

    let currentButton = undefined;

    all.classList.add('activeColor');

    for( let i = 0; i < boxView.length; i++){
        boxView[i].style.display = 'inline-block';
    }

    for( let i = 0; i < linkMenu.length; i++){
        linkMenu[i].addEventListener('click', function(){
            //this.classList.add('activeColor');
            let cad = this.innerHTML.toLowerCase();
            currentButton = cad;
            for (let i = 0; i < boxView.length; i++) {
                let img = boxView[i].childNodes[0];

                if(cad.substring(0,3) === img.getAttribute('src').substring(4,7)){
                    boxView[i].style.display = 'inline-block'
                    //img.style.display = 'inline-block';
                    all.classList.add('inactiveColor');
                }
                else if (cad === 'all'){
                    boxView[i].style.display = 'inline-block'
                    all.classList.add('activeColor');
                    //img.style.display = 'inline-block';
                }
                else{
                    boxView[i].style.display = 'none'
                    //img.style.display = 'none';
                }
            }
        });
    }

    for(let i = 0; i < boxView.length; i++){
        boxView[i].addEventListener('click', function(){
            let img = boxView[i].childNodes[0];
            //console.log(img.getAttribute('src'));
            imageZoom.setAttribute('src', img.getAttribute('src').toString());
            imageZoom.style.display = 'inline';
            imageZoom.addEventListener('click', function(){
                this.style.display = 'none';
            });
        });
    }
});


