import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


const SocialLogIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="flex">
      <div>__________</div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn bg-white">
       Sign in with <FcGoogle />
        
        </button>
      </div>
      <div>_________</div>
      
    </div>
  );
};

export default SocialLogIn;
