
class Carousel {
   
    static images = [
        'img/imagem_1.jpg',
        'img/imagem_2.jpg',
        'img/imagem_3.jpg'
    ];

    static titles = [
        'Esta é a nova Ranger Ford 2026. Verifique novidades!',
        'Ford: a nossa história...',
        'Nova Ford Bronco Sport 2026.'
    ];

    static links = [
        'lancamento.html',
        'lancamento.html',
        'lancamento.html'
    ];
   
    constructor() {
        this.count = 0;
    }
  
    next() {
      
        const carouselImage = document.getElementById('carousel-image');
        const carouselTitle = document.getElementById('carousel-title');

        
        carouselImage.src = Carousel.images[this.count];
        carouselTitle.innerHTML = `<a href="${Carousel.links[this.count]}">${Carousel.titles[this.count]}</a>`;

      
        this.count = (this.count + 1) % Carousel.images.length;
    }
  
    start() {
 
        this.next();
       
        setInterval(() => this.next(), 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
   
    const myCarousel = new Carousel();
   
    myCarousel.start();
});



