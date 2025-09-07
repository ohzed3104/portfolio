import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

function Contact() {
  const [active, setActive] = useState("");
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className="flex-1 ">
          <h1> About me</h1>
          <div className="flex justify-start  space-x-3  ">
            <div className="w-[250px] h-[300px] boder-1 rounded-md shadow-md shadow-gray-500 p-3 m-3">
              <button
                className=" border-1    rounded-ee-md cursor-pointer hover:bg-gray-200 shadow-md shadow-gray-300 hover:scale-95  transition-transform duration-200  ease-linear  "
                onClick={() => {
                  setActive("camera");
                }}
              >
                camera
              </button>
              <button
                className=" border-1  ml-2  rounded-ee-md cursor-pointer hover:bg-gray-200 shadow-md shadow-gray-300 hover:scale-95  transition-transform duration-200  ease-linear  "
                onClick={() => {
                  setActive("thiet bi");
                }}
              >
                thiet bi
              </button>
              {active === "camera" && (
                <div className="flex flex-col items-start mt-4">
                  <div>
                    <input type="checkbox" /> hello my name is sang
                  </div>
                  <li>noi dung 1</li>
                </div>
              )}
              {active === "thiet bi" && (
                <div className="flex flex-col items-start mt-4">
                  <div>
                    <input type="checkbox" /> hello my name is gnas
                  </div>
                  <li>noi dung 2</li>
                </div>
              )}
            </div>
          </div>
          {/* show noi dung */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
