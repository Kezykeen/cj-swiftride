import { Link } from "react-router-dom";
import Button from "../components/Button";

const linkStyling = "capitalize font-plus-jakarta";
const NavItems = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/browse",
    name: "browse cars",
  },
  {
    path: "/about",
    name: "about us",
  },
  {
    path: "/faq",
    name: "FAQs",
  },
];

const NavBar = () => {
  return (
    <nav
      className="flex justify-between items-center w-full max-w-[1440px] "
      style={{
        padding: "19px 146px",
      }}
    >
      {/* logo */}
      <div>
        <Link to="/">
          <img src="/images/NavBarLogo.png" alt="" />
        </Link>
      </div>

      {/* links */}
      <div className="flex gap-5">
        {NavItems.map((items, idx) => {
          return (
            <Link
              key={idx}
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
      <div className="flex gap-5">
        <Button label="Login" onClick={() => console.log("clicked")} variant="primary"/>
        <Button
          label="Create an acoount"
          onClick={() => console.log("clicked")}
          variant="secondary"
        />
      </div>
    </nav>
  );
};

export default NavBar;
