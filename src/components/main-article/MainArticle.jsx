import ArticleTemplete from '../../layouts/ArticleTemplete';
import ArticleDetails from './MainArticleDetails';



const MainArticle = ({ article }) => {

  return (
    <ArticleTemplete article={article}>
      <ArticleDetails article={article} />
    </ArticleTemplete>
  );
};

export default MainArticle;
