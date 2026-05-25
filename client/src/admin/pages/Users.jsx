import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Users = () => {

  const [users, setUsers] =
    useState([]);

  const fetchUsers = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const { data } =
        await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      setUsers(data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchUsers();

  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Users
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Admin
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user._id}
                className="border-b"
              >

                <td className="p-4">
                  {user.name}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">

                  {user.isAdmin
                    ? "Yes"
                    : "No"}

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Users;