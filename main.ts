let x = 0
basic.forever(function () {
    cuteBot.setServo(cuteBot.ServoList.S1, x)
    x += 5
    if (x > 180) {
        x = 0
    }
})
