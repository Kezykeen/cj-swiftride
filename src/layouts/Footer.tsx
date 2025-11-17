import { Link } from "react-router-dom";

const contact = [
  {
    image: "/images/footer-phone-icon.png",
    title: "Tel",
    meesage: "310-437-2766"
  },
  {
    image: "/images/footer-mail-icon.png",
    title: "Mail",
    meesage: "unreal@outlook.com"
  },
  {
    image: "/images/footer-location-icon.png",
    title: "Address",
    meesage: "706 Campfire Ave. Meriden, CT06450"
  },
  {
    image: "/images/footer-fax-icon.png",
    title: "Fax",
    meesage: "+1-000-0000"
  },
]

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col gap-10 bg-[#072C59] container-padding text-white font-plus-jakarta">
        {/* logo */}
        <div className="mt-5">
          <img src="/images/footer-logo.png" alt="" />
        </div>

        <div>
          <p className="text-[#9A9EA6]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, amet
            earum, veritatis ratione eum impedit esse qui in eveniet enim, iste
            unde laudantium ipsam sint libero accusantium minima consequatur
            aperiam...{" "}
            <button
              className="text-[#DCECFF]"
              onClick={() => console.log("clicked")}
            >
              Read More
            </button>
          </p>
        </div>

        {/* contact */}
        <div className="flex justify-between">
          {contact.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src={item.image} alt="" />
              <div>
                <p className="text-[#9A9EA6] text-[14px]">{item.title}</p>
                <p className="w-48 text-[#DCECFF]">{item.meesage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* newsletter section */}
        <div className="flex p-7 rounded justify-between bg-[#157DFF]">
          <div>
            <h3>Newsletter</h3>
            <p>Be the first one to know about discounts, offers and events</p>
          </div>

          <div className="relative flex justify-between bg-[#072C59] p-2 w-[457px] rounded">
            <img
              src="/images/input-email-icon.png"
              alt=""
              className="absolute top-4 left-5"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none w-90 pl-10"
            />
            <button className="bg-white text-[#047857] h-9 px-4 rounded font-semibold cursor-pointer">
              Submit
            </button>
          </div>
        </div>

        {/* footer nav */}
        <nav className="flex justify-between border-b-2 border-[#CCCCCC] py-20">
          {/* car search */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] font-bold">Car Search</h3>
            <Link to="" className="text-[#CCCCCC]">
              Brand New Cars
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Accidented Cars
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Salvage Cars
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Repo Cars
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Clean Cars
            </Link>
          </div>

          {/* About */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] font-bold">About</h3>
            <Link to="" className="text-[#CCCCCC]">
              About Us
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Contact Us
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Blog
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Careers
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Sitemap
            </Link>
          </div>

          {/* support */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] font-bold">Support</h3>
            <Link to="" className="text-[#CCCCCC]">
              Contact Us
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Online Chat
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Whatsapp
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Telegram
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Ticketing
            </Link>
          </div>

          {/* legal */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] font-bold">Legal</h3>
            <Link to="" className="text-[#CCCCCC]">
              Privacy Policy
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Terms Of Service
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Terms Of Use
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Payment
            </Link>
          </div>

          {/* socials */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] font-bold">Socials</h3>
            <Link to="" className="text-[#CCCCCC]">
              Facebook
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Twitter
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              LinnkedIn
            </Link>
            <Link to="" className="text-[#CCCCCC]">
              Instagram
            </Link>
          </div>
        </nav>

        <p className="text-center text-[#CCCCCC] mb-10">
          &copy;2025, All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer
