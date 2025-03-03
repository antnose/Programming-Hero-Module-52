import FindUs from "../FindUs/FindUs";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <FindUs />
    </div>
  );
};

export default RightNavbar;
