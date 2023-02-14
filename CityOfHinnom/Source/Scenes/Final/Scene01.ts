namespace CityOfHinnom {
    export async function Scene01(): ƒS.SceneReturn {

        console.log("Walk Through Town Scene starting");
        //Needs option to go to cafe, if not cafe then directly to up the hill

        let text = {
            Narrator: {
                T0001: "This café appeared pretty inviting. The lights were on, so who knows, maybe I’ll find someone else.",
                T0002: "As much as I enjoy coffee, I don't think that it's such a good idea to waste my time like this. I should press on and find some other clues about this place.",
            }
        }

        await ƒS.Location.show(locations.CafeFront);
        await ƒS.update(transitions.watercolor.duration, transitions.watercolor.alpha, transitions.watercolor.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        //choice
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);

        let goIntoCafeChoice = {
            answerEnter: "Enter the café.",
            answerWalkOn: "Continue walking.",
        };

        let goIntoCafe = await ƒS.Menu.getInput(goIntoCafeChoice, "choicesCSSclass");

        switch (goIntoCafe) {
            case goIntoCafeChoice.answerEnter:
                // Go to Scene 02
                console.log(dataForSave.alphaScore);
                //await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
                ƒS.Speech.clear();
                return "scene02";
            case goIntoCafeChoice.answerWalkOn:
                // Go to Scene 03
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
                ƒS.Speech.clear();
                break;
        }
    }
}