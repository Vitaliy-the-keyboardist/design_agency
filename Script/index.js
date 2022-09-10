let images = [{
    image: "./Image/Slider/Rostov-on-Don.png"
}, {
    image: "./Image/Slider/Sochi.png"
}, {
    image: "./Image/Slider/Rostov-Patriotic.png"
}];
initSlider();

function initSlider () {
    

    let sliderImages = document.querySelector('.slider');
    let sliderStrokes = document.querySelector('.slider_stroke_block');
    initStrokes();

    initImages(); 
    function initImages () {
        images.forEach(function(image, index) {
            let imageDiv = `<div class="slider_img n${index} ${index === 0? "active" : ""}" style="background-image:url('${images[index].image}');" data-index="${index}"></div>`;
            //sliderImages.innerHTML = "";
            sliderImages.innerHTML += imageDiv; 
        })

    };
    
    function initStrokes () {
        sliderStrokes.querySelectorAll('.stroke').forEach(function (stroke) {
            stroke.addEventListener('click', function () {
                let numImage = +sliderImages.querySelector('.active').dataset.index;
                let nextImage;
                if (stroke.classList.contains('left')) {
                    nextImage = numImage === 0? images.length - 1 : numImage - 1;
                } else {
                    nextImage = numImage === images.length - 1? 0 : numImage + 1;
                };
                changeImage(nextImage);
                console.log(nextImage);
            }); 

        });
    };

    function changeImage (any) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + any).classList.add('active');
    }
    
};



