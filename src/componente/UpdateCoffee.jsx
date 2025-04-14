import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handelUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(updatedCoffee)

        fetch(`https://coffe-store-server-eight-tau.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.matchedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <form onSubmit={handelUpdateCoffee}>
                <div className='bg-[#F4F3F0]  w-10/12 m-auto  px-28 py-16'>
                    <h1 className='text-center mb-4 text-3xl font-sans font-bold'> Update Coffee on: {name}</h1>
                    <h1 className='text-center mb-6'> It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h1>
                    <div className='flex'>
                        <div className='mx-4 w-1/2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Coffee Name</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Supplier</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='supplier' defaultValue={supplier} placeholder="Coffee Supplier" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Category</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='category' defaultValue={category} placeholder="Coffee Category" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='mx-4 w-1/2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Chef</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='chef' defaultValue={chef} placeholder="Coffee Chef" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Taste</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='taste' defaultValue={taste} placeholder="Coffee Taste" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Details</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='details' defaultValue={details} placeholder="Coffee Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-control mx-4">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Photo</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className='form-control mx-4 mt-5 bg-[#D2B48C] py-2 rounded-md'>
                        <input className='font-medium' type="submit" value="Update Coffee"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;