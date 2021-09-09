input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    notmgl = 400
})
let sprite: game.LedSprite = null
let notmgl = 0
notmgl = 150
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(notmgl)
    sprite.ifOnEdgeBounce()
})
