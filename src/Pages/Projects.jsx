import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import avatar from "../assets/avatar.jpg";

function Project() {
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
          <section>
            <h2 className="font-bold p-1">Projects:</h2>
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
              API: TMDB API với Bearer Token Authentication
            </h1>
            <div className="pl-2">
              {" "}
              * Demo:{" "}
              <a
                className="cursor-pointer underline decoration-grey-500   "
                href=" https://movier-app.vercel.app/"
              >
                Tại Đây
              </a>{" "}
            </div>
            <div className="pl-3 bg-black w-full h-80  text-white flex  justify-start  items-center   ">
              <Carousel
                className=" bg-blue-900 w-50 h-60 rounded-2xl flex items-center space-x-4"
                responsive={responsive}
              >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Carousel>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Project;
{
  /* <div className="bg-blue-900 w-50 h-60 rounded-2xl flex items-center space-x-20 ">
                <img
                  src={avatar}
                  alt="avatar"
                  className="object-cover rounded-2xl h-full "
                />
              </div> */
}
