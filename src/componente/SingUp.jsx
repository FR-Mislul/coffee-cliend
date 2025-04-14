import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const SingUp = () => {

    const { createUser } = useContext(AuthContext);

    const handelSingUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result)
                const createdAt = result.user?.metadata?.creationTime;
                const newUser = { email, password, creationTime: createdAt };

                fetch('https://coffe-store-server-eight-tau.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success',
                                text: 'User added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 w-screen m-auto">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                <p className="text-sm dark:text-gray-600">Sign Up to access your account</p>
            </div>
            <form onSubmit={handelSingUp} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <input type="submit" value='Sing Up' className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" />
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">You have already account yet?
                        <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign In</a>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SingUp;