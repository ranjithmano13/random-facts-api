const randomFacts = [
  "Ants stretch when they wake up in the morning",
  "The average person's left hand does 56% of the typing",
  "The only letter not appearing on the periodic table is the letter 'J'",
  "Blue whales are the largest animals ever known to have existed on Earth.",
  "Bees communicate with each other through a complex dance language known as the 'waggle dance.'",
  "The national animal of Australia is the kangaroo.",
  "The world's oldest known living organism is a seagrass meadow of the species Posidonia australis, estimated to be around 200,000 years old.",
  "The name 'Google' was originally a misspelling of the word 'googol,' which refers to the number 1 followed by 100 zeros.",
  "The shortest war in American history was the Anglo-Zanzibar War, which lasted only 38 minutes.",
  "The word 'nerd' was first coined by Dr. Seuss in his book 'If I Ran the Zoo.'",
  "The coldest temperature ever recorded on Earth was -128.6 degrees Fahrenheit (-89.2 degrees Celsius) at the Soviet Union's Vostok Station in Antarctica.",
  "The Great Pyramid of Giza is so precisely built that the error in its alignment is less than 0.1 degrees.",
  "Honeybees must tap two million flowers to make one pound of honey.",
  "The world's smallest reptile is the Brookesia micra chameleon, measuring about 0.5 inches (1.3 cm) long.",
  "The longest recorded flight of a chicken is 13 seconds.",
  "The scientific term for brain freeze is 'sphenopalatine ganglioneuralgia.'",
  "The largest hailstone ever recorded weighed 2.25 pounds and fell in Bangladesh in 1986.",
  "The first email was sent in 1971 by Ray Tomlinson, who also chose the '@' symbol for email addresses.",
  "Polar bears are nearly undetectable by infrared cameras due to their transparent fur.",
  "There are more possible iterations in a game of chess than there are atoms in the observable universe.",
  "Bananas are berries, while strawberries are not.",
  "The national animal of Scotland is the unicorn.",
  "The first alarm clock could only ring at 4 a.m.",
  "The bumblebee bat, also known as Kitti's hog-nosed bat, is the smallest mammal in the world, weighing about as much as a paperclip.",
  "The first oranges were originally green and bitter, and they gradually evolved into the sweet, orange fruit we know today.",
  "Turritopsis dohrnii, a type of jellyfish, is considered biologically immortal because it can revert to its younger form after reaching maturity.",
  "The name 'LEGO' comes from the Danish phrase 'leg godt,' meaning 'play well.'",
  "To make one pound of honey, honeybees need to visit about two million flowers.",
  "Octopuses have three hearts: two branchial hearts and one systemic heart.",
  "The average person walks approximately 100,000 miles in a lifetime, equivalent to circling the Earth four times.",
  "The longest word in the English language with no repeating letters is 'uncopyrightable.'",
  "The electric chair was invented by dentist Alfred P. Southwick in the late 19th century.",
  "Wombat poop is cube-shaped, which helps prevent it from rolling away.",
  "The shortest war in history was the Anglo-Zanzibar War in 1896, lasting only 38 minutes.",
  "The longest time between two twins being born is 87 days.",
  "The first known contraceptive was crocodile dung, used by ancient Egyptians around 2000 B.C.",
  "The surface area of Russia is larger than the surface area of Pluto.",
  "The Hawaiian language has only 13 letters.",
  "Humans and giraffes have the same number of neck vertebrae: seven.",
  "The fingerprints of a koala are so similar to those of humans that they have been mistaken at crime scenes.",
  "The longest word in the English language without a vowel is 'rhythms.'",
  "There are more lifeforms living on your skin than there are people on the planet.",
  "The scientific term for brain freeze is 'sphenopalatine ganglioneuralgia'.",
  "Canadians say 'sorry' so much that a law was passed in 2009 declaring that an apology can't be used as evidence of admission to guilt.",
  "Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.",
  "The only letter that doesn't appear on the periodic table is J.",
  "One habit of intelligent humans is being easily annoyed by people around them but saying nothing in order to avoid a meaningless argument.",
  "If a Polar Bear and a Grizzly Bear mate, their offspring is called a 'Pizzy Bear'.",
  "In 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi. Pepsi responded by notifying Coca-Cola.",
  "The ten highest mountain summits in the United States are all located in Alaska.",
  "Nintendo trademarked the phrase 'It's on like Donkey Kong' in 2010.",
  "Daniel Radcliffe was allergic to his Harry Potter glasses. He had an allergy to nickel, and they were quickly replaced with hypoallergenic specs. Also, did you know that his glasses had no lenses? This was to stop the reflection from anything happening behind the scenes. The glass lens was added in post-production.",
  "The famous line in Titanic from Leonardo DiCaprio, 'I'm king of the world!' was improvised.",
  "A single strand of Spaghetti is called a 'Spaghetto'.",
  "Hershey's Kisses are named after the kissing sound the deposited chocolate makes as it falls from the machine on the conveyor belt.",
  "Princess Peach didn't move until 1988 because it was too complicated for the designers to make her a movable character.",
  "To leave a party without telling anyone is called in English a 'French Exit'. In French, it's called a 'partir à l'anglaise', to leave like the English.",
  "If you cut down a saguaro cactus in Arizona, you can be charged with a class-4 felony and penalized with jail time.",
  "The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation.",
  "In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt.",
  "The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarfs.",
  "A snail can sleep for three years.",
  "All polar bears are left handed.",
  "It is physically impossible for pigs to look up into the sky.",
  "Hydra – an aquatic creature is the only living creature that never die. It regenerates, replacing its cells with fresh ones.",
  "The sun makes up more than 99% of the mass in our solar system.",
  "Lined up, all of the planets in the solar system could fit between the Earth and the moon.",
  "The Great Wall of China is not actually visible from space.",
  "One million Earths could fit inside the sun.",
  "It rains diamonds on both Jupiter and Saturn.",
  "The bird on the Twitter logo is named 'Larry.' He was named after the basketball player Larry Bird, who played for the Boston Celtics.",
  "The term 'coccyx' (also known as your tailbone) is derived from the Greek word 'cuckoo' ('kokkux') because the curved shape of the tailbone resembles the bird's beak.",
  "A baby has around 30,000 taste buds. They are not just on the tongue but also on the sides, back, and roof of the mouth. Adults have about 10,000.",
  "In one survey, three out of four people admitted to sharing an ice cream cone with their pet.",
  "When humans take a breath, they replace only 15% of the air in their lungs with fresh air. When dolphins take a breath, they replace 90% of the air in their lungs with fresh air.",
  "Feral pigs ate and completely destroyed $22,000 worth of cocaine that had been hidden in an Italian forest.",
  "Pablo Picasso would often carry around a pistol loaded with blanks. He would fire it at people he found boring or anyone who insulted the Post-Impressionist painter, Paul Cézanne.",
  "Monarch caterpillars breathe through holes in the sides of their bodies.",
  "Male lobster’s bladders are in their heads, and when they fight, they squirt each other in the face with urine.",
  "The word 'oysterhood' means 'reclusiveness' or 'an overwhelming desire to stay at home.'",
  "Ancient pagan cultures, such as the Celts, believed that benevolent and helpful spirits lived in trees. Knocking on tree trunks roused a spirit for protection, which led to the saying 'knock on wood.'",
];

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * randomFacts.length);
  const randomFact = randomFacts[randomIndex];
  res.json({ fact: randomFact });
});

app.listen(port, () => {
  console.log(`Server is running`);
  console.log(randomFacts.length);
});
