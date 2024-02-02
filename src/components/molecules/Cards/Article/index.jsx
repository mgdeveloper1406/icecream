import React from 'react'
import './styles.scss'

const ArticleItem = ({
  id,
  image,
  title,
  description,
  userImage,
  userName,
  plublishedAt
}) => {
  return (
    <>
      <li key={id} className='articleItem'>
        <img className='articleItem__image' src={image} />
        <div className="articleItem__infoContainer">
          <div className="articleItem__articleIntro">
            <h2 className="articleItem__title">{title}</h2>
            <p className="articleItem__description">{description}</p>
          </div>
          <div className="articleItem__userInfo">
            <img className="articleItem__userImage" src={userImage} />
            <p className="articleItem__userName" >{userName}</p>
            <p className="articleItem__publishedAt" >{plublishedAt}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ArticleItem;