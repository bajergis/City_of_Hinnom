declare namespace CityOfHinnom {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        bismuth: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
        static: {
            duration: number;
            alpha: string;
            edge: number;
        };
        fuzzy: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
        tv: {
            duration: number;
            alpha: string;
            edge: number;
        };
        ripple: {
            duration: number;
            alpha: string;
            edge: number;
        };
        jigsaw: {
            duration: number;
            alpha: string;
            edge: number;
        };
        swoosh: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
        watercolor: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        cafe: string;
        sad1: string;
        sad2: string;
        sad3: string;
        sad4: string;
        guitar: string;
        jazz: string;
        terror1: string;
        pianoshort1: string;
        pianoshort2: string;
        pianoshort3: string;
        pianoshort4: string;
        pianoshort5: string;
        pianoshort6: string;
        terror2: string;
        calm: string;
        transition1: string;
        transition2: string;
        transition3: string;
        transition5: string;
        transition6: string;
        bellSFX1: string;
        bellSFX2: string;
        brightSFX: string;
        darkSFX: string;
        cancelSFX: string;
        confirmSFX: string;
        selectSFX: string;
        lily: string;
        page1: string;
        page2: string;
        page3: string;
    };
    let locations: {
        AlphaGoodEnd: {
            name: string;
            background: string;
        };
        AlphaEmptyGoodEnd: {
            name: string;
            background: string;
        };
        BlackScreen: {
            name: string;
            background: string;
        };
        BookOnCouch: {
            name: string;
            background: string;
        };
        CafeFront: {
            name: string;
            background: string;
        };
        CafeInside: {
            name: string;
            background: string;
        };
        CameraLyingInGrass: {
            name: string;
            background: string;
        };
        CityStreetNight: {
            name: string;
            background: string;
        };
        FilmRollLying: {
            name: string;
            background: string;
        };
        GatesOfHell: {
            name: string;
            background: string;
        };
        InsideApartment: {
            name: string;
            background: string;
        };
        InsideGarden: {
            name: string;
            background: string;
        };
        IrisBookmark: {
            name: string;
            background: string;
        };
        LilyChildhoodPicture: {
            name: string;
            background: string;
        };
        OutsideApartment: {
            name: string;
            background: string;
        };
        SlopeHill: {
            name: string;
            background: string;
        };
        TrainStation: {
            name: string;
            background: string;
        };
    };
    let items: {
        filmRoll: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        camera: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        bookmark: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Book: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        childhoodPicture: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        alphaLetter1: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        irisLetter1: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        lilyLetter1: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        alphaLetter2: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        irisLetter2: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        lilyLetter2: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    let letters: {
        AlphaLetter1: {
            name: string;
            background: string;
        };
        AlphaLetter2: {
            name: string;
            background: string;
        };
        IrisLetter1: {
            name: string;
            background: string;
        };
        IrisLetter2: {
            name: string;
            background: string;
        };
        LilyLetter1: {
            name: string;
            background: string;
        };
        LilyLetter2: {
            name: string;
            background: string;
        };
    };
    let dataForSave: {
        nameProtagonist: string;
        alphaScore: number;
        irisScore: number;
        lilyScore: number;
        totalScore: number;
        scoreForAlpha: string;
        scoreForIris: string;
        scoreForLily: string;
        randomPoints: number;
        pickedStayWithAlpha: boolean;
        pickedLeaveAlpha: boolean;
        pickedStayWithIris: boolean;
        pickedLeaveIris: boolean;
        pickedReturnToCity: boolean;
        pickedExit: boolean;
        pickedStayWithLily: boolean;
        hasMetAlpha: boolean;
        hasMetIris: boolean;
        hasReadSomething: boolean;
        ownsCameraRoll: boolean;
        ownsIrisLetter2: boolean;
        ownsBookmark: boolean;
        ownsAlphaLetter2: boolean;
        ownsChildhoodPicture: boolean;
        alphaSkip: boolean;
        irisSkip: boolean;
    };
    let characters: {
        narrator: {
            name: string;
        };
        player: {
            name: string;
        };
        alpha: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        iris: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        lily: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    function showCredits(): void;
    function appearAnimation(): ƒS.AnimationDefinition;
    function disappearAnimation(): ƒS.AnimationDefinition;
    function getAnimation(): ƒS.AnimationDefinition;
    function openLetter(_image: string): Promise<void>;
}
declare namespace CityOfHinnom {
    function Empty(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Intro(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Loop(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Scene01(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Scene02(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Scene03(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Scene04(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Scene05(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Scene06(): ƒS.SceneReturn;
}
declare namespace CityOfHinnom {
    function Scene07(): ƒS.SceneReturn;
}
