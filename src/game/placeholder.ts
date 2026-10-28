import { Scene } from 'phaser';

const TEXT_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
    fontFamily: 'Arial Black',
    color: '#ffffff',
    stroke: '#000000',
    strokeThickness: 8,
    align: 'center'
};

//  Draws a centred title and hint, then starts the `next` scene on the first click or tap.
//  Used by every scene until the real game replaces them.
export function addPlaceholder (scene: Scene, title: string, hint: string, next: string): void
{
    const { width, height } = scene.scale;

    scene.add.text(width / 2, height / 2 - 40, title, { ...TEXT_STYLE, fontSize: 56 }).setOrigin(0.5);
    scene.add.text(width / 2, height / 2 + 40, hint, { ...TEXT_STYLE, fontSize: 24, strokeThickness: 4 }).setOrigin(0.5);

    scene.input.once('pointerdown', () => {

        scene.scene.start(next);

    });
}
