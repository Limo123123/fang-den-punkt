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
let sprite: game.LedSprite = null
let notmgl = 500
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
control.inBackground(function () {
    for (let index = 0; index < 1; index++) {
        basic.pause(5000)
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
        basic.pause(5000)
        notmgl = 100
        basic.pause(5000)
        notmgl = 50
        basic.pause(5000)
        notmgl = 0
    }
})
control.inBackground(function () {
    for (let index = 0; index < 1e+55; index++) {
        basic.setLedColor(0xff0000)
        basic.pause(1000)
        basic.setLedColor(0xff0000)
        basic.pause(1000)
        basic.setLedColor(0xff8000)
        basic.pause(1000)
        basic.setLedColor(0xffff00)
        basic.pause(1000)
        basic.setLedColor(0xff9da5)
        basic.pause(1000)
        basic.setLedColor(0x00ff00)
        basic.pause(1000)
        basic.setLedColor(0xb09eff)
        basic.pause(1000)
        basic.setLedColor(0x00ffff)
        basic.pause(1000)
        basic.setLedColor(0x007fff)
        basic.pause(1000)
        basic.setLedColor(0x65471f)
        basic.pause(1000)
        basic.setLedColor(0x0000ff)
        basic.pause(1000)
        basic.setLedColor(0x7f00ff)
        basic.pause(1000)
        basic.setLedColor(0xff0080)
        basic.pause(1000)
        basic.setLedColor(0xff00ff)
        basic.pause(1000)
        basic.setLedColor(0xffffff)
        basic.pause(1000)
        basic.setLedColor(0x999999)
        basic.pause(1000)
        basic.setLedColor(0x000000)
    }
})
control.inBackground(function () {
    for (let index = 0; index < 1; index++) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
    }
})
