import React from 'react';

const ShortArticle = (list) => {
    console.log(list);
   return (
       <div>
           <ul>
               {list.map(article => {
                   return (
                        <li>{article.title}</li>
                   )
               })}
           </ul>
       </div>
   )
}

export default ShortArticle;