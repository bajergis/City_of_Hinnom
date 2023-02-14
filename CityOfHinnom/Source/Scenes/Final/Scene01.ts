namespace CityOfHinnom {
    export async function Scene01(): ƒS.SceneReturn {

        console.log("Walk Through Town Scene starting");
        //Needs option to go to cafe, if not cafe then directly to up the hill

        let text = {
            Narrator: {
                T0001: "This café seemed pretty inviting",
                //T0002: "As I opened the door and the typical bell signals that a customer entered, I was greeted by a timid voice. A red haired girl with a camera around her neck stood behind the counter, carefully grinding coffee beans as if she wasn’t sure how much pressure to apply. When she saw me, her eyes lit up a bit.",
                T0003: "As much as I enjoy coffee, I don't think that it's such a good idea to waste my time like this. I should press on and find some other clues about this place.",
            }
        }

        await ƒS.Location.show(locations.CafeFront);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
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
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
                ƒS.Speech.clear();
                break;
        }
    }
}