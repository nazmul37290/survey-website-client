import { Link } from "react-router-dom";
import crown from "../../assets/Images/crown.jpg";

const ProUser = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img src={crown} className="w-full h-full" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Be a Pro User</h2>
          <p>You can access more features using Pro mode</p>
          <p className="text-3xl font-bold">20$/month</p>
          <div className="card-actions justify-end">
            <Link to="/payment">
              <button className="btn bg-main text-white">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProUser;
