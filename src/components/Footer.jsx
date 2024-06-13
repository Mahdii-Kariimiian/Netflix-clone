import { IoLanguageOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 p-8 border-t-8 border-[#3A3A3A] pt-16">
      <div className="max-w-screen-xl mx-auto">
            <a href="#" className=" text-xl hover:underline">Questions? Contact us.</a>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col space-y-2 mt-6">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Ways to Watch</a>
            <a href="#" className="hover:underline">Corporate Information</a>
            <a href="#" className="hover:underline">Legal Notices</a>
          </div>
          <div className="flex flex-col space-y-2 mt-6">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Only on Netflix</a>
          </div>
          <div className="flex flex-col space-y-2 mt-6">
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Redeem Gift Cards</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Speed Test</a>
            <a href="#" className="hover:underline">Ad Choices</a>
          </div>
          <div className="flex flex-col space-y-2 mt-6">
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Buy Gift Cards</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Legal Guarantee</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-transparent border border-gray-300 text-gray-300 py-2 px-4 rounded flex items-center justify-center">
            <span className="mr-2"><IoLanguageOutline /></span> English
          </button>
        </div>
        <div className="mt-4 text-sm">
          Netflix Italy
        </div>
      </div>
    </footer>
  );
};

export default Footer;

