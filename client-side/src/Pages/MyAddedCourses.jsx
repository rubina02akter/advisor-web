import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function MyAddedCourses() {
  const { user, emails, setEmails } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.email) {
      const data = async () => {
        const url = `http://localhost:4000/my-course?email=${user.email}`;
        const res = await fetch(url);
        const value = await res.json();
        setEmails(value);
      };
      data();
    }
  }, [user]);

  //appply delete method

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/my-course/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // update the loaded card state
              const remainingCards = emails.filter((card) => card._id !== id);
              setEmails(remainingCards);
            }
          });
      }
    });
  };

  console.log(emails);

  return (
    <div>
      <div className="text-center my-3 font-extrabold text-2xl underline">
        <h2>My added course</h2>
      </div>

      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {emails && emails.length > 0 ? (
          <div>
            {/* Table for Large Devices */}
            <div className="hidden lg:block">
              <table className="min-w-full table-auto bg-white border-collapse shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-[#DEE5D9] text-black">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">No</th>
                    <th className="py-3 px-4 text-left font-semibold">Title</th>
                    <th className="py-3 px-4 text-left font-semibold">
                      Category
                    </th>
                    <th className="py-3 px-4 text-left font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((card, index) => {
                    const { _id, title, category } = card;
                    return (
                      <tr key={_id} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-gray-800">
                          {index + 1}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-800">
                          {title}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-800">
                          {category}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-800">
                          <div className="flex gap-2">
                            <Link
                              to={`/update-post/${_id}`}
                              className="btn bg-gradient-to-r from-[#228d79] to-[#148161] text-white btn-sm"
                            >
                              Update
                            </Link>
                            <button
                              onClick={() => handleDelete(_id)}
                              className="btn bg-gradient-to-r from-red-600 to-red-800 text-white btn-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Cards for Small Devices */}
            <div className="grid gap-4 lg:hidden">
              {emails.map((card, index) => {
                const { _id, title, category } = card;
                return (
                  <div
                    key={_id}
                    className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                  >
                    <p className="text-sm text-gray-500">
                      <span className="font-bold">No:</span> {index + 1}
                    </p>
                    <p className="text-sm text-gray-800">
                      <span className="font-bold">Title:</span> {title}
                    </p>
                    <p className="text-sm text-gray-800">
                      <span className="font-bold">Category:</span> {category}
                    </p>
                    <div className="mt-4">
                      <Link
                        to={`/update-course/${_id}`}
                        className="btn bg-gradient-to-r from-green-600 to-green-800 text-white btn-sm w-full"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn bg-gradient-to-r from-red-600 to-red-800 text-white btn-sm w-full"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600 text-lg">
              No posts found. Please add a course through the “Add course ” page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
