namespace CityOfHinnom {
    export async function Scene03(): ƒS.SceneReturn {

        console.log("Up the Hill Scene starting");
        //option to enter garden for florist, if not directly to tram

        let text = {
            Narrator: {
                T0001: "I walked up this alleyway that seemed less inviting the longer I stayed on it. There was a car a bit further up showing no signs of deterioration.",
                T0002: "The trees stood tall and completely blocked out the view to the sky. The only sounds were my footsteps echoing off the pavement, and the occasional rustling of leaves.",
                T0003: "But then, as I reached the top of the slope, I saw something that seemed a bit out of place. In front of me was an overgrown botanical garden, bursting with life.",
                T0004: "Vines and flowers covered every surface, climbing up the walls made up of glass panels all the way to the roof.",
                T0005: "I couldn’t tell if the place was abandoned or if someone started taking care of it. It gave off a sense of tended chaos. The air was heavy with the scent of sap and flora. I took a step forward, the street had turned to gravel.",
            }
        }

        await ƒS.Location.show(locations.SlopeHill);
        await ƒS.update(transitions.wet.duration, transitions.wet.alpha, transitions.wet.edge);
        ƒS.Sound.play(sound.pianoshort1, 1, false);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

    }
}