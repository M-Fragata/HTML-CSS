/* Variáveis globais */





function carregar() {

    eTriangulo()

}

function eTriangulo(){

    const tri1 = Number(document.querySelector('input#tri1').value)
    const tri2 = Number(document.querySelector('input#tri2').value)
    const tri3 = Number(document.querySelector('input#tri3').value)
    const res = document.querySelector('div#res')


    if(Math.abs(tri2 - tri3) < tri1 && tri1 < tri2 + tri3 && 
       Math.abs(tri1 - tri3) < tri2 && tri2 < tri1 + tri3 && 
       Math.abs(tri1 - tri2) < tri3 && tri3 < tri1 + tri2) {

        oculto.style.display = 'block'

    } else {
        alert('[Erro] não é um triângulo!')
    }

    if (tri1 == tri2 && tri2 == tri3) {
        res.innerHTML = `Triângulo Equilátero`
    } else if (tri1 == tri2 || tri1 == tri3 || tri2 == tri3) {
        res.innerHTML = `Triângulo Isósceles`
        document.querySelector('#foto').src = 'imagens/isosceles.png'
    } else {
        res.innerHTML = `Triângulo Escaleno`
        document.querySelector('#foto').src = 'imagens/escaleno.png'
    }
    
}


