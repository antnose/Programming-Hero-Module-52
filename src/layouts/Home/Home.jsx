import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import NavBar from "../../components/NavBar/NavBar";
import RightNavbar from "../../components/RightNavbar/RightNavbar";

const Home = () => {
  return (
    <div>
      <header>
        <Header />

        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>

      <nav className="w-11/12 mx-auto py-2">
        <NavBar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12 gap-3 ">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">Main Content</section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default Home;
