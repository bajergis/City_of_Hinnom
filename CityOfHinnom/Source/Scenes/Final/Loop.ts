namespace CityOfHinnom {
    export async function Loop(): ƒS.SceneReturn {

        console.log("Looping back to the beginning.");

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.BlackScreen);
        await ƒS.update();
        ƒS.Sound.play(sound.pianoshort5, 1, false);
        await ƒS.update(5);
    }
}