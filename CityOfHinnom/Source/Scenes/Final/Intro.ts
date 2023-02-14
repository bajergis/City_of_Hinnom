namespace CityOfHinnom {
    export async function Intro(): ƒS.SceneReturn {

        console.log("Intro Scene starting");

        let text = {
            Narrator: {
                T0001: "As the sun set over the city, its rays cast a fading glow over the empty streets and buildings.",
                T0002: "I’ve only been here for what seems like a few hours, but for as far as I could see, there doesn’t seem to be any sign of life. The only sound was the gentle rustling of leaves in the breeze, the buzzing of the dated lamps slowly turning on one by one, as well as the squeaking wheels of the vacant trams stopping in the nearby station.",
                T0003: "The buildings were nothing but empty shells. Their windows reflected the artificial glow of the traffic lights. Not that there’s any traffic, to begin with.",
                T0004: "When I first opened my eyes and found myself here, I thought I must be dreaming. As I walked through the deserted city, I began to question everything. Why was I here? How did I get here? I have never been in a city like this, what is this place? I felt dreary and nauseous. Who wouldn’t get a bit panicky in this situation. ",
                T0005: "I was glad that I could at least remember my name...",
                T0006: "I felt like I had just woken up from a dreamless sleep that lasted for days. It was like the last few days of my life were just a blur, a hazy memory that I couldn’t grasp. But one thing was for sure: I wanted to go back home but had no idea where it was.",
                T0007: "The lamps seemed dated and buzzed about like cicadas. Their noise got amplified because of the absence of all other sounds.",
                T0008: "At first, I felt a sense of fear and confusion. Where had everyone gone? What had happened to the bustling metropolis that this place seems to have been?                ",
                T0009: "But as I started exploring the city, I did notice some upsides. I was able to roam the streets and buildings without fear of crowds or traffic. I could explore places I had never been before.",
                T0010: "I just couldn't shake the feeling that I was being watched, and that I was not truly alone. This city seemed to be functioning just fine on its own, store lights were on, traffic lights worked. It didn’t even need a population.",
                T0011: "Then, what purpose does a city serve if there’s no one to live in it. Maybe I was the only one here and all of this was entirely made for me.",
                T0012: "There was a tempting scent leading me just a few buildings down the street. The aroma of freshly brewed coffee, I wondered if that’s automated as well.",
            }
        }

        await ƒS.Location.show(locations.CityStreetNight);
        await ƒS.update();
        ƒS.Sound.play(sound.terror1, 1, true);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
        // Enter name 
        if (dataForSave.nameProtagonist != "") {
            await ƒS.Speech.tell(characters.narrator, dataForSave.nameProtagonist + ".");
        } else {
            while (dataForSave.nameProtagonist == "") {
                dataForSave.nameProtagonist = await ƒS.Speech.getInput();
                switch (dataForSave.nameProtagonist) {
                    case "Alpha":
                        await ƒS.Speech.tell(characters.narrator, "No, I don't think I am. Let's try again.");
                        dataForSave.nameProtagonist = "";
                        break;
                    case "Iris":
                        await ƒS.Speech.tell(characters.narrator, "No, I don't think I am. Let's try again.");
                        dataForSave.nameProtagonist = "";
                        break;
                    case "Lily":
                        await ƒS.Speech.tell(characters.narrator, "No, I don't think I am. Let's try again.");
                        dataForSave.nameProtagonist = "";
                        break;
                    default:
                        await ƒS.Speech.tell(characters.narrator, "That's me, "+ dataForSave.nameProtagonist +".");
                        characters.player.name = dataForSave.nameProtagonist;
                        break;
                }
            }
        }
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
        ƒS.Sound.fade(sound.terror1, 0, 3);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);
    }
}