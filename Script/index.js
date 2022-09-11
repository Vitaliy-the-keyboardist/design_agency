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
    let sliderLinks = document.querySelector('.projects');
    let sliderTextOptions = document.querySelector('.text_block_options');
    
    let textOptionsOne = sliderTextOptions.querySelector('.options1');
    let textOptionsTwo = sliderTextOptions.querySelector('.options2');;
    let textOptionsThree = sliderTextOptions.querySelector('.options3');;
    let textOptionsFour = sliderTextOptions.querySelector('.options4');;
    
    initStrokes();
    initLinks();
    initImages(); 
    initDots();
    changeTextOptions();

    function initImages () {
        images.forEach(function(image, index) {
            let imageDiv = `<div class="slider_img n${index} ${index === 0? "active" : ""}" style="background-image:url('${images[index].image}');" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv; 
        })

    };
    
    function changeTextOptions () {
        let numImage = +sliderImages.querySelector('.active').dataset.index;
        if (numImage === 1) {
            textOptionsOne.querySelector('p').innerHTML = 'Sochi <br>Thieves';
            textOptionsTwo.querySelector('p').textContent = '105 m2';
            textOptionsThree.querySelector('p').textContent = '4 months';
            textOptionsFour.querySelector('p').textContent = 'Upon request';
        }
        if (numImage === 2) {
            textOptionsOne.querySelector('p').innerHTML = 'Rostov-on-Don <br>Patriotic';
            textOptionsTwo.querySelector('p').textContent = '93 m2';
            textOptionsThree.querySelector('p').textContent = '3 months';
            textOptionsFour.querySelector('p').textContent = 'Upon request';
        }
        if (numImage === 0) {
            textOptionsOne.querySelector('p').innerHTML = 'Rostov-on-Don <br>LCD admiral';
            textOptionsTwo.querySelector('p').textContent = '81 m2';
            textOptionsThree.querySelector('p').textContent = '3.5 months';
            textOptionsFour.querySelector('p').textContent = 'Upon request';
        }
    }
    
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
                changeTextOptions();
            }); 

        });
    };

    function changeImage (nextImage) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + nextImage).classList.add('active');
        sliderLinks.querySelector('.active_link').classList.remove('active_link');
        sliderLinks.querySelector('.n' + nextImage).classList.add('active_link');
        sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot.svg');
        sliderStrokes.querySelector('.dot_light').classList.remove('dot_light');
        sliderStrokes.querySelector('.n' + nextImage).classList.add('dot_light');
        sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot_light.svg');
    }
    function initLinks () {
        sliderLinks.querySelectorAll('.link_projects').forEach(function(link) {
            link.addEventListener('click', function()  {
                if (link.classList.contains('active_link')) {
                    return
                } else {
                    sliderLinks.querySelector('.active_link').classList.remove('active_link');
                    link.classList.add('active_link');
                    
                }
                
                if (link.classList.contains('n0')) {
                    sliderImages.querySelector('.active').classList.remove('active');
                    sliderImages.querySelector('.n0').classList.add('active');
                    sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot.svg');
                    sliderStrokes.querySelector('.dot_light').classList.remove('dot_light');
                    sliderStrokes.querySelector('.n0').classList.add('dot_light');
                    sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot_light.svg');
                }
                if (link.classList.contains('n1')) {
                    sliderImages.querySelector('.active').classList.remove('active');
                    sliderImages.querySelector('.n1').classList.add('active');
                    sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot.svg');
                    sliderStrokes.querySelector('.dot_light').classList.remove('dot_light');
                    sliderStrokes.querySelector('.n1').classList.add('dot_light');
                    sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot_light.svg');
                }
                if (link.classList.contains('n2')) {
                    sliderImages.querySelector('.active').classList.remove('active');
                    sliderImages.querySelector('.n2').classList.add('active');
                    sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot.svg');
                    sliderStrokes.querySelector('.dot_light').classList.remove('dot_light');
                    sliderStrokes.querySelector('.n2').classList.add('dot_light');
                    sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot_light.svg');
                }
                changeTextOptions();
                
            });
        });
    }
    
    function initDots () {
        sliderStrokes.querySelectorAll('.dot').forEach(function(dot) {
            dot.addEventListener('click', () => {
                if (dot.classList.contains('dot_light')) {
                    return
                } else {
                    sliderStrokes.querySelector('.dot_light').setAttribute('src', './Image/Icons/dot.svg');
                    sliderStrokes.querySelector('.dot_light').classList.remove('dot_light');
                    dot.classList.add('dot_light');
                    dot.setAttribute('src', './Image/Icons/dot_light.svg');
                }
                
                if (dot.classList.contains('n0')) {
                    sliderImages.querySelector('.active').classList.remove('active');
                    sliderImages.querySelector('.n0').classList.add('active');
                    sliderLinks.querySelector('.active_link').classList.remove('active_link');
                    sliderLinks.querySelector('.n0').classList.add('active_link');
                }
                if (dot.classList.contains('n1')) {
                    sliderImages.querySelector('.active').classList.remove('active');
                    sliderImages.querySelector('.n1').classList.add('active');
                    sliderLinks.querySelector('.active_link').classList.remove('active_link');
                    sliderLinks.querySelector('.n1').classList.add('active_link');
                }
                if (dot.classList.contains('n2')) {
                    sliderImages.querySelector('.active').classList.remove('active');
                    sliderImages.querySelector('.n2').classList.add('active');
                    sliderLinks.querySelector('.active_link').classList.remove('active_link');
                    sliderLinks.querySelector('.n2').classList.add('active_link');
                }
                changeTextOptions();
            });
        });
    }
};



