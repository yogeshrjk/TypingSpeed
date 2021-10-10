const sentence =
    [
        "Embarrassed by his violin-high voice, he took extra victory laps to avoid speaking on camera. The steroids worked, but they came at a price.",
        "Long, slender neck, feminine curves. Victory, she's mine at last! On pulsing, rhythmic strokes we rise. Higher, faster Crescendo! My latest love, a violin.",
        "A Victory Medal displayed proudly on his chest. Scarred hands coaxed sorrowful notes from an old violin. Pennies scattered in the case at his feet.",
        "Mother’s antique violin case was the perfect makeshift coffin for her spoilt, skittish, confrontational cat. The plan, while unpalatable was meticulously executed. Victory was mine.",
        "Police victory, infamous Mr Vargas apprehended! Vargas explained, “I chose to play the double base because you can't hide a corpse in a violin case”.",
        "The Winged Victory stands resolute against the forceful sea wind, drapery sculpted over violin hips. Tourists surge through the Louvre, taking selfies, unmoved by history.",
        "Winter withdraws. Whale song sounds, like sweetly-played violins. The frolicsome pod heads north. One last victory wave, they submerge and are gone for another season.",
        "The violin stuck against her head. Alexia stumbled stunned by the irony. Weren't composers more composed? She fell. His victory came with strings attached.",
        "Jim died today. The leftover snags from his fundraiser expire tomorrow. So what's that sound? Defeat's jaws snapping victory caught. And violins. The non-sarcastic sort.",
        "How different our lives are, yours a glorious victory march blasted out by countless trumpets, mine a sad soliloquy scratched out on a tuneless violin.",
    ]
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime, endTime;

//start time
const start = () => {
    let randomNum = Math.floor(Math.random() * sentence.length);
    msg.innerText = sentence[randomNum];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

//end time
const end = () => {
    let date = new Date();
    endTime = date.getTime();
    let totaltime = ((endTime - startTime) / 1000);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totaltime) * 60);

    let finalMsg = `Your speed was ${speed} wpm.`;
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;

}

//compare input with given text
const compareWords = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;

    word1.forEach(function (value, index) {
        if (value == word2[index]) {
            count++;
        }
    })
    let error = (word1.length - count);
    return `
    correct words: ${count}
    Errors: ${error} `;
}

//count number of words
const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        start();
    } else if (this.innerText == "Done") {
        typeWords.disabled = true;
        btn.innerText = "Start";
        end();
    }
})