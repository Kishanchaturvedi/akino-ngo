// 

// navbar 
function showMenu() {
    document.getElementById('sidebar').classList.add('open');
    document.querySelector('.overlay-menu').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideMenu() {
    document.getElementById('sidebar').classList.remove('open');
    document.querySelector('.overlay-menu').style.display = 'none';
    document.body.style.overflow = 'auto';
}
// navbar


var navLink = document.querySelectorAll('.menu-link')

navLink.forEach(function (loop) {
    loop.addEventListener('click', function () {
        navLink.forEach(function (system) {
            system.classList.remove('active-link')
        })
        this.classList.add('active-link')
    })
})

// navbar


// gallery 


$(document).ready(function () {
    $(".image-container").each(function () {
        const container = $(this);
        const images = container.find("img");
        let currentImageIndex = 0;
        let interval;

        function changeImage() {
            images.removeClass("active");
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images.eq(currentImageIndex).addClass("active");
        }

        interval = setInterval(changeImage, 1500); // Change image every 2 seconds

        container.mouseleave(function () {
            clearInterval(interval);
            images.removeClass("active");
            images.eq(currentImageIndex).addClass("active");
        });
    });
});





// $(document).ready(function () {
//     const images = $(".image-container img");
//     let currentImageIndex = 0;
//     let interval;

//     function changeImage() {
//         images.removeClass("active");
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         images.eq(currentImageIndex).addClass("active");
//     }

//     clearInterval(interval);
//     images.removeClass("active");
//     currentImageIndex = 0; // Start from the first image
//     images.eq(currentImageIndex).addClass("active");
//     interval = setInterval(changeImage, 2000); // Change image every 1 second

//     // Stop changing images on mouseleave
//     $(".image-container").mouseleave(function () {
//         clearInterval(interval);
//         images.removeClass("active");
//         images.eq(currentImageIndex).addClass("active");
//     });
// });


// $(".image-container").mouseenter(function () {
// });

//gallery end



// accordian

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("actives");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }




// increment conter 

document.addEventListener("DOMContentLoaded", () => {
    const counterContainers = document.querySelectorAll('.counter-container');

    counterContainers.forEach((container) => {
        const counter = container.querySelector('.counter');
        const dataCeil = parseInt(container.getAttribute('data-ceil'));

        container.addEventListener('mouseenter', () => {
            incrementCounter(counter, dataCeil);
        });
    });

    function incrementCounter(counterElement, dataCeil) {
        let currentNum = parseInt(counterElement.innerText);

        if (currentNum < dataCeil) {
            currentNum++;
            counterElement.innerText = currentNum;
            setTimeout(() => incrementCounter(counterElement, dataCeil), 20);
        }
    }
});



// const counterContainers = document.querySelectorAll('.counter-container');
// counterContainers.forEach((container) => {
//     const counter = container.querySelector('.counter');
//     const dataCeil = parseInt(container.getAttribute('data-ceil'));

//     container.addEventListener('mouseenter', () => {
//         incrementCounter(counter, dataCeil);
//     });
// });
// function incrementCounter(counterElement, dataCeil) {
//     let currentNum = parseInt(counterElement.innerText);

//     if (currentNum < dataCeil) {
//         currentNum++;
//         counterElement.innerText = currentNum;
//         setTimeout(() => incrementCounter(counterElement, dataCeil), 20);
//     }
// }
// increment conter end




$('#card-carousel').owlCarousel({
    loop: true,
    dots: false,

    autoWidth: true,
    nav: true,
    responsive: {
        0: {
            margin: 0,
            center: true,
            items: 2
        },
        600: {
            margin: 20,
            center: true,
            items: 2,
        },
        1000: {
            margin: 20,
            items: 3
        }
    }
})

$('#card-carousel2').owlCarousel({
    loop: true,
    dots: false,
    margin: 25,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

// blog
$('#blog-carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 25,
    nav: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('#owl-carousel2').owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    nav: true,
    dots: false,
    items: 3,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})
$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoWidth: false,
    // center:true,
    nav: true,
    items: 3,
    responsive: {
        0: {
            autoWidth: false,
            items: 1,
        },
        600: {
            autoWidth: false,
            items: 1
        },
        1000: {
            autoWidth: true,
            items: 2
        }
    }
})


