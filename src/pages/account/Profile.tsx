const Profile = () => {
    return(
        <div className="flex flex-col border border-gray-300 p-4 rounded-md drop-shadow-md gap-2 gap-y-1 lg:p-10">
            <h5 className="text-red-500 text-lg">Edit Your Profile</h5>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <div className="flex flex-col w-full">
                    <label htmlFor="First Name" className="text-gray-950">First Name</label>
                    <input 
                        className="text-sm bg-gray-50 border border-gray-300 p-1 rounded-sm"
                    />
                </div >
                <div className="flex flex-col w-full">
                    <label htmlFor="Last Name" className="text-gray-950">Last Name</label>
                    <input 
                        className="text-sm bg-gray-50 border border-gray-300 p-1 rounded-sm"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <div className="flex flex-col w-full">
                    <label htmlFor="Email" className="text-gray-950">Email</label>
                    <input 
                        className="text-sm bg-gray-50 border border-gray-300 p-1 rounded-sm"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="Address" className="text-gray-950">Address</label>
                    <input 
                        className="text-sm bg-gray-50 border border-gray-300 p-1 rounded-sm"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1 my-4 gap-y-2">
                <label htmlFor="Password Changes" className="text-gray-950">Password Changes</label>
                <input 
                    className="text-sm bg-gray-50 border border-gray-300 p-1 rounded-sm"
                    placeholder="Current Password"
                    type="password"
                    required
                />
                 <input 
                    className="text-sm bg-gray-50 border border-gray-300 p-1 rounded-sm"
                    placeholder="New Password"
                    type="password"
                    required
                />
                 <input 
                    className="text-sm bg-gray-50 border border-gray-300 p-1 rounded-sm"
                    placeholder="Confirm Password"
                    type="password"
                    required
                />
            </div>
            <div className="flex justify-between md:justify-end gap-x-2">
                <button>
                    Cancel
                </button>
                <button
                    className="bg-[#DB4444] py-1 px-3 rounded-md text-white"
                >
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default Profile