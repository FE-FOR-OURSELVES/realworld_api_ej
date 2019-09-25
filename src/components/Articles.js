import React from 'react'

const Articles = ({articles}) => {
    return (
        <>
            {articles.map(article => 
                <div key={article.slug}>
                    <div>{article.author.username} <img src={article.author.image}/></div>
                    <div>Title : {article.title}</div>
                    <div>favoritesCount : {article.favoritesCount}</div>
                    <div>favorite : {article.favorited? 'true' : 'false'}</div>
                    <div>tagList :
                         {article.tagList.map(tag => <span>{tag}</span>)}
                    </div>
                    <hr/>
                </div>
            )}
        </>
    )
}

export default Articles;