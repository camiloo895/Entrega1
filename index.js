//LOGIN
let login = confirm("¿Deseas acceder a tu perfil de compra?")

while (login === true){
        let usuario = prompt ("Ingresa tu nombre")
        if (usuario){
            console.log("✅ Bienvenid@ " + usuario)
            login = false
        }
    }

    // confirmacion edad
const autoriEdad = false
let edadUser = prompt ("Ingresa tu edad")

if (autoriEdad === true || edadUser >= 18){
    console.log("Puedes acceder a nuestra tienda")
} else{
    console.log(" 🔞 No tienes mayoria de edad")
}

// STORE

let consulta = confirm ("Deseas ver y agregar al carrito de compras?")


console.log("BIENVENID@ A LA TIENDA DE ROPA")

if(consulta){
    let prenda = prompt ("¿que clase de prenda estás buscando? pantalon-camisa-jean-tenis.")
    let talla = prompt ("Ingresa tu talla desde s hasta xl:")
    //declaracion precios
    const camisa = 5000 
    const pantalon =10000
    const tenis=7000
    const jean=1500

switch(talla) {
    case "s":
        console.log("Has añadido " + prenda + " en talla " + talla)
        break

    case "":
        console.lmog("Has añadido " + prenda + " en talla " + talla)
        break

    case "l":
        console.log("Has añadido " + prenda + " en talla " + talla)
        break
    
    case "xl":
        console.log("Has añadido " + prenda + " en talla " + talla)
        break

    default:
        console.warn("No tenemos " + prenda + " en talla " + talla)
    }
}

let confirmacionB = prompt("¿Deseas Añadir otro articulo si / no?")

while(confirmacionB="si"){
        let prendaB = prompt ("¿que te gustaría añadir? pantalon-camisa-jean-tenis.")
        let talla2 = prompt ("Ingresa tu talla desde s hasta xl:")
    
    switch(talla2) {
        case "s":
            console.log("Has añadido " + prendaB + " en talla " + talla2)
            break
    
        case "m":
            console.log("Has añadido " + prendaB + " en talla " + talla2)
            break
    
        case "l":
            console.log("Has añadido " + prendaB + " en talla " + talla2)
            break
        
        case "xl":
            console.log("Has añadido " + prendaB + " en talla " + talla2)
            break
    
        default:
            console.warn("No tenemos " + prendaB + " en talla " + talla2)
        }
    break
}

function suma (valor){
    return (talla+talla2)
}


