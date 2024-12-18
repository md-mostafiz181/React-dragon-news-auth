import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RightSideNav = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Login With</h1>
      <button className="btn w-full">
        <FcGoogle />
        Login With Google
      </button>
      <button className="btn w-full mt-1">
        <FaGithub />
        Login With Github
      </button>
    </div>
  );
};

export default RightSideNav;
