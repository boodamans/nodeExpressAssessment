const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {

    const results = await Promise.all(
      req.body.developers.map(async (d) => {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return response;
      })
    );

    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return res.json(out)
  } 
  catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});