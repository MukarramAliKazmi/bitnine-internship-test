function checkPalandrom(x) {
    for(let i = 0; i < x.length/2; i++) {
        if (x[i] != x[x.length-1-i]) {
            let y = x.split("").reverse().join("")
            return y
        }
    }
    return true
}

console.log(checkPalandrom("Hello"))
console.log(checkPalandrom("ABCDDCBA"))