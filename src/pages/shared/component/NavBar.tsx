import { Link, useLocation } from "react-router-dom";

const linkStyling = "capitalize font-plus-jakarta";
const NavItems = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/browse_cars",
    name: "browse cars",
  },
  {
    path: "/about_us",
    name: "about us",
  },
  {
    path: "/",
    name: "FAQs",
  },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#F6F6F6] font-plus-jakarta w-full px-[146px] py-[19px]">
      {/* logo */}
      <div className="flex justify-between w-full max-w-[1148px] mx-auto items-center">
        <div>
          <Link to="/">
            <img src="/images/NavBarLogo.png" alt="" />
          </Link>
        </div>
        {/* links */}
        <div className="flex gap-8 text-[14px]">
          {NavItems.map((items, index) => {
            if (items.name === "FAQs") {
              return (
                <a href="#faq" className={`${linkStyling} text-[#8F8F8F]`}>
                  FAQs
                </a>
              );
            }

            return (
              <Link
                key={index}
                to={items.path}
                className={`${linkStyling} ${
                  location.pathname === items.path ? "" : "text-[#8F8F8F]"
                }`}
              >
                <p>{items.name}</p>
              </Link>
            );
          })}
        </div>
        {/* cta button */}
        <div className="flex gap-4">
          <Link to="/sign-in">
            <button className="px-[37px] py-[15px] border border-[#072C59] text-[#072C59] rounded-full bg-white font-semibold cursor-pointer hover:bg-[#072C59] hover:text-white hover:border-transparent transition-colors duration-500 ease-in-out">
              Login
            </button>
          </Link>
          <a href="/sign-up">
            <button className="px-[37px] py-[15px] border rounded-full bg-[#072C59] text-white cursor-pointer font-semibold hover:bg-white hover:text-[#072C59] hover:border hover:border-[#072C59] transition-colors duration-500 ease-in-out">
              Create an account
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
