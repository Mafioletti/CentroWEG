function regra3C(){
    let a = parseFloat(prompt("Digite valor a: (relativo ao f(a descobrir))"))
    let b = parseFloat(prompt("Digite valor b: (relativo ao d)"))
    let c = parseFloat(prompt("Digite valor c: (relativo ao e)"))

    let d = parseFloat(prompt("Digite valor d: "))
    let e = parseFloat(prompt("Digite valor e: "))

    let f = ((e / c) * (d / b)) * a;

    console.log(f)
}