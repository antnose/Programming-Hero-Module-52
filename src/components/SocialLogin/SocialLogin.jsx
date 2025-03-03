import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <p className="font-semibold mb-3">Login With</p>
      <div className="*:w-full space-y-2 ">
        <button className="btn">
          <FaGoogle />
          login With Google
        </button>
        <button className="btn">
          <FaGithub />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

// 2.12
