/**
 * Classe para gerenciar a lógica do carrossel de imagens e textos.
 */
class Carousel {
    // atributos estáticos para armazenar os dados dos slides.
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
        '#', // '#' link que não leva a lugar nenhum
        'lancamento.html'
    ];
    /**
     * O construtor inicializa o contador do slide atual.
     */
    constructor() {
        this.count = 0;
    }
    /**
     * O método next() atualiza a imagem e o título na tela.
     */
    next() {
        // Seleciona os elementos do HTML pelos seus IDs.
        const carouselImage = document.getElementById('carousel-image');
        const carouselTitle = document.getElementById('carousel-title');

        // Atualiza o atributo 'src' da imagem e o conteúdo HTML do título.
        carouselImage.src = Carousel.images[this.count];
        carouselTitle.innerHTML = `<a href="${Carousel.links[this.count]}">${Carousel.titles[this.count]}</a>`;

        // Incrementa o contador. O operador '%' cria um loop,
        // fazendo o contador voltar a 0 quando chega ao fim da lista.
        this.count = (this.count + 1) % Carousel.images.length;
    }
    /**
     * O método start() inicia o carrossel, trocando de slide a cada 2 segundos.
     */
    start() {
        // Chama o método next() uma vez para exibir o primeiro slide imediatamente.
        this.next();
                // Configura um intervalo para chamar o método next() a cada 2000 milissegundos (2 segundos).
        setInterval(() => this.next(), 2000);
    }
}
// Ouve o evento 'DOMContentLoaded', que dispara quando o HTML está totalmente carregado.
document.addEventListener('DOMContentLoaded', () => {
    // Cria uma nova instância da nossa classe Carousel.
    const myCarousel = new Carousel();
    // Inicia o carrossel.
    myCarousel.start();
});

// //carousel

// //Array storage class
// let carouselArr = [];


// //class Carousel
// class Carousel {

    
      
//     static Start(arr){
//         if(arr){

//             if(arr.length > 0){
//                 Carousel._sequence = 0;
//                 Carousel._size = arr.length;
//                 Carousel.Next(); //start
//                 Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
//             }
            
//         } else {
//             throw "Method Start need a Array Variable.";
//         }
//     }

//     static Next(){
        
//     }
// };
