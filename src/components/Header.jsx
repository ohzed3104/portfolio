function Header() {
  return (
    <div className="bg-gray-900   w-full h-20  text-white flex items-center justify-between">
      <div className="p-2 font-bold  uppercase text-[20px]"> portfolio</div>
      <nav className="flex   space-x-2 p-3 mt-10 text-[15px] font-bold  ">
        <a
          href="Home.jsx "
          className="hover:scale-125 transition-transform duration-300 inline-block "
        >
          home
        </a>
        <div>|</div>
        <a
          href="Projext.jsx"
          className="hover:scale-125 transition-transform duration-300 inline-block "
        >
          projects
        </a>
        <div>|</div>
        <a
          hred="contact.jsx"
          className="cursor-pointer  hover:scale-125 transition-transform duration-300 inline-block "
        >
          contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
