import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import demo1 from "../assets/demo1.png";
import demo2 from "../assets/demo2.png";
import demo3 from "../assets/demo3.png";
import { Link } from "react-router-dom";

function Project() {
  const [movieLists, setMoveLists] = useState([]);
  const [active, setActive] = useState("movie-app");
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGMxNDU3Njc2MTE5ZmY5N2JmNjAzZGZjY2M1YWYyMiIsIm5iZiI6MTc1MzA5MDQ2MS4yOTksInN1YiI6IjY4N2UwOTlkMThiZjRlMjUzODhhNGM5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lB4OMogmMHf7EXDjXjhZx0LButh46JoGHmBF7Btn9tM",
          },
        };
        const res = await axios.get(url, options);
        setMoveLists(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  // const dataMovies = movieLists;
  // console.log(dataMovies);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className="flex-1 ">
          <div className="flex justtift-start p-2 space-x-2">
            <button
              onClick={() => setActive("movie-app")}
              className={`cursor-pointer  px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                active === "movie-app"
                  ? "bg-white text-black border border-black"
                  : "bg-white text-gray-600 border-2 border-gray-300"
              }`}
            >
              {" "}
              Movie-app
            </button>
            <button
              onClick={() => setActive("shop-sqt")}
              className={`cursor-pointer  px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                active === "shop-sqt"
                  ? "bg-white text-black border border-black"
                  : "bg-white text-gray-600 border-2 border-gray-300"
              }`}
            >
              {" "}
              Shop-sqt
            </button>
          </div>
          {active === "movie-app" && (
            <section>
              <h1 className="p-2 font-bold">Movie-app (4/2025 - 5/2025)</h1>
              <li className="pl-3">
                Description: A modern movie browsing application
              </li>
              <li className="pl-3">
                Integrated with TMDB API to provide updated movie information{" "}
              </li>
              <li className="pl-3  ">
                Built a user-friendly and visually appealing interface
              </li>
              <h1 className="pl-2 font-bold  ">
                Technologies: ReactJS, JavaScript, Tailwind CSS
              </h1>
              <h1 className="pl-2">
                Libraries: React Modal, React Multi Carousel, React YouTube
              </h1>
              <h1 className="pl-2">
                API: TMDB API and Bearer Token Authentication
              </h1>
              <div className="pl-2">
                {" "}
                * More :{" "}
                <a
                  className="cursor-pointer underline decoration-grey-500 text-blue-500  "
                  href=" https://movier-app.vercel.app/"
                >
                  Movie-app
                </a>{" "}
              </div>

              <div className="pl-3 bg-black w-full h-auto  text-white     ">
                <h1 className="font-bold p-1 text-center text-3xl ">
                  Movie Hot
                </h1>
                <div className="flex  justify-start  items-center ">
                  <Carousel
                    responsive={responsive}
                    itemClass="px-2"
                    className="w-full mb-5 "
                  >
                    {movieLists &&
                      movieLists.length > 0 &&
                      movieLists.map((items) => (
                        <div className="bg-blue-900 w-full  rounded-2xl flex items-center  mx-2 ">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
                            alt="avatar"
                            className="object-cover rounded-2xl h-full "
                          />
                        </div>
                      ))}
                  </Carousel>
                </div>
              </div>
            </section>
          )}
          {active === "shop-sqt" && (
            <section>
              <h1 className="p-2 font-bold">Shop-sqt (5/2025-7/2025)</h1>
              <li className="pl-3">
                Description: An e-commerce website supporting user registration,
                login, authorization, and purchasing
              </li>
              <h1 className="pl-2 font-bold  ">
                Technologies: ReactJS, TypeScript (typed with Cursor), Tailwind
                CSS, RESTful API
              </h1>
              <li className="pl-2">
                Developed UI for registration, login, and user account
                management
              </li>
              <li className="pl-2">
                Built authentication using Context API and client-side route
                handling
              </li>
              <div className="pl-2">
                {" "}
                * More :{" "}
                <a
                  className="cursor-pointer underline decoration-grey-500 text-blue-500  "
                  href=" https://drive.google.com/drive/folders/1UY6wL4TAljkKcIo3DU_nqYlv6Y9ScYA3"
                >
                  Shop-sqt
                </a>{" "}
              </div>
              <div>Exp:</div>{" "}
              <div className="flex flex-col justify-center items-center space-x-3 p-3 h-80% bg-gray-100">
                <img
                  src={demo1}
                  alt="demo1"
                  className="w-[50%] h-[50%] object-contain"
                />
                <img
                  src={demo2}
                  alt="demo2"
                  className="w-[50%] h-[50%] object-contain"
                />
                <img
                  src={demo3}
                  alt="demo3"
                  className="w-[50%] h-[50%] object-contain"
                />
              </div>
              <div className="flex justify-end p-3 ">
                <Link
                  to="/Contact"
                  className="cursor-pointer  border-4 rounded-md   font-bold hover:bg-gray-700      "
                >
                  Contacts =&gt;
                </Link>
              </div>
            </section>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Project;
