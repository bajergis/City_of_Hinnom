namespace CityOfHinnom {
    export async function Scene07(): ƒS.SceneReturn {

        console.log("Back to the City Scene starting");
        //find your apartment, regain memories
        // condition if no one is encountered except gate girl, Stay Lonely BAD END
        // Else if encountered up to three choices Barista GOOD END, florist GOOD END or gate girl GOOD END

        let text = {
            Narrator: {
                T0001: "I walked through the silent city one more time. My footsteps echoed off the empty streets. The buildings loomed above me, casting long shadows in the dim light. The emptiness was still unsettling.",
                T0002: "As I walked further, I started to recognize the neighborhoods I was passing through. Although it wasn’t exactly the same, it still felt familiar enough. Like someone shuffled around parts I knew so it just about threw me off.",
                T0003: "I turned a corner and came to a stop in front of an apartment complex. It was unmistakably my old apartment building. Why was it here? I took a step closer, staring up at the windows. I could almost smell the days of my old life, it was all so vivid. I climbed the stairs and could feel my chest tighten.",
                // aptment door
                T0004: "This wasn’t the city I lived in, but this was one hundred percent my home. The sign next to the door even had my name on it. I reached for the door to my old apartment and hesitated, my hand hovering over the doorknob. My heart raced in my chest, my lungs felt as if I had just ran a marathon. I took a deep breath to handle the anxiety, then pushed the door open.",
                // inside
                T0005: "The apartment was exactly as I remembered it. The same furniture, the same pictures on the walls. My table hadn’t moved an inch. I hoped that I could stay here and live like I used to before I found myself in this city.",
                T0006: "Then I was struck by what I could only interpret as some sort of divine realization. This must have been what Lily meant. Because at that moment, I knew. I remembered why I ended up here in hell.",
                T0007: "Really? That’s the explanation? I expected some grand revelation of the week before I died. But it was all so… ordinary. All the little things, like being mean, taking things without asking, lying from time to time. Those were the reasons I was here. Nothing major, no grand evil I had committed.",
                T0008: "My death was interesting, though. The convenience store I worked at got robbed, and I got stabbed trying to protect my younger co-worker.",
                T0009: "The odd thing was, I wasn't mad after having found this all out. Quite the opposite, it all made sense. This place isn’t there to punish you. I’m here to reflect on all I’ve done during my life. I wasn’t a bad person, and this wasn’t really hell, either. More of a place between. I could decide for myself how I would repent for my life. I certainly wasn’t a perfect human being. But I understand the point of me being here.",
                T0010: "The true way to leave this place was by overcoming loneliness, I had to truly feel happiness again.",
                // black
                T0011: "So I decided to stay here for a few months. I could clearly remember my entire life, all the good things as well as the bad things. It was almost as if I was reliving my life, just at a faster pace. I couldn’t believe how tranquil and at peace I found myself in the end. It was definitely the right choice to stay in this city for a while.",
                T0012: "Until I felt that I was ready to move on.",
                T0013: "I was ready to find my own happiness. I must have been on my way already, because all I could think of right now was…",
            }
        }

        await ƒS.Location.show(locations.CityStreetNight);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        ƒS.Sound.play(sound.terror2, 1, true);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
        await ƒS.Location.show(locations.OutsideApartment);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
        await ƒS.Sound.fade(sound.terror1, 0, 2);
        await ƒS.Location.show(locations.InsideApartment);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);
        ƒS.Sound.play(sound.pianoshort5, 1, false);
        dataForSave.totalScore += 50;
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
        await ƒS.Location.show(locations.BlackScreen);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        ƒS.Sound.play(sound.sad4, 1, true);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);

        // Ending choice depends on who has the highest score
        let highestScore = Math.max(dataForSave.alphaScore, dataForSave.irisScore, dataForSave.lilyScore);

        // if two or more share the highest value
        // tut mir mega leid mit den verschachtelten switches Riem, ich war unter zeitdruck und kannte nichts besseres um verschiedene auswahlmöglichkeiten zu haben

        switch (true) {
            case (highestScore == dataForSave.alphaScore && dataForSave.alphaScore == dataForSave.irisScore && dataForSave.alphaScore == dataForSave.lilyScore):
                let chooseAIL = {
                    alpha: "Alpha.",
                    iris: "Iris.",
                    lily: "Lily."
                };

                let answerAIL = await ƒS.Menu.getInput(chooseAIL, "choicesCSSclass");
                switch (answerAIL) {
                    case chooseAIL.alpha:
                        highestScore = dataForSave.alphaScore;
                        break;
                    case chooseAIL.iris:
                        highestScore = dataForSave.irisScore;
                        break;
                    case chooseAIL.lily:
                        highestScore = dataForSave.lilyScore;
                        break;
                }
                break;
            case (highestScore == dataForSave.alphaScore && dataForSave.alphaScore == dataForSave.irisScore):
                let chooseAI = {
                    alpha: "Alpha.",
                    iris: "Iris.",
                };

                let answerAI = await ƒS.Menu.getInput(chooseAI, "choicesCSSclass");
                switch (answerAI) {
                    case chooseAI.alpha:
                        highestScore = dataForSave.alphaScore;
                        break;
                    case chooseAI.iris:
                        highestScore = dataForSave.irisScore;
                        break;
                }
                break;
            case (highestScore == dataForSave.alphaScore && dataForSave.alphaScore == dataForSave.lilyScore):
                let chooseAL = {
                    alpha: "Alpha.",
                    lily: "Lily.",
                };

                let answerAL = await ƒS.Menu.getInput(chooseAL, "choicesCSSclass");
                switch (answerAL) {
                    case chooseAL.alpha:
                        highestScore = dataForSave.alphaScore;
                        break;
                    case chooseAL.lily:
                        highestScore = dataForSave.lilyScore;
                        break;
                }
                break;
            case (highestScore == dataForSave.irisScore && dataForSave.irisScore == dataForSave.lilyScore):
                let chooseIL = {
                    iris: "Iris.",
                    lily: "Lily.",
                };

                let answerIL = await ƒS.Menu.getInput(chooseIL, "choicesCSSclass");
                switch (answerIL) {
                    case chooseIL.iris:
                        highestScore = dataForSave.irisScore;
                        break;
                    case chooseIL.lily:
                        highestScore = dataForSave.lilyScore;
                        break;
                }
                break;
            default:
                break;
        }

        await ƒS.Sound.fade(sound.sad4, 0, 1);

        switch (highestScore) {
            case dataForSave.alphaScore:
                // Alpha End
                await ƒS.Speech.tell(characters.narrator, "Alpha.");

                ƒS.Sound.play(sound.cafe, 1, true);
                await ƒS.Speech.tell(characters.narrator, "The sun was shining down on the small café as I sat across from her, sipping on coffee and chatting. The coffee she made tasted miles better than this one. Alpha looked out the window and watched the people walk by.");
                await ƒS.Speech.tell(characters.alpha, "Do you want to see the pictures I took yesterday?");
                await ƒS.Speech.tell(characters.narrator, "Alpha handed me her camera, I looked through her gallery, although the display was reflecting the sun into my face.");
                await ƒS.Speech.tell(characters.player, "Amazing as always.");
                await ƒS.Speech.tell(characters.narrator, "We chatted for a while longer, she told me all about her favorite photographers and the way she was experimenting with the dutch angle recently. I was fascinated by her passion, but couldn’t really keep up with it. Instead when I talked about my hobbies, it was more the latest movie I watched, but I was familiar with cinematographers.");
                await ƒS.Speech.tell(characters.narrator, "When we both realized that our cups had been empty for the past fifteen minutes or so, we decided to head to the next location. I promised her to prepare a picnic, and I knew just the right spot, at a park beside the river.");
                await ƒS.Speech.tell(characters.narrator, "THE END.");

                ƒS.Speech.clear();
                break;
            case dataForSave.irisScore:
                //Iris End
                await ƒS.Speech.tell(characters.narrator, "Iris.");

                ƒS.Sound.play(sound.jazz, 1, true);
                await ƒS.Speech.tell(characters.narrator, "I was browsing the shelves at the bookstore, lately I’ve been so bored that I just didn’t know what to read. I completely zoned out at one point, only being brought back to reality by a heavy sigh next to me. I looked over and saw a short, brunette girl with glasses next to me, holding up two books. She was struggling to decide which one to pick.");
                await ƒS.Speech.tell(characters.player, "Do you need help?");
                await ƒS.Speech.tell(characters.narrator, "She turned to me, surprised, as if I had just scared the soul out of her. As our eyes locked, her anxious expression changed and a smile spread across her face.");
                await ƒS.Speech.tell(characters.iris, "I can never decide what to read next.");
                await ƒS.Speech.tell(characters.player, "How about I pick the one I prefer out of these two, and you read the other one.");
                await ƒS.Speech.tell(characters.iris, "But what if I want to know what happens in the one you’re going to read?");
                await ƒS.Speech.tell(characters.player, "I can tell you over a coffee sometime. I’d like to know about your book, as well.");
                await ƒS.Speech.tell(characters.narrator, "Her eyes sparkled.");
                await ƒS.Speech.tell(characters.iris, "Does next weekend sound good?");
                await ƒS.Speech.tell(characters.narrator, "I picked the romance novel that featured a gardener as a protagonist. She told me her name was Iris, and suddenly we found ourselves chatting about our favorite authors. I was struck by how much we had in common. We both loved 20th century classics like Hemingway.");
                await ƒS.Speech.tell(characters.narrator, "At some point she noticed how late it was getting, so we both headed to the cash register and exchanged phone numbers. I walked out of the bookstore and felt like I was on cloud nine. It was a meet-cute straight out of Hollywood, and I couldn’t wait to see what would happen next.");
                await ƒS.Speech.tell(characters.narrator, "THE END.");

                ƒS.Speech.clear();
                break;
            case dataForSave.lilyScore:
                //Lily End
                await ƒS.Speech.tell(characters.narrator, "Lily.");

                ƒS.Sound.play(sound.lily, 1, true);
                await ƒS.Speech.tell(characters.narrator, "I was now just as old as when I died in my previous life. I still remember my time in hell, and that includes regaining my memories. After all this time, I still haven’t forgotten her either.");
                await ƒS.Speech.tell(characters.narrator, "The semester was over and it was the middle of summer break. I was on my way to the train station and wanted to go bar hopping with my friends from uni. I still had around ten minutes until the metro came, when I suddenly picked up on a familiar scent. It immediately transported me back in time, this was her perfume.");
                await ƒS.Speech.tell(characters.narrator, "I turned around looking for the girl I just passed by. For a moment, time was frozen. I remembered the afternoons we had spent together, laughing and dreaming.");
                await ƒS.Speech.tell(characters.narrator, "Lily was staring right at me, she was just as surprised as I was. We were both standing still like idiots, and I felt a rush of emotions.");
                await ƒS.Speech.tell(characters.lily, "Took you long enough. I was worried you forgot about me.");
                await ƒS.Speech.tell(characters.player, "How could I ever.");
                await ƒS.Speech.tell(characters.narrator, "She had a fat grin on her face. Finally, I found her again. I was in a bit of a hurry, unfortunately, so we exchanged contact information and promised to meet up as soon as we could.");
                await ƒS.Speech.tell(characters.narrator, "THE END.");
                ƒS.Speech.clear();
                break;
        }

    }
}