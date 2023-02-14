namespace CityOfHinnom {
    export async function Scene04(): ƒS.SceneReturn {

        console.log("Enter the Garden Scene starting");
        //option for florist bad end or take the tram

        let text = {
            Narrator: {
                T0001: "The garden was a blooming and tamed biotope illuminated under subtle lampshades. It was like a secret world hidden away from the overstimulating sight of the city. I stopped for a moment and took a deep breath, taking in the peaceful atmosphere.",
                T0002: "This was something I haven’t felt for a long time, even during my life before I got here. Time seemed completely absent here, and I felt like I could stay here forever.",
                T0003: "The further I went, the more I could make out a gentle humming, like a soothing voice singing me a lullaby that I had long forgotten.",
                T0004: "The gardenias growing on the side became plentiful and turned into a field. The humming turned into a clear song before it abruptly ended. In front of me appeared a girl watering the flowers. She seemed startled by my presence.",
                T0005: "One good look at her and I realized that I knew this person. Seeing her again made everything feel like a dream.",
                T0006: "She put her watering can aside and stood directly across from me.",
                T0007: "I haven’t seen Iris since ninth grade. As kids we used to live on the same street. Iris and I practically grew up together, ever since kindergarten we were practically inseparable and did everything together. During summer we would go out and play every day and only went back home right before dinner.",
                T0008: "Ever since I’ve known her, Iris has been struggling with anxiety. It didn’t seem like it when I met her, because she seemed calm whenever I was with her. But as time went on and we got to spend so much time together, it became more and more apparent.",
                T0009: "I’ve missed the way her eyes spark when she smirks.",
                T0010: "She leaned forward and punched me on the shoulder. Oh the way I sighed, she’s just as silly as ever. And now her smirk turned into a cheerful mock.",
                T0011: "Her gaze wandered off for a second, maybe there was something interesting behind me. Then she continued.",
                T0012: "She seemed to enjoy recalling this story.",
                T0013: "She sat down on the concrete part next to that artificial pond. I was kind of tired from walking up that slope, so I joined her.",
                T0014: "Iris knocked on my shoulder in an excited manner and answered hastily.",
                T0015: "Iris was dangling her legs around, she’s pretty short.",
                T0016: "I made my way outside of the garden and tried to find signs that lead towards the train station.",
                T0017: "She looked slightly relieved.",
                T0018: "Her expression softened. Iris stood up from where she sat and brushed the dust off from behind. Now she walked along a thin line, placing the heel of one foot directly in front of the other. She used to do this a lot when we were kids.",
                T0019: "She stopped for a second, I must have startled her again. Then she turned around and looked directly into my eyes.",
                T0020: "Why did she suddenly change the topic? Ah whatever.",
                T0021: "She started moving on already so I was quick to get up and follow her. She used to be in the track team so it’s hard keeping up with her when she’s walking. I remember a hiking trip we took once, what looked like a breeze for her had me out of breath until my lungs hurt.",
                T0022: "But no matter how far I fell behind, she’d be there to take my hand. She reached for my hand, but hesitated at the last second. Instead, she turned around to tell me we needed to take a left and were almost there.",
                T0023: "The exterior seemed like your usual bookstore. As with all the other buildings, the lights were already on. I really don’t want to see the electricity bills around here. Iris went ahead, as I entered the store, I smelled the familiar scent of newly printed paper.",
                T0024: "Iris grabbed the book from the top of the pile and sat down onto the sofa with her legs up. I was feeling a bit tired, and since she was going to read me something, I could just lie down on the spacious couch.",
                T0025: "I handed her the purple bookmark that I kept on me. She seemed a bit confused.",
                T0026: "I couldn’t tell her that she dropped it last time. That would be too confusing.",
                T0027: "I do faintly remember, no wonder it seemed familiar. It’s been so long, but I bought it for her because I couldn’t come up with a better gift. Worked out for the best apparently.",
                T0028: "Iris stopped at the last part. I heard her whisper what was probably my name. But when I turned to her, time was already up.",
                T0029: "On the spot where she sat just a moment ago, now laid the book she read me. But I knew that would happen. I admit, it hurts. A lot. I missed her a lot after I moved away, seeing her again now made me so happy. I just wasn’t happy enough to vanish, myself.",
                T0030: "That might have been because of this feeling of regret I felt at the same time. I could have tried harder, I could have spent more time with her. But I didn’t. At least I got to see her one last time. And wherever she is now, I’m just glad I made her happy one last time.",
                T0031: "Maybe reincarnation doesn’t just involve what’s living. We’re all made of cosmic dust. So I really don’t need to know, right now I feel like not knowing the actual answer is a blessing. Because in this case, she had already turned into the stars for me.",
                T0032: "She looked very dissatisfied with my answer. As to not make matters worse, I stopped talking. So she began reading from the first page.",
                T0033: "She abruptly stopped there.",
                T0034: "I didn’t hear an answer back. All that was left of Iris was this bookmark that was lying on the couch where she sat mere seconds ago. I don’t know why, but this little piece of paper seems familiar for some reason. I’ll hold on to it for now.",
                T0035: "Why is Iris gone? I couldn’t figure it out. And I didn’t know what to do now. It feels like she was ripped out of my life without any warning. I sat there for what was probably an hour before I could move again.",
                T0036: "If what Iris said was true and we’re all dead here, then there must be an explanation for everything. How she disappeared, and why I’m here as well. Iris was sure that there was an answer written down somewhere. But she didn’t find anything even after three months here.",
                T0037: "I checked the page she read before she disappeared. Nothing stood out. There was one place I could think of right now that could lead somewhere, so I went on my way.",
            }
        }

        await ƒS.Location.show(locations.InsideGarden);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

        await ƒS.Character.animate(characters.iris, characters.iris.pose.happy, appearAnimation());
        await ƒS.update();
        ƒS.Sound.play(sound.jazz, 1, true);

        await ƒS.Speech.tell(characters.player, "Iris, is that you?");
        await ƒS.Speech.tell(characters.iris, "It’s been a while, haha. Nice to see you again, " + dataForSave.nameProtagonist + ".");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

        await ƒS.Speech.tell(characters.iris, "I admit you gave me a bit of a fright just now, I haven’t seen anyone for quite a while.");
        await ƒS.Speech.tell(characters.player, "I didn’t mean to scare you, your singing just enchanted me for a second.");
        await ƒS.Speech.tell(characters.iris, "Oh don’t worry. All was fine as soon as I recognized your face.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);

        await ƒS.Speech.tell(characters.player, "Still, I’m surprised to find you here. I’ve only just arrived here so I’m still extremely confused.");
        await ƒS.Speech.tell(characters.iris, "It’s not gonna get any less confusing, to be honest with you. I’ve been here a bit longer than you and I’m still not sure about what’s going on.");
        await ƒS.Speech.tell(characters.player, "When did you get here?");
        await ƒS.Speech.tell(characters.iris, "Oh, around three months ago. It was so bizarre, I can’t remember much from before I got here, even though my long term memory seems intact.");
        await ƒS.Speech.tell(characters.player, "I get what you mean.");
        await ƒS.Speech.tell(characters.iris, "So I wandered the city for a bit. Thank god it’s not hard to find food or shelter. When I found this garden, I don’t know, it just seemed so peaceful that I decided to stay around here. There’s a library nearby with an apartment complex right above it, that’s been my home ever since I got here.");
        await ƒS.Speech.tell(characters.player, "I see you’re still an avid reader. Man, you used to bury your face into a book that it was near impossible to get you away from it unless you finished the section you were reading.");
        await ƒS.Speech.tell(characters.iris, "I don’t think that will ever change. As odd as the books here are, I still love to lose myself in them. Once I turn one page, I turn a dozen more. And it never fails to calm me down.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);

        await ƒS.Speech.tell(characters.iris, "Enen. The stories I read were odd, because nothing is related to the real world. Sure, most of it is fiction just like what I’m used to from back home. But these stories make it seem like the world doesn’t exist at all. It’s so hard to describe.");
        await ƒS.Speech.tell(characters.player, "You mean like they don’t mention anything that exists?");
        await ƒS.Speech.tell(characters.iris, "No no, it’s more about the typical story patterns. Like how most stories are based on patterns that we’re familiar with, like the hero’s journey. The stories in this world are written with a different structure.");
        await ƒS.Speech.tell(characters.player, "This world… so you agree we’re in some kind of other universe.");
        await ƒS.Speech.tell(characters.iris, "You want to hear my theory?");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);

        await ƒS.Speech.tell(characters.player, "Hit me.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);

        await ƒS.Speech.tell(characters.player, "I didn’t mean that literally. Hit me with your theory.");
        await ƒS.Speech.tell(characters.iris, "I think that I died. I don’t know how, or when. But it’s what makes the most sense to me. We died and this is the place where we end up after death.");
        dataForSave.hasMetIris = true;
        await ƒS.Speech.tell(characters.player, "I’ve had the same thought, though I didn’t consider it an actual possibility.");
        await ƒS.Speech.tell(characters.iris, "Why not? It’s perfectly plausible. You agreed with me before, you can’t remember the time right before you got here, even though you just know that you should have a memory. That memory just seems to be missing.");
        await ƒS.Speech.tell(characters.player, "What if our mind is playing a trick on us, to explain why we are in this unfamiliar place.");
        await ƒS.Speech.tell(characters.iris, "Or, this is what I think, our mind just lost the moment from around the time we died. Kind of to protect us from knowing the reason we died. Or that we’re dead at all. I can’t explain to you why that would happen. After all, it’s just my theory.");
        await ƒS.Speech.tell(characters.player, "It does make sense, now that I think about it. It’s just so weird not being able to have a gap in my memory.");
        await ƒS.Speech.tell(characters.iris, "It’s not quite empty for me, though. I’m not quite certain, but I do recall some sort of accident. But it’s so faint, it might not be a real memory.");
        await ƒS.Speech.tell(characters.player, "I just don’t get why the afterlife is such a dark and lonely place.");
        await ƒS.Speech.tell(characters.iris, "I don’t mind the loneliness that much.");
        await ƒS.Speech.tell(characters.player, "Well, you’ve always been on the introverted side.");
        await ƒS.Speech.tell(characters.iris, "Doesn’t mean I’m not happy to see you again.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);

        await ƒS.Speech.tell(characters.iris, "I’ve met some people during these three months, though mostly only once. But it’s so rare that instead of feeling exhausted, like I used to feel when I met new people, it’s refreshing and gives me a boost in energy. But I’m fine by myself, reading when I feel like it and once I’m done with that I tend this garden here.");
        await ƒS.Speech.tell(characters.player, "I can tell you take really good care of this place. You always had a green thumb.");
        await ƒS.Speech.tell(characters.iris, "Yeah unlike you, tehe. Remember that cactus you won in that writing competition?");
        await ƒS.Speech.tell(characters.player, "You mean the one that dried up and died?");
        await ƒS.Speech.tell(characters.iris, "How does that even happen? It’s a CACTUS!");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);

        await ƒS.Speech.tell(characters.player, "I just forgot about it. After all, I never wanted to participate in that contest. You were the one who practically forced me to sign up because you were going to as well. And if I remember correctly, you won first prize.");
        await ƒS.Speech.tell(characters.iris, "You have a really good memory.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);

        await ƒS.Speech.tell(characters.player, "How have you been doing these years? We kind of lost contact after ninth grade or so.");
        await ƒS.Speech.tell(characters.iris, "You did move away to the other side of the city and changed schools, of course we wouldn’t spend time with each other like we used to.");
        await ƒS.Speech.tell(characters.player, "It is difficult to keep it up. I’m just glad we still met up that summer.");
        await ƒS.Speech.tell(characters.iris, "Anyway, the neighborhood stayed quiet as ever and I helped mom out in the bookstore whenever I could.");
        await ƒS.Speech.tell(characters.player, "I thought you just read about plants and stuff instead of working.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);

        await ƒS.Speech.tell(characters.iris, "That- you know that was just me joking when I told you that!");
        await ƒS.Speech.tell(characters.player, "I know, I know. I was just pulling your leg, calm down and stop slapping me. Your mother taught you about plants, right?");
        await ƒS.Speech.tell(characters.iris, "Yep. That’s probably why I like tending the flowers here. It reminds me of her. When I was feeling down, she would show me the flowers from our garden. No matter how bad a day was, flowers still bloom, that’s what she said. That’s why I believe that even in a dark and desolate place like this, beauty can thrive.");
        await ƒS.Speech.tell(characters.player, "I admit, this city is not the worst place to be.");
        await ƒS.Speech.tell(characters.iris, "I am curious, though. Why are so few people here, what is this place, and what about the rest of humanity?");
        await ƒS.Speech.tell(characters.player, "The rest of humanity?");
        await ƒS.Speech.tell(characters.iris, "Well think about it. Let’s say my theory is correct, and we are dead. How many people have died in the history of humankind? Shouldn’t this place be brimming with people?");
        // condition of having met alpha before
        if (dataForSave.hasMetAlpha) {
            await ƒS.Speech.tell(characters.player, "Have you met a barista named Alpha?");
            await ƒS.Speech.tell(characters.iris, "No, I'm afraid I haven’t.");
            await ƒS.Speech.tell(characters.player, "She said few people stay for longer than a year. Most leave after some months.");
        }
        await ƒS.Speech.tell(characters.iris, "Whenever I met someone, it didn’t take long for them to disappear forever. And also, if this is the place of the dead, where is the place of the living?");
        await ƒS.Speech.tell(characters.player, "I don’t think it’s that easy to just come back to life.");
        await ƒS.Speech.tell(characters.iris, "What if it is actually easy. That would explain why so few people are here.");
        await ƒS.Speech.tell(characters.player, "Maybe reincarnation is real and that’s why we saw such an increase in population. Everyone who died decided to return to earth and live again.");
        await ƒS.Speech.tell(characters.iris, "Good idea, but it might not add up mathematically. I read that about 109 billion have died, in all of history. Sure, there are other options like being reincarnated into animals. But what about the immeasurable amount of animals that have lived and died as well? How would they be reincarnated?");
        await ƒS.Speech.tell(characters.player, "Could be that not every lifeform gets to be reincarnated, only us.");
        await ƒS.Speech.tell(characters.iris, "Then I would like to know which ones do and what differentiates us in such a way that we get to be born again.");
        await ƒS.Speech.tell(characters.player, "When would reincarnation have started, anyways? Life must have started in tiny numbers. At some point back in time, there must have been less total deaths than total living organisms. There must have been life without a previous possible reincarnation.");
        await ƒS.Speech.tell(characters.iris, "You’re essentially asking where existence came from. Also, your idea falls flat because you count on the fact that there is some sort of countable instance that is able to be reborn. It might not be like that at all.");
        await ƒS.Speech.tell(characters.player, "Classic Iris, I try to be profound but you find some fallacy.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);

        await ƒS.Speech.tell(characters.iris, "You know. No matter how it works, I kind of hope it works at all. To be honest, I want to go back.");
        await ƒS.Speech.tell(characters.player, "If we really are dead, then I’d like to go back as well.");
        await ƒS.Speech.tell(characters.iris, "I miss mom.");
        await ƒS.Speech.tell(characters.player, "Are you worried about her?");
        await ƒS.Speech.tell(characters.iris, "I know she can manage by herself, but this sucks. Dead people shouldn’t mourn the living, right? That’s the wrong way around.");
        await ƒS.Speech.tell(characters.player, "We don’t know for sure.");
        await ƒS.Speech.tell(characters.iris, "Sure, but at this point I might as well be, since I can’t go back.");
        await ƒS.Speech.tell(characters.player, "Well what if you can? You’ve been here longer than me, do you know where the city ends?");
        await ƒS.Speech.tell(characters.iris, "Hmmm, I didn’t go very far. I don’t know how big the city is. But I’ve seen signs for a train station. Trains could lead outside.");
        await ƒS.Speech.tell(characters.player, "You never thought to check it out?");
        await ƒS.Speech.tell(characters.iris, "This might sound strange, but I just feel like I want to stay here a bit longer.");
        await ƒS.Speech.tell(characters.player, "But you just said you missed your mother.");
        await ƒS.Speech.tell(characters.iris, "I don’t know if the trains lead anywhere, or what lies beyond the city. That’s why I’m reading so much. I just hope I find some sort of information that can help me out. So I’ll stay here for the time being.");
        await ƒS.Speech.tell(characters.player, "Knowing you, your mind is set and there’s no way to convince you to change it, huh.");
        await ƒS.Speech.tell(characters.iris, "You know me better than anyone else.");

        //choice leave or stay
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.Sound.fade(sound.jazz, 0, 3);
        await ƒS.update(1.5);

        let staywithIrisChoice = {
            answerStay: "Stay with Iris.",
            answerLeave: "Be on your way.",
        };

        let stayWithIris = await ƒS.Menu.getInput(staywithIrisChoice, "choicesCSSclass");

        switch (stayWithIris) {
            case staywithIrisChoice.answerLeave:
                // Go to scene 05
                dataForSave.pickedLeaveIris = true;
                await ƒS.Speech.tell(characters.player, "Tell you what, I’ll figure a way out. Then when I find something, I’ll let you know.");
                await ƒS.Speech.tell(characters.iris, "Why did I know you were gonna say something like that…");
                await ƒS.Speech.tell(characters.iris, "Alright, but be careful.");
                await ƒS.Speech.tell(characters.player, "Have I ever not been?");
                await ƒS.Speech.tell(characters.iris, "Umm, do you remember in sixth grade when we were at the aquariu-");
                await ƒS.Speech.tell(characters.player, "Yeah yeah yeah yeah I get it I get it.");
                await ƒS.Speech.tell(characters.iris, "You know I’m just trying to care for you.");
                await ƒS.Speech.tell(characters.player, "I know.");
                await ƒS.Speech.tell(characters.iris, "Well, it was nice to see you again, Player. If you figure anything out, I’ll be either here or in the library further down.");
                await ƒS.Speech.tell(characters.player, "I promise I’ll come back.");

                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0016);

                ƒS.Character.animate(characters.iris, characters.iris.pose.happy, disappearAnimation());
                break;
            case staywithIrisChoice.answerStay:
                // Iris End
                dataForSave.pickedStayWithIris = true;
                ƒS.Sound.play(sound.jazz, 1, true);

                await ƒS.Speech.tell(characters.player, "I think for now I’ll stay with you. Not that I’m in a rush to begin with.");
                await ƒS.Speech.tell(characters.iris, "Sure. We can catch up on all kinds of things.");
                await ƒS.Speech.tell(characters.player, "Like?");
                await ƒS.Speech.tell(characters.iris, "Dooooo you have a girlfriend?");
                await ƒS.Speech.tell(characters.player, "Huh? No I don’t.");

                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0017);

                await ƒS.Speech.tell(characters.player, "What about you then? Snag a boyfriend yet?");
                await ƒS.Speech.tell(characters.iris, "Nope.");
                await ƒS.Speech.tell(characters.player, "Wow we’re both kind of lame.");
                await ƒS.Speech.tell(characters.iris, "I mean, there is a guy that I like. It just hasn’t been possible for me to ask him out these past years.");
                await ƒS.Speech.tell(characters.player, "And you still hang on to him?");
                await ƒS.Speech.tell(characters.iris, "He’s incredibly special to me.");

                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0018);

                await ƒS.Speech.tell(characters.iris, "I want him to love me across the universe and back.");
                await ƒS.Speech.tell(characters.player, "Chances are he won’t unless you tell him. At least it’s gonna be uncertain.");
                await ƒS.Speech.tell(characters.iris, "Before I can tell him I will have to leave this place.");
                await ƒS.Speech.tell(characters.player, "What if he’s in the city, too?");

                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0019);

                await ƒS.Speech.tell(characters.iris, "Let’s go to the library. I could read you a book and we could try looking for clues on how to leave.");

                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);

                await ƒS.Speech.tell(characters.player, "Sure. I was eager to see your current home, anyways.");
                await ƒS.Speech.tell(characters.iris, "Sparked your interest, didn’t I?");

                await ƒS.Sound.fade(sound.jazz, 0, 5);

                await ƒS.Location.show(locations.SlopeHill);
                await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
                ƒS.Sound.play(sound.calm, 1, true);

                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0021);
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0022);
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0023);

                //show library

                await ƒS.Speech.tell(characters.iris, "I usually read in the back, there’s this nice sofa that’s just so comfortable, and it fits two people.");
                await ƒS.Speech.tell(characters.player, "Do you know what you want to read?");
                await ƒS.Speech.tell(characters.iris, "I have a big heap of books stacked up back there. I’ll pick the first one I see. Not that I would know what’s in these books. I can’t search the web for a summary.");
                await ƒS.Speech.tell(characters.player, "Makes sense.");

                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0024);

                await ƒS.Speech.tell(characters.iris, "Hmm, I should have a bookmark around here. What if I forget what chapter I’m on after this?");

                //Good end bad end option
                if (dataForSave.ownsBookmark) {
                    // Good End
                    await ƒS.Speech.tell(characters.player, "I actually have one right here.");

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);

                    await ƒS.Speech.tell(characters.iris, "This is… where did you find it? It’s definitely the one I was looking for.");
                    await ƒS.Speech.tell(characters.player, "It was right here on the couch.");

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0026);

                    await ƒS.Speech.tell(characters.iris, "Well, thanks. That marks the second time you gave it to me.");
                    await ƒS.Speech.tell(characters.player, "What do you mean?");
                    await ƒS.Speech.tell(characters.iris, "Don’t you remember? This bookmark was a birthday present you gave me when we were kids. I’ve kept it on me ever since.");
                    await ƒS.Speech.tell(characters.player, "A bookmark and a keepsake.");
                    await ƒS.Speech.tell(characters.iris, "More like a lucky charm.");

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0027);

                    await ƒS.Speech.tell(characters.iris, "I’ll start reading. If we don’t get through it in one sitting, we can pick up on it next time.");
                    ƒS.Character.animate(characters.iris, characters.iris.pose.happy, disappearAnimation());
                    ƒS.Sound.fade(sound.calm, 0, 3);

                    //show iris reading book

                    // Novel Page
                    ƒS.Speech.hide();

                    let pages: string[] = ["<strong>Placeholder:</strong><br\><br\>Placeholder. <br\>\
                        <br\>placeholder.<br\> \
                        <br\>placeholder.<br\><br\>Page 1",
                        "Placeholder. <br\> \
                        <br\>Placeholder.<br\> \
                        <br\>Placeholder.<br\><br\>Page 2"];
                    let current: number = 0;
                    let flip = { back: "Back", next: "Next", done: "Close" };
                    let choice: string;
                    ƒS.Text.addClass("flip");
                    do {
                        ƒS.Text.print(pages[current]);
                        choice = await ƒS.Menu.getInput(flip, "flip");
                        switch (choice) {
                            case flip.back: current = Math.max(0, current - 1); break;
                            case flip.next: current = Math.min(2, current + 1); break;
                        }
                    } while (choice != flip.done);
                    ƒS.Text.close();
                    dataForSave.irisScore += 50;
                    dataForSave.totalScore += 50;
                    dataForSave.hasReadSomething = true;
                    await ƒS.Sound.fade(sound.jazz, 0, 0);

                    await ƒS.Location.show(locations.BookOnCouch);
                    await ƒS.update(transitions.wipe.duration, transitions.wipe.alpha, transitions.wipe.edge);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0028);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0029);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0030);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0031);

                    // Create Letter
                    openLetter(letters.IrisLetter2.background);

                    ƒS.Inventory.add(items.irisLetter2);
                    return "scene07";

                } else {
                    // Bad End
                    await ƒS.Speech.tell(characters.player, "Is it really that hard to remember a page number?");
                    await ƒS.Speech.tell(characters.iris, "Well, no. But what if too much time passes and we forget where we stopped?");
                    await ƒS.Speech.tell(characters.player, "Then we can read another book.");

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0032);
                    ƒS.Character.animate(characters.iris, characters.iris.pose.happy, disappearAnimation());
                    ƒS.Sound.fade(sound.calm, 0, 3);

                    // show iris reading

                    // Novel Page
                    ƒS.Speech.hide();

                    let pages: string[] = ["<strong>Placeholder:</strong><br\><br\>Placeholder. <br\>\
                        <br\>placeholder.<br\> \
                        <br\>placeholder.<br\><br\>Page 1",
                        "Placeholder. <br\> \
                        <br\>Placeholder.<br\> \
                        <br\>Placeholder.<br\><br\>Page 2"];
                    let current: number = 0;
                    let flip = { back: "Back", next: "Next", done: "Close" };
                    let choice: string;
                    ƒS.Text.addClass("flip");
                    do {
                        ƒS.Text.print(pages[current]);
                        choice = await ƒS.Menu.getInput(flip, "flip");
                        switch (choice) {
                            case flip.back: current = Math.max(0, current - 1); break;
                            case flip.next: current = Math.min(2, current + 1); break;
                        }
                    } while (choice != flip.done);
                    ƒS.Text.close();
                    dataForSave.hasReadSomething = true;

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0033);

                    await ƒS.Speech.tell(characters.iris, "Hey, do you want to hear something odd? I think I remember why I’m here now. Something in this story reminded me of it.");
                    await ƒS.Speech.tell(characters.player, "Go on, tell me.");
                    ƒS.Sound.play(sound.sad1, 1, true);
                    await ƒS.Speech.tell(characters.iris, "I died in a car accident. I was on my way back home from grocery shopping. Mom couldn’t go that day because she caught a cold. The next bit is admittedly a bit fuzzy, but I wanted to cross the street, when all of a sudden I got hit by a van. After that I was shrouded in black, and woke up in this city.");
                    dataForSave.irisScore += 50;
                    dataForSave.totalScore += 50;
                    await ƒS.Speech.tell(characters.player, "So you’re saying we really are dead.");
                    await ƒS.Speech.tell(characters.iris, "That’s not all. I know why I’m in this place, specifically. I remember that there are things I regret, and this place is for me to come to terms with them. ");
                    await ƒS.Speech.tell(characters.player, "Like what?");

                    await ƒS.Location.show(locations.IrisBookmark);
                    await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0034);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0035);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0036);
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.T0037);

                    await ƒS.Sound.fade(sound.sad1, 0, 5);

                    //Get Bookmark
                    dataForSave.ownsBookmark = true;
                    ƒS.Inventory.add(items.bookmark);
                    //Show iris frustration letter
                    // Create Letter
                    openLetter(letters.IrisLetter1.background);
                    ƒS.Inventory.add(items.irisLetter1);
                    return "loop";

                }
        }
    }
}