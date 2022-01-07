

$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
$(this).next('p').slideToggle(300)
})


$('.busy').parallax({imageSrc:'https://catherineasquithgallery.com/uploads/posts/2021-03/1614646965_14-p-sovremennii-fon-dlya-fotoshopa-17.jpg',
speed: 0.01
});