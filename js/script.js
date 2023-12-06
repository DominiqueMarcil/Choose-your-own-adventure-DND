const startButton = document.getElementById('startButton');
const audio = document.getElementById('audio');
const scenarioImage = document.getElementById('scenario-image');
const textContent = document.getElementById('text-content');
const storyText = document.getElementById('story-text');
const choiceButton1 = document.getElementById('choiceButton1');
const choiceButton2 = document.getElementById('choiceButton2');

let currentPath = 0;

audio.src = "audio/mistymountain.mp3";

function playAudio() {
    if (audio.paused) {
        audio.play();
    }
}

function updateStory() {
    switch (currentPath) {
        case 0:
            storyText.textContent = "Welcome, adventurer! You are about to embark on a journey of epic proportions. You will be faced with many choices, some good, some bad. Choose wisely, for your choices will determine your fate.";
            scenarioImage.src="images/welcome.png";
            choiceButton1.textContent = "Start your adventure";
            choiceButton1.style.display = "inline"; // Show choiceButton2
            choiceButton1.onclick = () => {
                playAudio();
                currentPath = 1;
                updateStory();
            };
            choiceButton2.textContent = "Go right to the town of Stonehaven";
            choiceButton2.style.display = "none"; // Show choiceButton2
            choiceButton2.onclick = () => {
                currentPath = 3;
                updateStory();
            };
            break;
        case 1:
            storyText.textContent = "Do you go left into the forest of Eldertree Enclave or do you go right into the town of Stonehaven?";
            scenarioImage.src="images/twopaths.png";
            choiceButton1.textContent = "Go Left into the of Eldertree Enclave";
            choiceButton1.style.display = "inline"; // Show choiceButton2
            choiceButton1.onclick = () => {
                currentPath = 2;
                updateStory();
            };
            choiceButton2.textContent = "Go right to the town of Stonehaven";
            choiceButton2.style.display = "inline"; // Show choiceButton2
            choiceButton2.onclick = () => {
                currentPath = 3;
                updateStory();
            };
            break;
        case 2:
            storyText.textContent = "You enter a dark forest. Do you want to explore deeper or turn back?";
            scenarioImage.src = "images/deepdarkforest.png";
            choiceButton1.style.display = "inline"; // Show choiceButton2
            choiceButton1.textContent = "Explore deeper";
            choiceButton1.onclick = () => {
                currentPath = 4;
                updateStory();
            };
            choiceButton2.textContent = "Turn back";
            choiceButton2.style.display = "inline"; // Show choiceButton2
            choiceButton2.onclick = () => {
                currentPath = 5;
                updateStory();
            };
            break;
        case 3:
            storyText.textContent = "You reach the town of Stonehaven, its quaint you admire its beauty. During your admiration you hear two people over talk of a market your interest is peaked, yet you still desire a good ale at the local tavern. Do you wander the market or head to the tavern?";
            scenarioImage.src = "images/markettavern.png";
            choiceButton1.style.display = "inline"; // Show choiceButton2
            choiceButton1.textContent = "Head to tavern";
            choiceButton1.onclick = () => {
                currentPath = 6;
                updateStory();
            };
            choiceButton2.textContent = "Wander the market";
            choiceButton2.style.display = "inline"; // Show choiceButton2
            choiceButton2.onclick = () => {
                currentPath = 7;
                updateStory();
            };
            break;
        case 4:
            storyText.textContent = "As you explore deeper into the Eldertree Enclave forest, you come across a team of bandits. Your sight narrows, you debate your next choice...it is clear!";
            scenarioImage.src = "images/banditecounter.png";
            choiceButton1.style.display = "inline"; // Show choiceButton2
            choiceButton1.textContent = "Fight the bandits";
            choiceButton1.onclick = () => {
                currentPath = 8;
                updateStory();
            };
            choiceButton2.textContent = "Run like you have never ran before";
            choiceButton2.style.display = "inline"; // Show choiceButton2
            choiceButton2.onclick = () => {
                currentPath = 9;
                updateStory();
            };
            break;
            case 5:
                storyText.textContent = "The forest is to much, you turn back the way you came, peering over your shoulder at the dark damning path you left behind";
                scenarioImage.src = "images/deepdarkforest.png";
                choiceButton1.style.display = "inline"; // Show choiceButton2
                choiceButton1.textContent = "Continue out of forest";
                choiceButton1.onclick = () => {
                    currentPath = 1;
                    updateStory();
                };
                choiceButton2.textContent = "";
                choiceButton2.style.display = "none"; // Hide choiceButton2
                choiceButton2.onclick = () => {
                    updateStory();
                }
                break;
            case 6:
                storyText.textContent = "As you arrive at the Mystic Griffin Tavern your heart lifts, its full of life and people, singing and games! You're invited to join in, do you wish to sing or to try your luck at cards?";
                scenarioImage.src = "images/entertavern.png";
                choiceButton1.style.display = "inline"; // Show choiceButton2
                choiceButton1.textContent = "Try your luck at cards";
                choiceButton1.onclick = () => {
                    currentPath = 14;
                    updateStory();
                };
                choiceButton2.textContent = "Sing like no one is watching";
                choiceButton2.style.display = "inline"; // Show choiceButton2
                choiceButton2.onclick = () => {
                    currentPath =13;
                    updateStory();
                };
                break;
            case 7:
                storyText.textContent = "As you walk on to the market you admire the vast amount of vendors, they seem cheery and kind. As you continue your journey you notice an unattended stand, theres food, you debate the worst do you?";
                scenarioImage.src = "images/emptystand.png";
                choiceButton1.style.display = "inline"; // Show choiceButton2
                choiceButton1.textContent = "Steal from the stand";
                choiceButton1.onclick = () => {
                    currentPath = 16;
                    updateStory();
                };
                choiceButton2.textContent = "Leave the stand alone and continue on";
                choiceButton2.style.display = "inline"; // Show choiceButton2
                choiceButton2.onclick = () => {
                    currentPath = 15;
                    updateStory();
                };
                break;
            case 8:
                storyText.textContent = "You fight off the bandits, surviving only by the skin of your teeth. You are weary after your battle, your health is low. Do you take a long rest before heading to town or try and walk it off?";
                scenarioImage.src = "images/defeat.png";
                choiceButton1.style.display = "inline"; // Show choiceButton2
                choiceButton1.textContent = "Take a long rest";
                choiceButton1.onclick = () => {
                    currentPath = 10;
                    updateStory();
                };
                choiceButton2.textContent = "Walk it off";
                choiceButton2.style.display = "inline"; // Show choiceButton2
                choiceButton2.onclick = () => {
                    currentPath = 11;
                    updateStory();
                };
                break;
                case 9:
                    storyText.textContent = "You run like hell, but at last, the bandits are to poweful and they vanquish you... and they rob you...";
                    scenarioImage.src = "images/killeddead.png";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.textContent = "Accept your defeat";
                    choiceButton1.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        updateStory();
                    };
                    break;
                case 10:
                    storyText.textContent = "You take a long rest, after you awake you begin your journey to the town of Stonehaven.";
                    scenarioImage.src = "images/longrest.png";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.textContent = "Continue";
                    choiceButton1.onclick = () => {
                        currentPath = 3;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    break;
                case 11:
                    storyText.textContent = "As you attempt to stumble your way into town you succumb to your injuries and pass out. Lucky for you, some towns people see you and give you mercy by bringing you into the inn";
                    scenarioImage.src = "images/townspeoplefind.png";
                    choiceButton1.textContent = "Continue (but with deep rooted shame)";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 3;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    break;
                case 13:
                    storyText.textContent = "You decide to try your skills up on the stage, choose from the only two songs you know!";
                    scenarioImage.src = "images/drinktavern.png";
                    choiceButton1.textContent = "Sing Old mcDonald";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 26;
                        updateStory();
                    };
                    choiceButton2.textContent = "Sing Maria Carey's All I want for Christmas is you";
                    choiceButton2.style.display = "inline"; // Show choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 27;
                        updateStory();
                    };
                    break; 
                    case 14:
                    storyText.textContent = "Your decision to play cards was a pramatic one. You have quick hands, but your opponents attention to detail is quicker. You're caught switching your cards, the table is furious, what do you do??";
                    scenarioImage.src = "images/fightorflight.png";
                    choiceButton1.textContent = "Flee the scene";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 29;
                        updateStory();
                    };
                    choiceButton2.textContent = "Fight your way out";
                    choiceButton2.style.display = "inline"; // Show choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 28;
                        updateStory();
                    };
                    break;
                case 15:
                    storyText.textContent = "You decide to ignore temptation and continue walking through the market to the Tavern.";
                    scenarioImage.src = "images/dontstealmarket.png";
                    choiceButton1.textContent = "Enter the Tavern";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 6;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 6;
                        updateStory();
                    };
                    break;
                    case 16:
                    storyText.textContent = "You enjoy risk, you steal from the stand and your sly while doing so, you wander over the tavern unscaved.";
                    scenarioImage.src = "images/stealmarket.png";
                    choiceButton1.textContent = "Walk to tavern";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 17;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 17;
                        updateStory();
                    };
                    break;
                    case 17:
                    storyText.textContent = "You arrive outside the tavern, you hear singing and laughter, you enter the tavern.";
                    scenarioImage.src = "images/tavern.png";
                    choiceButton1.textContent = "Enter the Tavern";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 6;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 6;
                        updateStory();
                    };
                    break;

                case 26:
                    storyText.textContent = " You sing Old Macdonald so well you WIN! The tavern attendings buy you drinks all evening, you get wasted, soon all hell breaks loose and you start fights with random people. You have emberassed yourself. They kick you out of the town in shame. You are now a wanderer once again.";
                    scenarioImage.src = "images/drink.png";
                    choiceButton1.textContent = "Leave the town in shame";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    break;
                case 27:
                    storyText.textContent = "Wow...that was the worst singing anyone has ever heard. Seriously, you suck its actually impressive how bad you are at singing. Its so bad you actually killed someone... ";
                    scenarioImage.src = "images/singing.png";
                    choiceButton1.textContent = "You attempt to apologize";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 30;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    break;
                case 28:
                    storyText.textContent = "You fight your way out of the tavern, you are a skilled fighter and you make it out alive. You are now a wanted criminal in the town of Stonehaven.";
                    scenarioImage.src = "images/leaveinshame.png";
                    choiceButton1.textContent = "Flea the town";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    break;
                case 29:
                    storyText.textContent = "You flee the scene, but you are caught by the guards of Stonehaven. You are executed for your crimes.";
                    scenarioImage.src = "images/killeddead.png";
                    choiceButton1.textContent = "Rest in Peace";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    break;
                case 30:
                    storyText.textContent = "You attempt to apologize, but no one is listening, you killed someone, you know what? you've done enough, just go.";
                    scenarioImage.src = "images/leaveinshame.png";
                    choiceButton1.textContent = "Leave the town in shame";
                    choiceButton1.style.display = "inline"; // Show choiceButton2
                    choiceButton1.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    choiceButton2.textContent = "";
                    choiceButton2.style.display = "none"; // Hide choiceButton2
                    choiceButton2.onclick = () => {
                        currentPath = 1;
                        updateStory();
                    };
                    break;
        default:
            break;
    }
}

updateStory();
