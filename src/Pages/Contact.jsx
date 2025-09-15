import Header from "../components/Header";
import Footer from "../components/Footer";
import avatar from "../assets/avatar.jpg";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Left Side - Image */}
            <div className="hidden md:block">
              <img
                src={avatar}
                alt="Profile"
                className="h-[350px] w-full object-cover"
              />
            </div>

            {/* Right Side - Info */}
            <div className="p-8 flex flex-col justify-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-black inline-block">
                PERSONAL INFORMATION
              </h1>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>0346 974 856</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>huaducsang@gmail.com</div>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <a
                    href="https://facebook.com/huaducsang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    facebook.com/huaducsang
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Tan Trieu, Thanh Tri, Hanoi</span>
                </div>
                <div className="flex flex-col">
                  <a
                    href="https://github.com/ohzed3104"
                    className=" text-black  hover:text-gray-500 "
                  >
                    • github.com/ohzed3104
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
