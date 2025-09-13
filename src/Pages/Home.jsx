import Header from "../components/Header";
import Footer from "../components/Footer";
import avatar from "../assets/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../Auth/useAuth";

function Home() {
  const { user, logout } = useAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      Navigate("/login");
    }
  }, [user, Navigate]);

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div>
          {user ? (
            <>
              <p>Hello, {user.username}</p>
              <button
                className="   text-black boder-2 border-black rounded-ee-md      shadow-md hover:bg-gray-300 transition-colors duration-300"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
        <div className="flex-1 ">
          <div className="flex justify-between ">
            <div className="w-[70%] ">
              <div className="p-15 flex flex-col items-center">
                <img
                  src={avatar}
                  alt="avatar"
                  className="object-cover rounded-full w-60 h-60 md:w-60 md:h-60 border-gray-500 border-4       "
                />
              </div>
              <div className="flex flex-col items-center font-bold">
                <h2 className="m-3 ">Hua Duc Sang</h2>
                <h2>Intern Front-End</h2>
              </div>
            </div>

            <div>
              <section>
                <h5 className="font-bold  uppercase p-5  ">about me</h5>

                <div className="ml-5">
                  <h1>My name Sang!</h1> As a third-year Information Technology
                  student, I am seeking an internship opportunity to apply and
                  enhance my web programming skills, particularly in front-end
                  development. I have a solid technical foundation, a strong
                  willingness to learn, and a desire to contribute to the
                  success of the team while further developing myself in a
                  professional environment.
                </div>
              </section>
              <section>
                <h5 className="font-bold  uppercase p-5  ">🎓 Education</h5>
                <div className="ml-5">
                  <a href="https://actvn.edu.vn/" className="underline ">
                    Academy of Cryptography Techniques (2022 – Present)
                  </a>
                  <h1>• Major: Information Technology</h1>
                  <h1>• English Proficiency: Intermediate</h1>
                </div>
              </section>
              <section>
                <h5 className="font-bold  uppercase p-5  ">💡 Skills</h5>
                <div className="ml-5">
                  <h1>
                    • Programming Languages: C, JavaScript, HTML, CSS ,TailWind
                  </h1>
                  <h1>• Frameworks/Libraries: ReactJS</h1>
                  <h1>• Tools: Git, Vite, Vscode</h1>
                </div>
              </section>
              <div className="flex justify-end p-3">
                <Link
                  to="/Projects"
                  className="cursor-pointer  border-4 rounded-md mt-20  font-bold hover:bg-gray-700  bottom-0     "
                >
                  Projects =&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
