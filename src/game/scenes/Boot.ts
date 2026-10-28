import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    create ()
    {
        //  Load anything the Preloader itself needs here (a logo, a font). Nothing yet.
        this.scene.start('Preloader');
    }
}
