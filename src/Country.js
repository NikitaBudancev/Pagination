import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const path = '/country';

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = axios.get(
          `http://localhost:3080${path}?page=${page}&limit=30`,
        );
        setCountry([...country, ...(await res).data]);
        await setPage((page) => page + 1);
      } catch (err) {
        console.log(err);
      } finally {
        setFetching(false);
      }
    };
    fetchCountries();
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.addEventListener('scroll', scrollHandler);
    };
  }, []);

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
    <section className="country">
      <ul>
        {country.map((item) => (
          <li
            className="item"
            key={item.ID}
          >{`name: ${item.Name} - population: ${item.Population}`}</li>
        ))}
      </ul>
    </section>
  );
};

export default Country;
