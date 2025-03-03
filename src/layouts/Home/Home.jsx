import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>

      <nav></nav>
      <main></main>
    </div>
  );
};

export default Home;
