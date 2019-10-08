import React from "react";
import style from "./news.scss";

const NewsPresenter = () => {
  return (
    <section className={style.newsComponent}>
      <div className={style.container}>
        <div className={style.row}>
          <h2>7 Ways to Invest in the Energy Storage Boom</h2>
          <div>Image</div>
          <p>
            Over the next seven years, Bank of America estimates energy storage
            costs will decrease by 50%, ushering in the next phase of the global
            transition to renewable energy. The firm estimates the energy
            storage market could grow 16% annually...
          </p>
        </div>
        <div className={style.row}>
          <h2>7 Ways to Invest in the Energy Storage Boom</h2>
          <div>Image</div>
          <p>
            Over the next seven years, Bank of America estimates energy storage
            costs will decrease by 50%, ushering in the next phase of the global
            transition to renewable energy. The firm estimates the energy
            storage market could grow 16% annually...
          </p>
        </div>
        <div className={style.row}>
          <h2>7 Ways to Invest in the Energy Storage Boom</h2>
          <div>Image</div>
          <p>
            Over the next seven years, Bank of America estimates energy storage
            costs will decrease by 50%, ushering in the next phase of the global
            transition to renewable energy. The firm estimates the energy
            storage market could grow 16% annually...
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsPresenter;
