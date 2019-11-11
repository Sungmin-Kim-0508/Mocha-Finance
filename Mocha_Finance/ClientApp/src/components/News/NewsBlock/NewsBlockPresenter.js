import React from "react";
import SpinningLoader from "../../../utils/Spinner";
import uuid4 from "uuid4";
import style from "./newsBlock.module.scss";

const NewsBlockPresenter = ({ news, hasError, errorMsg }) => {
  // If the news is loading
  if (news.length === 0 && hasError === false) {
    return <SpinningLoader />;
  }
  // If the news is loaded
  else if (news.length > 0 && hasError === false) {
    return news.map((item, index) => {
      const {
        source: { name },
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt
      } = item;

      // first row of the news
      if (index === 0) {
        return (
          <JumbotronComponent
            key={uuid4()}
            name={name}
            author={author}
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
          />
        );
      } else {
        return (
          <section key={uuid4()} className={`${style.rows}`}>
            <a href={url}>
              <div className={style.image}>
                <img src={urlToImage} alt={title} />
              </div>
              <div className={style.details}>
                <div>Author: {author}</div>
                <div>{name}</div>
                <div>Date: {publishedAt}</div>
                <h3>{title}</h3>
                <h5>{description}...</h5>
              </div>
            </a>
          </section>
        );
      }
    });
  }
  // If the news is failed to load
  else if (news.length === 0 && hasError === true) {
    return <section>{errorMsg}</section>;
  }
};

const JumbotronComponent = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt
}) => (
  <section className={`${style.firstRow}`}>
    <a href={url}>
      <div className={style.image}>
        <img src={urlToImage} alt={title} />
      </div>
      <div className={style.non_image}>
        <h4>{title}</h4>
        <p className="lead">{author}</p>
        <p className="lead">{publishedAt}</p>
        <p>{description}</p>
      </div>
    </a>
  </section>
);

export default NewsBlockPresenter;
