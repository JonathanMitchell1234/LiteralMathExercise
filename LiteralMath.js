// The Literal Math Method Exercise

let warmHugs = "Hi, I'm Olaf and I like warm hugs.";


console.log(warmHugs.toUpperCase());


warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);


let beenImpaled = "Oh, look at that. I've been impaled.";


console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(18, 36));
console.log(beenImpaled.slice(-18));


let dotDotDot = "...";


let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);


console.log(Math.PI);


let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.ceil(randomNum);
console.log(randomNum);

