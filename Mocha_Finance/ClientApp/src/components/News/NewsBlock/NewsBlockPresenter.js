import React from "react";
import SpinningLoader from "../../../utils/Spinner";
import uuid4 from "uuid4";
import style from "./newsBlock.module.scss";
import dayjs from "dayjs";

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
                <img
                  src={urlToImage}
                  alt={urlToImage === null ? "No Image Available" : title}
                />
              </div>
              <div className={style.details}>
                <section className={style.details__name_date}>
                  <div>Author: {author === null ? "unknown" : author}</div>
                  <div>{name.length === 0 ? "unknown" : name}</div>
                  <div>Date: {dayjs(publishedAt).format("YYYY/DD/MM")}</div>
                </section>
                <h4>{title}</h4>
                <p>{description}...</p>
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
        <img
          src={urlToImage}
          alt={urlToImage === null ? "No Image Available" : title}
        />
      </div>
      <div className={style.non_image}>
        <div className={style.author_date}>
          <p className="lead">Author: {author}</p>
          <p className="lead">
            Date: {dayjs(publishedAt).format("YYYY/DD/MM")}
          </p>
        </div>
        <div className={style.title_description}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </a>
  </section>
);

export default NewsBlockPresenter;
