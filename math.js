function fatorial(){
    let num = document.getElementById('txtfat')
    let n = Number(num.value)
    if(num.value.length == 0) {
        fatres.innerHTML = "Por favor digite um número para começar os cálculos."
    }
    else if(num.value < 0) {
        fatres.innerHTML = "Para calcular o fatorial de um número é necessário que ele seja positivo"
    }
    else{
        let fat = 1
        for(let c = n ; c > 1 ; c--)
            fat = fat * c
        fatres.innerHTML = `Fatorial de ${n} é igual a ${fat}`
    }
}
function zerar(){
    fatres.innerHTML = ''
    let num = document.getElementById('txtfat')
    num.value = ''
}




function imc(){
    let peso = document.getElementById('txtpeso')
    let altura = document.getElementById('txtalt')
    let p = Number(peso.value)
    let a = Number(altura.value)
    let resultado = p / (a * a)
    if(p == 0 || a == 0){
        imcres.innerHTML = 'Erro! Digite um valor válido.' 
        diag.innerHTML = ''
    }
    else if(p < 0 || a < 0){
        imcres.innerHTML = 'Erro! O valor do peso e da altura devem ser positivos.' 
        diag.innerHTML = ''
    }
    else{
        imcres.innerHTML = `O valor do seu IMC é de: ${resultado.toFixed(2)}`
        if(resultado < 18.5){
            diag.innerHTML = 'Você está abaixo do peso!'
        }
        else if(resultado > 18.5 && resultado < 24.9){
            diag.innerHTML = 'Peso Normal'
        }
        else if(resultado > 25 && resultado < 29.9){
            diag.innerHTML = 'Sobrepeso'
        }
        else if(resultado > 30 && resultado < 34.9){
            diag.innerHTML = 'Obesidade grau 1'
        }
        else if(resultado > 35 && resultado <= 39.9){
            diag.innerHTML = 'Obesidade grau 2'
        }
        else{
            diag.innerHTML = 'Obesidade grau 3'
        }
    }
}




function primo(){
    let primo = document.getElementById('txtprimo')
    let p = Number(primo.value)
    let acum = 0
    if(p < 0){
        primores.innerHTML = 'Por definição, os número primos são números naturais (1,2,3, …). Portanto, os números negativos não podem ser primos por não serem números naturais.'
    }
    else{
        for(let c = p; c > 0; c--){
            p / c
            if(p % c == 0){
                acum += 1
            }
            else{
                acum += 0
            }
        }
        if(acum == 2){
            primores.innerHTML = `${p} é um número primo`}
        else{
            primores.innerHTML = `${p} não é um número primo`
        }
    }
}




function bhask(){
    let bhaska = document.getElementById('txta')
    let bhaskb = document.getElementById('txtb')
    let bhaskc = document.getElementById('txtc')
    let a = Number(bhaska.value)
    let b = Number(bhaskb.value)
    let c = Number(bhaskc.value)
    let delta = ((b * b) - (4 * a *c))
    let raizDelta = Math.sqrt(delta)
    let xVertice = (-b) / 2 * a
    let yVertice = (-delta) / 4 * a

    if(a > 0){
        if(delta > 0){
            let x1 = (-b + raizDelta) / (2 * a)
            let x2 = (-b - raizDelta) / (2 * a)
        
            bhaskres.innerHTML = `X1 = ${x1.toFixed(2)} e X2  = ${x2.toFixed(2)}`
            bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
            bhaskconc.innerHTML = "Concavidade para cima"
            bhaskinfo.innerHTML = ''
        }
        else if(delta == 0){

            let x1 = (-b + raizDelta) / (2 * a)
            let x2 = (-b - raizDelta) / (2 * a)
        
            bhaskres.innerHTML = `X1 = X2  = ${x2.toFixed(2)}`
            bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
            bhaskconc.innerHTML = "Concavidade para cima"
            bhaskinfo.innerHTML = ''
        }
        else if(delta < 0){
            let raizDelta = Math.sqrt(-delta)
            let imgNum = 'i'

            let x1Real = (-b / (2 * a)) 
            let x1Img = (raizDelta / (2* a))

            let x2Real = (-b / (2 * a)) 
            let x2Img = - (raizDelta / (2* a))

            if(x1Img == 1 || x1Img == -1){
                if(x1Real > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} + ${imgNum} e X2 = ${x2Real} - ${imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para cima"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
                else if(x1Img > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} - ${imgNum} e X2 = ${x2Real} + ${imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para cima"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
            }
            else{
                if(x1Real > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} + ${x1Img + imgNum} e X2 = ${x2Real} - ${-(x2Img) + imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para cima"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
                else if(x1Img > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} - ${-(x1Img) + imgNum} e X2 = ${x2Real} + ${x2Img + imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para cima"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
            }  
        } 
    }
    else if(a < 0){
        if(delta > 0){
            let x1 = (-b + raizDelta) / (2 * a)
            let x2 = (-b - raizDelta) / (2 * a)
        
            bhaskres.innerHTML = `X1 = ${x1.toFixed(2)} e X2  = ${x2.toFixed(2)}`
            bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
            bhaskconc.innerHTML = "Concavidade para baixo"
            bhaskinfo.innerHTML = ''
        }
        else if(delta == 0){
            let x1 = (-b + raizDelta) / (2 * a)
            let x2 = (-b - raizDelta) / (2 * a)
        
            bhaskres.innerHTML = `X1 = X2  = ${x2.toFixed(2)}`
            bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
            bhaskconc.innerHTML = "Concavidade para baixo"
            bhaskinfo.innerHTML = ''
        }
        else if(delta < 0){

            let raizDelta = Math.sqrt(-delta)
            let imgNum = 'i'

            let x1Real = (-b / (2 * a)) 
            let x1Img = (raizDelta / (2* a))

            let x2Real = (-b / (2 * a)) 
            let x2Img = - (raizDelta / (2* a))


            if(x1Img == 1 || x1Img == -1){
                if(x1Real > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} + ${imgNum} e X2 = ${x2Real} - ${imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para baixo"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
                else if(x1Img > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} - ${imgNum} e X2 = ${x2Real} + ${imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para baixo"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
            }
            else{
                if(x1Real > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} - ${-(x1Img) + imgNum} e X2 = ${x2Real} + ${(x2Img) + imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para baixo"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
                else if(x1Img > 0){
                    bhaskres.innerHTML = `X1 = ${x1Real} - ${x1Img + imgNum} e X2 = ${x2Real} + ${-(x2Img) + imgNum}`
                    bhaskcoor.innerHTML = `Xv = ${xVertice.toFixed(2)} Yv = ${yVertice.toFixed(2)}`
                    bhaskconc.innerHTML = "Concavidade para baixo"
                    bhaskinfo.innerHTML = 'Delta negativo. Não há solução real, deve-se usar i, que pertence ao conjunto dos complexos'
                }
            } 
        } 
    }
    else {
        bhaskres.innerHTML = 'Erro!'
        bhaskinfo.innerHTML = 'Como a = 0 não temos uma equação de 2° grau.'
        bhaskcoor.innerHTML = ''
        bhaskconc.innerHTML = ''
    }
}




let valores = []
function adicionar(){
    
    let num = document.getElementById('txtTen')
    let n = Number(num.value)
    let lista = document.getElementById('selnumb')

    
        valores.push(n)
    
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
    
        num.value = ''
        num.focus()
}

function limpar(){

    selnumb.innerHTML = ''
}

function compararNumeros(a, b){
    return a - b;
}

function finalizar(){

    let num = document.getElementById('txtTen')
    valores.join()
    valores.sort(compararNumeros)

    numbres.innerHTML = `Números adicionados ordenados de maneira crescente (${valores})` 
}

let pares = []
function par(){

    let num = document.getElementById('txtTen')
    parres.innerHTML = ''
    let pares = []
        for(let i = 0; i < 10; i++){
            if(valores[i] % 2 == 0 && valores[i] != 00){
                pares.push(valores[i])
            }
        else{
            
        }
    }
    parres.innerHTML = `Números pares ${pares}`
    num.focus()
}

let impares = []
function impar(){

    let num = document.getElementById('txtTen')
    impres.innerHTML = ''
    let impares = []
        for(let i = 0; i < 10; i++){
            if(valores[i] % 2 != 0){
                impares.push(valores[i])
            }
        else{
            
        }
    }
    impres.innerHTML = `Números impares ${impares}`
    num.focus()
}