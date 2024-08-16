import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="bg-white rounded-lg shadow">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="" href="https://flowbite.com/" class="hover:underline">Eat Apple -</Link> All Rights Reserved.
                    </span>
                    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-500 sm:mt-0">
                        <li>
                            <Link to="/" href="#" class="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            <Link to="/products" href="#" class="hover:underline me-4 md:me-6">Products</Link>
                        </li>
                        <li>
                            <Link to="/contact" href="#" class="hover:underline me-4 md:me-6">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>

        </div>
    );
};

export default Footer;