import { useLoaderData } from "react-router";

const CategoryNews = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>{/* <p>{data}</p> */}</div>;
};

export default CategoryNews;
