namespace CityOfHinnom {
    export async function Scene06(): ƒS.SceneReturn {

        console.log("Gates of Hell Scene starting");
        //option either go back to the city or exit hell for BAD END

        let text = {
            Narrator: {
                T0001: "After maybe five minutes, I came to a halt. I stepped off the tram and followed the path, which led to a large, open area.",
                T0002: "If this was a park, it felt odd. The city was behind me now, and I was surrounded by a lush field on rolling hills with sparse trees. It was the sky that was out of place, with towering clouds in an ominous red light.",
                T0003: "The most unusual thing about this place was the wall that stretched for miles to no end. Right behind it was a gate that cast its shadow all the way to my feet.",
                T0004: "On a bench sat a girl with dyed pink hair and a baggy outfit. She stared at me as if I'd done something to annoy her.",
                T0005: "It made perfect sense for me to be in the afterlife. To be honest, I had already made peace with the idea. But hell? Hell no.",
                T0006: "What’s with her attitude? I guess I’ll play along for now.",
                T0007: "Her expression became kinder, but I still feel like she’s mocking me.",
                T0008: "She answered in a short and convincing manner.",
                T0009: "She was.",
                T0010: "Seriously, what’s with her?",
                T0011: "Anyway, I sat down beside her, she might just be a year younger than me.",
                T0012: "Lily stared off into the crimson clouds beyond that infinite wall.",
                T0013: "I actually felt a chill down my spine. I thought that just happens in fiction. Better not get on her bad side.",
                T0014: "This doesn’t make sense. Alpha said she’s been here for ten years.",
                T0015: "This park had its own atmosphere to it. When Lily and I stopped talking, there was the rustling of the leaves and the sounds of waving grass, but the place was void of other natural sounds. No birds, no families with playful kids.",
                T0016: "Lily asked out of the blue. I wasn’t sure what to answer because I’ve never thought about it.",
                T0017: "Lily chuckled a bit.",
                T0018: "She just rubbed me the wrong way. Whatever, I decided that I’d return for now. I found out quite a bit by talking to Lily, and I doubted that park had anything more to offer. So I took another tram. But I didn’t get off at the train station that I left from. Instead, I waited a bit and exited at the next one.",
                T0019: "I stood before the gate, but I just wasn’t sure about this. There was no way to tell what would happen. Lily didn’t come to stop me, either. It was only me and my own choice.",
                T0020: "I took a step forward. In the exact moment that my foot touched the ground past the gate, everything vanished. It wasn’t like I got shrouded in darkness, because darkness didn’t exist in that moment either. It was more like everything I could ever perceive was gone. I had no senses left, no thoughts, and no self. It was over.",
                T0021: "I turned around and sat back on the bench. Lily didn’t mind me at all. On the contrary, she looked over and had a look on her face that just screamed ‘I told you so’.",
                T0022: "We took the tram back to the main station. After a ten minute walk, we arrived at the arcade center. I hate to admit it, but she absolutely destroyed me. How could she be that good at claw games? She told me that she grew up in a moderately wealthy family, and when she was young she would use a good portion of her allowance to play all kinds of arcade games.",
                T0023: "I kept my word, of course. So after my immediate defeat, we took a stroll down the street until we found an empty restaurant we both fancied. The ingredients were top notch, but I’m not the best cook.",
                T0024: "We spent the next few days together as well. Despite her first impression, we actually got along great. It was almost as if we’d known each other for a long time. She would tell me stories of what she’d experienced in hell so far. If hell really was about loneliness, then being with her made the whole experience bearable.",
                T0025: "She showed me the apartment complex that she lived in, and I decided to move in two doors next to her. For some reason she was against us being immediate neighbors. We did everything together for a while.",
                T0026: "Lily laughed, albeit quietly.",
                T0027: "Then one day, she was gone.",
                T0028: "I knocked on her door one morning, but she didn’t come out like she usually did. I entered her apartment, there was no sign of her anywhere. When I went to check her room, it was empty, except that there was something on the bed.",
                T0029: "She left me a letter, but I couldn’t quite believe what she told me.",
                T0030: "If we knew each other, why didn’t she tell me? I tried to remember, but it was as if my mind had blocked out a portion of my past. I could vaguely picture someone’s face, but I wasn’t completely sure it was Lily. I also couldn’t remember anyone going by that name.",
                T0031: "I sat down on her bed, the scent of her perfume was still lingering. She must have left not long ago.",
                T0032: "I guess this place really is about loneliness. The difference is that instead of being lonely from the beginning, you’re left alone instead. Missing someone is worse than having no one to miss at all.",
                T0033: "So all I could do now was to keep going and find my own path that I want to walk. What I wondered was how long it would take for me to reach the end.",
                T0034: "This time I knew, though. Things could be different. She didn’t mention it herself that we knew each other. So I wanted to confront her about it. I knocked on her door.",
                T0035: "A few seconds passed, loud stumbling and rumbling could be heard from inside her apartment. The door knob turned and before me stood Lily, her hair wasn’t fully dry. She probably just came out of the shower.",
                T0036: "Lily hesitated for a bit, but ultimately let me in. I sat down on the couch as she still took her time getting ready in the bath. Once she was done, she joined me and sat down on the floor.",
                T0037: "Aren’t those a bit too many nos? Whatever. I put the pictures from our childhood on the table so she could look at them. She was not surprised in the least.",
                T0038: "Lily grabbed one of the pictures from the table and stared at it.",
                T0039: "She handed me the image, I didn’t notice it before, but now I could clearly tell what she meant. She had a huge scar in that picture. Lily pulled back the sleeve of her sweater, it was the same one. It was at that moment that I remembered how she got it.",
                T0040: "Lily was completely quiet.",
                T0041: "I couldn’t tell if Lily was overjoyed or crestfallen at that moment. Unfortunately, I knew what was about to happen.",
                T0042: "And just like that, she was gone. She was gone. She was gone. She was gone. She was gone.",
                T0043: "I didn’t think that she would vanish right away, however. I planned on telling her a bit about what I could remember. When I first met Lily, I actually liked her as well. She was really good at math, and I’d be so impressed whenever she showed me how fast she could solve homework exercises.",
                T0044: "This time it was me who wanted to ask her to solve an equation that would have broken her. Now she had the luxury of living a new life without restriction, without pain, without me.",
                T0045: "She just rubbed me the wrong way. Whatever, I decided that I’d return for now. I found out quite a bit by talking to Lily, and I doubted that park had anything more to offer. So I took another tram. But I didn’t get off at the train station that I left from. Instead, I waited a bit and exited at the next one.",
            }
        }

        await ƒS.Location.show(locations.GatesOfHell);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

        await ƒS.Speech.tell("???", "I wouldn’t go through there if I were you.");
        //await ƒS.Location.show(locations.LilyOnBench);
        //await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

        await ƒS.Character.animate(characters.lily, characters.lily.pose.happy, appearAnimation());
        await ƒS.update();
        ƒS.Sound.play(sound.lily, 1, true);
        await ƒS.Speech.tell(characters.player, "Why, what will happen if I go through?");
        await ƒS.Speech.tell("???", "It’s the gates of hell");
        await ƒS.Speech.tell(characters.player, "Who in their right mind would go through that gate and willingly enter hell?");
        await ƒS.Speech.tell("???", "You got it all wrong. This is the exit, you’re already in hell.");
        await ƒS.Speech.tell(characters.player, "What?");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

        await ƒS.Speech.tell(characters.player, "Why would I be in hell? Sure, I might not have lived a perfect life. After all, I'm not a saint. But hell is just a bit extreme for the types of sins I’ve committed.");
        await ƒS.Speech.tell(characters.player, "Oh, and also, if this is hell, it’s not so bad. Feels kind of too idyllic. Where’s the fire and all the torment? Shouldn’t I be screaming in agony?");
        await ƒS.Speech.tell("???", "Calm down, man. You don’t have to believe me. But it would be smarter if you did. Hell isn’t really meant to be about fire or punishment.");
        await ƒS.Speech.tell(characters.player, "Who are you even? How do you know?");
        await ƒS.Speech.tell("???", "I was here first, shouldn’t you be the one to introduce yourself before me?");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

        await ƒS.Speech.tell(characters.player, "Alright, I'm" + dataForSave.nameProtagonist);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);

        await ƒS.Speech.tell(characters.lily, "Nice to meet you, " + dataForSave.nameProtagonist + ". I’m Lily."); 
        await ƒS.Speech.tell(characters.player, "So, Lily. If this place isn’t about burning for all of eternity, what else could it be about?");
        await ƒS.Speech.tell(characters.lily, "Loneliness.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);

        await ƒS.Speech.tell(characters.player, "This place isn’t very lonely, I’ve met three people already and it’s only my first day here.");
        await ƒS.Speech.tell(characters.lily, "The people you meet here won’t stay with you forever. You’ll lose others, over and over again.");

        // condition having met Alpha or Iris
        if (dataForSave.ownsBookmark || dataForSave.ownsCameraRoll) {
            await ƒS.Speech.tell(characters.lily, "Going by your facial expression, you’ve already experienced that. Am I right?");
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);
        }

        await ƒS.Speech.tell(characters.lily, "Why are you just standing over there? You’re creeping me out a bit. There’s no rush in hell. Come sit down.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);

        await ƒS.Speech.tell(characters.player, "How come you know about what’s going on? ");

        // condition having met Alpha or Iris
        if (dataForSave.hasMetAlpha || dataForSave.hasMetIris) {
            await ƒS.Speech.tell(characters.player, "The ones I met so far had a hunch at best.");
        }

        await ƒS.Speech.tell(characters.lily, "Judging by that question, you haven’t figured out what happened for you to end up here."); 
        await ƒS.Speech.tell(characters.player, "No, I can’t remember the week or so before I arrived in this city. ");
        await ƒS.Speech.tell(characters.lily, "That’s kind of what this place is all about. And since you just arrived, you shouldn’t be stressing about it too much. There’s technically a time limit of one year, but that’s more like a deadline for figuring it out by yourself. If a year passes, you’ll just know, no matter what. There’s no fixed time you have to stay, though. You can have a year here, or a month. But no one’s here forever."); 
        await ƒS.Speech.tell(characters.player, "You sound like you already remembered for yourself.");
        await ƒS.Speech.tell(characters.lily, "I did."); 
        await ƒS.Speech.tell(characters.player, "Then why are you still here?");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);
        
        await ƒS.Speech.tell(characters.lily, "I just don’t need to go right now. Besides, there are people like you that are confused, or struggle to understand this world. So I want to help them. That’s why I’m staying a bit longer.");
        await ƒS.Speech.tell(characters.player, "You don’t seem like a person who’s altruistic like that.");
        await ƒS.Speech.tell(characters.lily, "Watch it. ");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);

        await ƒS.Speech.tell(characters.lily, "How long you stay here depends on what you did before you died."); 
        await ƒS.Speech.tell(characters.player, "Isn’t that a bit paradoxical, given that it takes time to remember what you did?");
        await ƒS.Speech.tell(characters.lily, "It’s most likely that the time you need to remember also depends on it."); 

        // if player met alpha
        if (dataForSave.hasMetAlpha) {
            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);
            await ƒS.Speech.tell(characters.player, "I met someone who’s been here for longer than a year. What about that?");
            await ƒS.Speech.tell(characters.lily, "Oh, I think I’ve met someone like that as well. They’re not real people.");
            await ƒS.Speech.tell(characters.player, "Huh?");
        }

        await ƒS.Speech.tell(characters.lily, "Have you noticed how practically everything that’s written, newspapers, magazines, they’re all super odd? As if they weren’t written by humans.");

        // if player met alpha
        if (dataForSave.hasReadSomething) {
            await ƒS.Speech.tell(characters.player, "It did seem weird to me.");
        } else {
            await ƒS.Speech.tell(characters.player, "I haven’t read enough from here.");
        }

        await ƒS.Speech.tell(characters.lily, "I think some people here are meant to observe and guide us. But they aren’t real people.");
        await ƒS.Speech.tell(characters.player, "You mean like angels?");
        await ƒS.Speech.tell(characters.lily, "No, not that. I mean they aren’t people - yet. I found one book, it talked about existence preceding essence. From the way it sounded, some of humanity exists here, but is still missing something that actual humans possess. But that is only obtained by being born. So they exist as human beings, but are missing human essence.");
        await ƒS.Speech.tell(characters.player, "So they’re like precursors to humans.");
        await ƒS.Speech.tell(characters.lily, "Exactly. They don’t have a body they can inhabit on earth yet. So they wait here. And some are unlucky, having to stay for years. ");
        await ƒS.Speech.tell(characters.player, "Who gets to decide when they move on?");
        await ƒS.Speech.tell(characters.lily, "It’s the exact same principle that applies to you and me. Realizing. ");
        await ƒS.Speech.tell(characters.player, "This definitely sounds more like a theory to me than an actual truth.");
        await ƒS.Speech.tell(characters.lily, "It’s just what I figured out, after all. I don’t blame you. But it’s not something I came up with. Someone else wrote it down for me to see. Who knows, maybe it was an essence-less human that found its own realization. And just like me, they decided to stay here because they wanted to help others. ");
        await ƒS.Speech.tell(characters.player, "Sounds like not everything was revealed to you after you remembered how you got here.");
        await ƒS.Speech.tell(characters.lily, "Might be. Perhaps that’s why I haven't moved on yet.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0015);

        await ƒS.Speech.tell(characters.lily, "Hey, do you think there are more people in heaven or hell?");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0016);

        await ƒS.Speech.tell(characters.lily, "I think it’s even."); 
        await ƒS.Speech.tell(characters.player, "What makes you think that?");
        await ƒS.Speech.tell(characters.lily, "Hold on, first answer my question."); 
        await ƒS.Speech.tell(characters.player, "I would like to think there are more people in heaven.");
        await ƒS.Speech.tell(characters.lily, "This place definitely makes you believe that. It’s so empty here. But still, you’ll never know. And also, it’s so easy to sin. No matter how you live, you’re bound to end up in hell."); 
        await ƒS.Speech.tell(characters.player, "Not every sin sends you straight to hell.");
        await ƒS.Speech.tell(characters.lily, "Then why call them sins at all?"); 
        await ƒS.Speech.tell(characters.player, "It’s just a moral compass for your life. Because you can break it down to one simple mantra: don’t be a dick.");

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0017);

        await ƒS.Speech.tell(characters.player, "I’m serious. Religion isn’t there to punish you for breaking rules. It’s supposed to make you question which actions will make you a decent human being. Humans have an inclination to do evil, but it is up to them to fight against it.");
        await ƒS.Speech.tell(characters.lily, "Sounds like being evil is an instinct."); 
        await ƒS.Speech.tell(characters.player, "Knowing good from bad also is, since different cultures generally agree on the really bad things. Like killing people.");
        await ƒS.Speech.tell(characters.lily, "That just stems from the human fear of death, because we don’t understand what comes after life. But have you ever thought the other way around?"); 
        await ƒS.Speech.tell(characters.player, "What do you mean?");
        await ƒS.Speech.tell(characters.lily, "Let’s take death as the original, because nothingness preceded life, which first had to form. You can see death as the absence of life, which is the traditional way of thinking about it. But what if life were the absence of death?"); 
        await ƒS.Speech.tell(characters.player, "There would have to be life for death to exist. If there’s no life, death wouldn’t serve a purpose. Nothing is dead because nothing was alive to begin with.");
        await ƒS.Speech.tell(characters.lily, "This is just a thought experiment, can you roll with it?"); 
        await ƒS.Speech.tell(characters.player, "Well I don’t really know what you’re on about.");
        await ƒS.Speech.tell(characters.lily, "Just try this. Imagine death, but without any sort of afterlife. There’s not even darkness, because your consciousness doesn’t exist either to understand that there is nothing left of you. If you take death as the original, just pure nothingness. What is life compared to it?"); 
        await ƒS.Speech.tell(characters.player, "It would just be everything.");
        await ƒS.Speech.tell(characters.lily, "Describe everything."); 
        await ƒS.Speech.tell(characters.player, "Does it even matter? After all, we’re in hell right now, a place after life. Doesn’t this prove that there is not ‘nothing’ after death?");
        await ƒS.Speech.tell(characters.lily, "Nothing might not be here, but how do you know nothing isn’t around us? Take this gate, for example. We can see some clouds, but what’s beyond the clouds?"); 
        await ƒS.Speech.tell(characters.player, "Either nothing or something.");
        await ƒS.Speech.tell(characters.lily, "That’s probably why this gate exists. To see if you want to find out."); 
        await ƒS.Speech.tell(characters.player, "You tried to trick me into going through, didn’t you.");
        await ƒS.Speech.tell(characters.lily, "No, like I said. I want to help people here. It’s up to you to decide whether you want to stay or go. However, there is a condition for going through the gate."); 
        await ƒS.Speech.tell(characters.player, "That being?");
        await ƒS.Speech.tell(characters.lily, "You need to know your reason for being here. Then you can exit."); 
        await ƒS.Speech.tell(characters.player, "I’m guessing you don’t know what happens if you don’t know but still pass through.");
        await ƒS.Speech.tell(characters.lily, "It can’t be anything good.");

        //Exit or go back to city
        //choice
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1);
        await ƒS.Sound.fade(sound.lily, 0, 3);

        let exitThroughGateChoice = {
            answerExit: "Exit through the gate.",
            answerCity: "Go back to the city.",
        };

        let exitGate = await ƒS.Menu.getInput(exitThroughGateChoice, "choicesCSSclass");

        switch (exitGate) {
            case exitThroughGateChoice.answerExit:
                // Option if exit or back to lily
                //choice
                await ƒS.Character.animate(characters.lily, characters.lily.pose.happy, disappearAnimation());
                await ƒS.update();
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0019);

                ƒS.Speech.clear();
                ƒS.Speech.hide();
                await ƒS.update(1.5);
                ƒS.Sound.play(sound.darkSFX, 1, false);

                let exitForRealChoice = {
                    answerExit: "Exit.",
                    answerLily: "Go back to Lily.",
                };

                let goIntoCafe = await ƒS.Menu.getInput(exitForRealChoice, "choicesCSSclass");

                switch (goIntoCafe) {
                    case exitForRealChoice.answerExit:
                        // BAD END
                        dataForSave.pickedExit = true;

                        //clear to black background
                        ƒS.Sound.play(sound.terror1, 1, true);

                        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0020);
                        ƒS.Speech.clear();
                        await ƒS.Sound.fade(sound.terror1, 0, 3);
                        return "loop";
                    case exitForRealChoice.answerLily:
                        // Go to Scene 03
                        dataForSave.pickedStayWithLily = true;
                        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0021);

                        await ƒS.Character.animate(characters.lily, characters.lily.pose.happy, appearAnimation());
                        await ƒS.update();
                        ƒS.Sound.play(sound.lily, 1, true);
                        dataForSave.lilyScore += 50;
                        dataForSave.totalScore += 50;
                        await ƒS.Speech.tell(characters.lily, "How was the gate?"); 
                        await ƒS.Speech.tell(characters.player, "I want to stay a bit longer.");
                        await ƒS.Speech.tell(characters.lily, "Stay as long as you like. This is your life, after all."); 
                        await ƒS.Speech.tell(characters.player, "I don’t know if you could call this living. We’re in hell after all.");
                        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0026);
                        await ƒS.Speech.tell(characters.lily, "Are you good at arcades?"); 
                        await ƒS.Speech.tell(characters.player, "I guess I’m not bad. Wait why are we talk-");
                        await ƒS.Speech.tell(characters.lily, "I bet I’m better. Let’s head over to an arcade center and I’ll show you."); 
                        await ƒS.Speech.tell(characters.player, "It’s on. The winner has to cook the other one a nice, homemade dinner.");
                        await ƒS.Speech.tell(characters.lily, "Homemade? We can just use the kitchen in some fancy restaurant."); 
                        await ƒS.Speech.tell(characters.player, "Even better.");

                        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0022);
                        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0023);

                        await ƒS.Speech.tell(characters.lily, "It’s not bad, I’ve just had better."); 
                        await ƒS.Speech.tell(characters.player, "Be happy I cooked at all.");
                        await ƒS.Speech.tell(characters.lily, "Well duh, you owed me.");

                        await ƒS.Character.animate(characters.lily, characters.lily.pose.happy, disappearAnimation());
                        await ƒS.update();

                        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0024);
                        await ƒS.Location.show(locations.OutsideApartment);
                        await ƒS.update(transitions.wipe.duration, transitions.wipe.alpha, transitions.wipe.edge);
                        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0025);
                        await ƒS.Sound.fade(sound.lily, 0, 3);

                        
                        if (!dataForSave.ownsChildhoodPicture) {
                            //BAD END
                            ƒS.Sound.play(sound.pianoshort5, 1, false);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0027);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0028);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0029);
                            // get pictures
                            // Add Letter
                            openLetter(letters.LilyLetter1.background);
                            ƒS.Inventory.add(items.lilyLetter1);
                            await ƒS.Location.show(locations.LilyChildhoodPicture);
                            await ƒS.update(transitions.watercolor.duration, transitions.watercolor.alpha, transitions.watercolor.edge);

                            dataForSave.ownsChildhoodPicture = true;
                            ƒS.Inventory.add(items.childhoodPicture);
                            ƒS.Sound.play(sound.pianoshort3, 1, false);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0030);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0031);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0032);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0033);
                            await ƒS.Sound.fade(sound.pianoshort3, 0, 3);
                            return "loop";

                        } else {
                            //GOOD END
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0034);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0035);

                            await ƒS.Character.animate(characters.lily, characters.lily.pose.happy, appearAnimation());
                            await ƒS.update();

                            await ƒS.Speech.tell(characters.lily, "What do you want?"); 
                            await ƒS.Speech.tell(characters.player, "Can we talk?");
                            await ƒS.Speech.tell(characters.lily, "Can’t it wait until tomorrow? It’s a bit late now."); 
                            await ƒS.Speech.tell(characters.player, "It’s important.");

                            await ƒS.Character.animate(characters.lily, characters.lily.pose.happy, disappearAnimation());
                            await ƒS.update();

                            await ƒS.Location.show(locations.InsideApartment);
                            await ƒS.update(transitions.watercolor.duration, transitions.watercolor.alpha, transitions.watercolor.edge);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0036);

                            await ƒS.Character.animate(characters.lily, characters.lily.pose.happy, appearAnimation());
                            await ƒS.update();

                            await ƒS.Speech.tell(characters.lily, "What is it? Don’t tell me you came over to confess to me. No, no, no no no. It’s still way too early for that.");

                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0037);
                            ƒS.Sound.play(sound.sad2, 1, true);

                            await ƒS.Speech.tell(characters.player, "Do you recognize these?");
                            await ƒS.Speech.tell(characters.lily, "Of course."); 
                            await ƒS.Speech.tell(characters.player, "Why didn’t you tell me?")
                            await ƒS.Speech.tell(characters.lily, "I didn’t think it would make a difference if you knew or not."); 
                            await ƒS.Speech.tell(characters.player, "Come on.")
                            await ƒS.Speech.tell(characters.lily, "I didn’t tell you because it would have hurt too much. And I wanted to move on."); 
                            await ƒS.Speech.tell(characters.player, "There’s another condition for leaving this place, right?")

                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0038);

                            await ƒS.Speech.tell(characters.lily, "Have you looked at this particular image?"); 
                            await ƒS.Speech.tell(characters.player, "Yeah it’s me standing atop a rock with you next to me.");
                            await ƒS.Speech.tell(characters.lily, "Look at my arm.");

                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0039);

                            await ƒS.Speech.tell(characters.player, "You were climbing a tree when the branch you were standing on broke off. As you fell, you cut your arm on the part where the branch snapped.");
                            await ƒS.Speech.tell(characters.lily, "I didn’t want you to recognize it, so I hid it."); 
                            await ƒS.Speech.tell(characters.player, "Why couldn’t I find out who you were?");
                            await ƒS.Speech.tell(characters.lily, "I was afraid that I would instantly vanish out of joy, if you recognized me and we had a happy reunion. But if we leave from here, there’s no guarantee that we’ll ever see each other again. I wanted to spend some time with you before I…"); 
                            await ƒS.Speech.tell(characters.player, "You were planning on leaving tomorrow morning.");

                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0040);

                            await ƒS.Speech.tell(characters.player, "You know we can’t stay here forever. You told me, remember?");
                            await ƒS.Speech.tell(characters.lily, "I just wanted a week. And that’s what I got. You don’t know how special this past week was for me."); 
                            await ƒS.Speech.tell(characters.player, "It was to me, as well.");

                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0041);

                            await ƒS.Speech.tell(characters.lily, dataForSave.nameProtagonist + ", I-");
                            dataForSave.irisScore += 50;
                            dataForSave.totalScore += 50;
                            await ƒS.Sound.fade(sound.sad2, 0, 0);

                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0042);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0043);
                            await ƒS.Speech.tell(characters.narrator, text.Narrator.T0044);

                            // Add Letter
                            openLetter(letters.LilyLetter2.background);
                            ƒS.Inventory.add(items.lilyLetter2);
                            return "scene07";
                        }
                }
                ƒS.Speech.clear();
                break;
            case exitThroughGateChoice.answerCity:
                // Go to Scene 07
                dataForSave.pickedReturnToCity = true;
                await ƒS.Speech.tell(characters.narrator, text.Narrator.T0045);
                ƒS.Speech.clear();
                return "scene07";
        }

    }
}

//for copy paste
//await ƒS.Speech.tell(characters.lily, ""); await ƒS.Speech.tell(characters.player, "");