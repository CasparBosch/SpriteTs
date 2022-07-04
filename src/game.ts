import * as PIXI from 'pixi.js'

import backgroundImage from "./images/background3.png"


export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader


    backgroundTextures: PIXI.Texture[] = []

    constructor() {
        // create a pixi canvas
        this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
        document.body.appendChild(this.pixi.view)

        // preload all our textures
        this.pixi.loader = new PIXI.Loader()
            .add('backgroundImage', backgroundImage)
        // .add("spritesheetbg5", "spritesheetbg5.json")
        this.pixi.loader.load(() => this.loadCompleted())
    }

    loadCompleted() {
        let background = new PIXI.Sprite(this.pixi.loader.resources["backgroundImage"].texture!)
        this.pixi.stage.addChild(background)

        // for (let i = 0; i < 21; i++) {
        //     const texture = PIXI.Texture.from(`spritesheet5 ${i + 1}.png`)
        //     this.backgroundTextures.push(texture)
        // }

        // createBackground(),{}

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    // createBackground() {
    //     const background = new PIXI.AnimatedSprite(this.backgroundTextures)
    //     // kaboom.x = 100
    //     // kaboom.y = 100
    //     // kaboom.anchor.set(0.5)
    //     background.play()
    //     this.pixi.stage.addChild(background)
    // }

    //update
    private update(delta: number) {

    }

   

}



new Game()