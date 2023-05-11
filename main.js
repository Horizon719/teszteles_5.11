/* $(function(){
    console.log(masodfokuEgyenletMegoldasa(1,4,4))
}) */
// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

function masodfokuEgyenletMegoldasa(a, b, c) {
    if (typeof a != "number") {
        a = a.replace(",",".");
        if (isNaN(a)) {
            console.log(a);
            if(a === ""){
                return {
                    X1: "a értéke nincs megadva!",
                    X2: "a értéke nincs megadva!",
                }
            }else{
                return {
                    X1: "a értéke nem szám!",
                    X2: "a értéke nem szám!",
                }
            }
        }
    }
    if (typeof b != "number") {
        b = b.replace(",",".");
        if (isNaN(b)) {
            if(b == ""){
                return {
                    X1: "b értéke nincs megadva!",
                    X2: "b értéke nincs megadva!",
                }
            }else{
                return {
                    X1: "b értéke nem szám!",
                    X2: "b értéke nem szám!",
                }
            }
        }
    }
    if (typeof c != "number") {
        c = c.replace(",",".");
        if (isNaN(c)) {
            if(c == ""){
                return {
                    X1: "c értéke nincs megadva!",
                    X2: "c értéke nincs megadva!",
                }
            }else{
                return {
                    X1: "c értéke nem szám!",
                    X2: "c értéke nem szám!",
                }
            }
        }
    }
        let D = b * b - 4 * a * c;
    if(a == 0){
        return {
            X1: "0-val nem osztunk!",
            X2: "0-val nem osztunk!",
        }
    }
    if(D<0){
        return {
            X1: "A diszkrimináns kisebb mint nulla, a szám komplex!",
            X2: "A diszkrimináns kisebb mint nulla, a szám komplex!",
        }
    }
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    const eredmeny = {
        X1: x1,
        X2: x2,
    };
    
    return eredmeny;
}

