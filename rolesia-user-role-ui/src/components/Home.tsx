"use client";

import Link from 'next/link';
import React from 'react';
import { useAuthToken } from "@/utils/userAuthToken";

const Header = () => {
    const { isAuthnicate, removeToken } = useAuthToken();
    const isAuth = isAuthnicate();
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">Rolesia</div>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="hover:underline">Home</Link></li>
                    {isAuth && <li>
                        <Link href="/admin/role">Custom Roles Creation</Link>
                    </li>}
                    {isAuth && <li>
                        <Link href="/admin/user">User Creation</Link>
                    </li>}
                    {isAuth && <li>
                        <Link href="/admin/role">Custom Roles Creation</Link>
                    </li>}
                    {isAuth && <li>
                        <Link href="/admin/roleassignment">Role Assignment</Link>
                    </li>}
                    {isAuth && <li>
                        <Link href="/admin/userlist">User List</Link>
                    </li>}
                </ul>
            </nav>
            <div className="flex justify-between space-x-1">
                {!isAuth &&
                    <Link
                        href="/login"
                        className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
                    >
                        Login
                    </Link>}
                {isAuth && <button
                    onClick={() => removeToken()}
                    className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
                >
                    Logout
                </button>}

            </div>
        </header >
    );
};

export default Header;
