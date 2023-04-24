class Vestimenta {
    constructor(vestimenta, cuantas, nombre) {
      this.vestimenta = vestimenta.toUpperCase()
      this.cuantas = cuantas
      this.nombre = nombre
      this.price = 0
    }
    calculaPrice() {
      this.precio = (this.cuantas * this.nombre).toFixed(2)
    }
    
  }
  // Plan
  let plan = 0
  let cuotas = 0
  let precio = 0
  class PlanPago {
    constructor(nombre, precioCdo, cuotas) {
      this.nombre = nombre
      this.precioContado = precioCdo
      this.cuotass = cuotas
    }
  
    precio() {
      if (subTotal <= 18) {
        precio = this.precioContado
        return precio
      } else {
        precio = this.precioContado * Math.round(subTotal / 18)
        return precio
      }
    }
    cuotas() {
      let PrecioCtas = 0
      PrecioCtas = (precio / this.cuotass) * 1.04
      return PrecioCtas
    }
  }
  // Cliente
  
  class Cliente {
    constructor(nombre, email, celular) {
      this.nombre = nombre
      this.email = email
      this.celular = celular
    }
    datosDelCliente() {
      alert(`Gracias por contactarnos ${this.nombre},
      Estaremos en contacto con usted a la brevedad ${this.celular}
      Le pedimos amablemente que verifique su email de manera regular ${this.email} 
       
       Resumen:
       ${info}
       * Vestimenta: ${estilos[estilo-1]}
       * Tu plan ${planes[plan-1]}, en cuotas ${cuotas} con ${tarjetas[tarjeta-1]}
       * Precio total: €${envioadomicilio.precio()} 
       * En ${cuotas} cuotas de €${envioadomicilio.cuotas()}
       `)
    }
  }
  
  
  // Variables generales
  let info = ''
  let vestimenta = ''
  let cuantas = 0
  let nombre = 0
  let price = 0
  const estilos = ['s', 'm', 'l', 'xl']
  let planes = ['Envio a domicilio', 'Envio a sucursal']
  let tarjetas = ['Visa', 'Mercado pago', 'Mastercard']
  
  
  
  // Introducción y bienvenida
  alert('Bienvenidos a la guia de vestimenta GUCCI! elegi tu outfit y solicita tu presupuesto')
  
  
  // Funcion para que no quede vacio o se introduzcan caracteres erróneos
  function validaStringVacios(promp) {
    while (promp === '' || !isNaN(promp)) {
      promp = prompt('No has escrito nada o los datos son numericos, vuelve a intentarlo!')
    }
    return promp
  }
  
  // Funcion para que no quede vacio o se introduzcan caracteres erróneos
  function validaNumerosVacios(promp) {
    let num = promp
    while (num <= 0 || isNaN(num)) {
      num = prompt('Escribe un valor numerico, no incluyas letras ni dejes en blanco, vuelve a intentarlo!')
    }
    return num
  }
  
  
  // Sondear un poco sobre gustos del cliente, descripcion
  info = prompt('Cuentanos un poco sobre tus gustos de vestimenta, estamos para ayudarte!')
  validaStringVacios(info)
  
  alert('Muy buena descripcion, ya sabemos algo de tus gustos, ahora cuentanos que prefieres en este momento.')
  console.log(info)
  
  
  // Sondeo
  let respuesta = 'Y'
  const vestimentas = []
  while (respuesta === 'Y') {
    vestimenta = validaStringVacios(prompt('Que vestimenta prefieres, invierno o verano?'))
  
    cuantas = validaNumerosVacios(parseInt(prompt('Cuantas prendas buscabas?')))
  
    nombre = validaStringVacios(prompt('Ingresa nombre de las prendas!'))
  
  
    vestimentas.push(new Vestimenta(vestimenta, cuantas, nombre))
  
    respuesta = prompt('Si queres agregar otra prenda, presiona "y", de lo contrario presiona otra letra').toUpperCase()
  }
  
  for (const i of vestimentas) i.calculaPrice()
  console.log(vestimentas)
  
  let borra = validaStringVacios(prompt('Presione "d" si desea eliminar la ultima prenda, de lo contrario presione cualquier tecla! ').toUpperCase())
  while (borra === 'D') {
    console.log(vestimentas.length)
    if (vestimentas.length != 0) {
      vestimentas.pop()
      console.log(vestimentas.length)
      borra = prompt('se ha eliminado con exito, si quieres eliminar otra presione "d" de lo contrario presione otra tecla').toUpperCase()
    } else {
      alert('No hay mas prendas para eliminar!')
      borra = ''
    }
  }
  
  // Vestimentas
  let estilo = 0
  console.log(estilo)
  estilo = parseInt(prompt('Ahora elige el talle de tu prenda: "1"s, "2"m, "3"l  "4"xl '))
  console.log(estilo)
  
  // Validación
  while (estilo !== 1 && estilo !== 2 && estilo !== 3 && estilo !== 4) {
    estilo = parseInt(prompt('Ingresaste mal la opcion, intentalo de nuevo: "1"s, "2"m, "3"l "4"xl'))
    console.log(estilo)
  }
  alert(`Has elegido: ${estilos[estilo - 1]}`)
  
  
  
  

  
  
  // Elegir plan de envio
  plan = parseInt(prompt('elige la siguientes opciones: "1" envio a domicilo "2" envio a sucursal'))
  
  while (plan != 1 && plan != 2) {
    plan = parseInt(prompt('Opcion invalida, vuelve a intentarlo porfavor: "1" envio a domicilio "2" envio a sucursal'))
  }
  
  let subTotal = 0
  for (const i of vestimentas) {
    console.log(subTotal += parseFloat(i.price))
  }
  console.log(subTotal)
  
  if (plan === 1) {
    precio = 700
  }
   else precio = 900
  
  cuotas = parseInt(prompt('Ingresar numero de cuotas que deseas abonar!'))
  
  
  // Plan de pago
  const envioadomicilio = new PlanPago(planes[plan - 1], precio, cuotas)
  
  console.log(`El precio total es: €${envioadomicilio.precio()}`)
  console.log(`En  ${envioadomicilio.cuotass} cuotas de €${envioadomicilio.precio()}`)
  
  
  let tarjeta = 0
  tarjeta = prompt('Elige un metodo de pago, Presiona: "1" por Visa, "2" por mercado pago, "3" por mastercard')
  
  while (tarjeta != 1 && tarjeta != 2 && tarjeta != 3 && tarjeta != 4 && tarjeta != 5 && tarjeta != 6) {
    tarjeta = prompt('Porfavor marque la opcion que ingreso, presione: "1" por Visa, "2" por mercado pago or "3" por mastercard')
  }
  alert(`Your Tu metodo de pago es: ${tarjetas[tarjeta - 1]}`)
  
  // Datos de contacto del usuario/cliente
  
  const nombreCliente = validaStringVacios(prompt('Ingrese su nombre y apellido'))
  
  
  const emailCliente = validaStringVacios(prompt('Ingrese su email'))
  
  
  let celularCliente = validaNumerosVacios(prompt('Y por ultimo su numero celular'))
  
  
  // Cliente
  const datosCliente = new Cliente(nombreCliente, emailCliente, celularCliente)
  datosCliente.datosDelCliente()
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
