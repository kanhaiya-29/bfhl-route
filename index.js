const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/bfhl", (req, res) => {
  try {
    const data = req.body;
    const user_id = "Kanhaiya_Garg_29012003";
    const email = "kanhaiya0718.be21@chitkara.edu.in";
    const roll_number = "2110990718";
    const odd_numbers = data.filter((num) => num % 2 == 1);
    const even_numbers = data.filter((num) => num % 2 == 0);
    // const alphabets=data.filter((char)=>isNan(char)).map(char)=>char.toUpperCase();
    const alphabets = data.filter((char) => isNaN(char));
    res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      is_success: false,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
