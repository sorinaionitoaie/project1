const randomAnimalsNames = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Boar",
  "Buffalo",
  "Butterfly",
  "Camel",
  "Capybara",
  "Caribou",
  "Cassowary",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Coyote",
  "Crab",
  "Crane",
  "Crocodile",
  "Crow",
  "Curlew",
  "Deer",
  "Dinosaur",
  "Dog",
  "Dogfish",
  "Dolphin",
  "Dotterel",
  "Dove",
  "Dragonfly",
  "Duck",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Gnat",
  "Gnu",
  "Goat",
  "Goldfinch",
  "Goldfish",
  "Goose",
  "Gorilla",
  "Goshawk",
  "Grasshopper",
  "Grouse",
  "Guanaco",
  "Gull",
  "Hamster",
  "Hare",
  "Hawk",
  "Hedgehog",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Human",
  "Hummingbird",
  "Hyena",
  "Ibex",
  "Ibis",
  "Jackal",
  "Jaguar",
  "Jay",
  "Jellyfish",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Kouprey",
  "Kudu",
  "Lapwing",
  "Lark",
  "Lemur",
  "Leopard",
  "Lion",
  "Llama",
  "Lobster",
  "Locust",
  "Loris",
  "Louse",
  "Lyrebird",
  "Magpie",
  "Mallard",
  "Manatee",
  "Mandrill",
  "Mantis",
  "Marten",
  "Meerkat",
  "Mink",
  "Mole",
  "Mongoose",
  "Monkey",
  "Moose",
  "Mosquito",
  "Mouse",
  "Mule",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Oyster",
  "Panther",
  "Parrot",
  "Partridge",
  "Peafowl",
  "Pelican",
  "Penguin",
  "Pheasant",
  "Pig",
  "Pigeon",
  "Pony",
  "Porcupine",
  "Porpoise",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Red panda",
  "Reindeer",
  "Rhinoceros",
  "Rook",
  "Salamander",
  "Salmon",
  "Sand Dollar",
  "Sandpiper",
  "Sardine",
  "Scorpion",
  "Seahorse",
  "Seal",
  "Shark",
  "Sheep",
  "Shrew",
  "Skunk",
  "Snail",
  "Snake",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Stinkbug",
  "Stork",
  "Swallow",
  "Swan",
  "Tapir",
  "Tarsier",
  "Termite",
  "Tiger",
  "Toad",
  "Trout",
  "Turkey",
  "Turtle",
  "Viper",
  "Vulture",
  "Wallaby",
  "Walrus",
  "Wasp",
  "Weasel",
  "Whale",
  "Wildcat",
  "Wolf",
  "Wolverine",
  "Wombat",
  "Woodcock",
  "Woodpecker",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

let selectedWord, selectedHint;
let guessedLetters;
let wrongGuesses;
let maxWrongGuesses = 10;

function chooseRandomAnimalName() {
    const index = Math.floor(Math.random() * animalsWithHints.length);
    selectedWord = animalsWithHints[index].name.toUpperCase();
    selectedHint = animalsWithHints[index].hint;
    guessedLetters = Array(selectedWord.length).fill('_');
    wrongGuesses = 0;

    displayWord();
    displayHint();
}

function displayWord() {
    const blankParentEl = document.querySelector(".blanks_parent");
    blankParentEl.innerHTML = '';  // Clear previous word display

    for (let i = 0; i < guessedLetters.length; i++) {
        const letterBlock = document.createElement("span");
        letterBlock.textContent = guessedLetters[i] + ' ';
        blankParentEl.appendChild(letterBlock);
    }
}

function displayHint() {
    const hintEl = document.getElementById("hint"); // Ensure you have an element with id="hint"
    hintEl.textContent = "Hint: " + selectedHint;
}

function initializeButtons() {
    const buttonsParent = document.querySelector(".buttons-parent");
    buttonsParent.innerHTML = '';  // Clear previous buttons

    for (let i = 65; i <= 90; i++) {  // ASCII values for A-Z
        const button = document.createElement("button");
        button.textContent = String.fromCharCode(i);
        button.addEventListener('click', () => handleGuess(button));
        buttonsParent.appendChild(button);
    }
}

function handleGuess(button) {
    const letter = button.textContent;
    button.disabled = true;

    if (selectedWord.includes(letter)) {
        button.classList.add("greenBtn");
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedLetters[i] = letter;
            }
        }
        displayWord();
    } else {
        wrongGuesses++;
        button.classList.add("redBtn");
        const element = document.querySelector(`.class-${wrongGuesses}`);
        if (element) {
            element.classList.remove("display-none");
        }
    }

    checkGameEnd();
}

function checkGameEnd() {
    if (wrongGuesses >= maxWrongGuesses) {
        alert("You Lost the Game");
        resetGame();
    } else if (guessedLetters.join('') === selectedWord) {
        alert("You Won the Game!");
        resetGame();
    }
}

function resetGame() {
    chooseRandomAnimalName();  // Pick a new word
    initializeButtons();       // Re-enable all buttons
    // Hide all parts of the hangman
    for (let i = 1; i <= maxWrongGuesses; i++) {
        const element = document.querySelector(`.class-${i}`);
        if (element) {
            element.classList.add("display-none");
        }
    }
}

// Initialize the game
chooseRandomAnimalName();
initializeButtons();