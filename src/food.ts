import * as PIXI from 'pixi.js';
import foodUrl from '../assets/Food.png';
import foodData from '../assets/FoodData.json';

export default class Food {
  private readonly app: PIXI.Application;
  private readonly foodTextures: PIXI.Texture[];
  private loaded: boolean = false;

  constructor(app: PIXI.Application) {
    this.app = app;
    this.foodTextures = [];
  }

  public load(): Promise<void> {
    return new Promise((resolve) => {
      this.app.loader.add('food', foodUrl).load(() => {
        for (const foodItem of foodData) {
          const baseTexture = this.app.loader.resources.food.texture;
          const texture = new PIXI.Texture(
            baseTexture,
            new PIXI.Rectangle(
              foodItem.x,
              foodItem.y,
              foodItem.width,
              foodItem.height,
            ),
          );
          this.foodTextures.push(texture);
        }
        this.loaded = true;
        resolve();
      });
    });
  }

  public getRandomFoodTexture(): PIXI.Texture {
    if (!this.loaded) {
      throw new Error('Food textures not loaded yet!');
    }
    const randomIndex = Math.floor(Math.random() * this.foodTextures.length);
    return this.foodTextures[randomIndex];
  }
}