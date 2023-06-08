import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Content</h1>
      <div></div>
    </div>
  );
}

export default Content;
