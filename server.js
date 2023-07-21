const randomFacts =["Ants stretch when they wake up in the morning",
  "The average person's left hand does 56% of the typing",
  "The only letter not appearing on the periodic table is the letter 'J'",]


  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  const port = 3001;
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());




  app.get('/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    const randomFact = randomFacts[randomIndex];
    res.json({ fact: randomFact });
  });


app.listen(port, () => {
  console.log(`Server is running`);
});
