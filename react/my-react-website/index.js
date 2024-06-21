// import express from 'express';
// import axios from 'axios';
// import cheerio from 'cheerio'; // Change this import line

// const app = express();
// const PORT = 4000;
// const articles = [];

// app.get("/", (req, res) => {
//     res.json("hello this is Success");
// });

// app.get('/movies', (req, res) => {
//     axios.get("https://www.theguardian.com/environment/climate-crisis")
//         .then((response) => {
//             const html = response.data;
//             const $ = cheerio.load(html); // Corrected this line
            
//             $('a:contains("weather")').each((index, element) => { // Corrected this line
//                 const title = $(element).text(); // Modified $(this) to $(element)
//                 const url = $(element).attr("href"); // Modified $(this) to $(element)
//                 articles.push({
//                     title,
//                     url
//                 });
//             });
//             res.json(articles);
//         })
//         .catch((error) => console.log(error));
// });

// app.listen(PORT, () => {
//     console.log(`Server is Running ${PORT}`);
// });
