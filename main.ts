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
    notmgl = 400
})
let sprite: game.LedSprite = null
let notmgl = 0
notmgl = 150
sprite = game.createSprite(2, 2)
let Sprit2 = game.createSprite(2, 7)
let Sprite3 = game.createSprite(2, 0)
game.setLife(3)
basic.forever(function () {
    sprite.move(1)
    Sprit2.move(1)
    Sprite3.move(1)
    basic.pause(notmgl)
    sprite.ifOnEdgeBounce()
    Sprit2.ifOnEdgeBounce()
    Sprite3.ifOnEdgeBounce()
})
