const fs = require('fs');
const axios = require('axios');
const file = process.argv[2];
const { URL } = require('url');

if (!file) {
    console.error('file not found');
    process.exit(1);
  }

fs.readFile(file, 'utf8', async (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      process.exit(1); // Exit the process with an error code
    }
    const urls = data.split('\n');

    for (url of urls){
        try{
            const res = await axios.get(url)
            const html = res.data
            const { hostname } = new URL(url);
            const filename = `${hostname}.txt`;
      
            fs.writeFile(filename, html, (err) => {
                if (err){
                    console.error(`Error writing file for URL ${url}: ${err}`)
                }
                else{
                    console.log(`html content for URL ${url} is saved in ${filename}`)
                }
            })

        }
        catch (error) {
            console.error(`Error retrieving URL '${url}': ${error}`);
          }

    }
});