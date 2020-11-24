let A = 0
input.onButtonPressed(Button.A, function () {
    A = randint(0, 10)
    basic.showNumber(A)
    if (A < 5) {
        basic.showString("WIN")
    } else if (A >= 5) {
        basic.showString("FALSE")
    }
})
