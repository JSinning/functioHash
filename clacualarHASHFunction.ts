const text = '“Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.”'

let result = 0

const vec = []

for (const prop of text) {
  vec.push(prop)

}

const momentoComida = vec

for (var i = 0; i < vec.length; i = i + 3) {

  if (text[i + 1] === undefined) {
    result += text.charCodeAt(i)
    break
  }

  result += (text.charCodeAt(i) - text.charCodeAt(i + 1)) * text.charCodeAt(i + 2)
}

console.log(result)