import React, { useState, useEffect } from 'react';
import axios from 'axios';

const City = () => {
  const [city, setCity] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const path = '/city';

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = axios.get(
          `http://localhost:3080${path}?page=${page}&limit=20`,
        );
        setCity([...city, ...(await res).data]);
        await setPage((page) => page + 1);
      } catch (err) {
        console.log(err);
      } finally {
        setFetching(false);
      }
    };
    fetchCity();
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.addEventListener('scroll', scrollHandler);
    };
  }, [city]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <section className="city">
      <ul>
        {city.map((item) => (
          <li
            className="item"
            key={item.ID}
          >{`name: ${item.Name} - population: ${item.Population}`}</li>
        ))}
      </ul>
    </section>
  );
};

export default City;
