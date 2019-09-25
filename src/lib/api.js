import axios from "axios";

export const getArticleList = () =>
  axios.get("https://conduit.productionready.io/api/articles");
