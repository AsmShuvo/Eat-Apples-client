import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxios from "../../hooks/useAxios";

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);
    const [passData, setPassData] = useState("");
    const [showPass, setShowPass] = useState("");
    const navigate = useNavigate();
    const axios = useAxios();

    const handleInput = (e) => {
        setPassData(e.target.value);
    };

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const name = form.name.value;

        if (password !== confirm) {
            Swal.fire({
                icon: "error",
                text: "Passwords Don't Match",
            });
            return;
        }

        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            Swal.fire({
                icon: "error",
                text: "Password should have at least an uppercase, a lowercase letter, and 6 characters",
            });
            return;
        }

        createUser(email, password)
            .then((res) => {
                const userCredential = res.user;
                updateProfile(userCredential, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        Swal.fire("Registration Successful. Please Login to continue");
                        logOut();
                        form.reset();
                        navigate("/login");
                    })
                    .catch((err) => {
                        Swal.fire("Profile is not updated");
                        return;
                    });

                form.reset();
            })
            .catch((err) => {
                Swal.fire("Registration Failed! Your email is already in use");
                return;
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 barlow">REGISTER TO eatapple.com</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="form-control">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="input w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="input w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>
                    {/* Password fields */}
                    <div className="form-control relative">
                        <input
                            name="password"
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            className="input w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            onChange={handleInput}
                            required
                        />
                        <span className="absolute right-4 bottom-4 text-xl text-gray-500 cursor-pointer">
                            {showPass ? (
                                <FaRegEyeSlash onClick={handleShowPass} />
                            ) : (
                                <FaRegEye onClick={handleShowPass} />
                            )}
                        </span>
                    </div>
                    <div className="form-control">
                        <input
                            name="confirm"
                            type={showPass ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="input w-full p-3 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Register"
                            className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <p className="text-gray-600 text-center">
                        Already have an account? <Link to="/login" className="font-semibold text-blue-600 hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
