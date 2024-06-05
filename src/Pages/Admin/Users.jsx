import React, { useRef } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/shared/SectionTitle";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);

  const handleRoleChange = async (user) => {
    const newRole = document.getElementById("role").value;
    const data = { email: user.email, newRole };

    console.log(user);
    const res = await axiosSecure.patch("/users", data);
    if (res.data.modifiedCount) {
      refetch();
      console.log(document.getElementById("close"));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is now ${newRole}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="mt-0">
      <SectionTitle title={"Our Users"} subtitle={"users"}></SectionTitle>
      <div>
        <div className="overflow-x-auto max-w-screen-xl mx-auto">
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <table className="table">
            {/* head */}
            <thead className="bg-main text-second">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => {
                return (
                  <>
                    <dialog key={i} id={user._id} className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Change role for {user.name}
                        </h3>

                        <select
                          id="role"
                          className="w-full p-2 border border-main mt-2"
                        >
                          <option value="admin">Admin</option>
                          <option value="pro-user">Pro User</option>
                          <option value="surveyor">Surveyor</option>
                          <option value="user">user</option>
                        </select>

                        <div className="modal-action">
                          <button
                            onClick={() => handleRoleChange(user)}
                            className="btn bg-main"
                          >
                            Change
                          </button>
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button id="close" className="btn">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>

                    <tr key={user?._id} className="hover">
                      <th>{i + 1}</th>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.role}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() =>
                            document.getElementById(user._id).showModal()
                          }
                        >
                          Change role
                        </button>
                      </td>
                      <td>
                        <button className="">
                          <FaTrash className="text-red-600 text-xl"></FaTrash>
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
