import * as PIXI from 'pixi.js'

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
            .add("spritesheet5", "spritesheet5(1).json")
        this.pixi.loader.load(() => this.loadCompleted())
    }

    loadCompleted() {

        for (let i = 0; i < 21; i++) {
            const texture = PIXI.Texture.from(`spritesheet5(1) ${i + 1}.png`)
            this.backgroundTextures.push(texture)
        }

        // this.createBackground(), {}
        let background = new PIXI.AnimatedSprite(this.backgroundTextures)
        background.scale.set(
            window.innerWidth / background.getBounds().width,
            window.innerHeight / background.getBounds().height
        )
        this.pixi.stage.addChild(background)
        background.animationSpeed = 0.15
        background.play()

        this.pixi.ticker.add((delta: number) => this.update(delta))
    }

    createBackground() {
        const background = new PIXI.AnimatedSprite(this.backgroundTextures)
        background.x = 100
        background.y = 100
        background.anchor.set(0.5)
        background.play()
        this.pixi.stage.addChild(background)
    }

    // update
    private update(delta: number) {

    }



}

new Game()