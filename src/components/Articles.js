import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <PreviewList key={article.slug}>
          <div>
            <UserImg
              alt={article.author.username}
              src={
                article.author.image === ''
                  ? 'https://static.productionready.io/images/smiley-cyrus.jpg'
                  : article.author.image
              }
            />
            <UserInfo>
              <UserName href={'#/@' + article.author.username}>
                {article.author.username}
              </UserName>
              <CreateDate>
                {moment(article.createdAt).format('MMMM DD, YYYY')}
              </CreateDate>
            </UserInfo>

            <FavoriteCount
              favorited={article.favorited}
              favoriteCount={article.favoritesCount}
            >
              {' '}
              {article.favoritesCount}
            </FavoriteCount>
          </div>
          <Title>{article.title}</Title>
          <Content>{article.body}</Content>
          <div>
            <TagListUl>
              {article.tagList.map(tag => (
                <TagListLi>{tag}</TagListLi>
              ))}
            </TagListUl>
          </div>
        </PreviewList>
      ))}
    </>
  );
};

const Font = {
  big: '1.5rem',
  middle: '1.0rem',
  small: '0.825rem',
};

const InlineDiv = styled.div`
  display: inline-block;
`;

const UserName = styled.a`
  color: #5cb85c;
  text-decoration: none;
`;

const CreateDate = styled.span`
  color: #bbb;
  font-size: ${Font.small};
  display: block;
`;

const PreviewList = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const TagListUl = styled.ul`
  float: right;
  max-width: 50%;
  vertical-align: top;
  padding-left: 0px !important;
  display: inline-block;
  list-style: none !important;
  margin-top: 0;
  margin-bottom: 1rem;
`;
const TagListLi = styled.li`
  font-weight: 300;
  font-size: ${Font.small} !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  border: 1px solid #ddd;
  color: #aaa !important;
  display: inline-block !important;
  padding: 0 0.6em;
  border-radius: 10rem;
`;

const FavoriteCount = styled(InlineDiv)`
  background-color: ${props => (props.favorited ? '#5cb85c' : '#ffffff')};
  float: right;
  padding: 0.25rem 0.5rem;
  font-size: ${Font.small};
  border-radius: 0.2rem;
  color: #000;
  border: 1px solid #5cb85c;
`;

const Title = styled.h1`
  font-weight: 600 !important;
  font-size: ${Font.big} !important;
  margin-bottom: 3px;
`;

const UserImg = styled.img`
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  width: 32px;
  border-radius: 30px;
`;

const UserInfo = styled(InlineDiv)`
  margin: 0 1.5rem 0 0.3rem;
  vertical-align: middle;
  line-height: 1rem;
`;

const Content = styled.div`
  font-weight: 300;
  color: #999;
  margin-bottom: 15px;
  font-size: ${Font.middle};
  line-height: 1.3rem;
`;

export default Articles;
