import { useEffect, useState } from 'react';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import DeviceCard from './DeviceCard.js';
import '../css/devicelist.css';

const DeviceList = () => {
  const [data, setData] = useState([]);
  


  useEffect(() => {
    axios.get('http://localhost:4000/proxy-feed')
    .then(res => {
      const parser = new XMLParser({
        ignoreAttributes: false
      });
      const parsed = parser.parse(res.data);
      const items = parsed?.rss?.channel?.item || [];
      setData(items);
    })
      .catch(err => {
        console.error('Помилка завантаження або парсингу XML:', err);
      });
  }, []);

  return (
    <div className='container-devicelist'>
      {data.map((item, index) => (
      item["g:availability"] === 'in stock' ? (
        <DeviceCard key={item["g:id"] || index} device={item} />
      ) : null
      ))}
    </div>
  );
};

export default DeviceList;