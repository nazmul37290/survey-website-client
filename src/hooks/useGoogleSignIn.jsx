import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useGoogleSignIn = () => {
  const { signInWithGoogle, loginWithEmailandPassword } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const googleLogin = (navigateTo = "/") => {
    signInWithGoogle()
      .then((result) => {
        const user = {
          name: result.user.displayName,
          email: result.user.email,
        };
        axiosPublic.put("/users", user).then((res) => {
          console.log(res);
        });
        console.log(result);
        navigate(navigateTo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return googleLogin;
};

export default useGoogleSignIn;
