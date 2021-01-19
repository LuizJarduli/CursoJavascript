let num = [5, 8, 9]
num.push(5)
num.sort()
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encotrado`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}