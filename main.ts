namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const StoreItem = SpriteKind.create()
    export const HUD = SpriteKind.create()
}
function getStoreItem (itemName: string) {
    if (itemName == "AXE") {
        if (playerHasWeapon("AXE")) {
            storeItemSprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . e e e . . . . . . 
                . . . e . e e 9 e 9 e e . e . . 
                . . e 9 e 9 9 9 e 9 9 9 e 9 e . 
                . . . e 9 9 9 9 e 9 9 9 9 e . . 
                . . e 9 e 9 9 9 e 9 9 9 e 9 e . 
                . . . e . e e 9 e 9 e e . e . . 
                . . . . . . . e e e . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . . e . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.StoreItem)
        } else {
            storeItemSprite = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 e e e 7 7 7 7 7 7 
                7 7 7 e 7 e e 9 e 9 e e 7 e 7 7 
                7 7 e 9 e 9 9 9 e 9 9 9 e 9 e 7 
                7 7 7 e 9 9 9 9 e 9 9 9 9 e 7 7 
                7 7 e 9 e 9 9 9 e 9 9 9 e 9 e 7 
                7 7 7 e 7 e e 9 e 9 e e 7 e 7 7 
                7 7 7 7 7 7 7 e e e 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.StoreItem)
            sprites.setDataNumber(storeItemSprite, "cost", 10)
            sprites.setDataString(storeItemSprite, "shopName", "axe")
            sprites.setDataString(storeItemSprite, "weaponName", "AXE")
            sprites.setDataBoolean(storeItemSprite, "available", true)
        }
    } else if (itemName == "BIG BOMB") {
        if (playerHasWeapon("BIG BOMB")) {
            storeItemSprite = sprites.create(img`
                . . . . . 5 e e . . . . . . . . 
                . . . . . . . e . . . . . . . . 
                . . . . . . . e . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f f f f f f f f f . . . . 
                . . f f f f f f f f f f f . . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . f f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . f f f f f f f . . . . . 
                `, SpriteKind.StoreItem)
        } else {
            storeItemSprite = sprites.create(img`
                7 7 7 7 7 5 e e 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 
                7 7 7 7 f f f f f f f 7 7 7 7 7 
                7 7 7 f f f f f f f f f 7 7 7 7 
                7 7 f f f f f f f f f f f 7 7 7 
                7 f f f f f f f f f f f f f 7 7 
                7 f f f f f f f f f f f f f 7 7 
                7 f f f f f f f f f f f f f 7 7 
                7 f f f f f f f f f f f f f 7 7 
                7 f f f f f f f f f f f f f 7 7 
                7 f f f f f f f f f f f f f 7 7 
                7 f f f f f f f f f f f f f 7 7 
                7 7 f f f f f f f f f f f 7 7 7 
                7 7 7 f f f f f f f f f 7 7 7 7 
                7 7 7 7 f f f f f f f 7 7 7 7 7 
                `, SpriteKind.StoreItem)
            sprites.setDataNumber(storeItemSprite, "cost", 8)
            sprites.setDataString(storeItemSprite, "shopName", "big bombs")
            sprites.setDataString(storeItemSprite, "weaponName", "BIG BOMB")
            sprites.setDataBoolean(storeItemSprite, "available", true)
        }
    } else if (itemName == "5HEARTS") {
        if (playerHasItem("5HEARTS")) {
            storeItemSprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . 2 2 . . . 2 2 . . . . . . . 
                . 2 2 2 2 . 2 2 2 2 . . . . . . 
                . 2 2 2 2 2 2 2 2 2 . . . . . . 
                . . 2 2 2 2 2 2 2 . . . . . . . 
                . . . 2 2 2 2 2 . . . . . . . . 
                . . . . 2 2 2 . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.StoreItem)
        } else {
            storeItemSprite = sprites.create(assets.image`5hearts`, SpriteKind.StoreItem)
            sprites.setDataNumber(storeItemSprite, "cost", 20)
            sprites.setDataString(storeItemSprite, "shopName", "5 hearts")
            sprites.setDataString(storeItemSprite, "itemName", "5HEARTS")
            sprites.setDataBoolean(storeItemSprite, "available", true)
        }
    } else {
        game.splash("unknown store item: " + itemName)
    }
    return storeItemSprite
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    getCoins(1)
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_battle) {
        player_weapon_index += 1
        if (player_weapon_index >= player_weapons.length) {
            player_weapon_index = 0
        }
        loadWeapon()
        drawArena()
    } else if (in_chooseclass) {
        classChoiceIndex += 1
        if (classChoiceIndex >= available_classes.length) {
            classChoiceIndex = 0
        }
        loadClass()
    } else {
        showStatus()
    }
})
function playerHasItem (itemName: string) {
    return 0 <= player_items.indexOf(itemName)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_battle) {
        doBattle()
    } else if (in_chooseclass) {
        finishChooseclass()
    } else {
        for (let value of sprites.allOfKind(SpriteKind.StoreItem)) {
            if (playerSprite.overlapsWith(value)) {
                vendItemSprite(value)
            }
        }
    }
})
function initMap () {
    in_battle = 0
    info.setLife(player_max_life)
    scene.setBackgroundColor(13)
    clearSprites()
    tiles.setTilemap(tilemap`level1`)
    loadClass()
    playerSprite.setPosition(player_x, player_y)
    controller.moveSprite(playerSprite, 100, 100)
    scene.cameraFollowSprite(playerSprite)
    for (let monster_start of tiles.getTilesByType(assets.tile`Coin0`)) {
        tempCoin = sprites.create(img`
            . . . . . f f f f f f f . . . . 
            . . . f f 5 5 5 5 5 5 5 f f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 f f 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 f 5 5 5 5 5 5 f 
            . . f 5 5 5 5 f f f 5 5 5 5 f . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . . f f 5 5 5 5 5 5 5 f f . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        tiles.setTileAt(monster_start, sprites.castle.tileGrass1)
        tiles.placeOnTile(tempCoin, monster_start)
    }
    for (let monster_start of tiles.getTilesByType(assets.tile`myTile1`)) {
        placeMonster(monsterList._pickRandom(), [monster_start])
    }
    for (let monster_start of tiles.getTilesByType(assets.tile`myTile8`)) {
        placeMonster(monsterListLvl2._pickRandom(), [monster_start])
    }
    for (let monster_start of tiles.getTilesByType(assets.tile`myTile9`)) {
        placeMonster(boss_monster_image, [monster_start])
    }
    fillStores()
    playerSprite.z = 99
}
function getMonster (monsterImage: Image) {
    monster_reward = 1
    monster_image = monsterImage
    if (monsterImage.equals(assets.image`the angry person`)) {
        monster_name = "angry person"
        monster_life = 4
        monster_reward = 2
    } else if (monsterImage.equals(img`
        . . . . . b b b . . . . . . . . 
        . . . . b 2 2 2 b b . . . . . . 
        . . . . b 2 2 2 2 2 b . . . . . 
        . . . b 2 1 2 2 2 2 2 b . . . . 
        . . . b 2 2 2 2 2 2 2 2 b . . . 
        . . b 2 2 2 2 2 2 1 1 2 b . . . 
        . . b 2 2 2 2 2 2 1 1 2 2 b . . 
        . b 2 2 1 1 2 2 2 2 2 2 2 b . . 
        . b 2 2 1 1 2 2 2 2 2 b b . . . 
        . b 2 2 2 2 2 2 b b b e . . . . 
        . . b b b b b b c c c e . . . . 
        . . . . e c c c c c c e . . . . 
        . . . . e c c c c c c b . . . . 
        . . . . e c c c c c c b . . . . 
        . . . . . b c c c c b . . . . . 
        . . . . . . b b b b . . . . . . 
        `)) {
        monster_name = "poisonous mushroom"
        monster_life = 2
    } else if (monsterImage.equals(assets.image`purple monster`)) {
        monster_name = "purple monster"
        monster_life = 3
    } else if (monsterImage.equals(assets.image`Reaper`)) {
        monster_name = "Reaper"
        monster_life = 7
        monster_reward = 3
    } else if (monsterImage.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f f f . . 
        . . . . . . . . . . f d f d f . 
        . . . . . . . . . . f d d d f . 
        . . . . . . . . . . . f f f . . 
        . . . . . . . . . . . . . f . . 
        . . . . . . . . . . . . f f f . 
        . . . . 3 3 3 3 . . . f . f . f 
        . . 3 3 f 3 3 f 3 . . . . f . . 
        . . 3 3 3 3 3 3 3 . . . . f . . 
        3 3 3 3 3 3 3 3 3 3 3 . f . f . 
        3 3 3 3 3 3 3 3 3 3 3 f . . . f 
        `)) {
        monster_name = "blob & cyclops"
        monster_reward = 2
        monster_life = 10
    } else if (monsterImage.equals(img`
        . 2 2 2 2 2 . . . . . 2 2 . . . 
        . 2 1 4 1 2 . . . . 2 1 3 2 . . 
        . 2 4 4 4 2 . . . 2 2 3 3 2 . . 
        . 2 2 2 2 2 . . . . 2 2 3 2 . . 
        . . 2 2 2 . . . . . . 2 2 2 . . 
        . 2 2 2 2 2 . . . . 2 2 2 2 2 . 
        . 2 . 2 . 2 . . . . 2 . 2 . 2 . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . 2 . . . . . . . . 2 . . . 
        . . . 2 2 . . . . . . . 2 2 . . 
        . . . 2 2 . . . . . . . 2 2 . . 
        . . 2 2 . 2 . . . . . 2 . . 2 . 
        . . 2 . . 2 . . . . . 2 . . 2 . 
        . 2 . . . 2 . . . . 2 . . . 2 . 
        . . . . . . . . . . . . . . . . 
        `)) {
        monster_name = "two red monsters"
        monster_reward = 3
        monster_life = 12
    } else if (monsterImage.equals(img`
        . 8 8 8 8 8 . . . . . 8 8 . . . 
        . 8 1 4 1 8 . . . . 8 1 3 8 . . 
        . 8 4 4 4 8 . . . 8 8 3 3 8 . . 
        . 8 8 8 8 8 . . . . 8 8 3 8 . . 
        . . 8 8 8 . . . . . . 8 8 8 . . 
        . 8 8 8 8 8 . . . . 8 8 8 8 8 . 
        . 8 . 8 . 8 . . . . 8 . 8 . 8 . 
        . . . 8 . . . . . . . . 8 . . . 
        . . . 8 . . . . . . . . 8 . . . 
        . . . 8 . . . . . . . . 8 . . . 
        . . . 8 8 . . . . . . . 8 8 . . 
        . . . 8 8 . . . . . . . 8 8 . . 
        . . 8 8 . 8 . . . . . 8 . . 8 . 
        . . 8 . . 8 . . . . . 8 . . 8 . 
        . 8 . . . 8 . . . . 8 . . . 8 . 
        . . . . . . . . . . . . . . . . 
        `)) {
        monster_name = "two blue monsters"
        monster_reward = 4
        monster_life = 14
    } else if (monsterImage.equals(assets.image`Evil Sorcerer`)) {
        monster_name = "Evil Sorcerer"
        monster_life = 25
    } else {
        monster_name = "unknown monster"
        monster_life = 2
    }
}
function loadWeapon () {
    player_attack_name = player_weapons[player_weapon_index]
    if (player_attack_name == "SMALL BOMB") {
        player_min_damage = 1
        player_max_damage = 1
    } else if (player_attack_name == "SWORD") {
        player_min_damage = 0
        player_max_damage = 2
    } else if (player_attack_name == "BIG BOMB") {
        player_min_damage = 2
        player_max_damage = 4
    } else if (player_attack_name == "AXE") {
        player_min_damage = 0
        player_max_damage = 5
    } else {
        game.splash("no weapon loaded")
        player_max_damage = 0
        player_min_damage = 0
    }
}
function clearSprites () {
    for (let spriteKind of [
    SpriteKind.Player,
    SpriteKind.Coin,
    SpriteKind.Enemy,
    SpriteKind.Bomb,
    SpriteKind.Text,
    SpriteKind.StoreItem,
    SpriteKind.HUD
    ]) {
        for (let value of sprites.allOfKind(spriteKind)) {
            value.destroy()
        }
    }
}
function getCoins (num: number) {
    if (num > 1) {
        for (let index = 0; index < num - 1; index++) {
            info.changeScoreBy(1)
            music.baDing.playUntilDone()
        }
    }
    info.changeScoreBy(1)
    music.baDing.play()
}
function showStatus () {
    tempStr = "" + info.score() + " coins\\n"
    if (player_class_name == "DEMOLITIONIST") {
        tempStr = "" + tempStr + player_bombs + " big bombs\\n"
    }
    tempStr = "" + tempStr + "Weapons:"
    for (let value of player_weapons) {
        tempStr = "" + tempStr + "\\n" + value
    }
    game.showLongText(tempStr, DialogLayout.Center)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bomb, function (sprite, otherSprite) {
    music.powerUp.play()
    player_bombs += 1
    otherSprite.destroy(effects.rings, 500)
})
function playerHasWeapon (weaponName: string) {
    return 0 <= player_weapons.indexOf(weaponName)
}
function finishChooseclass () {
    in_chooseclass = 0
    loadClass()
    initClass()
    initMap()
}
function placeMonster (monsterImage: Image, monsterStart: any[]) {
    newMonster = monsterImage
    if (newMonster.equals(assets.image`big bomb`)) {
        spriteKind = SpriteKind.Bomb
    } else {
        spriteKind = SpriteKind.Enemy
    }
    newMonsterSprite = sprites.create(newMonster, spriteKind)
    tiles.setTileAt(monsterStart[0], sprites.castle.tilePath5)
    tiles.placeOnTile(newMonsterSprite, monsterStart[0])
    if (playerSprite.overlapsWith(newMonsterSprite)) {
        newMonsterSprite.destroy()
    }
}
function vendItemSprite (mySprite: Sprite) {
    cost = sprites.readDataNumber(mySprite, "cost")
    shopName = sprites.readDataString(mySprite, "shopName")
    weaponName = sprites.readDataString(mySprite, "weaponName")
    itemName = sprites.readDataString(mySprite, "itemName")
    if (!(sprites.readDataBoolean(mySprite, "available"))) {
        return
    }
    if (cost > info.score()) {
        game.showLongText("The " + shopName + " costs " + cost, DialogLayout.Bottom)
    } else {
        if (game.ask("Buy the " + shopName + " for " + cost + "?")) {
            info.changeScoreBy(-1 * cost)
            if (!(weaponName.isEmpty())) {
                player_weapons.push(weaponName)
            }
            if (!(itemName.isEmpty())) {
                player_items.push(itemName)
                getItem(itemName)
            }
            music.powerUp.play()
            player_x = playerSprite.x
            player_y = playerSprite.y
            initMap()
        }
    }
}
function initClass () {
    player_weapons = []
    player_items = []
    store_items = []
    if (player_class_name == "WARRIOR") {
        player_weapons.push("SWORD")
        store_items.push("AXE")
    } else if (player_class_name == "DEMOLITIONIST") {
        player_weapons.push("SMALL BOMB")
        monsterList.push(assets.image`big bomb`)
        store_items.push("BIG BOMB")
    }
    store_items.push("5HEARTS")
}
function drawArena () {
    loadWeapon()
    clearSprites()
    tiles.setTilemap(tilemap`level2`)
    scene.setBackgroundColor(13)
    for (let player_start of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setTileAt(player_start, sprites.builtin.brick)
        tiles.placeOnTile(sprites.create(playerSprite.image, SpriteKind.Player), player_start)
    }
    for (let monster_start of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(monster_start, sprites.builtin.brick)
        tiles.placeOnTile(sprites.create(monster_image, SpriteKind.Enemy), monster_start)
    }
    pause(100)
    sprites.create(img`
        ..........333333333333..........
        ........3332222222222333........
        ......33322222222222222333......
        .....3322222222222222222233.....
        ....332222222222222222222233....
        ....322222222222222222222223....
        ...33222222222222222222222233...
        ...33222222222222222222222233...
        ...bb2222222222222222222222bb...
        ...bb2222222222222222222222bb...
        ...bba22222222222222222222abb...
        ...bba22222222222222222222abb...
        ...bbaa222222222222222222aabb...
        ...bb3aa2222222222222222aa3bb...
        ...ab23aaa222222222222aaa32ba...
        ..ccb2223aaaaaaaaaaaaaa3222bcc..
        .ccbc222223aaaaaaaaaa322222cbcc.
        .fcbcc22222222222222222222ccbcf.
        .fcbbcc222222222222222222ccbdcf.
        .fbbbbccc22222222222222cccbddcf.
        .fbcbbbbccccccccccccccccbdddbcf.
        .fbccbbbbbccccccccccccb111ddccf.
        .f3ccccbbbddddddddddddd111dcccf.
        .f3ccccccbbddddddddddddddbbcccf.
        .f3cccccccccccccbbbbbbbbbdbcccf.
        ..f3cccccccccbbbbbbbbbbbddbccf..
        ..f3cccccccccbbbbbbbbbbbddbccf..
        ..ff3ccccccccbbbbbbbbbbbddbcff..
        ...ff3cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `, SpriteKind.HUD).setPosition(8, 109)
    attackTextSprite = textsprite.create("" + player_attack_name + " attack")
    attackTextSprite.setOutline(1, 2)
    attackTextSprite.setPosition(63, 114)
    if (1 < player_weapons.length) {
        sprites.create(img`
            ..........333333333333..........
            ........3335555555555333........
            ......33355555555555555333......
            .....3355555555555555555533.....
            ....335555555555555555555533....
            ....355555555555555555555553....
            ...33555555555555555555555533...
            ...33555555555555555555555533...
            ...bb5555555555555555555555bb...
            ...bb5555555555555555555555bb...
            ...bbe55555555555555555555ebb...
            ...bbe55555555555555555555ebb...
            ...bbee555555555555555555eebb...
            ...bbbee5555555555555555eebbb...
            ...ab5beee555555555555eeeb5ba...
            ..ccb555beeeeeeeeeeeeeeb555bcc..
            .ccbc55555beeeeeeeeeeb55555cbcc.
            .fcbcc55555555555555555555ccbcf.
            .fcbbcc555555555555555555ccbdcf.
            .fbbbbccc55555555555555cccbddcf.
            .fbcbbbbccccccccccccccccbdddbcf.
            .fbccbbbbbccccccccccccb111ddccf.
            .f3ccccbbbddddddddddddd111dcccf.
            .f3ccccccbbddddddddddddddbbcccf.
            .f3cccccccccccccbbbbbbbbbdbcccf.
            ..f3cccccccccbbbbbbbbbbbddbccf..
            ..f3cccccccccbbbbbbbbbbbddbccf..
            ..ff3ccccccccbbbbbbbbbbbddbcff..
            ...ff3cccccccbbbbbbbbbbbddbff...
            ....ffcccccccbbbbbbbbbbbdbff....
            ......ffccccbbbbbbbbbbbbff......
            ........ffffffffffffffff........
            `, SpriteKind.HUD).setPosition(153, 109)
        textSprite2 = textsprite.create("change attack")
        textSprite2.setOutline(1, 14)
        textSprite.setBorder(1, 5)
        textSprite2.setPosition(96, 104)
    }
    monsterLifeTextSprite = textsprite.create("" + monster_name + " " + monster_life, 1, 8)
    monsterLifeTextSprite.setBorder(1, 8)
    monsterLifeTextSprite.setPosition(150 - monsterLifeTextSprite.width / 2, 5)
}
function chooseClass () {
    in_chooseclass = 1
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d9999dd999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd999dd999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd99ddd999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d999dddd9ddddd9999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd99dddd99dd999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd999dd99dddddd999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd9ddddddddd999999999d99999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd9dddd999dd99999999d99999999
        999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddd99ddddd99d99999999dddd999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddd9d999999999d99999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddd9999dddd9999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d99999ddddd99ddddddddddddd999ddd9999999
        9999999999999999999999999999d99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d9999dddddddddddddddddddddd99ddddd99999
        999999999999999999999999999dd999999d9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd99999dddddddddddddddddddddddddd999999
        999999999999999999999999999ddd99999d999999999999d999999999999999999999999999999999999999999999999999999999999999999999999dd9999dddddddddddddddddddddddddd9999999
        99999999999999999999999999ddddd9999dd9999999999ddd9999999999999999999999999999999999999999999999999999999999999999999999ddd9999dddddddddddddddddddddddddd9999999
        9999999999999999999999999ddddddd999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999d9999dddddddddddddddddddddddddddd999999
        9999999999999999999999999d9dddd999ddd999999999ddddd999999999999999999999999999999999999999999999999999999999999999999999dddd99dddddddddddddddddddddddddddddd9999
        99999999999999999999999999ddddd999dddd99999999dddddd999999999999999999999999999999999999999999999999999999999999999999999dd99ddddddddddddddddddddddddddddddddd99
        9999999999999999999999999ddddddd999dd9999999999dddd999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddd
        99999999999999999999999999dddd9dd99ddd9999999dddddd999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999dddddd999ddd999999999dddddd9999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd
        999999999999999999999999dd9ddddd99dddd9999999ddddd9dd99999999999999999999999999999999999999999999999999999d999999999dddddddddddddddddddddddddddddddddddddddddddd
        99999999999999999999999999dddddddddddd999999ddddddd999999999999999999999999999999999999999999999999999999dd99999999ddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999999999999999ddddddddddddddddddd99dddddd99999999999999999999999999999999999999999999999999999ddd9999999ddddddddddddddddddddddddddddddddddddddddddddd
        9999999999999d9999999999ddddddddddddddddddddd99dddddd999999999999999999999999999999999999999999999999999ddddd99999dddddddddddddddddddddddddddddddddddddddddddddd
        999999999999ddd99999999999ddddddddddddddddddddddd999999999999999999999999999999999999999999999999999999ddddddd9999dddddddddddddddddddddddddddddddddddddddddddddd
        999999999999dd9999999999dddddddddddddddddddddddddd9999999999999999999999999999999999d999999999999999999d9dddd9999ddddddddddddddddddddddddddddddddddddddddddddddd
        99999999999ddd999999999dddddddddddddddddddddddddddd999999999999999999999999999999999dd999999999999999999ddddd9999ddddddddddddddddddddddddddddddddddddddddddddddd
        9999999999ddddd999999ddddddddddddddddddddddddddddddd99999999999999999999999999999999dd99999d99999999999ddddddd99dddddddddddddddddddddddddddddddddddddddddddddddd
        99999999999ddd99999dddddddddddddddddddddddddddddddddd999999999999999999999999999999dddd9999d9999999999ddddddd6666666666666666666666ddddddddddddddddddddddddddddd
        999999999999ddd999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddd9999dd999999dddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        9999999999dddd99ddddddddddddddddddddddddddddddddddddddd999999999999999999999dd999999dd99999dd99999ddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        99999999999ddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999ddd9999dddddd99ddd9999dddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        999999999999ddddddddddddddddddddddddddddddddddddddddddddd99999999999999999dddd99999dddd999dddd999dddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999ddd9999ddddd999dd999ddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        99999999999ddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999dddddd9dddddddd99ddd99ddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        9999999999ddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999dddddd9ddddddddddddd99dddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        99999999dddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999dddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999ddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        99999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999ddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999dddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        9dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999ddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999dddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6dddddddddddddddddddd6ddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666666666ddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddbbbbddddddddddddd5ddddd5dd5555555dd5ddddd5dd555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbddddddd
        dddddddbb5555bbddddddddddd55dddd5dd5dddddddd5ddddd5dddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb2222bbddddd
        ddddddb55555555bdddddddddd55dddd5dd5ddddddddd5ddd5ddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22ddddd2dddddd2dddddddddddb22222222bdddd
        ddddddb55555555bdddddddddd55dddd5dd5ddddddddd5ddd5ddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22dd22ddd2ddddd2ddddddddddddb22222222bdddd
        dddddb5555555555bddddddddd5d5ddd5dd5dddddddddd5d5dddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dd2dddd2ddddddddddddb2222222222bddd
        dddddb5555555555bdddeeeedd5d5ddd5dd5dddddddddd5d5dddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dd2ddd2dddddddddddddb2222222222bddd
        dddddbb55555555bbddddddddd5dd5dd5dd5ddddddddddd5ddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddd2d2dd2ddddddddddddddbb22222222bbddd
        dddddbb55555555bbddddddddd5dd5dd5dd5555555ddddd5ddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddd2d2d2ddddddeeeedddddbb22222222bbddd
        dddddbebb5555bbebddddddddd5dd5dd5dd5ddddddddddd5ddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddd2d22ddddddddddddddddbebb2222bbebddd
        dddddbeeebbbbeeebddddddddd5ddd5d5dd5dddddddddd5d5dddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddd2d22ddddddddddddddddbeeebbbbeeebddd
        dddddbeeeeeeeeeebdddeeeedd5ddd5d5dd5dddddddddd5d5dddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddd2d2d2dddddddddddddddbeeeeeeeeeebddd
        ddddddbeeeeeeeebdddddddddd5dddd55dd5ddddddddd5ddd5ddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddd2d2dd2ddddddddddddddbeeeeeeeeeebddd
        ddddddbeeeeeeeebdddddddddd5dddd55dd5ddddddddd5ddd5ddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddddd2d2ddd2ddddeeeeddddddbeeeeeeeebdddd
        dddddddbbeeeebbddddddddddd5dddd55dd5dddddddd5ddddd5dddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dd2dddd2dddddddddddddbeeeeeeeebdddd
        dddddddddbbbbddddddddddddd5ddddd5dd5555555dd5ddddd5dddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2dddddd2dd2ddddd2dddddddddddddbbeeeebbddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22dd22ddd2dddddd2ddddddddddddddbbbbddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22dddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    textSprite2 = textsprite.create("Choose", 0, 8)
    textSprite2.setMaxFontHeight(10)
    textSprite2.setPosition(46, 41)
    textSprite3 = textsprite.create("a class:", 0, 8)
    textSprite3.setMaxFontHeight(10)
    textSprite3.setPosition(58, 63)
    classChoiceIndex = 0
    loadClass()
}
function getItem (itemName: string) {
    if (itemName == "5HEARTS") {
        player_max_life += 5
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.StoreItem, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(otherSprite, "available")) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . 1 7 7 7 1 . 
            . . . . . . . . . 1 7 7 f 7 7 b 
            . . . . . . . . . 1 7 f 7 f 7 b 
            . . . . . . . . . 1 7 f f f 7 b 
            . . . . . . . . . 1 7 f 7 f 7 b 
            . . . . . . . . . . b 7 7 7 b . 
            . . . . . . . . . . . b b b . . 
            `, SpriteKind.HUD)
        mySprite.setPosition(otherSprite.x, otherSprite.y)
        mySprite.lifespan = 1000
    }
})
function fightMonster (enemy: Sprite) {
    getMonster(enemy.image)
    game.showLongText("prepare to battle the " + monster_name, DialogLayout.Top)
    scene.centerCameraAt(0, 0)
    drawArena()
    in_battle = 1
}
function loadClass () {
    if (playerSprite) {
        playerSprite.destroy()
    }
    player_class_name = available_classes[classChoiceIndex]
    if (player_class_name == "WARRIOR") {
        playerSprite = sprites.create(img`
            . 9 . . . f f f f f f . . . 9 . 
            . 9 . . . f f f f f f . . . 9 . 
            . 9 . . . f f 2 f 2 f . . . 9 . 
            . 9 . . . f f f f f f . . . 9 . 
            . 9 . . . f f f f f f . . . 9 . 
            . 9 . . . f f f f f f . . . 9 . 
            f f f f . . . f f f . . f f f f 
            . f . . . . . f f f . . . . f . 
            . f f f f f f f f f f f f f f . 
            . f . . . . . f f f . . . . f . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f f . f f . . . . . 
            . . . . . f f . . . f f . . . . 
            . . . . f f . . . . . f f . . . 
            . . . f f . . . . . . . f f . . 
            `, SpriteKind.Player)
    } else if (player_class_name == "DEMOLITIONIST") {
        playerSprite = sprites.create(assets.image`Demolitionist`, SpriteKind.Player)
    } else {
        playerSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 6 6 . . . . 6 6 6 . . . 
            . . . 6 6 . . . . . . 6 6 . . . 
            . . . . . . . . . . . 6 6 . . . 
            . . . . . . . . . . 6 6 . . . . 
            . . . . . . . . 6 6 6 . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
    if (in_chooseclass) {
        playerSprite.setPosition(120, 60)
        if (textSprite) {
            textSprite.destroy()
        }
        textSprite = textsprite.create(player_class_name)
        textSprite.setOutline(1, 6)
        textSprite.setPosition(120, 75)
    }
}
function doBattle () {
    if (player_attack_name == "BIG BOMB" && player_bombs == 0) {
        game.showLongText("No bombs :(", DialogLayout.Bottom)
        player_damage = 0
    } else {
        player_damage = randint(player_min_damage, player_max_damage)
        if (player_attack_name == "BIG BOMB") {
            player_bombs += -1
        }
    }
    if (player_damage == 0) {
        music.pewPew.play()
        game.splash("You miss!")
    } else {
        music.knock.play()
        game.showLongText("You hit with " + player_attack_name + " for " + player_damage + " damage", DialogLayout.Bottom)
        monster_life += player_damage * -1
        drawArena()
        if (0 >= monster_life) {
            music.bigCrash.play()
            game.splash("The monster dies!")
            if (monster_image.equals(boss_monster_image)) {
                game.over(true, effects.starField)
            }
            getCoins(monster_reward)
            initMap()
        }
    }
    if (0 < monster_life) {
        monster_damage = randint(0, 2)
        if (monster_damage == 0) {
            music.pewPew.play()
            game.splash("" + monster_name + " misses!")
        } else {
            music.smallCrash.play()
            game.showLongText("" + monster_name + " hits you for " + monster_damage + " damage", DialogLayout.Bottom)
            info.changeLifeBy(monster_damage * -1)
            if (info.life() <= 0) {
                game.over(false, effects.melt)
            }
        }
    }
}
function fillStores () {
    for (let value of tiles.getTilesByType(assets.tile`store0`)) {
        tiles.setTileAt(value, sprites.castle.tilePath5)
        tiles.placeOnTile(getStoreItem(store_items[0]), value)
    }
    for (let value of tiles.getTilesByType(assets.tile`store1`)) {
        tiles.setTileAt(value, sprites.castle.tilePath5)
        tiles.placeOnTile(getStoreItem(store_items[1]), value)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    player_x = playerSprite.x
    player_y = playerSprite.y
    fightMonster(otherSprite)
})
let monster_damage = 0
let player_damage = 0
let textSprite3: TextSprite = null
let monsterLifeTextSprite: TextSprite = null
let textSprite: TextSprite = null
let textSprite2: TextSprite = null
let attackTextSprite: TextSprite = null
let store_items: string[] = []
let itemName = ""
let weaponName = ""
let shopName = ""
let mySprite: Sprite = null
let cost = 0
let newMonsterSprite: Sprite = null
let spriteKind = 0
let newMonster: Image = null
let player_class_name = ""
let tempStr = ""
let player_max_damage = 0
let player_min_damage = 0
let player_attack_name = ""
let monster_life = 0
let monster_name = ""
let monster_image: Image = null
let monster_reward = 0
let tempCoin: Sprite = null
let playerSprite: Sprite = null
let player_items: string[] = []
let classChoiceIndex = 0
let player_weapons: string[] = []
let in_chooseclass = 0
let in_battle = 0
let storeItemSprite: Sprite = null
let boss_monster_image: Image = null
let monsterListLvl2: Image[] = []
let monsterList: Image[] = []
let player_weapon_index = 0
let player_bombs = 0
let player_y = 0
let player_x = 0
let player_max_life = 0
let available_classes: string[] = []
game.setDialogTextColor(5)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    `)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff2222fffffffffffffff2222ffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffff2fff2fffff22222ffff2ff22fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f2ffffffffffffffff2fff2ffff2fffffffff2fff2fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f2fffffff22222ffff2fff2ffff2fffffffff2fff2fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ff2fffffffffffffff2fff2ffff2fffffffff2fff2fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffff22222ffff2f222fffff2fff2fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffff2ffffffffffffff222ffffff2fffffffff2fff2fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffff2ffffffffffffff2ff2fffff2fffffffff2fff2fffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffff2fffff22222ffff2ff2fffff2fffffffff2f222fffff
    ffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffff2fffffff2fffffffffffff2fff2ffff2fffffffff222fffffff
    ffffffffffffff2ffffffff22fffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffff2fff222222ffffffffffffff
    ffffffffffffff2fffffffff2fffffffffff22222222222fffffff2222222fffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff2fffffffff2fffffffffff2fffffffffffffffff2fffff22ffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff2fffffffff2fffffffffff2ffffffffffffffff2ffffffff2ffffffffff2ff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff2ffffffff2ffffffffffff2ffffffffffffffff2fffffffffffffffffff2ff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff2fffffff22ffffffffffff2fffffffffffffff22ffffffffffffffffff2fff2ffffffffffffffffff55555ffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff
    ffffffffffffff2fffffff2fffffffffffff2fffffffffffffff2fffffffffffffffffff2ffff2fffffffffffffffff5fff55fffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffff
    ffffffffffffff2ffff222ffffffffffffff2ffffffffffffff22fffffffffffffffffff2ffff2fffffffffffffffff5ffff5ffffffffffff5ffffffffffff5555ffff5ffff5ffffffffffffffffffff
    ffffffffffffff2fff22ffffffffffffffff2ffffffffffffff2fffffffffffffffffff22222222ffffffffffffffff5ffff5fffffffffffff5fffff5ffff55ff55fff5ffff5ffffffffffffffffffff
    ffffffffffffff222222222fffffffffffff2ffffffffffffff2fffffffffffffffffff2ffffff2ffffffffffffffff5ffff5fff555555ffff5fffff5fff5fffff5fff5ffff5ffffffffffffffffffff
    ffffffffffffff2fffffff22ffffffffffff2f22222ffffffff2fffffffffffffffffff2ffffff2ffffffffffffffff5ffff5ffffffffffffff5fff5ffff5fffff5fff5ffff5fff555ffffffffffffff
    ffffffffffffff2ffffffff2ffffffffffff2ffffffffffffff2ffffffffffffffffff2fffffff2ffffffffffffffff555555fffffffffffffff5ff5ffff5fffff5fff5ffff5fff5ff5fffffffffffff
    ffffffffffffff2fffffffff2fffffffffff2fffffffffffffff222222222fffffffff2ffffffff2fffffffffffffff5f555fffffffffffffffff55ffff55555555fff5ffff5fff5ff5ff5ffffffff5f
    ffffffffffffff2fffffffff2fffffffffff2fffffffffffffffffffffff22fffffff2fffffffff2fffffffffffffff5fff55fff555555ffffffff5ffff5ffffffffff5ffff5fff5ff5fff5ff5ffff5f
    ffffffffffffff2ffffffff2ffffffffffff2ffffffffffffffffffffffff2fffffff2fffffffff2fffffffffffffff5ffff5ffffffffffffffff5fffff5ffffffffff5ffff5ff5fff5ffff5f55ff5ff
    ffffffffffffff2fffffff22ffffffffffff2ffffffffffffffffffffffff22ffffff2ffffffffff2ffffffffffffff5ffff5ffffffffffffffff5fffff55fffffffff5ffff5ff5fff5ffff55ff5f5ff
    ffffffffffffff22222222ffffffffffffff2fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffff5ffff5fffffffffffffff5fffffff55fff5ffff5ffff5ff5ff55ffff5ffff5fff
    ffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffff2ffffffffffffffffffffffffffffffff555555fffffffffffffff5ffffffff55555fffffffff5fff555ffffffffffffff
    fffffffffffffffffffffffffffffffffff2ff2222ffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff2222ffffff2ffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff22fffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff222f222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2f2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2fffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2ffffff22fffffffffffff2fffffffff2222222222ffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2fffffff2fffffffffffff2ffffffffffffff2ffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2fffffff2ffffffffffff22ffffffffffffff2ffffffffffffffff2ffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2fffffff2ffffffffffff22ffffffffffffff2ffffffffffffffff2ffffffffff2ffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2ffffffff2fffffffffff22ffffffffffffff2ffffffffffffffff2ffffffffff2ffffffffffffffff2ff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2ffffffff2ffffffffff2f2ffffffffffffff2ffffffffffffffff2ffffffffff2ffffffffffffffff2fffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2ffffff222ffffffffff2f2ffffffffffffff2ffffffffffffffff2ffffffffff2ffffffffffffffff2ffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff2ffff222fffffffffff2fff2fffffffffffff2ffffffffffffffff2ffffffffff2ffffffffffffffff2fffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff222222fffffffffffff2fff2fffffffffffff2ffffffffffffffff2fffffffff2fffffffffffffffff2ffffffffffffffff22fff222ffffffffffffffffffffffffffffffffffffffff
    ffffffffffff2ff222ffffffffffffff2fff2fffffffffffff2ffffffffffffffff2fffffffff2fffffffffffffffff2ffffffffffffffff2ffffff22fffffffffffffffffffffffffffffffffffffff
    ffffffffffff2ffff22ffffffffffff2ffff2ffffffffffff2ffffffffffffffff2ffffffffff2fffffffffffffffff2fffffffffffffff22fffffff2fffffffffffffffffffffffffffffffffffffff
    ffffffffffff2fffff22fffffffffff2222f2ffffffffffff2ffffffffffffffff2ffffffffff2fffffffffffffffff2fffffffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffff
    ffffffffffff2ffffff2ffffffffff2ffff222fffffffffff2ffffffffffffffff2ffffffffff2fffffffffffffffff2fffffffffffffff2ffffffff2fffffffffffffffffffffffffffffffffffffff
    ffffffffffff2fffffff2fffffffff2ffffff2fffffffffff2ffffffffffffffff2ffffffffff2ffffffffffffffff2f22ffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff2fffffff2ffffffff2fffffff2fffffffffff2ffffffffffffffff2ffffffffff2ffffffffffffffff2fff2222ffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff2fffffff2ffffffff2fffffff2fffffffffff2ffffffffffffffff2fffffffff2fffffffffffffffff2fffffff222fffff2fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff2fffffff2ffffffff2fffffff2fffffffffff2ffffffffffffffff2fffffffff2fffffffffffffffff2fffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff2fffffff2fffffff2ffffffff2fffffffffff2ffffffffffffffff2fffffffff2fffffffffffffffff2fffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff22ffffff22fffffff2ffffffff2fffffffffff2ffffffffffffffff2fffffffff2fffffffffffffffff2ffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffff
    fffffffffff2fffffff2fffffff2ffffffffff2fffffffff2ffffffffffffffff2ffffffffff2fffffffffffffffff2ffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffff
    fffffffffff2fffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffff2fffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffff
    fffffffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222fffffffffffff2ffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222fffffff2222fffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffff2fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffff22fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffdffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22ffffffff2ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffdffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffff22fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffdffffdffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffff22222222ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffdffffdffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdffffffffffffffffffffdfffddfffffffffffffffffffffddfffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdffffffffffffffffffffdfdddffffffffffffffffffffffdddffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdfffffffffffffffffffdddffffffffffffffffffffffffffddffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdfffffffffffffffffffdfdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdfffffffffffffffffffdfffddfffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdddfffdfffffffffffffdffffdfffffdfddfffffffffffffdffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdfdfffddfffdffffffffdffffdfffffdfffdffdfffffffffdfffddddddffffdffffffffffffffdfffdfdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffdfdffffdfffdfffffffddffffdffffdddffdffdfdddfffffdfffdffffdffffdffffffffffffffdfffdddfddfffffffffffffffffffffffffffffffffffffffffffaaafffffffffffffff
    ffffffffffffdddffffddfdffffffffdffffddffffdffdddffdddfddffffdffdfffffdffffddddddfffffffffdfffdffffdfffffffffffffffffffffffffffffffffaffffffffaffaaffffffffffffff
    fffffffffffffffffffffddffffffffdffffdfffffdfffffffdffffddfffdffdfffffdffffddfffdddddfffffdfffdffffdfffffffffffffffffffffffffffffffffaffffffaafffafafffffffffffff
    ffffffffffffffffffffddfffffffffdffddffffffdfffffffdfffffdfffdffdfffffdffffdffffddffddffffdfffdffffdfffffffffffffffffffffffffffffffffaffffffaffffaffaafffffffffff
    ffffffffffffffffffffdffffffffffdddffffffffddffffffdfffffdfffdffdffffddffffdffffddfffdffffdfffdffffdffffffffffffffffffffaaaffffffffffaffffffaffffafffaaffffffffff
    fffffffffffffffffffddffffffffffffffffffffffdddddffdfffffdfffdffddffddfdfffdffffdffffdffffdfffdffffdfffffffffffffffffffaffffffffffaaaaffffffaafffaffffaaaafffffff
    fffffffffffffffffffdffffffffffffffffffffffffffffffdfffffdfffdfffdddfffdfffdffffdffffdffffdffffffffdffffffffffffffffffffffaaffffffaffaaffffffaafaafffffffaaafffff
    ffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffddfffffffffdfffdffffdfffffdfffdffffffffdffffdffffffffffffffafaaafffffaaffaffffffffaaaffffffffffafffff
    fffffffffffffffffddffffffffffffffffffffffffffffffffffffffffdffffffffffffffdffffdfffffdffddfffffffffffffdffffffffffffffaaaffaafffaffaffffffffffffffffffffffffffff
    fffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffdffffffffffffffdffffdfffffdfffffffffffffffffdfffffffffffffaffffffafffaaaaffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffdffdffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffaffffffafffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffff7fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffff7ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffdffffffffffffff77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffff7fffffff7ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffdfffffffffffff77ffffffffffffffff77fffffffffffffff777777777fffffffffffffffff7fffffffffffff7fffffff7ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffdfffffffffffff7fffffffffffffffff77ffffffffffffff7ffffffffffffffffffffffffff77ffffffffffff77ffffff7ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffdffffffffffffff7ffffffffffffffff7f7fffffffffffff7fffffffffffffffffffffffff7ff7fffffffffff77ffffff7ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffdffffffffffffff7fffffffffffffff7fff7ffffffffffff7fffffffffffffffffffffffff7ff7fffffffffff7f7fffff7ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffdfffffffffffffff77fffffffffffff7fff7ffffffffffff7fffffffffffffffffffffffff7fff7ffffffffff7f7fffff7ffffffffffffffffffffffffff
    ffffffffffffffffffffffdffffffffddddddfffffffffffffffff7777ffffffff7fffff7fffffffffff7ffffffffffffffffffffffff7ffff7ffffffffff7ff7ffff7ffffffffffffffffffffffffff
    ffffffffffffdddddddfffddddddfffdffffdffffffffffffffffffff77fffffff7fffff7fffffffffff7ffffffffffffffffffffffff7fffff7fffffffff7ff7fff7fffffffffffffffffffffffffff
    ffffffffffffdffffddfffddfffdfffdffffdfffffffffffffffffffff7fffffff7ffffff7ffffffffff7fffffffffffffffffffffff7fffffff7ffffffff7fff7ff7fffffffffffffffffffffffffff
    ffffffffffffdffffddfffdffffdfffdffffdfffffffffffffffffffff7ffffff7ffffffff7fffffffff7fffffffffffffffffffffff7fffffff7ffffffff7fff7ff7fffffffffffffffffffffffffff
    ffffffffffffdffffddfffdffffdfffdffffdfffffffffffffffffffff7ffffff7ffffffff7fffffffff7ffffff7777777ffffffffff7777777777fffffff7ffff7f7fffffffffffffffffffffffffff
    ffffffffffffdfffdfdfffdffffdffdfffffdfffffffffffffffffffff7ffffff77777777777ffffffff7ffffffffffff7fffffffff7fffffffff7fffffff7ffff7f7fffffffffffffffffffffffffff
    ffffffffffffdfffdfdfffdffffdffdfffffdfffffffffffffffffffff7fffff7ffffffffff7ffffffff7ffffffffffff7fffffffff7ffffffffff7ffffff7fffff77fffffffffffffffffffffffffff
    ffffffffffffdddddfddffdffffdffdffffdddffffffffffffffffffff7fffff7fffffffffff7fffffff7ffffffffffff7ffffffff7ffffffffffff7fffff7fffff77fffffffffffffffffffffffffff
    ffffffffffffffffffffffdffffdffdfffddfdffffffffffffffffffff7ffff7fffffffffffff7ffffff7ffffffffffff7ffffffff7ffffffffffff7ffffffffffff7fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffddfddffdffffffffffffffffffff7ffff7fffffffffffff7ffffff7ffffffffffff7ffffffff7fffffffffffff7fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffdddffffffffffffffffffffffff7ffff7ffffffffffffff7ffffff7777777777777fffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777ffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.showLongText("Press A to start", DialogLayout.Bottom)
music.jumpDown.play()
game.setDialogTextColor(8)
game.setDialogFrame(img`
    . 6 . 6 . 6 6 . . 6 6 . 6 6 . 
    6 . 6 6 6 . . 6 6 . 6 6 6 . 6 
    . 6 6 1 1 6 6 1 6 1 1 6 . 6 . 
    6 . 6 1 1 1 1 1 1 1 1 1 6 6 . 
    . 6 1 1 1 1 1 1 1 1 1 1 1 6 6 
    . 6 1 1 1 1 1 1 1 1 1 1 6 . 6 
    6 6 6 1 1 1 1 1 1 1 1 1 1 6 . 
    6 . 1 1 1 1 1 1 1 1 1 1 1 6 . 
    . 6 1 1 1 1 1 1 1 1 1 1 6 . 6 
    6 . 6 1 1 1 1 1 1 1 1 1 6 6 . 
    . 6 1 1 1 1 1 1 1 1 1 1 1 6 . 
    . 6 1 1 1 1 1 1 1 1 1 1 6 6 . 
    . 6 6 1 6 1 1 6 6 1 1 6 . 6 6 
    6 . 6 6 . 6 6 6 . 6 . . 6 . 6 
    6 6 6 . 6 6 . . 6 6 6 6 6 6 . 
    `)
available_classes.push("WARRIOR")
available_classes.push("DEMOLITIONIST")
player_max_life = 5
player_x = 72
player_y = 8
player_bombs = 0
player_weapon_index = 0
info.setScore(0)
monsterList.push(img`
    . . . . . b b b . . . . . . . . 
    . . . . b 2 2 2 b b . . . . . . 
    . . . . b 2 2 2 2 2 b . . . . . 
    . . . b 2 1 2 2 2 2 2 b . . . . 
    . . . b 2 2 2 2 2 2 2 2 b . . . 
    . . b 2 2 2 2 2 2 1 1 2 b . . . 
    . . b 2 2 2 2 2 2 1 1 2 2 b . . 
    . b 2 2 1 1 2 2 2 2 2 2 2 b . . 
    . b 2 2 1 1 2 2 2 2 2 b b . . . 
    . b 2 2 2 2 2 2 b b b e . . . . 
    . . b b b b b b c c c e . . . . 
    . . . . e c c c c c c e . . . . 
    . . . . e c c c c c c b . . . . 
    . . . . e c c c c c c b . . . . 
    . . . . . b c c c c b . . . . . 
    . . . . . . b b b b . . . . . . 
    `)
monsterList.push(assets.image`purple monster`)
monsterList.push(assets.image`Reaper`)
monsterList.push(assets.image`the angry person`)
monsterListLvl2.push(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . f d f d f . 
    . . . . . . . . . . f d d d f . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . . . f . . 
    . . . . . . . . . . . . f f f . 
    . . . . 3 3 3 3 . . . f . f . f 
    . . 3 3 f 3 3 f 3 . . . . f . . 
    . . 3 3 3 3 3 3 3 . . . . f . . 
    3 3 3 3 3 3 3 3 3 3 3 . f . f . 
    3 3 3 3 3 3 3 3 3 3 3 f . . . f 
    `)
monsterListLvl2.push(img`
    . 2 2 2 2 2 . . . . . 2 2 . . . 
    . 2 1 4 1 2 . . . . 2 1 3 2 . . 
    . 2 4 4 4 2 . . . 2 2 3 3 2 . . 
    . 2 2 2 2 2 . . . . 2 2 3 2 . . 
    . . 2 2 2 . . . . . . 2 2 2 . . 
    . 2 2 2 2 2 . . . . 2 2 2 2 2 . 
    . 2 . 2 . 2 . . . . 2 . 2 . 2 . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . 2 2 . . . . . . . 2 2 . . 
    . . . 2 2 . . . . . . . 2 2 . . 
    . . 2 2 . 2 . . . . . 2 . . 2 . 
    . . 2 . . 2 . . . . . 2 . . 2 . 
    . 2 . . . 2 . . . . 2 . . . 2 . 
    . . . . . . . . . . . . . . . . 
    `)
monsterListLvl2.push(img`
    . 8 8 8 8 8 . . . . . 8 8 . . . 
    . 8 1 4 1 8 . . . . 8 1 3 8 . . 
    . 8 4 4 4 8 . . . 8 8 3 3 8 . . 
    . 8 8 8 8 8 . . . . 8 8 3 8 . . 
    . . 8 8 8 . . . . . . 8 8 8 . . 
    . 8 8 8 8 8 . . . . 8 8 8 8 8 . 
    . 8 . 8 . 8 . . . . 8 . 8 . 8 . 
    . . . 8 . . . . . . . . 8 . . . 
    . . . 8 . . . . . . . . 8 . . . 
    . . . 8 . . . . . . . . 8 . . . 
    . . . 8 8 . . . . . . . 8 8 . . 
    . . . 8 8 . . . . . . . 8 8 . . 
    . . 8 8 . 8 . . . . . 8 . . 8 . 
    . . 8 . . 8 . . . . . 8 . . 8 . 
    . 8 . . . 8 . . . . 8 . . . 8 . 
    . . . . . . . . . . . . . . . . 
    `)
boss_monster_image = assets.image`Evil Sorcerer`
chooseClass()
