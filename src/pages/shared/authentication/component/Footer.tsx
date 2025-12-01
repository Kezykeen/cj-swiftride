const Footer = () => {
  return (
    <div className=" w-full px-10 py-[29px] bg-white">
      <div className="flex justify-between w-full max-w-[1440px] mx-auto">
        <p>&copy; 0225 CJ SwiftRide Import</p>
        <div className="flex justify-end gap-5 w-1/2">
          <div className="flex items-center gap-1">
            <img
              src="/images/auth/lock.webp"
              alt="a lock policy icon"
              className="w-4"
            />
            <p>Privacy Policy</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="/images/auth/terms.webp"
              alt="a terms icon"
              className="w-4"
            />
            <p>Terms and Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
