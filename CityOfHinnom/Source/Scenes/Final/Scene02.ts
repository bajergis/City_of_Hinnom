namespace CityOfHinnom {
    export async function Scene02(): ƒS.SceneReturn {

        console.log("Enter Cafe Scene starting");
        //option to go to either Up the Hill Scene or Barista Bad end

        let text = {
            Narrator: {
                T0001: "As I opened the door and the typical bell signals that a customer entered, I was greeted by a timid voice.",
                T0001insert: "A red haired girl with a camera around her neck stood behind the counter, carefully grinding coffee beans as if she wasn’t sure how much pressure to apply. When she saw me, her eyes lit up a bit.",
                T0002: "I gave her my name as well, then took a seat at the counter as she put a cup of steaming coffee in front of me. Some milk and sugar were also there",
                T0003: "I gave her a confused look.",
                T0004: "She got quiet, so I began mustering her. Alpha was focusing entirely on grinding coffee beans. She had a face like a flower and features like the moon.",
                T0005: "Alpha looked away from the coffee mill for a second to greet me with a warm smile.",
                T0006: "Alpha was caught off guard for a second, she paused pouring the freshly ground coffee into her container. However, she quickly gained back her relaxed composure.",
                T0007: "She started cramming around under magazines and newspapers. I wondered, what kind of information would be in those? Maybe those can tell me something about where I am. Meanwhile, Alpha's eyes sparked and she handed me a couple of polaroids.",
                T0008: "They all had different themes. Some were of the café, one was of a rose, and one was of a garden. I didn’t know much about lighting or composition, but I could tell she was good.",
                T0009: "Alpha was fidgeting with her pinky fingers. That must be the first time I’ve seen someone do that.",
                T0010: "Alpha got a bit more serious in her expression.",
                T0011: "Alpha took one of those newspapers and folded it open.",
                T0012: "She has a weird understanding of humor.",
                T0013: "I grabbed another newspaper from the counter and began to skip through the pages.",
                T0014: "That sounded like a whole lot of nothing. And what’s that about a gate?",
                // Stay with alpha route
                TS001: "I looked over at the clock, the hands hadn’t moved an inch. There was no way to tell the time.",
                TS002: "Alpha gave off a self-satisfied snicker ",
                TS003: "Her eyes lit up, Alpha must have had an idea pop into her mind. With how open she is, it’s probably not that difficult to read her.",
                TS004: "We headed out and took a stroll through the dimly illuminated roads. There was no one besides us, each word we said echoed back along these unfamiliar buildings. Alpha was quite amused about this and created different sounds ranging from birdlike to normal shouts. From time to time she would stop to take pictures of just about anything. Stores, signs, traffic lights, you name it.",
                TS005: "When we got to a river bank near the bridge, Alpha slowed down and pointed to a spot with dozens of picnic mats scattered across a park. We sat down and began talking again. Alpha was holding her camera up.",
                // Alpha Bad End
                TB001: "",
                // Alpha Good End
                TG001: "Alpha put in the film roll I gave her. She wound it up and then focused on me as I tried to strike a somewhat natural pose.",
                TG002: "Alpha laughed as I said that, then I saw a flash of light. She took my picture while I was irritated about her remark.",
                TG003: "She had a wide, sincere grin on her face.",
                TG004: "In the exact moment she spoke that last word, she vanished. I sat in dead silence for a while. Even though I knew this would happen, it’s still surreal to know she’s gone. She may have been happy in these final moments, but that leaves me feeling emptier than ever. But I wanted to make her happy, so she could finally leave. This just means I can’t leave for another while, but I’m fine with that. I’ll stay for her, as a way to repent. Who knows, maybe I’ll see her once I have moved on as well.",
                TG005: "All that was left of her, a proof that she existed here, was her camera lying in the grass beside me.",
                // Head on route
                TH001: "Alpha looked calm, but I could tell there was a feeling of disappointment beneath that smile of hers.",
                TH002: "I stuck around for another fifteen minutes or so, drinking Alpha’s magical coffee. No idea how much time she had to practice, but by the taste of it, she’s a master of the craft. Once my cup was empty, I said goodbye to Alpha and left Café Etreant. But I had a place that I wanted to go to.",
            },
            Alpha: {
                T0001: "Oh finally a new customer! Welcome. How much coffee do you want to drink?",
                T0002: "Oh, is that so? Well, no one has ever complained about it so far. Come, sit down. I’ll pour you a cup. You are being served by Alpha, the best barista in town!",
                T0003: "Of course.",
                T0004: "People don’t stay in this town forever. Most leave after a few months, I don’t think anyone has stayed longer than a year.",
                T0005: "This café is called “Étreant”.",
                T0006: "I don’t know.",
                T0007: "Ten years, two months and sixteen days.",
                T0008: "I am the only one that can’t seem to be leaving this desolate place.",
                T0009: "There are a few spread out in this city, however it’s uncommon that any groups form. The only exception are small pairs of two that prefer to spend their time together. But they rarely come by these days, it’s been exactly three months since someone’s come by to talk.",
                T0010: "It can be lonely at times, but I’ve made peace with the situation. If I wanted to, I could walk around and I’ll surely find someone within a couple hours. ",
                T0011: "Do you need others to be happy?",
                T0012: "What about just general society? You seem to miss that there are normal pedestrians, total strangers on the street.",
                T0013: "You never know when you have to take a quick snap of some magical moment. Do you like photography as well?",
                T0014: "I get what you mean. Everyone feels that way at a certain point when they begin something new. It’s part of the Dunning-Kruger effect. You’re disappointed because you don’t improve as fast as you want to.",
                T0015: "There’s a simple solution to that. Practice. Try over and over again until you figure out what you need to do in order to achieve what you see in your head.",
                T0016: "I’m afraid you’ll have to bear with it, sorry.",
                T0017: "You would like to see the photos I took?",
                T0018: "Well, I can’t show you the latest that I took, because my current camera roll isn’t developed yet. But I should have some lying around on the counter here.",
                T0019: "Sure did.",
                T0020: "There’s a copy shop down the road where I can develop as many as I want. I have more or less the entire street for myself.",
                T0021: "Oh, it’s not far. Just follow the street south and then walk up that slope where you come across a white car. None of the cars work around here so they always stay at the same spot. You can’t miss it from there.",
                T0022: "Hmmm. This was the first place I found. The rich aroma that lies in the air makes me feel at home, you know. Of course I could find myself a nice home, maybe some millionaire mansion with a huge pool and a sixty inch TV. But when I sit down here and rest under the comforting orange ceiling lights, I don’t really wish to go anywhere else. Isn’t that why most humans are creatures of habit? You can go out and adventure any time, but at the end of the day you find peace in the place you feel most familiar with.",
                T0023: "Well, tell me then. Why are you here?",
                T0024: "No, I mean why are you here in this place? You must have woken up and found yourself in this strange city, am I right?",
                T0025: "What’s the last date you remember?",
                T0026: "The day that’s printed on here is May 27th.",
                T0027: "Oh, it was already in here the day I got here.",
                T0028: "The night doesn’t end. I’ve just kept track of time by monitoring different clocks. Those work, but the natural progression of time as we understand it doesn’t seem to exist here.",
                T0029: "Yep, hehe.",
                T0030: "It’s eerie, right? Almost as if it wasn’t a human that wrote it.",
                T0031: "No one knows the origins of those newspapers. But they still provide us with useful information.",
                T0032: "You asked about a gate, right? So, there is actually a gate that leads outside this city. It’s only accessible by taking the metro from the central train station downtown.",
                T0033: "Depends on what you mean by leaving. If you want to leave this place, shouldn’t you know where you are in the first place? Otherwise who knows where the exit leads. So let me ask you: Where do you think you are?",
                T0034: "Okay, let’s say you’re dead. Where do dead people go after they leave the afterlife?",
                T0035: "I didn’t expect the actual answer from you, to be honest. But the way I see it, they don’t go anywhere at all. The afterlife they are in, that’s the place they went to for their final rest. That’s it, nothing comes after.",
                T0036: "I can’t say for certain, after all I haven’t been there. I’ve only read about it in those newspapers. Other guests that ended up here and read them have decided to go there and figure out what’s going on. Unfortunately, each one that came back to tell me about the gate told me they hadn’t passed through it.",
                T0037: "I’m afraid if you want the answer to that, you’ll have to try it for yourself.",
                //Stay with Alpha route
                TS001: "Stay as long as you like. I quite enjoy this new company.",
                TS002: "That’s the thing, I usually take off for the day after each guest leaves. There’s an odd pattern, only a maximum of one person comes in each day.",
                TS003: "I’m quite fit, you know. I don’t tire out that easily. So one time I decided to pull three all-nighters in a row just to check. So three days in a row I witnessed only one person entering.",
                TS004: "Heh, I manage. I got tired on the third day, but that made sleep just sooo much better. Plus, I’m a light sleeper, so if someone enters through the door I can still hear the bell.",
                TS005: "True, but I enjoy it. Helping people and listening to their stories is a fun pastime.",
                TS006: "Oh, sure. With how little customers I get, most of the time I get to relax, anyway.",
                TS007: "Say, do you want to visit one of my favorite places in this city?",
                TS008: "Great. It’s not far, only about 5 blocks down. Once we see the bridge, it’s right next to it.",
                TS009: "How about I take a picture of you?",
                // Alpha Bad End
                TB001: "I mean, I would take a picture. But my last film roll got used up after I snapped that bakery earlier.",
                TB002: "",
                TB003: "",
                TB004: "",
                TB005: "",
                TB006: "",
                TB007: "",
                TB008: "",
                TB009: "",
                TB010: "",
                // Alpha Good End
                TG001: "You look a bit like a dork right now.",
                TG002: "That’s way better. Now you’re showing an authentic emotion instead of pausing for a good shot.",
                TG003: "I prefer capturing the raw essence of people I take a portrait of. Especially if you’re the focus of my photo.",
                TG004: "We’ll have to wait until the film is developed, but I have a gut feeling that it’s a pretty decent shot.",
                TG005: "Nope, you’re the first guest in this city that I’ve photographed. It’s been a while since I took one of an actual person.",
                TG006: "I’m so happy-",
                // Head on route
                TH001: "Good luck.",
                TH002: "I hope we meet again. Stay safe.",
            },
            Player: {
                T0001: "You’re supposed to say something like ‘How can I help you’ first.",
                T0002: "You talk like you get lots of guests.",
                T0003: "It doesn’t seem like it, judging by the empty streets.",
                T0004: "Where are we?",
                T0005: "No, I mean this city, this world.",
                T0006: "You say no one stays longer than a year. How do you know? How long have you been here?",
                T0007: "So you mean you’re the only one around?",
                T0008: "Must be nice to have a little human interaction again.",
                T0009: "So it’s your choice to stay here. Sounds like you prefer to be alone.",
                T0010: "Well, I’ve been pretty independent most of my life. I’m not in a relationship right now, but whenever I was in one, I’ve always felt happier than when I was single. With friends it’s similar. I’m having a blast spending time with my best friends, but I’m not exactly an empty husk if I spend a few days without them.",
                T0011: "That’s just because it’s such an otherworldly feeling. Quite haunting actually.",
                T0012: "Say, why do you have a camera around your neck?",
                T0013: "I took some courses on it but it’s not really for me. In my mind I see the perfect shot, but when I look at the result, it’s just not what I had in mind. It’s incredibly frustrating.",
                T0014: "Well it’s not really that I think I’m better than I actually am. It’s more like I can’t accurately replicate what I’m envisioning in my head.",
                T0015: "And the frustration?",
                T0016: "Or I just keep admiring the works of others. Like yours.",
                T0017: "Sure.",
                T0018: "You took these?",
                T0019: "You really like the dutch angle.",
                T0020: "Say, this garden. Where is it?",
                T0021: "You could stay anywhere, though. So why do you tend this café?",
                T0022: "A lot of people are just afraid of change instead of being drawn to the familiar.",
                T0023: "I was kind of in the same boat as you. The smell of coffee drew me here.",
                T0024: "I have no Idea. My memory is mostly intact as well. I know who I am, where I live, who my parents are, where I go to university. The only thing I don’t know is how I got here.",
                T0025: "I clearly remember May 20th, anything after that and I can’t recall if I even experienced that day.",
                T0026: "When did you get this one?",
                T0027: "But you’ve been here for over 10 years. How does time even pass here? I’ve walked around for a few hours, the sky hasn’t changed one bit. In fact, there’s no sign of the moon or stars.",
                T0028: "In other words, looking at that newspaper was entirely pointless.",
                T0029: "What kind of articles are in that one, anyway?",
                T0030: "Well there don’t seem to be many people around to write it, anyway.",
                T0031: "Got any examples?",
                T0032: "So if I go there, I could leave.",
                T0033: "I don’t have a clue. For all I know, I could be dead. Although I have no recollection of dying.",
                T0034: "Back to earth? Another part of the afterlife? People have been philosophizing about these kinds of things for centuries, it’s not something I could answer within a couple seconds of thinking about it.",
                T0035: "So you’re saying the exit doesn’t lead anywhere.",
                T0036: "Maybe the ones that exited had no way of coming back, or didn’t want to come back at all.",
                // Stay with alpha route
                TS001: "I’ve only just arrived here, I’m going to stay for a bit. I might change my mind, but as it stands now I’m not in a rush.",
                TS002: "So when do you usually call it quits and decide to clock out? I can tell you enjoy being a barista, but you must get tired eventually.",
                TS003: "You’re sure you didn’t just miss some?",
                TS004: "Three?? That’s crazy, I get tired after being awake for just 36 hours.",
                TS005: "You know you don’t have to sacrifice sleep just because you want to service guests in this café that technically isn’t even yours.",
                TS006: "Do you ever catch a break?",
                TS007: "Sure, why not.",
                // Alpha Bad End
                TB001: "I mean, I would take a picture. But my last film roll got used up after I snapped that bakery earlier.",
                TB002: "",
                TB003: "",
                TB004: "",
                TB005: "",
                TB006: "",
                TB007: "",
                TB008: "",
                TB009: "",
                TB010: "",
                // Alpha Good End
                TG001: "What’s that supposed to mean?",
                TG002: "Well yeah, I don’t want to mess up the photograph.",
                TG003: "Did it turn out well?",
                TG004: "You said I’m the first one to stick around for a bit longer. So I figure you don’t have some wall where you hang up the pictures of all your guests?",
                TG005: "",
                TG006: "",
                TG007: "",
                TG008: "",
                TG009: "",
                TG010: "",
                // Head on route
                TH001: "It does sound intriguing. I decided, I’ll check it out.",
                TH002: "Know what, if I figure anything out at all, I’ll return to tell you about it.",
            }
        }

        await ƒS.Location.show(locations.CafeInside);
        //await ƒS.update();
        await ƒS.update(transitions.wipe.duration, transitions.wipe.alpha, transitions.wipe.edge);
        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001);

        await ƒS.Character.animate(characters.alpha, characters.alpha.pose.happy, appearAnimation());
        await ƒS.update();
        // play relax.ogg
        ƒS.Sound.play(sound.cafe, 1, true);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0001insert);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0001);
        await ƒS.Speech.tell(characters.player, text.Player.T0001);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0002);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);

        await ƒS.Speech.tell(characters.player, text.Player.T0002);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0003);
        await ƒS.Speech.tell(characters.player, text.Player.T0003);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0004);
        // info for iris later
        dataForSave.hasMetAlpha = true;
        await ƒS.Speech.tell(characters.player, text.Player.T0004);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0005);
        await ƒS.Speech.tell(characters.player, text.Player.T0005);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0006);
        await ƒS.Speech.tell(characters.player, text.Player.T0006);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0007);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0003);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0008);
        await ƒS.Speech.tell(characters.player, text.Player.T0007);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0009);
        await ƒS.Speech.tell(characters.player, text.Player.T0008);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0010);
        await ƒS.Speech.tell(characters.player, text.Player.T0009);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0011);
        await ƒS.Speech.tell(characters.player, text.Player.T0010);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0012);
        await ƒS.Speech.tell(characters.player, text.Player.T0011);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0004);

        await ƒS.Speech.tell(characters.player, text.Player.T0012);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0013);
        await ƒS.Speech.tell(characters.player, text.Player.T0013);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0005);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0014);
        await ƒS.Speech.tell(characters.player, text.Player.T0014);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0015);
        await ƒS.Speech.tell(characters.player, text.Player.T0015);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0016);
        await ƒS.Speech.tell(characters.player, text.Player.T0016);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0006);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0017);
        await ƒS.Speech.tell(characters.player, text.Player.T0017);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0018);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0007);

        await ƒS.Speech.tell(characters.player, text.Player.T0018);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0019);
        await ƒS.Speech.tell(characters.player, text.Player.T0019);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0008);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0020);
        await ƒS.Speech.tell(characters.player, text.Player.T0020);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0021);
        await ƒS.Speech.tell(characters.player, text.Player.T0021);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0009);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0022);
        await ƒS.Speech.tell(characters.player, text.Player.T0022);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0023);
        await ƒS.Speech.tell(characters.player, text.Player.T0023);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0010);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0024);
        await ƒS.Speech.tell(characters.player, text.Player.T0024)

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0011);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0025);
        await ƒS.Speech.tell(characters.player, text.Player.T0025);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0026);
        await ƒS.Speech.tell(characters.player, text.Player.T0026);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0027);
        await ƒS.Speech.tell(characters.player, text.Player.T0027);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0028);
        await ƒS.Speech.tell(characters.player, text.Player.T0028);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0029);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0012);

        await ƒS.Speech.tell(characters.player, text.Player.T0029);

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0013);

        // Novel Page
        ƒS.Speech.hide();

        let pages: string[] = ["<strong>Keeping the City Simple and Clean:</strong><br\><br\>The city is working hard to ensure that its infrastructure remains intact for residents and visitors alike. With a growing population and increased demand for services, the city has been busy implementing a number of projects designed to improve and maintain its infrastructure. <br\>\
            <br\>One of the key initiatives has been the upgrading of roads and to ensure that they can accommodate the increasing traffic. The city has invested in new construction techniques and materials that are designed to last longer and withstand the elements, ensuring that residents can travel safely and efficiently.<br\> \
            <br\>In addition to roads, the city has also been focusing on maintaining its buildings, parks, and public spaces. The city has undertaken a comprehensive maintenance program that includes regular inspections, repairs, and renovations to keep its facilities in top condition.<br\><br\>Page 1",
            "Another major area of focus has been the city's water and sewage systems. The city has invested in new technology and equipment to ensure that the systems are efficient and reliable, while also reducing the risk of leaks and other problems that can harm the environment. <br\> \
            <br\>Despite these efforts, the city recognizes that there is still much work to be done. However, with continued commitment and investment, the city is confident that it will be able to maintain its infrastructure and provide its residents with the services they need and deserve.<br\> \
            <br\>Finally, in the heart of the city, there is a park that offers residents a peaceful retreat from the hustle and bustle of urban life. The park features lush green spaces, beautiful gardens, and a charming gazebo, and at the end of it all, there is a gate that leads outside the city, into the open country. The park provides residents with the opportunity to escape the city for a while, and to enjoy the beauty of nature.<br\><br\>Page 2"];
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

        await ƒS.Speech.tell(characters.narrator, text.Narrator.T0014);

        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0030);
        await ƒS.Speech.tell(characters.player, text.Player.T0030);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0031);
        await ƒS.Speech.tell(characters.player, text.Player.T0031);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0032);
        await ƒS.Speech.tell(characters.player, text.Player.T0032);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0033);
        await ƒS.Speech.tell(characters.player, text.Player.T0033);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0034);
        await ƒS.Speech.tell(characters.player, text.Player.T0034);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0035);
        await ƒS.Speech.tell(characters.player, text.Player.T0035);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0036);
        await ƒS.Speech.tell(characters.player, text.Player.T0036);
        await ƒS.Speech.tell(characters.alpha, text.Alpha.T0037);

        //choice leave or stay
        ƒS.Sound.fade(sound.cafe, 0, 5);
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(1.5);

        let staywithAlphaChoice = {
            answerStay: "Stay here with Alpha.",
            answerLeave: "Say you'll head on.",
        };

        let stayWithAlpha = await ƒS.Menu.getInput(staywithAlphaChoice, "choicesCSSclass");

        switch (stayWithAlpha) {
            case staywithAlphaChoice.answerStay:
                // Alpha End
                // play relax.ogg

                dataForSave.pickedStayWithAlpha = true;
                console.log(dataForSave.alphaScore);

                await ƒS.Speech.tell(characters.player, text.Player.TS001);
                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS001);

                await ƒS.Speech.tell(characters.narrator, text.Narrator.TS001);

                await ƒS.Speech.tell(characters.player, text.Player.TS002);
                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS002);
                await ƒS.Speech.tell(characters.player, text.Player.TS003);
                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS003);
                await ƒS.Speech.tell(characters.player, text.Player.TS004);

                await ƒS.Speech.tell(characters.narrator, text.Narrator.TS002);

                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS004);
                await ƒS.Speech.tell(characters.player, text.Player.TS005);
                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS005);
                await ƒS.Speech.tell(characters.player, text.Player.TS006);
                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS006);

                await ƒS.Speech.tell(characters.narrator, text.Narrator.TS003);

                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS007);
                await ƒS.Speech.tell(characters.player, text.Player.TS007);
                await ƒS.Speech.tell(characters.alpha, text.Alpha.TS008);

                ƒS.Sound.fade(sound.cafe, 0, 5);

                await ƒS.Location.show(locations.CityStreetNight);
                await ƒS.Character.hide(characters.alpha);
                await ƒS.update(transitions.tv.duration, transitions.tv.alpha, transitions.tv.edge);

                await ƒS.Speech.tell(characters.narrator, text.Narrator.TS004);

                await ƒS.Location.show(locations.AlphaGoodEnd);
                ƒS.Sound.play(sound.calm, 1, true);
                await ƒS.update(transitions.tv.duration, transitions.tv.alpha, transitions.tv.edge);

                await ƒS.Speech.tell(characters.narrator, text.Alpha.TS009);

                //Good or Bad End Option

                if (dataForSave.ownsCameraRoll) {
                    //Good
                    await ƒS.Speech.tell(characters.narrator, text.Narrator.TG001);

                    await ƒS.Speech.tell(characters.alpha, text.Alpha.TG001);
                    await ƒS.Speech.tell(characters.player, text.Player.TG001);

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.TG002);

                    await ƒS.Speech.tell(characters.alpha, text.Alpha.TG002);
                    await ƒS.Speech.tell(characters.player, text.Player.TG002);
                    await ƒS.Speech.tell(characters.alpha, text.Alpha.TG003);
                    await ƒS.Speech.tell(characters.player, text.Player.TG003);
                    await ƒS.Speech.tell(characters.alpha, text.Alpha.TG004);
                    await ƒS.Speech.tell(characters.player, text.Player.TG004);
                    await ƒS.Speech.tell(characters.alpha, text.Alpha.TG005);
                    dataForSave.irisScore += 50;
                    dataForSave.totalScore += 50;

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.TG003);

                    await ƒS.Speech.tell(characters.alpha, text.Alpha.TG006);
                    // make alpha disappear
                    await ƒS.Location.show(locations.AlphaEmptyGoodEnd);
                    await ƒS.Sound.fade(sound.calm, 0, 0);
                    await ƒS.update();

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.TG004);

                    await ƒS.Location.show(locations.CameraLyingInGrass);
                    await ƒS.update();
                    ƒS.Inventory.add(items.camera);

                    await ƒS.Speech.tell(characters.narrator, text.Narrator.TG005);

                    window.open(letters.AlphaLetter2.background);

                    // Create Letter
                    openLetter(letters.AlphaLetter2.background);

                    ƒS.Inventory.add(items.alphaLetter2);
                    return "scene07";

                } else {
                    //Bad
                    dataForSave.alphaScore += 50;
                    dataForSave.totalScore += 50;
                    await ƒS.Speech.tell(characters.alpha, text.Alpha.TB001);
                    await ƒS.Sound.fade(sound.calm, 0, 0);
                    // Create Letter
                    openLetter(letters.AlphaLetter1.background);

                    ƒS.Inventory.add(items.alphaLetter1);
                    ƒS.Inventory.add(items.filmRoll);
                    dataForSave.ownsCameraRoll = true;
                    return "loop";
                }

                ƒS.Speech.clear();
                break;
            case staywithAlphaChoice.answerLeave:
                // Go to Scene 03
                dataForSave.pickedLeaveAlpha = true;
                await ƒS.Speech.tell(characters.player, text.Player.TH001);
                await ƒS.Speech.tell(characters.alpha, text.Alpha.TH001);
                await ƒS.Speech.tell(characters.player, text.Player.TH002);

                await ƒS.Speech.tell(characters.narrator, text.Narrator.TH001);

                await ƒS.Speech.tell(characters.alpha, text.Alpha.TH002);

                await ƒS.Speech.tell(characters.narrator, text.Narrator.TH002);

                ƒS.Character.animate(characters.alpha, characters.alpha.pose.happy, disappearAnimation());
                ƒS.Speech.clear();

                break;
        }

    }
}