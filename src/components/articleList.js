import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./article";

const ArticleList = ({ category }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/" +
          category +
          ".json?api-key=d9zgn3nMA9HGqADdUA6GDMO6KtcgxPZ2"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, [category]);
  return !data ? null : (
    <>
      <div className="display-flex">
        <div className="article-list-container">
          {data.results.map((u, i) => (
            <Article data={u} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
