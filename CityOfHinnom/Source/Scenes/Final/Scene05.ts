namespace CityOfHinnom {
    export async function Scene05(): ƒS.SceneReturn {

        console.log("Take the Tram Scene starting");

        let text = {
            Narrator: {
                T0001: "I returned to the center of the city and walked through the vacant roads that should be bustling. I should be dodging people and cars as I made my way towards the train station.",
                T0002: "I finally found a sign that led the way. After what felt like hours, I finally found the train station, with its towering glass walls and bright lights.",
                T0003: "I hurried inside, eager to see if I could catch the next tram that would take me out of here. I didn’t have to buy a ticket, so I just hopped over the barrier and took a seat in the first wagon I saw.",
                T0004: "It felt weird to enter as the only passenger. The hum of the engine echoed through the hall until the doors closed and the tram accelerated to leave the station.",
                T0005: "There wasn’t much of a view, it was mostly just the back of some buildings, so I closed my eyes to focus on the sway of the tram.",
            }
        }

        await ƒS.Location.show(locations.CityStreetNight);
        await ƒS.update(transitions.wipe.duration, transitions.wipe.alpha, transitions.wipe.edge);
        ƒS.Sound.play(sound.transition3, 1, false);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
        await ƒS.Location.show(locations.TrainStation);
        await ƒS.update(transitions.watercolor.duration, transitions.watercolor.alpha, transitions.watercolor.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

    }
}