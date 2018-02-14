const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  kittenArr = kittens.slice()
  kittenArr.push(name)
  return kittenArr
}

function prependKitten(name) {
  kittenArr = kittens.slice()
  kittenArr.unshift(name)
  return kittenArr
}

function removeLastKitten(){
  kittenArr = kittens.slice()
  kittenArr.pop()
  return kittenArr
}
