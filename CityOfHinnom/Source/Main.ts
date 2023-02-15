namespace CityOfHinnom {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("City of Hinnom starting");

 // **** TRANSITIONS ****
  // transitions is declared here as well as initialized
  export let transitions = {
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
  export let sound = {
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
  export let locations = {
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
  export let items = {

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

  export let letters = {
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
  }

  // **** DATA THAT WILL BE SAVED (GAME PROGRESS) ****
  export let dataForSave = {
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

  export let characters = {
    narrator: {
      name: "",
    },
    player: {
      name: "",
    },
    alpha: {
      name: "Alpha",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "Images/Characters/Alpha.png",
        upset: ""
      }
    },
    iris: {
      name: "Iris",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "Images/Characters/Iris.png",
        upset: ""
      }
    },
    lily: {
      name: "Lily",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "Images/Characters/Lily.png",
        upset: ""
      }
    }
  };

  // **** CREDITS ****
  export function showCredits(): void {
    ƒS.Text.setClass("credits");
    ƒS.Text.print("Story: Jason Blackschleger <br\><br\> Art: Jason Blackschleger <br\><br\> Music: Tim Reichert (Fulminisictus)");
  }


  // **** ANIMATIONS ****
  export function appearAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 100), color: ƒS.Color.CSS("black", 0) },
      end: { translation: ƒS.positionPercent(70, 100), color: ƒS.Color.CSS("white", 1) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function disappearAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(70, 100), color: ƒS.Color.CSS("white", 1) },
      end: { translation: ƒS.positionPercent(80, 100), color: ƒS.Color.CSS("black", 0) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function getAnimation(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
      end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export async function openLetter(_image: string, ): Promise<void> {
    // Create Letter
    window.open(_image);

    //button to continue
    ƒS.Speech.hide();
    let pause = { done: "Continue" };
    let choice: string;
    ƒS.Text.addClass("pause");
    do {
        choice = await ƒS.Menu.getInput(pause, "pause");
    } while (choice != pause.done);
    ƒS.Text.close();
  }

  // **** MENÜ ****
  // Buttons
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  let menuIsOpen: boolean = true;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
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
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:
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
      case ƒ.KEYBOARD_CODE.I:
        console.log("open inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSclass");
    buttonFunctionalities("Close");
    // **** SCENE HIERARCHY ****
    let scenes: ƒS.Scenes = [
      { id: "intro", scene: Intro, name: "Intro", next: "scene01" },
      { id: "scene01", scene: Scene01, name: "In Front of Cafe", next: "scene03" },
      { id: "scene02", scene: Scene02, name: "Alpha Route", next: "scene03" },
      { id: "scene03", scene: Scene03, name: "To the Garden", next: "scene04" },
      { id: "scene04", scene: Scene04, name: "Iris Route", next: "scene05" },
      { id: "scene05", scene: Scene05, name: "Taking the Tram", next: "scene06" },
      { id: "scene06", scene: Scene06, name: "Lily Route", next: "Empty Scene" },
      { id: "scene07", scene: Scene07, name: "True End", next: "Empty Scene" },
      { id: "loop", scene: Loop, name: "True End", next: "intro" },

      // Empty ending scene to stop the program
       { id: "Empty Scene", scene: Empty, name: "END" }

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}