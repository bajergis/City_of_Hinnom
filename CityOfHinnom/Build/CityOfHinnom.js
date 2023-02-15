"use strict";
var CityOfHinnom;
(function (CityOfHinnom) {
    CityOfHinnom.ƒ = FudgeCore;
    CityOfHinnom.ƒS = FudgeStory;
    console.log("City of Hinnom starting");
    // **** TRANSITIONS ****
    // transitions is declared here as well as initialized
    CityOfHinnom.transitions = {
        bismuth: {
            duration: 2,
            alpha: "Images/Transitions/001.jpg",
            edge: 1,
        },
        wipe: {
            duration: 2,
            alpha: "Images/Transitions/circlewipe-cw.jpg",
            edge: 1,
        },
        static: {
            duration: 2,
            alpha: "Images/Transitions/006.jpg",
            edge: 1,
        },
        fuzzy: {
            duration: 2,
            alpha: "Images/Transitions/010.png",
            edge: 1,
        },
        swirl: {
            duration: 2,
            alpha: "Images/Transitions/swirl.png",
            edge: 1,
        },
        tv: {
            duration: 2,
            alpha: "Images/Transitions/039.jpg",
            edge: 1,
        },
        ripple: {
            duration: 2,
            alpha: "Images/Transitions/040.jpg",
            edge: 1,
        },
        jigsaw: {
            duration: 2,
            alpha: "Images/Transitions/jigsaw07.png",
            edge: 1,
        },
        swoosh: {
            duration: 2,
            alpha: "Images/Transitions/033.jpg",
            edge: 1,
        },
        wet: {
            duration: 2,
            alpha: "Images/Transitions/wet.jpg",
            edge: 1,
        },
        watercolor: {
            duration: 2,
            alpha: "Images/Transitions/12.jpg",
            edge: 1,
        }
    };
    // **** SOUND ****
    // sound is declared here as well as initialized
    CityOfHinnom.sound = {
        // themes
        cafe: "Audio/Relax.ogg",
        sad1: "Audio/Death.ogg",
        sad2: "Audio/Doll Dance.ogg",
        sad3: "Audio/Letting Go Main.ogg",
        sad4: "Audio/Evans.ogg",
        guitar: "Audio/Guitar on the Water.ogg",
        jazz: "Audio/Jazzy Shop.ogg",
        terror1: "Audio/Lurking.ogg",
        pianoshort1: "Audio/Piano Jingle 1.ogg",
        pianoshort2: "Audio/Piano Jingle 2.ogg",
        pianoshort3: "Audio/Piano Jingle 3.ogg",
        pianoshort4: "Audio/Piano Jingle 4.ogg",
        pianoshort5: "Audio/Piano Jingle 5.ogg",
        pianoshort6: "Audio/Piano Jingle 6.ogg",
        terror2: "Audio/Splatters.ogg",
        calm: "Audio/Time for Rest.ogg",
        transition1: "Audio/Transition 1.ogg",
        transition2: "Audio/Transition 2.ogg",
        transition3: "Audio/Transition 3.ogg",
        transition5: "Audio/Transition 5.ogg",
        transition6: "Audio/Transition 6.ogg",
        bellSFX1: "Audio/UI Bell 1.wav",
        bellSFX2: "Audio/UI Bell 2.wav",
        brightSFX: "Audio/UI Bright.wav",
        darkSFX: "Audio/UI Dark.wav",
        cancelSFX: "Audio/UI Simple Cancel.wav",
        confirmSFX: "Audio/UI Simple Confirm.wav",
        selectSFX: "Audio/UI Simple Select.wav",
        lily: "Audio/Matsushita Diner.ogg",
        page1: "Audio/ui_confirm2.ogg",
        page2: "Audio/ui_confirm3.ogg",
        page3: "Audio/ui_confirm4.ogg",
    };
    // **** LOCATIONS ****
    CityOfHinnom.locations = {
        AlphaGoodEnd: {
            name: "Character Card of Alpha Good End",
            background: "Images/Backgrounds/AlphaWithCamera.png"
        },
        AlphaEmptyGoodEnd: {
            name: "Character Card of Alpha Good End without Alpha",
            background: "Images/Backgrounds/BGwithoutAlpha.png"
        },
        BlackScreen: {
            name: "Black",
            background: "Images/Backgrounds/Black.png"
        },
        BookOnCouch: {
            name: "Iris book lying down",
            background: "Images/Backgrounds/BookOnCouch.png"
        },
        CafeFront: {
            name: "Front of the cafe",
            background: "Images/Backgrounds/CafeFront.png"
        },
        CafeInside: {
            name: "Inside of the cafe",
            background: "Images/Backgrounds/CafeInside.png"
        },
        CameraLyingInGrass: {
            name: "Alpha's camera in the grass",
            background: "Images/Backgrounds/CameraLyingInGrass.png"
        },
        CityStreetNight: {
            name: "City Street at night",
            background: "Images/Backgrounds/CityStreetNight.png"
            // foreground: "Images/Backgrounds/radio.png"
        },
        FilmRollLying: {
            name: "A camera roll lying on the ground",
            background: "Images/Backgrounds/FilmRollLying.png"
        },
        GatesOfHell: {
            name: "The gates of Hell",
            background: "Images/Backgrounds/GatesOfHell.png"
        },
        InsideApartment: {
            name: "Inside of the apartment of the player",
            background: "Images/Backgrounds/InsideApartment.png"
        },
        InsideGarden: {
            name: "Inside of the botanical garden",
            background: "Images/Backgrounds/InsideGarden.png"
        },
        IrisBookmark: {
            name: "Iris Bookmark lying on the ground",
            background: "Images/Backgrounds/IrisBookmark.png"
        },
        LilyChildhoodPicture: {
            name: "A picture of the player and lily next to a rock",
            background: "Images/Backgrounds/LilyChildhoodPic.png"
        },
        OutsideApartment: {
            name: "Outside of the apartment of the player",
            background: "Images/Backgrounds/OutsideApartment.png"
        },
        SlopeHill: {
            name: "Street that leads to the garden",
            background: "Images/Backgrounds/SlopeHill.png"
        },
        TrainStation: {
            name: "The train station",
            background: "Images/Backgrounds/TrainStation.png"
        },
        Library: {
            name: "The library Iris lives at",
            background: "Images/Backgrounds/Library.png"
        },
        LilyApartment: {
            name: "Lily's Apartment",
            background: "Images/Backgrounds/InsideApartmentLily.png"
        },
        IrisReadingBook: {
            name: "IrisReadingBook",
            background: "Images/Backgrounds/IrisReadingBook.png"
        },
    };
    // **** ITEMS ****
    // items is declared here as well as initialized
    CityOfHinnom.items = {
        filmRoll: {
            name: "Film Roll",
            description: " An empty film roll <br\>",
            image: "Images/Items/Filmroll.png",
            static: true
        },
        camera: {
            name: "Camera",
            description: " Alpha's Camera <br\>",
            image: "Images/Items/Camera.png",
            static: true
        },
        bookmark: {
            name: "Bookmark",
            description: " A familiar bookmark <br\>",
            image: "Images/Items/Bookmark.png",
            static: true
        },
        Book: {
            name: "Book",
            description: " The book Iris read me <br\>",
            image: "Images/Items/Book.png",
            static: true
        },
        childhoodPicture: {
            name: "Picture",
            description: " A picture of Lily and me <br\>",
            image: "Images/Items/Picture.png",
            static: true
        },
        alphaLetter1: {
            name: "Alpha Letter",
            description: " A letter Alpha wrote me. She was lonely. <br\>",
            image: "Images/Items/AlphaLetter1.png",
            static: true
        },
        irisLetter1: {
            name: "Iris Letter",
            description: " A letter Iris wrote me. It's mostly about her mother. <br\>",
            image: "Images/Items/IrisLetter1.png",
            static: true
        },
        lilyLetter1: {
            name: "Lily Letter",
            description: " A letter Lily left me. We used to know each other. <br\>",
            image: "Images/Items/LilyLetter1.png",
            static: true
        },
        alphaLetter2: {
            name: "Alpha Farewell",
            description: " I'm so happy you are the focus of my new photos. <br\>",
            image: "Images/Items/AlphaLetter2.png",
            static: true
        },
        irisLetter2: {
            name: "Iris Farewell",
            description: " I want you to love me across the universe and back. <br\>",
            image: "Images/Items/IrisLetter2.png",
            static: true
        },
        lilyLetter2: {
            name: "Lily Farewell",
            description: " Let's make up for all the time lost. <br\>",
            image: "Images/Items/LilyLetter2.png",
            static: true
        },
    };
    CityOfHinnom.letters = {
        AlphaLetter1: {
            name: "Alpha first letter",
            background: "Images/Backgrounds/Letters/AlphaLetter1.png"
        },
        AlphaLetter2: {
            name: "Alpha second letter",
            background: "Images/Backgrounds/Letters/AlphaLetter2.png"
        },
        IrisLetter1: {
            name: "Iris first letter",
            background: "Images/Backgrounds/Letters/IrisLetter1.png"
        },
        IrisLetter2: {
            name: "Iris second letter",
            background: "Images/Backgrounds/Letters/IrisLetter2.png"
        },
        LilyLetter1: {
            name: "Lily first letter",
            background: "Images/Backgrounds/Letters/LilyLetter1.png"
        },
        LilyLetter2: {
            name: "Lily second letter",
            background: "Images/Backgrounds/Letters/LilyLetter2.png"
        },
    };
    // **** DATA THAT WILL BE SAVED (GAME PROGRESS) ****
    CityOfHinnom.dataForSave = {
        nameProtagonist: "",
        alphaScore: 0,
        irisScore: 0,
        lilyScore: 0,
        totalScore: 0,
        scoreForAlpha: "",
        scoreForIris: "",
        scoreForLily: "",
        randomPoints: 0,
        pickedStayWithAlpha: false,
        pickedLeaveAlpha: false,
        pickedStayWithIris: false,
        pickedLeaveIris: false,
        pickedReturnToCity: false,
        pickedExit: false,
        pickedStayWithLily: false,
        hasMetAlpha: false,
        hasMetIris: false,
        hasReadSomething: false,
        ownsCameraRoll: false,
        ownsIrisLetter2: false,
        ownsBookmark: false,
        ownsAlphaLetter2: false,
        ownsLilyLetter2: false,
        ownsChildhoodPicture: false,
        alphaSkip: false,
        irisSkip: false,
    };
    // **** CHARACTERS ****
    // characters is declared here as well as initialized
    CityOfHinnom.characters = {
        narrator: {
            name: "",
        },
        player: {
            name: "",
        },
        alpha: {
            name: "Alpha",
            origin: CityOfHinnom.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "Images/Characters/Alpha.png",
                upset: ""
            }
        },
        iris: {
            name: "Iris",
            origin: CityOfHinnom.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "Images/Characters/Iris.png",
                upset: ""
            }
        },
        lily: {
            name: "Lily",
            origin: CityOfHinnom.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "Images/Characters/Lily.png",
                upset: ""
            }
        }
    };
    // **** CREDITS ****
    function showCredits() {
        CityOfHinnom.ƒS.Text.setClass("credits");
        CityOfHinnom.ƒS.Text.print("Story: Jason Blackschleger <br\><br\> Art: Jason Blackschleger <br\><br\> Music: Tim Reichert (Fulminisictus)");
    }
    CityOfHinnom.showCredits = showCredits;
    // **** ANIMATIONS ****
    function appearAnimation() {
        return {
            start: { translation: CityOfHinnom.ƒS.positionPercent(80, 100), color: CityOfHinnom.ƒS.Color.CSS("black", 0) },
            end: { translation: CityOfHinnom.ƒS.positionPercent(70, 100), color: CityOfHinnom.ƒS.Color.CSS("white", 1) },
            duration: 2,
            playmode: CityOfHinnom.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    CityOfHinnom.appearAnimation = appearAnimation;
    function disappearAnimation() {
        return {
            start: { translation: CityOfHinnom.ƒS.positionPercent(70, 100), color: CityOfHinnom.ƒS.Color.CSS("white", 1) },
            end: { translation: CityOfHinnom.ƒS.positionPercent(80, 100), color: CityOfHinnom.ƒS.Color.CSS("black", 0) },
            duration: 3,
            playmode: CityOfHinnom.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    CityOfHinnom.disappearAnimation = disappearAnimation;
    function getAnimation() {
        return {
            start: { translation: CityOfHinnom.ƒS.positions.bottomleft, rotation: -20, scaling: new CityOfHinnom.ƒS.Position(0.5, 1.5), color: CityOfHinnom.ƒS.Color.CSS("white", 0.3) },
            end: { translation: CityOfHinnom.ƒS.positions.bottomright, rotation: 20, scaling: new CityOfHinnom.ƒS.Position(1.5, 0.5), color: CityOfHinnom.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: CityOfHinnom.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    CityOfHinnom.getAnimation = getAnimation;
    async function openLetter(_image) {
        // Create Letter
        window.open(_image);
        //button to continue
        CityOfHinnom.ƒS.Speech.hide();
        let pause = { done: "Continue" };
        let choice;
        CityOfHinnom.ƒS.Text.addClass("pause");
        do {
            choice = await CityOfHinnom.ƒS.Menu.getInput(pause, "pause");
        } while (choice != pause.done);
        CityOfHinnom.ƒS.Text.close();
    }
    CityOfHinnom.openLetter = openLetter;
    // **** MENÜ ****
    // Buttons
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    // true = offen; false = geschlossen
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await CityOfHinnom.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await CityOfHinnom.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                showCredits();
        }
    }
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case CityOfHinnom.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await CityOfHinnom.ƒS.Progress.save();
                break;
            case CityOfHinnom.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await CityOfHinnom.ƒS.Progress.load();
                break;
            case CityOfHinnom.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            // Inventory shortcuts
            case CityOfHinnom.ƒ.KEYBOARD_CODE.I:
                console.log("open inventory");
                await CityOfHinnom.ƒS.Inventory.open();
                break;
            case CityOfHinnom.ƒ.KEYBOARD_CODE.ESC:
                console.log("close inventory");
                await CityOfHinnom.ƒS.Inventory.open();
                CityOfHinnom.ƒS.Inventory.close();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = CityOfHinnom.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        // **** SCENE HIERARCHY ****
        let scenes = [
            { id: "intro", scene: CityOfHinnom.Intro, name: "Intro", next: "scene01" },
            { id: "scene01", scene: CityOfHinnom.Scene01, name: "In Front of Cafe", next: "scene03" },
            { id: "scene02", scene: CityOfHinnom.Scene02, name: "Alpha Route", next: "scene03" },
            { id: "scene03", scene: CityOfHinnom.Scene03, name: "To the Garden", next: "scene04" },
            { id: "scene04", scene: CityOfHinnom.Scene04, name: "Iris Route", next: "scene05" },
            { id: "scene05", scene: CityOfHinnom.Scene05, name: "Taking the Tram", next: "scene06" },
            { id: "scene06", scene: CityOfHinnom.Scene06, name: "Lily Route", next: "Empty Scene" },
            { id: "scene07", scene: CityOfHinnom.Scene07, name: "True End", next: "Empty Scene" },
            { id: "loop", scene: CityOfHinnom.Loop, name: "True End", next: "intro" },
            // Empty ending scene to stop the program
            { id: "Empty Scene", scene: CityOfHinnom.Empty, name: "END" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        CityOfHinnom.dataForSave = CityOfHinnom.ƒS.Progress.setData(CityOfHinnom.dataForSave, uiElement);
        // start the sequence
        CityOfHinnom.ƒS.Progress.go(scenes);
    }
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Empty() {
        console.log("THE VISUAL NOVEL ENDS HERE");
    }
    CityOfHinnom.Empty = Empty;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Intro() {
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
        };
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.CityStreetNight);
        await CityOfHinnom.ƒS.update();
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.terror1, 1, true);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0003);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0004);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0005);
        // Enter name 
        if (CityOfHinnom.dataForSave.nameProtagonist != "") {
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, CityOfHinnom.dataForSave.nameProtagonist + ".");
        }
        else {
            while (CityOfHinnom.dataForSave.nameProtagonist == "") {
                CityOfHinnom.dataForSave.nameProtagonist = await CityOfHinnom.ƒS.Speech.getInput();
                switch (CityOfHinnom.dataForSave.nameProtagonist) {
                    case "Alpha":
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "No, I don't think I am. Let's try again.");
                        CityOfHinnom.dataForSave.nameProtagonist = "";
                        break;
                    case "Iris":
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "No, I don't think I am. Let's try again.");
                        CityOfHinnom.dataForSave.nameProtagonist = "";
                        break;
                    case "Lily":
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "No, I don't think I am. Let's try again.");
                        CityOfHinnom.dataForSave.nameProtagonist = "";
                        break;
                    default:
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "That's me, " + CityOfHinnom.dataForSave.nameProtagonist + ".");
                        CityOfHinnom.characters.player.name = CityOfHinnom.dataForSave.nameProtagonist;
                        break;
                }
            }
        }
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0006);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0007);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0008);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0009);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0010);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0011);
        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.terror1, 0, 3);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0012);
    }
    CityOfHinnom.Intro = Intro;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Loop() {
        console.log("Looping back to the beginning.");
        CityOfHinnom.ƒS.Speech.hide();
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.BlackScreen);
        await CityOfHinnom.ƒS.update();
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.pianoshort5, 1, false);
        await CityOfHinnom.ƒS.update(5);
    }
    CityOfHinnom.Loop = Loop;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Scene01() {
        console.log("Walk Through Town Scene starting");
        //Needs option to go to cafe, if not cafe then directly to up the hill
        let text = {
            Narrator: {
                T0001: "This café appeared pretty inviting. The lights were on, so who knows, maybe I’ll find someone else.",
                T0002: "As much as I enjoy coffee, I don't think that it's such a good idea to waste my time like this. I should press on and find some other clues about this place.",
            }
        };
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.CafeFront);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.watercolor.duration, CityOfHinnom.transitions.watercolor.alpha, CityOfHinnom.transitions.watercolor.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
        //choice
        CityOfHinnom.ƒS.Speech.clear();
        CityOfHinnom.ƒS.Speech.hide();
        await CityOfHinnom.ƒS.update(1);
        let goIntoCafeChoice = {
            answerEnter: "Enter the café.",
            answerWalkOn: "Continue walking.",
        };
        let goIntoCafe = await CityOfHinnom.ƒS.Menu.getInput(goIntoCafeChoice, "choicesCSSclass");
        switch (goIntoCafe) {
            case goIntoCafeChoice.answerEnter:
                // Go to Scene 02
                console.log(CityOfHinnom.dataForSave.alphaScore);
                //await ƒS.Speech.tell(characters.narrator, text.Narrator.T0002);
                CityOfHinnom.ƒS.Speech.clear();
                return "scene02";
            case goIntoCafeChoice.answerWalkOn:
                // Go to Scene 03
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
                CityOfHinnom.ƒS.Speech.clear();
                break;
        }
    }
    CityOfHinnom.Scene01 = Scene01;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Scene02() {
        console.log("Enter Cafe Scene starting");
        //option to go to either Up the Hill Scene or Barista Bad end
        let text = {
            Narrator: {
                T0001: "As I opened the door and the typical bell signaled that a customer entered, I was greeted by a timid voice.",
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
                TB001: "Alpha didn’t answer. She was staring into the distance, her eyes weren’t focused on anything.",
                TB002: "As I said that, I realized that it was her that wasn’t with me anymore. I could still make out the dent she made sitting on the mat, but she was nowhere to be found. I checked out the mat she mentioned, in the grass laid a film roll. From what I could tell, it’s still usable. I grabbed it and put it in my pocket. However, Alpha was gone.",
                TB003: "There was no way to explain what had happened. Why would she disappear right after realizing why she was here? Doesn’t that mean that there’s a reason I’m here, as well? I was still a bit shocked, so I rested for some time before I could think straight again. There was no point in mourning Alpha for too long. After all, I don’t know what happened to her.",
                TB004: "But for now, I should head on.",
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
                T0022: "Hmmm. This was the first place I found. The rich aroma that lies in the air makes me feel at home, you know. Of course I could find myself a nice home, maybe some millionaire mansion with a huge pool and a sixty inch TV. But when I sit down here and rest under the comforting orange ceiling lights, I don’t really wish to go anywhere else.",
                T0022contd: "Isn’t that why most humans are creatures of habit? You can go out and adventure any time, but at the end of the day you find peace in the place you feel most familiar with.",
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
                TB002: "Just be natural. If you try holding some pose, you’ll always end up looking stiff.",
                TB003: "Wait, that thing next to the mat over there…",
                TB004: "I think I know why I’m here.",
                TB005: "I’m so lonely.",
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
                TB001: "I’m okay with that. I never know what to do when someone takes my picture.",
                TB002: "I’m pretty sure I look stiff being natural as well.",
                TB003: "Which one?",
                TB004: "You do?",
                TB005: "But I’m right with you-",
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
        };
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.CafeInside);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.wipe.duration, CityOfHinnom.transitions.wipe.alpha, CityOfHinnom.transitions.wipe.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
        await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.alpha, CityOfHinnom.characters.alpha.pose.happy, CityOfHinnom.appearAnimation());
        await CityOfHinnom.ƒS.update();
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.cafe, 1, true);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001insert);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0001);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0001);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0002);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0002);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0003);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0003);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0004);
        // info for iris later
        CityOfHinnom.dataForSave.hasMetAlpha = true;
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0004);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0005);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0005);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0006);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0006);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0007);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0003);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0008);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0007);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0009);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0008);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0010);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0009);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0011);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0010);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0012);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0011);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0004);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0012);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0013);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0013);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0005);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0014);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0014);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0015);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0015);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0016);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0016);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0006);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0017);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0017);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0018);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0007);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0018);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0019);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0019);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0008);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0020);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0020);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0021);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0021);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0009);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0022);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0022contd);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0022);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0023);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0023);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0010);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0024);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0024);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0011);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0025);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0025);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0026);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0026);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0027);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0027);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0028);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0028);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0029);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0012);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0029);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0013);
        // Novel Page
        CityOfHinnom.ƒS.Speech.hide();
        let pages = ["<strong>Keeping the City Simple and Clean:</strong><br\><br\>The city is working hard to ensure that its infrastructure remains intact for residents and visitors alike. With a growing population and increased demand for services, the city has been busy implementing a number of projects designed to improve and maintain its infrastructure. <br\>\
            <br\>One of the key initiatives has been the upgrading of roads and to ensure that they can accommodate the increasing traffic. The city has invested in new construction techniques and materials that are designed to last longer and withstand the elements, ensuring that residents can travel safely and efficiently.<br\> \
            <br\>In addition to roads, the city has also been focusing on maintaining its buildings, parks, and public spaces. The city has undertaken a comprehensive maintenance program that includes regular inspections, repairs, and renovations to keep its facilities in top condition.<br\><br\>Page 1",
            "Another major area of focus has been the city's water and sewage systems. The city has invested in new technology and equipment to ensure that the systems are efficient and reliable, while also reducing the risk of leaks and other problems that can harm the environment. <br\> \
            <br\>Despite these efforts, the city recognizes that there is still much work to be done. However, with continued commitment and investment, the city is confident that it will be able to maintain its infrastructure and provide its residents with the services they need and deserve.<br\> \
            <br\>Finally, in the heart of the city, there is a park that offers residents a peaceful retreat from the hustle and bustle of urban life. The park features lush green spaces, beautiful gardens, and a charming gazebo, and at the end of it all, there is a gate that leads outside the city, into the open country. The park provides residents with the opportunity to escape the city for a while, and to enjoy the beauty of nature.<br\><br\>Page 2"];
        let current = 0;
        let flip = { back: "Back", next: "Next", done: "Close" };
        let choice;
        CityOfHinnom.ƒS.Text.addClass("flip");
        do {
            CityOfHinnom.ƒS.Text.print(pages[current]);
            choice = await CityOfHinnom.ƒS.Menu.getInput(flip, "flip");
            switch (choice) {
                case flip.back:
                    current = Math.max(0, current - 1);
                    break;
                case flip.next:
                    current = Math.min(2, current + 1);
                    break;
            }
        } while (choice != flip.done);
        CityOfHinnom.ƒS.Text.close();
        CityOfHinnom.dataForSave.hasReadSomething = true;
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0014);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0030);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0030);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0031);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0031);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0032);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0032);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0033);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0033);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0034);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0034);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0035);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0035);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0036);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.T0036);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.T0037);
        //choice leave or stay
        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.cafe, 0, 5);
        CityOfHinnom.ƒS.Speech.clear();
        CityOfHinnom.ƒS.Speech.hide();
        await CityOfHinnom.ƒS.update(1.5);
        let staywithAlphaChoice = {
            answerStay: "Stay here with Alpha.",
            answerLeave: "Say you'll head on.",
        };
        let stayWithAlpha = await CityOfHinnom.ƒS.Menu.getInput(staywithAlphaChoice, "choicesCSSclass");
        switch (stayWithAlpha) {
            case staywithAlphaChoice.answerStay:
                // Alpha End
                // play relax.ogg
                CityOfHinnom.dataForSave.pickedStayWithAlpha = true;
                console.log(CityOfHinnom.dataForSave.alphaScore);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TS001);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS001);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TS001);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TS002);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS002);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TS003);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS003);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TS004);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TS002);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS004);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TS005);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS005);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TS006);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS006);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TS003);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS007);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TS007);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TS008);
                CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.cafe, 0, 5);
                await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.CityStreetNight);
                await CityOfHinnom.ƒS.Character.hide(CityOfHinnom.characters.alpha);
                await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.tv.duration, CityOfHinnom.transitions.tv.alpha, CityOfHinnom.transitions.tv.edge);
                CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.calm, 1, true);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TS004);
                await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.AlphaGoodEnd);
                await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.tv.duration, CityOfHinnom.transitions.tv.alpha, CityOfHinnom.transitions.tv.edge);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Alpha.TS009);
                //Good or Bad End Option
                if (CityOfHinnom.dataForSave.ownsCameraRoll) {
                    //Good
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TG001);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TG001);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TG001);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TG002);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TG002);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TG002);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TG003);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TG003);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TG004);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TG004);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TG005);
                    CityOfHinnom.dataForSave.alphaScore += 50;
                    CityOfHinnom.dataForSave.totalScore += 50;
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TG003);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TG006);
                    // make alpha disappear
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.AlphaEmptyGoodEnd);
                    CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.calm, 0, 0);
                    await CityOfHinnom.ƒS.update();
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TG004);
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.CameraLyingInGrass);
                    await CityOfHinnom.ƒS.update();
                    CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.camera);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TG005);
                    window.open(CityOfHinnom.letters.AlphaLetter2.background);
                    // Create Letter
                    CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.page1, 1, false);
                    CityOfHinnom.openLetter(CityOfHinnom.letters.AlphaLetter2.background);
                    CityOfHinnom.ƒS.Text.print(" ");
                    CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.alphaLetter2);
                    CityOfHinnom.dataForSave.ownsAlphaLetter2 = true;
                    return "scene05";
                }
                else {
                    //Bad
                    CityOfHinnom.dataForSave.alphaScore += 50;
                    CityOfHinnom.dataForSave.totalScore += 50;
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TB001);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TB001);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TB002);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TB002);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TB003);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TB003);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TB001);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TB004);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TB004);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TB005);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TB005);
                    // make alpha disappear
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.AlphaEmptyGoodEnd);
                    CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.calm, 0, 0);
                    await CityOfHinnom.ƒS.update();
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TB002);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TB003);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TB004);
                    CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.calm, 0, 0);
                    // Create 
                    CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.page2, 1, false);
                    CityOfHinnom.openLetter(CityOfHinnom.letters.AlphaLetter1.background);
                    CityOfHinnom.ƒS.Text.print(" ");
                    CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.alphaLetter1);
                    CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.filmRoll);
                    CityOfHinnom.dataForSave.ownsCameraRoll = true;
                    return "loop";
                }
                break;
            case staywithAlphaChoice.answerLeave:
                // Go to Scene 03
                CityOfHinnom.dataForSave.pickedLeaveAlpha = true;
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TH001);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TH001);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, text.Player.TH002);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TH001);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, text.Alpha.TH002);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.TH002);
                await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.alpha, CityOfHinnom.characters.alpha.pose.happy, CityOfHinnom.disappearAnimation());
                CityOfHinnom.ƒS.Speech.clear();
                break;
        }
    }
    CityOfHinnom.Scene02 = Scene02;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Scene03() {
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
        };
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.SlopeHill);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.wet.duration, CityOfHinnom.transitions.wet.alpha, CityOfHinnom.transitions.wet.edge);
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.pianoshort1, 1, false);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0003);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0004);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0005);
    }
    CityOfHinnom.Scene03 = Scene03;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Scene04() {
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
        };
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.InsideGarden);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.swoosh.duration, CityOfHinnom.transitions.swoosh.alpha, CityOfHinnom.transitions.swoosh.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0003);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0004);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0005);
        await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.iris, CityOfHinnom.characters.iris.pose.happy, CityOfHinnom.appearAnimation());
        await CityOfHinnom.ƒS.update();
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.jazz, 1, true);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Iris, is that you?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "It’s been a while, haha. Nice to see you again, " + CityOfHinnom.dataForSave.nameProtagonist + ".");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0006);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I admit you gave me a bit of a fright just now, I haven’t seen anyone for quite a while.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I didn’t mean to scare you, your singing just enchanted me for a second.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Oh don’t worry. All was fine as soon as I recognized your face.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0007);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Still, I’m surprised to find you here. I’ve only just arrived here so I’m still extremely confused.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "It’s not gonna get any less confusing, to be honest with you. I’ve been here a bit longer than you and I’m still not sure about what’s going on.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "When did you get here?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Oh, around three months ago. It was so bizarre, I can’t remember much from before I got here, even though my long term memory seems intact.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I get what you mean.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "So I wandered the city for a bit. Thank god it’s not hard to find food or shelter. When I found this garden, I don’t know, it just seemed so peaceful that I decided to stay around here. There’s a library nearby with an apartment complex right above it, that’s been my home ever since I got here.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I see you’re still an avid reader. Man, you used to bury your face into a book that it was near impossible to get you away from it unless you finished the section you were reading.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I don’t think that will ever change. As odd as the books here are, I still love to lose myself in them. Once I turn one page, I turn a dozen more. And it never fails to calm me down.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0008);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Enen. The stories I read were odd, because nothing is related to the real world. Sure, most of it is fiction just like what I’m used to from back home. But these stories make it seem like the world doesn’t exist at all. It’s so hard to describe.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You mean like they don’t mention anything that exists?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "No no, it’s more about the typical story patterns. Like how most stories are based on patterns that we’re familiar with, like the hero’s journey. The stories in this world are written with a different structure.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "This world… so you agree we’re in some kind of other universe.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "You want to hear my theory?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0009);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Hit me.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0010);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I didn’t mean that literally. Hit me with your theory.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I think that I died. I don’t know how, or when. But it’s what makes the most sense to me. We died and this is the place where we end up after death.");
        CityOfHinnom.dataForSave.hasMetIris = true;
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I’ve had the same thought, though I didn’t consider it an actual possibility.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Why not? It’s perfectly plausible. You agreed with me before, you can’t remember the time right before you got here, even though you just know that you should have a memory. That memory just seems to be missing.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "What if our mind is playing a trick on us, to explain why we are in this unfamiliar place.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Or, this is what I think, our mind just lost the moment from around the time we died. Kind of to protect us from knowing the reason we died. Or that we’re dead at all. I can’t explain to you why that would happen. After all, it’s just my theory.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It does make sense, now that I think about it. It’s just so weird not being able to have a gap in my memory.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "It’s not quite empty for me, though. I’m not quite certain, but I do recall some sort of accident. But it’s so faint, it might not be a real memory.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I just don’t get why the afterlife is such a dark and lonely place.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I don’t mind the loneliness that much.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Well, you’ve always been on the introverted side.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Doesn’t mean I’m not happy to see you again.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0011);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I’ve met some people during these three months, though mostly only once. But it’s so rare that instead of feeling exhausted, like I used to feel when I met new people, it’s refreshing and gives me a boost in energy. But I’m fine by myself, reading when I feel like it and once I’m done with that I tend this garden here.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I can tell you take really good care of this place. You always had a green thumb.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Yeah unlike you, tehe. Remember that cactus you won in that writing competition?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You mean the one that dried up and died?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "How does that even happen? It’s a CACTUS!");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0012);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I just forgot about it. After all, I never wanted to participate in that contest. You were the one who practically forced me to sign up because you were going to as well. And if I remember correctly, you won first prize.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "You have a really good memory.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0013);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "How have you been doing these years? We kind of lost contact after ninth grade or so.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "You did move away to the other side of the city and changed schools, of course we wouldn’t spend time with each other like we used to.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It is difficult to keep it up. I’m just glad we still met up that summer.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Anyway, the neighborhood stayed quiet as ever and I helped mom out in the bookstore whenever I could.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I thought you just read about plants and stuff instead of working.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0014);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "That- you know that was just me joking when I told you that!");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I know, I know. I was just pulling your leg, calm down and stop slapping me. Your mother taught you about plants, right?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Yep. That’s probably why I like tending the flowers here. It reminds me of her. When I was feeling down, she would show me the flowers from our garden. No matter how bad a day was, flowers still bloom, that’s what she said. That’s why I believe that even in a dark and desolate place like this, beauty can thrive.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I admit, this city is not the worst place to be.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I am curious, though. Why are so few people here, what is this place, and what about the rest of humanity?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "The rest of humanity?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Well think about it. Let’s say my theory is correct, and we are dead. How many people have died in the history of humankind? Shouldn’t this place be brimming with people?");
        // condition of having met alpha before
        if (CityOfHinnom.dataForSave.hasMetAlpha) {
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Have you met a barista named Alpha?");
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "No, I'm afraid I haven’t.");
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "She said few people stay for longer than a year. Most leave after some months.");
        }
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Whenever I met someone, it didn’t take long for them to disappear forever. And also, if this is the place of the dead, where is the place of the living?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I don’t think it’s that easy to just come back to life.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "What if it is actually easy. That would explain why so few people are here.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Maybe reincarnation is real and that’s why we saw such an increase in population. Everyone who died decided to return to earth and live again.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Good idea, but it might not add up mathematically. I read that about 109 billion have died, in all of history. Sure, there are other options like being reincarnated into animals. But what about the immeasurable amount of animals that have lived and died as well? How would they be reincarnated?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Could be that not every lifeform gets to be reincarnated, only us.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Then I would like to know which ones do and what differentiates us in such a way that we get to be born again.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "When would reincarnation have started, anyways? Life must have started in tiny numbers. At some point back in time, there must have been less total deaths than total living organisms. There must have been life without a previous possible reincarnation.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "You’re essentially asking where existence came from. Also, your idea falls flat because you count on the fact that there is some sort of countable instance that is able to be reborn. It might not be like that at all.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Classic Iris, I try to be profound but you find some fallacy.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0015);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "You know. No matter how it works, I kind of hope it works at all. To be honest, I want to go back.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "If we really are dead, then I’d like to go back as well.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I miss mom.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Are you worried about her?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I know she can manage by herself, but this sucks. Dead people shouldn’t mourn the living, right? That’s the wrong way around.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "We don’t know for sure.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Sure, but at this point I might as well be, since I can’t go back.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Well what if you can? You’ve been here longer than me, do you know where the city ends?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Hmmm, I didn’t go very far. I don’t know how big the city is. But I’ve seen signs for a train station. Trains could lead outside.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You never thought to check it out?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "This might sound strange, but I just feel like I want to stay here a bit longer.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "But you just said you missed your mother.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I don’t know if the trains lead anywhere, or what lies beyond the city. That’s why I’m reading so much. I just hope I find some sort of information that can help me out. So I’ll stay here for the time being.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Knowing you, your mind is set and there’s no way to convince you to change it, huh.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "You know me better than anyone else.");
        //choice leave or stay
        CityOfHinnom.ƒS.Speech.clear();
        CityOfHinnom.ƒS.Speech.hide();
        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.jazz, 0, 3);
        await CityOfHinnom.ƒS.update(1.5);
        let staywithIrisChoice = {
            answerStay: "Stay with Iris.",
            answerLeave: "Be on your way.",
        };
        let stayWithIris = await CityOfHinnom.ƒS.Menu.getInput(staywithIrisChoice, "choicesCSSclass");
        switch (stayWithIris) {
            case staywithIrisChoice.answerLeave:
                // Go to scene 05
                CityOfHinnom.dataForSave.pickedLeaveIris = true;
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Tell you what, I’ll figure a way out. Then when I find something, I’ll let you know.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Why did I know you were gonna say something like that…");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Alright, but be careful.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Have I ever not been?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Umm, do you remember in sixth grade when we were at the aquariu-");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Yeah yeah yeah yeah I get it I get it.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "You know I’m just trying to care for you.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I know.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Well, it was nice to see you again, Player. If you figure anything out, I’ll be either here or in the library further down.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I promise I’ll come back.");
                await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.iris, CityOfHinnom.characters.iris.pose.happy, CityOfHinnom.disappearAnimation());
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0016);
                break;
            case staywithIrisChoice.answerStay:
                // Iris End
                CityOfHinnom.dataForSave.pickedStayWithIris = true;
                CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.jazz, 1, true);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I think for now I’ll stay with you. Not that I’m in a rush to begin with.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Sure. We can catch up on all kinds of things.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Like?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Dooooo you have a girlfriend?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Huh? No I don’t.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0017);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "What about you then? Snag a boyfriend yet?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Nope.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Wow we’re both kind of lame.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I mean, there is a guy that I like. It just hasn’t been possible for me to ask him out these past years.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "And you still hang on to him?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "He’s incredibly special to me.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0018);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I want him to love me across the universe and back.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Chances are he won’t unless you tell him. At least it’s gonna be uncertain.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Before I can tell him I will have to leave this place.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "What if he’s in the city, too?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0019);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Let’s go to the library. I could read you a book and we could try looking for clues on how to leave.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0020);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Sure. I was eager to see your current home, anyways.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Sparked your interest, didn’t I?");
                CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.jazz, 0, 3);
                await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.SlopeHill);
                await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.jigsaw.duration, CityOfHinnom.transitions.jigsaw.alpha, CityOfHinnom.transitions.jigsaw.edge);
                CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.calm, 1, true);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0021);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0022);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0023);
                //show library
                await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.Library);
                await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.swirl.duration, CityOfHinnom.transitions.swirl.alpha, CityOfHinnom.transitions.swirl.edge);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I usually read in the back, there’s this nice sofa that’s just so comfortable, and it fits two people.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Do you know what you want to read?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I have a big heap of books stacked up back there. I’ll pick the first one I see. Not that I would know what’s in these books. I can’t search the web for a summary.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Makes sense.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0024);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Hmm, I should have a bookmark around here. What if I forget what chapter I’m on after this?");
                //Good end bad end option
                if (CityOfHinnom.dataForSave.ownsBookmark) {
                    // Good End
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I actually have one right here.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0025);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "This is… where did you find it? It’s definitely the one I was looking for.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It was right here on the couch.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0026);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Well, thanks. That marks the second time you gave it to me.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "What do you mean?");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Don’t you remember? This bookmark was a birthday present you gave me when we were kids. I’ve kept it on me ever since.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "A bookmark and a keepsake.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "More like a lucky charm.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0027);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I’ll start reading. If we don’t get through it in one sitting, we can pick up on it next time.");
                    await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.iris, CityOfHinnom.characters.iris.pose.happy, CityOfHinnom.disappearAnimation());
                    CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.calm, 0, 3);
                    //show iris reading book
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.IrisReadingBook);
                    await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.wipe.duration, CityOfHinnom.transitions.wipe.alpha, CityOfHinnom.transitions.wipe.edge);
                    // Novel Page
                    CityOfHinnom.ƒS.Speech.hide();
                    let pages = ["<strong>The Stars and the Goddess:</strong><br\><br\>For centuries, the stars had graced the night sky with their twinkling light. But as time passed and civilization grew, their brilliance was slowly drowned out by the lights of life. Until one day, they vanished completely from sight, and the planets forgot about the beauty that lay beyond their world. <br\>\
                        <br\>But one day, as a lone goddess was wandering through the woods, she saw something strange in the sky. At first, she couldn't quite make out what it was. But as it got closer, she realized that the stars were returning to their rightful place. They sparkled and danced in the darkness, and the goddess felt a sense of awe and wonder wash over him.<br\> \
                        <br\>The stars had become too preoccupied with their own creations, and had lost sight of what truly mattered in life. It was time to let go of celestial things and embrace the world around them.<br\><br\>Page 1",
                        "As the stars continued their ascent, the goddess felt a sense of peace. She knew that this was a new beginning, and that stars could learn to live in harmony with the planet once again. With a smile on her face, she set off into the forest, ready to explore the lush forests that he had been missing for so long. <br\> \
                        <br\>The stars above continued to twinkle and shine, a reminder of the beauty that lay beyond the untouched world. And as the goddess made her way through the trees, she knew that he had found his way back to where she belonged as well.<br\> \
                        <br\>Page 2"];
                    let current = 0;
                    let flip = { back: "Back", next: "Next", done: "Close" };
                    let choice;
                    CityOfHinnom.ƒS.Text.addClass("flip");
                    do {
                        CityOfHinnom.ƒS.Text.print(pages[current]);
                        choice = await CityOfHinnom.ƒS.Menu.getInput(flip, "flip");
                        switch (choice) {
                            case flip.back:
                                current = Math.max(0, current - 1);
                                break;
                            case flip.next:
                                current = Math.min(2, current + 1);
                                break;
                        }
                    } while (choice != flip.done);
                    CityOfHinnom.ƒS.Text.close();
                    CityOfHinnom.dataForSave.irisScore += 50;
                    CityOfHinnom.dataForSave.totalScore += 50;
                    CityOfHinnom.dataForSave.hasReadSomething = true;
                    CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.jazz, 0, 0);
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.BookOnCouch);
                    await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.wipe.duration, CityOfHinnom.transitions.wipe.alpha, CityOfHinnom.transitions.wipe.edge);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0028);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0029);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0030);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0031);
                    // Create Letter
                    CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.page3, 1, false);
                    CityOfHinnom.openLetter(CityOfHinnom.letters.IrisLetter2.background);
                    CityOfHinnom.ƒS.Text.print(" ");
                    CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.irisLetter2);
                    CityOfHinnom.dataForSave.ownsIrisLetter2 = true;
                    return "scene05";
                }
                else {
                    // Bad End
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Is it really that hard to remember a page number?");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Well, no. But what if too much time passes and we forget where we stopped?");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Then we can read another book.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0032);
                    await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.iris, CityOfHinnom.characters.iris.pose.happy, CityOfHinnom.disappearAnimation());
                    CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.calm, 0, 3);
                    //show iris reading book
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.IrisReadingBook);
                    await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.wipe.duration, CityOfHinnom.transitions.wipe.alpha, CityOfHinnom.transitions.wipe.edge);
                    // Novel Page
                    CityOfHinnom.ƒS.Speech.hide();
                    let pages = ["<strong>The Origins of Stars:</strong><br\><br\>Once upon a time, the stars left their home in the sky to descend upon Earth. They wanted to experience something different, to see what it was like to live amongst the creatures of the land. <br\>\
                        <br\>For many years, the stars thrived on Earth. They shone brightly in the night sky, lighting the way for humans and animals alike. They watched as the humans built their cities, paved their roads, and polluted their skies..<br\> \
                        <br\>But over time, the stars began to feel out of place. They missed the vast emptiness of space, the peace and quiet of the void. They longed to return to their home in the sky. So, one by one, the stars started to make their way back to space. It was a slow process at first, but soon more and more stars began to follow suit..<br\><br\>Page 1",
                        "As they rose back into the sky, they looked down at the Earth with a sense of sadness and regret. They had enjoyed their time amongst the creatures of the land, but they knew that they belonged in the vast expanse of space. <br\> \
                        <br\>The humans looked up at the sky, wondering where the stars had gone. They missed the light and the beauty that the stars had brought to their world. But the stars knew that they were meant to be in space, to shine and twinkle and light up the darkness. They knew that they had returned to where they truly belonged..<br\> \
                        <br\>And so, the stars continued to shine in the sky, a symbol of the beauty and wonder of space, and a reminder to the humans of what they had lost.<br\><br\>Page 2"];
                    let current = 0;
                    let flip = { back: "Back", next: "Next", done: "Close" };
                    let choice;
                    CityOfHinnom.ƒS.Text.addClass("flip");
                    do {
                        CityOfHinnom.ƒS.Text.print(pages[current]);
                        choice = await CityOfHinnom.ƒS.Menu.getInput(flip, "flip");
                        switch (choice) {
                            case flip.back:
                                current = Math.max(0, current - 1);
                                break;
                            case flip.next:
                                current = Math.min(2, current + 1);
                                break;
                        }
                    } while (choice != flip.done);
                    CityOfHinnom.ƒS.Text.close();
                    CityOfHinnom.dataForSave.hasReadSomething = true;
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0033);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Hey, do you want to hear something odd? I think I remember why I’m here now. Something in this story reminded me of it.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Go on, tell me.");
                    CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.sad1, 1, true);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I died in a car accident. I was on my way back home from grocery shopping. Mom couldn’t go that day because she caught a cold. The next bit is admittedly a bit fuzzy, but I wanted to cross the street, when all of a sudden I got hit by a van. After that I was shrouded in black, and woke up in this city.");
                    CityOfHinnom.dataForSave.irisScore += 50;
                    CityOfHinnom.dataForSave.totalScore += 50;
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "So you’re saying we really are dead.");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "That’s not all. I know why I’m in this place, specifically. I remember that there are things I regret, and this place is for me to come to terms with them. ");
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Like what?");
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.AlphaEmptyGoodEnd);
                    await CityOfHinnom.ƒS.update();
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0034);
                    await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.IrisBookmark);
                    await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.ripple.duration, CityOfHinnom.transitions.ripple.alpha, CityOfHinnom.transitions.ripple.edge);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0035);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0036);
                    await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0037);
                    CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.sad1, 0, 5);
                    //Get Bookmark
                    CityOfHinnom.dataForSave.ownsBookmark = true;
                    CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.bookmark);
                    //Show iris frustration letter
                    // Create Letter
                    CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.page1, 1, false);
                    CityOfHinnom.openLetter(CityOfHinnom.letters.IrisLetter1.background);
                    CityOfHinnom.ƒS.Text.print(" ");
                    CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.irisLetter1);
                    return "loop";
                }
        }
    }
    CityOfHinnom.Scene04 = Scene04;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Scene05() {
        console.log("Take the Tram Scene starting");
        let text = {
            Narrator: {
                T0001: "I returned to the center of the city and walked through the vacant roads that should be bustling. I should be dodging people and cars as I made my way towards the train station.",
                T0002: "I finally found a sign that led the way. After what felt like hours, I finally found the train station, with its towering glass walls and bright lights.",
                T0003: "I hurried inside, eager to see if I could catch the next tram that would take me out of here. I didn’t have to buy a ticket, so I just hopped over the barrier and took a seat in the first wagon I saw.",
                T0004: "It felt weird to enter as the only passenger. The hum of the engine echoed through the hall until the doors closed and the tram accelerated to leave the station.",
                T0005: "There wasn’t much of a view, it was mostly just the back of some buildings, so I closed my eyes to focus on the sway of the tram.",
            }
        };
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.CityStreetNight);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.wipe.duration, CityOfHinnom.transitions.wipe.alpha, CityOfHinnom.transitions.wipe.edge);
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.transition3, 1, false);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.TrainStation);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.watercolor.duration, CityOfHinnom.transitions.watercolor.alpha, CityOfHinnom.transitions.watercolor.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0003);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0004);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0005);
    }
    CityOfHinnom.Scene05 = Scene05;
})(CityOfHinnom || (CityOfHinnom = {}));
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Scene06() {
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
        };
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.GatesOfHell);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.bismuth.duration, CityOfHinnom.transitions.bismuth.alpha, CityOfHinnom.transitions.bismuth.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0003);
        await CityOfHinnom.ƒS.Speech.tell("???", "I wouldn’t go through there if I were you.");
        //await ƒS.Location.show(locations.LilyOnBench);
        //await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0004);
        await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.appearAnimation());
        await CityOfHinnom.ƒS.update();
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.lily, 1, true);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Why, what will happen if I go through?");
        await CityOfHinnom.ƒS.Speech.tell("???", "It’s the gates of hell");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Who in their right mind would go through that gate and willingly enter hell?");
        await CityOfHinnom.ƒS.Speech.tell("???", "You got it all wrong. This is the exit, you’re already in hell.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "What?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0005);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Why would I be in hell? Sure, I might not have lived a perfect life. After all, I'm not a saint. But hell is just a bit extreme for the types of sins I’ve committed.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Oh, and also, if this is hell, it’s not so bad. Feels kind of too idyllic. Where’s the fire and all the torment? Shouldn’t I be screaming in agony?");
        await CityOfHinnom.ƒS.Speech.tell("???", "Calm down, man. You don’t have to believe me. But it would be smarter if you did. Hell isn’t really meant to be about fire or punishment.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Who are you even? How do you know?");
        await CityOfHinnom.ƒS.Speech.tell("???", "I was here first, shouldn’t you be the one to introduce yourself before me?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0006);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Alright, I'm " + CityOfHinnom.dataForSave.nameProtagonist);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0007);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Nice to meet you, " + CityOfHinnom.dataForSave.nameProtagonist + ". I’m Lily.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "So, Lily. If this place isn’t about burning for all of eternity, what else could it be about?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Loneliness.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0008);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "This place isn’t very lonely, I’ve met three people already and it’s only my first day here.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "The people you meet here won’t stay with you forever. You’ll lose others, over and over again.");
        // condition having met Alpha or Iris
        if (CityOfHinnom.dataForSave.ownsBookmark || CityOfHinnom.dataForSave.ownsCameraRoll) {
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Going by your facial expression, you’ve already experienced that. Am I right?");
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0009);
        }
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Why are you just standing over there? You’re creeping me out a bit. There’s no rush in hell. Come sit down.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0010);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0011);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "How come you know about what’s going on? ");
        // condition having met Alpha or Iris
        if (CityOfHinnom.dataForSave.hasMetAlpha || CityOfHinnom.dataForSave.hasMetIris) {
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "The ones I met so far had a hunch at best.");
        }
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Judging by that question, you haven’t figured out what happened for you to end up here.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "No, I can’t remember the week or so before I arrived in this city. ");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "That’s kind of what this place is all about. And since you just arrived, you shouldn’t be stressing about it too much. There’s technically a time limit of one year, but that’s more like a deadline for figuring it out by yourself. If a year passes, you’ll just know, no matter what. There’s no fixed time you have to stay, though. You can have a year here, or a month. But no one’s here forever.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You sound like you already remembered for yourself.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I did.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Then why are you still here?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0012);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I just don’t need to go right now. Besides, there are people like you that are confused, or struggle to understand this world. So I want to help them. That’s why I’m staying a bit longer.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You don’t seem like a person who’s altruistic like that.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Watch it. ");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0013);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "How long you stay here depends on what you did before you died.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Isn’t that a bit paradoxical, given that it takes time to remember what you did?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "It’s most likely that the time you need to remember also depends on it.");
        // if player met alpha
        if (CityOfHinnom.dataForSave.hasMetAlpha) {
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0014);
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I met someone who’s been here for longer than a year. What about that?");
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Oh, I think I’ve met someone like that as well. They’re not real people.");
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Huh?");
        }
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Have you noticed how practically everything that’s written, newspapers, magazines, they’re all super odd? As if they weren’t written by humans.");
        // if player met alpha
        if (CityOfHinnom.dataForSave.hasReadSomething) {
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It did seem weird to me.");
        }
        else {
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I haven’t read enough from here.");
        }
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I think some people here are meant to observe and guide us. But they aren’t real people.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You mean like angels?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "No, not that. I mean they aren’t people - yet. I found one book, it talked about existence preceding essence. From the way it sounded, some of humanity exists here, but is still missing something that actual humans possess. But that is only obtained by being born. So they exist as human beings, but are missing human essence.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "So they’re like precursors to humans.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Exactly. They don’t have a body they can inhabit on earth yet. So they wait here. And some are unlucky, having to stay for years. ");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Who gets to decide when they move on?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "It’s the exact same principle that applies to you and me. Realizing. ");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "This definitely sounds more like a theory to me than an actual truth.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "It’s just what I figured out, after all. I don’t blame you. But it’s not something I came up with. Someone else wrote it down for me to see. Who knows, maybe it was an essence-less human that found its own realization. And just like me, they decided to stay here because they wanted to help others. ");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Sounds like not everything was revealed to you after you remembered how you got here.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Might be. Perhaps that’s why I haven't moved on yet.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0015);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Hey, do you think there are more people in heaven or hell?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0016);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I think it’s even.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "What makes you think that?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Hold on, first answer my question.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I would like to think there are more people in heaven.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "This place definitely makes you believe that. It’s so empty here. But still, you’ll never know. And also, it’s so easy to sin. No matter how you live, you’re bound to end up in hell.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Not every sin sends you straight to hell.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Then why call them sins at all?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It’s just a moral compass for your life. Because you can break it down to one simple mantra: don’t be a dick.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0017);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I’m serious. Religion isn’t there to punish you for breaking rules. It’s supposed to make you question which actions will make you a decent human being. Humans have an inclination to do evil, but it is up to them to fight against it.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Sounds like being evil is an instinct.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Knowing good from bad also is, since different cultures generally agree on the really bad things. Like killing people.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "That just stems from the human fear of death, because we don’t understand what comes after life. But have you ever thought the other way around?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "What do you mean?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Let’s take death as the original, because nothingness preceded life, which first had to form. You can see death as the absence of life, which is the traditional way of thinking about it. But what if life were the absence of death?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "There would have to be life for death to exist. If there’s no life, death wouldn’t serve a purpose. Nothing is dead because nothing was alive to begin with.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "This is just a thought experiment, can you roll with it?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Well I don’t really know what you’re on about.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Just try this. Imagine death, but without any sort of afterlife. There’s not even darkness, because your consciousness doesn’t exist either to understand that there is nothing left of you. If you take death as the original, just pure nothingness. What is life compared to it?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It would just be everything.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Describe everything.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Does it even matter? After all, we’re in hell right now, a place after life. Doesn’t this prove that there is not ‘nothing’ after death?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Nothing might not be here, but how do you know nothing isn’t around us? Take this gate, for example. We can see some clouds, but what’s beyond the clouds?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Either nothing or something.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "That’s probably why this gate exists. To see if you want to find out.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You tried to trick me into going through, didn’t you.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "No, like I said. I want to help people here. It’s up to you to decide whether you want to stay or go. However, there is a condition for going through the gate.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "That being?");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "You need to know your reason for being here. Then you can exit.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I’m guessing you don’t know what happens if you don’t know but still pass through.");
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "It can’t be anything good.");
        //Exit or go back to city
        //choice
        CityOfHinnom.ƒS.Speech.clear();
        CityOfHinnom.ƒS.Speech.hide();
        await CityOfHinnom.ƒS.update(1);
        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.lily, 0, 3);
        let exitGate = "";
        let exitThroughGateChoice = {
            answerExit: "Exit through the gate.",
            answerCity: "Go back to the city.",
        };
        if (CityOfHinnom.dataForSave.ownsAlphaLetter2 || CityOfHinnom.dataForSave.ownsIrisLetter2) {
            exitGate = await CityOfHinnom.ƒS.Menu.getInput(exitThroughGateChoice, "choicesCSSclass");
        }
        else
            exitGate = exitThroughGateChoice.answerExit;
        switch (exitGate) {
            case exitThroughGateChoice.answerExit:
                // Option if exit or back to lily
                //choice
                await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.disappearAnimation());
                await CityOfHinnom.ƒS.update();
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0019);
                CityOfHinnom.ƒS.Speech.clear();
                CityOfHinnom.ƒS.Speech.hide();
                await CityOfHinnom.ƒS.update(1.5);
                CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.darkSFX, 1, false);
                let exitForRealChoice = {
                    answerExit: "Exit.",
                    answerLily: "Go back to Lily.",
                };
                let goIntoCafe = await CityOfHinnom.ƒS.Menu.getInput(exitForRealChoice, "choicesCSSclass");
                switch (goIntoCafe) {
                    case exitForRealChoice.answerExit:
                        // BAD END
                        CityOfHinnom.dataForSave.pickedExit = true;
                        //clear to black background
                        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.BlackScreen);
                        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.tv.duration, CityOfHinnom.transitions.tv.alpha, CityOfHinnom.transitions.tv.edge);
                        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.terror1, 1, true);
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0020);
                        CityOfHinnom.ƒS.Speech.clear();
                        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.terror1, 0, 3);
                        return "loop";
                    case exitForRealChoice.answerLily:
                        // Go to Scene 03
                        CityOfHinnom.dataForSave.pickedStayWithLily = true;
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0021);
                        await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.appearAnimation());
                        await CityOfHinnom.ƒS.update();
                        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.lily, 1, true);
                        CityOfHinnom.dataForSave.lilyScore += 50;
                        CityOfHinnom.dataForSave.totalScore += 50;
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "How was the gate?");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I want to stay a bit longer.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Stay as long as you like. This is your life, after all.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I don’t know if you could call this living. We’re in hell after all.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0026);
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Are you good at arcades?");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I guess I’m not bad. Wait why are we talk-");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I bet I’m better. Let’s head over to an arcade center and I’ll show you.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It’s on. The winner has to cook the other one a nice, homemade dinner.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Homemade? We can just use the kitchen in some fancy restaurant.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Even better.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0022);
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0023);
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "It’s not bad, I’ve just had better.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Be happy I cooked at all.");
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Well duh, you owed me.");
                        await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.disappearAnimation());
                        await CityOfHinnom.ƒS.update();
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0024);
                        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.OutsideApartment);
                        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.wipe.duration, CityOfHinnom.transitions.wipe.alpha, CityOfHinnom.transitions.wipe.edge);
                        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0025);
                        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.lily, 0, 3);
                        if (!CityOfHinnom.dataForSave.ownsChildhoodPicture) {
                            //BAD END
                            CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.pianoshort5, 1, false);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0027);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0028);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0029);
                            // get pictures
                            // Add Letter
                            CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.page2, 1, false);
                            CityOfHinnom.openLetter(CityOfHinnom.letters.LilyLetter1.background);
                            CityOfHinnom.ƒS.Text.print(" ");
                            CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.lilyLetter1);
                            await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.LilyChildhoodPicture);
                            await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.watercolor.duration, CityOfHinnom.transitions.watercolor.alpha, CityOfHinnom.transitions.watercolor.edge);
                            CityOfHinnom.dataForSave.ownsChildhoodPicture = true;
                            CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.childhoodPicture);
                            CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.pianoshort3, 1, false);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0030);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0031);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0032);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0033);
                            CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.pianoshort3, 0, 3);
                            return "loop";
                        }
                        else {
                            //GOOD END
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0034);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0035);
                            await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.appearAnimation());
                            await CityOfHinnom.ƒS.update();
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "What do you want?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Can we talk?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Can’t it wait until tomorrow? It’s a bit late now.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It’s important.");
                            await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.disappearAnimation());
                            await CityOfHinnom.ƒS.update();
                            await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.InsideApartment);
                            await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.watercolor.duration, CityOfHinnom.transitions.watercolor.alpha, CityOfHinnom.transitions.watercolor.edge);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0036);
                            await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.appearAnimation());
                            await CityOfHinnom.ƒS.update();
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "What is it? Don’t tell me you came over to confess to me. No, no, no no no. It’s still way too early for that.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0037);
                            CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.sad2, 1, true);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Do you recognize these?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Of course.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Why didn’t you tell me?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I didn’t think it would make a difference if you knew or not.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Come on.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I didn’t tell you because it would have hurt too much. And I wanted to move on.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "There’s another condition for leaving this place, right?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0038);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Have you looked at this particular image?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Yeah it’s me standing atop a rock with you next to me.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Look at my arm.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0039);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You were climbing a tree when the branch you were standing on broke off. As you fell, you cut your arm on the part where the branch snapped.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "The doctors said you will most likely never remember.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I didn’t remember on my own. You told me.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Huh?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It’s incredibly fuzzy in my head, but part of my memory just came back. I do remember being in the hospital, but they told me it was for an operation. That memory loss was common after it, but wouldn’t necessarily be gone forever.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "Lily's eyes grew big");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Why couldn’t I find out who you were?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I was afraid that I would instantly vanish out of joy, if you recognized me and we had a happy reunion. But if we leave from here, there’s no guarantee that we’ll ever see each other again. I wanted to spend some time with you before I…");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You were planning on leaving tomorrow morning.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0040);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "You know we can’t stay here forever. You told me, remember?");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "I just wanted a week. And that’s what I got. You don’t know how special this past week was for me.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "It was to me, as well.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0041);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, CityOfHinnom.dataForSave.nameProtagonist + ", I-");
                            CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.disappearAnimation());
                            CityOfHinnom.dataForSave.irisScore += 50;
                            CityOfHinnom.dataForSave.totalScore += 50;
                            CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.sad2, 0, 1);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0042);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0043);
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0044);
                            // Add 
                            CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.page3, 1, false);
                            CityOfHinnom.openLetter(CityOfHinnom.letters.LilyLetter2.background);
                            CityOfHinnom.ƒS.Text.print(" ");
                            CityOfHinnom.ƒS.Inventory.add(CityOfHinnom.items.lilyLetter2);
                            CityOfHinnom.dataForSave.ownsLilyLetter2 = true;
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "I couldn't take this. I hurried out of her apartment and returned to mine.");
                            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "It was at that moment when bits of this world started making sense to me.");
                            return "scene07";
                        }
                }
                CityOfHinnom.ƒS.Speech.clear();
                break;
            case exitThroughGateChoice.answerCity:
                // Go to Scene 07
                await CityOfHinnom.ƒS.Character.animate(CityOfHinnom.characters.lily, CityOfHinnom.characters.lily.pose.happy, CityOfHinnom.disappearAnimation());
                CityOfHinnom.dataForSave.pickedReturnToCity = true;
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0045);
                CityOfHinnom.ƒS.Speech.clear();
                return "scene07";
        }
    }
    CityOfHinnom.Scene06 = Scene06;
})(CityOfHinnom || (CityOfHinnom = {}));
//for copy paste
//await ƒS.Speech.tell(characters.lily, ""); await ƒS.Speech.tell(characters.player, "");
var CityOfHinnom;
(function (CityOfHinnom) {
    async function Scene07() {
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
        };
        if (CityOfHinnom.dataForSave.ownsLilyLetter2) {
        }
        else {
            await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.CityStreetNight);
            await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.swirl.duration, CityOfHinnom.transitions.swirl.alpha, CityOfHinnom.transitions.swirl.edge);
            CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.terror2, 1, true);
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0001);
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0002);
            await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0003);
        }
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.OutsideApartment);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.fuzzy.duration, CityOfHinnom.transitions.fuzzy.alpha, CityOfHinnom.transitions.fuzzy.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0004);
        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.terror2, 0, 2);
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.InsideApartment);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.static.duration, CityOfHinnom.transitions.static.alpha, CityOfHinnom.transitions.static.edge);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0005);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0006);
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.pianoshort5, 1, false);
        CityOfHinnom.dataForSave.totalScore += 50;
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0007);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0008);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0009);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0010);
        await CityOfHinnom.ƒS.Location.show(CityOfHinnom.locations.BlackScreen);
        await CityOfHinnom.ƒS.update(CityOfHinnom.transitions.tv.duration, CityOfHinnom.transitions.tv.alpha, CityOfHinnom.transitions.tv.edge);
        CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.sad4, 1, true);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0011);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0012);
        await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, text.Narrator.T0013);
        // Ending choice depends on who has the highest score
        let highestScore = Math.max(CityOfHinnom.dataForSave.alphaScore, CityOfHinnom.dataForSave.irisScore, CityOfHinnom.dataForSave.lilyScore);
        // if two or more share the highest value
        // tut mir mega leid mit den verschachtelten switches Riem, ich war unter zeitdruck und kannte nichts besseres um verschiedene auswahlmöglichkeiten zu haben
        switch (true) {
            case (highestScore == CityOfHinnom.dataForSave.alphaScore && CityOfHinnom.dataForSave.alphaScore == CityOfHinnom.dataForSave.irisScore && CityOfHinnom.dataForSave.alphaScore == CityOfHinnom.dataForSave.lilyScore):
                let chooseAIL = {
                    alpha: "Alpha.",
                    iris: "Iris.",
                    lily: "Lily."
                };
                let answerAIL = await CityOfHinnom.ƒS.Menu.getInput(chooseAIL, "choicesCSSclass");
                switch (answerAIL) {
                    case chooseAIL.alpha:
                        highestScore = CityOfHinnom.dataForSave.alphaScore;
                        break;
                    case chooseAIL.iris:
                        highestScore = CityOfHinnom.dataForSave.irisScore;
                        break;
                    case chooseAIL.lily:
                        highestScore = CityOfHinnom.dataForSave.lilyScore;
                        break;
                }
                break;
            case (highestScore == CityOfHinnom.dataForSave.alphaScore && CityOfHinnom.dataForSave.alphaScore == CityOfHinnom.dataForSave.irisScore):
                let chooseAI = {
                    alpha: "Alpha.",
                    iris: "Iris.",
                };
                let answerAI = await CityOfHinnom.ƒS.Menu.getInput(chooseAI, "choicesCSSclass");
                switch (answerAI) {
                    case chooseAI.alpha:
                        highestScore = CityOfHinnom.dataForSave.alphaScore;
                        break;
                    case chooseAI.iris:
                        highestScore = CityOfHinnom.dataForSave.irisScore;
                        break;
                }
                break;
            case (highestScore == CityOfHinnom.dataForSave.alphaScore && CityOfHinnom.dataForSave.alphaScore == CityOfHinnom.dataForSave.lilyScore):
                let chooseAL = {
                    alpha: "Alpha.",
                    lily: "Lily.",
                };
                let answerAL = await CityOfHinnom.ƒS.Menu.getInput(chooseAL, "choicesCSSclass");
                switch (answerAL) {
                    case chooseAL.alpha:
                        highestScore = CityOfHinnom.dataForSave.alphaScore;
                        break;
                    case chooseAL.lily:
                        highestScore = CityOfHinnom.dataForSave.lilyScore;
                        break;
                }
                break;
            case (highestScore == CityOfHinnom.dataForSave.irisScore && CityOfHinnom.dataForSave.irisScore == CityOfHinnom.dataForSave.lilyScore):
                let chooseIL = {
                    iris: "Iris.",
                    lily: "Lily.",
                };
                let answerIL = await CityOfHinnom.ƒS.Menu.getInput(chooseIL, "choicesCSSclass");
                switch (answerIL) {
                    case chooseIL.iris:
                        highestScore = CityOfHinnom.dataForSave.irisScore;
                        break;
                    case chooseIL.lily:
                        highestScore = CityOfHinnom.dataForSave.lilyScore;
                        break;
                }
                break;
            default:
                break;
        }
        CityOfHinnom.ƒS.Sound.fade(CityOfHinnom.sound.sad4, 0, 1);
        switch (highestScore) {
            case CityOfHinnom.dataForSave.alphaScore:
                // Alpha End
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "Alpha.");
                CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.cafe, 1, true);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "The sun was shining down on the small café as I sat across from her, sipping on coffee and chatting. The coffee she made tasted miles better than this one. Alpha looked out the window and watched the people walk by.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.alpha, "Do you want to see the pictures I took yesterday?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "Alpha handed me her camera, I looked through her gallery, although the display was reflecting the sun into my face.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Amazing as always.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "We chatted for a while longer, she told me all about her favorite photographers and the way she was experimenting with the dutch angle recently. I was fascinated by her passion, but couldn’t really keep up with it. Instead when I talked about my hobbies, it was more the latest movie I watched, but I was familiar with cinematographers.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "When we both realized that our cups had been empty for the past fifteen minutes or so, we decided to head to the next location. I promised her to prepare a picnic, and I knew just the right spot, at a park beside the river.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "THE END.");
                CityOfHinnom.ƒS.Speech.clear();
                break;
            case CityOfHinnom.dataForSave.irisScore:
                //Iris End
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "Iris.");
                CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.jazz, 1, true);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "I was browsing the shelves at the bookstore, lately I’ve been so bored that I just didn’t know what to read. I completely zoned out at one point, only being brought back to reality by a heavy sigh next to me. I looked over and saw a short, brunette girl with glasses next to me, holding up two books. She was struggling to decide which one to pick.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "Do you need help?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "She turned to me, surprised, as if I had just scared the soul out of her. As our eyes locked, her anxious expression changed and a smile spread across her face.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "I can never decide what to read next.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "How about I pick the one I prefer out of these two, and you read the other one.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "But what if I want to know what happens in the one you’re going to read?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "I can tell you over a coffee sometime. I’d like to know about your book, as well.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "Her eyes sparkled.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.iris, "Does next weekend sound good?");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "I picked the romance novel that featured a gardener as a protagonist. She told me her name was Iris, and suddenly we found ourselves chatting about our favorite authors. I was struck by how much we had in common. We both loved 20th century classics like Hemingway.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "At some point she noticed how late it was getting, so we both headed to the cash register and exchanged phone numbers. I walked out of the bookstore and felt like I was on cloud nine. It was a meet-cute straight out of Hollywood, and I couldn’t wait to see what would happen next.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "THE END.");
                CityOfHinnom.ƒS.Speech.clear();
                break;
            case CityOfHinnom.dataForSave.lilyScore:
                //Lily End
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "Lily.");
                CityOfHinnom.ƒS.Sound.play(CityOfHinnom.sound.lily, 1, true);
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "I was now just as old as when I died in my previous life. I still remember my time in hell, and that includes regaining my memories. After all this time, I still haven’t forgotten her either.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "The semester was over and it was the middle of summer break. I was on my way to the train station and wanted to go bar hopping with my friends from uni. I still had around ten minutes until the metro came, when I suddenly picked up on a familiar scent. It immediately transported me back in time, this was her perfume.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "I turned around looking for the girl I just passed by. For a moment, time was frozen. I remembered the afternoons we had spent together, laughing and dreaming.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "Lily was staring right at me, she was just as surprised as I was. We were both standing still like idiots, and I felt a rush of emotions.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.lily, "Took you long enough. I was worried you forgot about me.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.player, "How could I ever.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "She had a fat grin on her face. Finally, I found her again. I was in a bit of a hurry, unfortunately, so we exchanged contact information and promised to meet up as soon as we could.");
                await CityOfHinnom.ƒS.Speech.tell(CityOfHinnom.characters.narrator, "THE END.");
                CityOfHinnom.ƒS.Speech.clear();
                break;
        }
    }
    CityOfHinnom.Scene07 = Scene07;
})(CityOfHinnom || (CityOfHinnom = {}));
//# sourceMappingURL=CityOfHinnom.js.map