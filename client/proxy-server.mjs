import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 4000;

app.get('/proxy-feed', async (req, res) => {
  try {
    const url = 'https://pro100opt.prom.ua/google_merchant_center.xml?hash_tag=3ea684f26c592bdeefead140b55c8291&product_ids=&label_ids=&export_lang=uk&group_ids=';
    const response = await fetch(url);
    const xml = await response.text();
    res.set('Content-Type', 'application/xml');
    res.set('Access-Control-Allow-Origin', '*');
    res.send(xml);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch XML feed' });
  }
});
// fetch('https://openapi.keycrm.app/v1/products', {
//   method: 'GET', // или 'POST', 'PUT', 'DELETE' и т.д.
//   headers: {
//     'Authorization': 'Bearer MTIyOTRhMWE0OWRlOTJmNmRkZTE1ZmM0M2QzZWU2NjEyYzMyZTJmNA',
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));


app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});