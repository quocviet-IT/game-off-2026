import { Scene } from 'phaser';
import { addPlaceholder } from '../placeholder';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x1e5128);

        addPlaceholder(this, 'Game scene', 'Gameplay goes here · click to finish', 'GameOver');
    }
}
