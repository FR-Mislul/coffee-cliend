import { FaPen, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const CoffeeCard = ({ coffees, setCoffees, coffee }) => {

    const { _id, name, chef, details, photo } = coffee;

    const handelDeleteCoffee = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffe-store-server-eight-tau.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl px-8 py-7 m-5 space-x-4 bg-[#F5F4F1]">
            <figure>
                <img className="w-48 h-60"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-center items-center">
                <div className="space-y-4">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Details: {details}</p>
                </div>
                <div className="card-actions">
                    <div className="join join-vertical space-y-2">
                        <button className="btn bg-yellow-200 rounded-lg"><FaRegEye className="text-xl "></FaRegEye></button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn bg-black text-white rounded-lg"><FaPen className="text-xl "></FaPen></button>
                        </Link>
                        <button onClick={() => handelDeleteCoffee(_id)} className="btn bg-rose-600 text-white rounded-lg"><MdDelete className="text-xl "></MdDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;