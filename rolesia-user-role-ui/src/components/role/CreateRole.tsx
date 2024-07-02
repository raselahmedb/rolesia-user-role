import Link from "next/link";

export default function CreateRole() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-gray-200 text-gray-700 p-4 flex justify-between items-center">
                <div className="text-lg font-bold">Role</div>
                <nav className="flex space-x-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>&gt;</span>
                    <span>Custom Roles Creation</span>
                </nav>
            </header>
            <main className="p-4">
                <div className="bg-white p-6 rounded shadow">

                    <form >
                        <section>
                            <h2 className="text-xl font-bold mb-4">Role Information</h2>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-gray-700">Role Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className={`border border-gray-300 rounded p-2 w-full`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Role Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className={`border border-gray-300 rounded p-2 w-full`}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-gray-700">Hierarchy</label>
                                    <select className="w-full mt-1 p-2 border rounded">
                                        <option value=""> -- </option>
                                        <option value="ADMIN">Admin</option>
                                        <option value="USER">User</option>
                                    </select>
                                </div>
                            </div>
                        </section>
                        <div className="flex justify-center space-x-4 mb-6">
                            <button
                                className="bg-green-500 text-white px-6 py-2 rounded"
                                type="submit"
                            >
                                Save
                            </button>
                            <button className="bg-yellow-500 text-white px-6 py-2 rounded">
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}