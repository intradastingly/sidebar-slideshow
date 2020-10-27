console.log('test');

let currentScene = 0;
const scenes = [
    {
        description: "scene description",
        choices: ["sit", "walk" ],
        nextScene: [2, 1]
    },
    {
        description: "Go into door",
        choices: ["yes","no"],
        nextScene: [2, 0]
    }
];

const inventory = ["key"];



function presentScene() {
    const paragraph = document.getElementById('text');
    const buttonOne = document.getElementById('btn1');
    const buttonTwo = document.getElementById('btn2');
    const answer = prompt(scenes[currentScene].description);
    paragraph.innerHTML=scenes[currentScene].description;
    buttonOne.innerHTML=scenes[currentScene].description;
    console.log(paragraph);
    handleUserChoice(answer);
}

function handleUserChoice(answer) {
    console.log(answer);
    if (answer === scenes[currentScene].choices[0]){
        let currentScene = scenes[currentScene].nextScene[0];
    } if (answer === scenes[currentScene].choices[1]){
        let currentScene = scenes[currentScene].nextScene[1];
    }
}

presentScene();
