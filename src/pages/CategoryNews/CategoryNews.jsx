import { useLoaderData } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h2 className="font-semibold mb-3">News Home Page</h2>
      <p> {news.length} </p>
      <p className="text-gray-400 text-sm">
        {news.length} News found on this page
      </p>
      <div>
        {news.map((singleNews) => (
          <>
            <NewsCard news={singleNews} key={singleNews._id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
