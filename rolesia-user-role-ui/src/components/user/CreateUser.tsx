import Link from "next/link";

export default function CreateUser () {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-gray-200 text-gray-700 p-4 flex justify-between items-center">
                <div className="text-lg font-bold">User</div>
                <nav className="flex space-x-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <span>&gt;</span>
                    <span>User Creation</span>
                </nav>
            </header>
            <main className="p-4">
                <div className="bg-white p-6 rounded shadow">
                    
                    <form >
                        <section>
                            <h2 className="text-xl font-bold mb-4">User Information</h2>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-gray-700">Customer Name*</label>
                                    <input
                                        type="text"
                                        className={`border border-gray-300 rounded p-2 w-full`}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Customer Name*</label>
                                    <input
                                        type="text"
                                        className={`border border-gray-300 rounded p-2 w-full`}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <label className="block text-gray-700">Category</label>
                                    <select className="w-full mt-1 p-2 border rounded">
                                        <option>-Select-</option>
                                        <option>-X-</option>
                                        <option>-Y-</option>
                                        <option>-z-</option>
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