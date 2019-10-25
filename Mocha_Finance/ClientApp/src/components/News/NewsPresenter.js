import React from "react";
import style from "./news.module.scss";
import NewsBlock from "./NewsBlock";

const NewsPresenter = () => {
  return (
    <section className={style.newsComponent}>
      <div className={style.container}>
        <NewsBlock />
      </div>
    </section>
  );
};

export default NewsPresenter;
