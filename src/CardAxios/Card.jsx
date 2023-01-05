import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AirQualityCard from './AirQualityCard';

function Card() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api.datos.gob.mx/v1/calidadAire'
      );
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <AirQualityCard
            key={item.id}
            station={item.stations[0]}
            measure={item.stations[0].measures[0]}
          />
        ))}
    </div>
  );
}

export default Card;
