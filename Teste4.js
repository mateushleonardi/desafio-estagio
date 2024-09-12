// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// b) 2, 4, 8, 16, 32, 64, ____
// c) 0, 1, 4, 9, 16, 25, 36, ____
// d) 4, 16, 36, 64, ____
// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____


    function proximoA(){
        let a = [1, 3, 5, 7];
        let proximo = a[a.length - 1]+2;
        return proximo
    }

    function proximoB(){
        let b = [2, 4, 8, 16, 32,64];
        let proximo = b[b.length - 1]*2;
        return proximo;
    }

    function proximoC(){
        let c = [0, 1, 4, 9, 16, 25, 36];
        let proximo = Math.pow(c.length,2);
        return proximo;
    }
    function proximoD(){
        let d = [4, 16, 36, 64];
        let proximo = Math.pow((d.length + 1) * 2, 2); 
        return proximo;
    }

    function proximoE() {
        let e = [1, 1, 2, 3, 5, 8];
        let proximo = e[e.length - 1] + e[e.length - 2]; 
        return proximo;
    }
    
    function proximoF() {
        let f = [2, 10, 12, 16, 17, 18, 19];
        let proximo;
    
        let ultimoNumeroPar = 16;
        proximo = ultimoNumeroPar + 4; 
        return proximo;
    }
    
    console.log("a) Próximo elemento:", proximoA()); // 9
    console.log("b) Próximo elemento:", proximoB()); // 128
    console.log("c) Próximo elemento:", proximoC()); // 49
    console.log("d) Próximo elemento:", proximoD()); // 100
    console.log("e) Próximo elemento:", proximoE()); // 13
    console.log("f) Próximo elemento:", proximoF()); // 20




 