let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "O objeto fornecido não é da classe Car";
    }

    if (el.checked) {
        if (carArr.length >= 2) {
            alert("Você só pode selecionar 2 carros para comparar.");
            el.checked = false;
            return;
        }
        carArr.push(carClass);
    } else {
        const position = GetCarArrPosition(carArr, carClass);
        if (position > -1) {
            carArr.splice(position, 1);
        }
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("É necessário escolher dois veículos para comparar.");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    if (carArr.length !== 2) return;

    const car1 = carArr[0];
    const car2 = carArr[1];
    const formatPrice = (price) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Carro 1
    document.getElementById('compare_image_0').innerHTML = `<img src="${car1.image}" width="150">`;
    document.getElementById('compare_modelo_0').innerText = car1.nome;
    document.getElementById('compare_alturacacamba_0').innerText = car1.alturaCacamba + " mm";
    document.getElementById('compare_alturaveiculo_0').innerText = car1.alturaVeiculo + " mm";
    document.getElementById('compare_alturasolo_0').innerText = car1.alturaSolo + " mm";
    document.getElementById('compare_capacidadecarga_0').innerText = car1.capacidadeCarga + " kg";
    document.getElementById('compare_motor_0').innerText = car1.motor;
    document.getElementById('compare_potencia_0').innerText = car1.potencia + " cv";
    document.getElementById('compare_volumecacamba_0').innerText = car1.volumeCacamba + " L";
    document.getElementById('compare_roda_0').innerText = car1.roda;
    document.getElementById('compare_preco_0').innerText = formatPrice(car1.preco);

    // Carro 2
    document.getElementById('compare_image_1').innerHTML = `<img src="${car2.image}" width="150">`;
    document.getElementById('compare_modelo_1').innerText = car2.nome;
    document.getElementById('compare_alturacacamba_1').innerText = car2.alturaCacamba + " mm";
    document.getElementById('compare_alturaveiculo_1').innerText = car2.alturaVeiculo + " mm";
    document.getElementById('compare_alturasolo_1').innerText = car2.alturaSolo + " mm";
    document.getElementById('compare_capacidadecarga_1').innerText = car2.capacidadeCarga + " kg";
    document.getElementById('compare_motor_1').innerText = car2.motor;
    document.getElementById('compare_potencia_1').innerText = car2.potencia + " cv";
    document.getElementById('compare_volumecacamba_1').innerText = car2.volumeCacamba + " L";
    document.getElementById('compare_roda_1').innerText = car2.roda;
    document.getElementById('compare_preco_1').innerText = formatPrice(car2.preco);
}
