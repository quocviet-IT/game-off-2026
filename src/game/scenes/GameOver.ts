import { Scene } from 'phaser';
import { addPlaceholder } from '../placeholder';

export class GameOver extends Scene
{
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x5e1f24);

        addPlaceholder(this, 'Game Over', 'Click to return to the menu', 'MainMenu');
    }
}
