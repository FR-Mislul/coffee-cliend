import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from './AuthProvider';


const AddCoffee = () => {

    const {user} = useContext(AuthContext)

    const handelAddCoffee = e => {
        e.preventDefault();
        console.log(user)
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(newCoffee)

        fetch('https://coffe-store-server-eight-tau.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <form onSubmit={handelAddCoffee}>
                <div className='bg-[#F4F3F0]  w-10/12 m-auto  px-28 py-16'>
                    <h1 className='text-center mb-4 text-3xl font-sans font-bold'> Add New Coffee</h1>
                    <h1 className='text-center mb-6'> It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h1>
                    <div className='flex'>
                        <div className='mx-4 w-1/2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Coffee Name</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Supplier</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='supplier' placeholder="Coffee Supplier" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Category</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='category' placeholder="Coffee Category" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className='mx-4 w-1/2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Chef</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='chef' placeholder="Coffee Chef" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Taste</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='taste' placeholder="Coffee Taste" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Details</span>
                                </label>
                                <label className="input-group input-group-vertical">
                                    <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-control mx-4">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Photo</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className='form-control mx-4 mt-5 bg-[#D2B48C] py-2 rounded-md'>
                        <input className='font-medium' type="submit" value="Add Coffee"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;