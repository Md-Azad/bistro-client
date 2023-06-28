import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = user=>{

  }

  return (
    <div>
      <Helmet>
        <title>bistro boss || all users</title>
      </Helmet>
      <h1 className="font-semibold text-3xl">total users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index +1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {
                        user.role === 'admin'? 'admin': <button
                        
                        className="btn btn-ghost  bg-orange-600 text-white"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    }
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost  bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
