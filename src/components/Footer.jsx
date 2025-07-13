const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2c7ce6] text-white py-6">
      <div className="text-center text-lg">
        &copy; {year} Sunil Neupane. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
