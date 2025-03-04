import { FaUser } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="rounded-lg mb-8 overflow-hidden shadow-lg bg-gray-800 text-white">
      {/* Thumbnail */}
      <img
        className="w-full h-56 object-cover"
        src={news.thumbnail_url}
        alt="news Thumbnail"
      />

      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{news.title}</h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 mr-2">★ {news.rating.number}</span>
          <span className="text-gray-400 text-sm">{news.rating.badge}</span>
        </div>

        {/* Author and Published Date */}
        <div className="flex items-center mb-3">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={news.author.img}
            alt="Author"
          />
          <div>
            <p className="font-semibold">{news.author.name}</p>
            <p className="text-sm text-gray-400">
              {news.author.published_date}
            </p>
          </div>
        </div>

        {/* news Details */}
        <p className="text-gray-300 text-sm mb-4">{news.details}</p>

        {/* View Count and Trending Status */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <p>Views: {news.total_view}</p>
          <span
            className={`px-2 py-1 rounded-full ${
              news.others_info.is_trending ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            {news.others_info.is_trending ? "Trending" : "Not Trending"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
