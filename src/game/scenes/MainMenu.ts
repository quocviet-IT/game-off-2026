import { Scene } from 'phaser';
import { addPlaceholder } from '../placeholder';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0x24305e);

        addPlaceholder(this, 'Game Off 2026', 'Theme announced November 1 · click to start', 'Game');
    }
}
