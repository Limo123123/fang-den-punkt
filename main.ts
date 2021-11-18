input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(10)
    } else {
        game.removeLife(1)
    }
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(10)
    } else {
        game.removeLife(1)
    }
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(10)
    } else {
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.B, function () {
    notmgl = 450
    basic.pause(5000)
    notmgl = 400
    basic.pause(5000)
    notmgl = 350
    basic.pause(5000)
    notmgl = 300
    basic.pause(5000)
    notmgl = 250
    basic.pause(5000)
    notmgl = 200
    basic.pause(5000)
    notmgl = 150
})
let sprite: game.LedSprite = null
let notmgl = 0
notmgl = 500
sprite = game.createSprite(2, 2)
let Sprit2 = game.createSprite(2, 7)
let Sprite3 = game.createSprite(2, 0)
game.setLife(9)
basic.forever(function () {
    sprite.move(1)
    Sprit2.move(2)
    Sprite3.move(2)
    basic.pause(notmgl)
    sprite.ifOnEdgeBounce()
    Sprit2.ifOnEdgeBounce()
    Sprite3.ifOnEdgeBounce()
})
