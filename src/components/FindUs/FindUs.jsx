import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>

      <div className="join flex join-vertical *:w-full ">
        <button className="btn join-item justify-start">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaXTwitter />
          Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
