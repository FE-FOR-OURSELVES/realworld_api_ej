import * as api from '../lib/api';

/** define action */
const GET_ARTICLES = 'articles/GET_ARTICLES';
const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS';
const GET_ARTICLES_FAIL = 'articles/GET_ARTICLES_FAIL';

/** define action function */
export const getArticlesRequest = () => ({
  type: GET_ARTICLES,
});

export const getArticlesSuccess = (list) => ({
  type: GET_ARTICLES_SUCCESS,
  list,
});

export const getArticlesFailure = () => ({
  type: GET_ARTICLES_FAIL,
});

export const getArticles = async (dispatch) => {
  dispatch(getArticlesRequest()); //start request

  try {
      const { data } = await api.getArticleList(); // axios started and get data
      console.log(data);
      dispatch(getArticlesSuccess(data));
  } catch (error) {
      console.log(error);
      dispatch(getArticlesFailure());
  }
};  

/** define initial state */
const initialState = {
    articles : []
};

/** define reducer function */
function articles(state = initialState, action) {
    switch(action.type) {
        case GET_ARTICLES_SUCCESS :
            return {
                articles : action.list.articles
            }
        default :
            return state;
    }
}

export default articles;