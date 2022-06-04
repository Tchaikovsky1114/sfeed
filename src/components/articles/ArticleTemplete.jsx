import ArticleTempleteFrame from '../../layouts/ArticleTempleteFrame';
import ArticleDetails from './ArticleDetails';



const ArticleTemplete = ({ article }) => {

  return (
    <ArticleTempleteFrame article={article}>
      <ArticleDetails article={article} />
    </ArticleTempleteFrame>
  );
};

export default ArticleTemplete;
