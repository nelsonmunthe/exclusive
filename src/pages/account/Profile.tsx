import CustomButton from "../../component/CustomButton"
import CustomInput from "../../component/CustomInput"

const Profile = () => {
    return(
        <div className="flex flex-col border border-gray-300 p-4 rounded-md  gap-2 gap-y-1 lg:p-10">
            <h5 className="text-red-500 text-lg">Edit Your Profile</h5>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <CustomInput 
                    type="text"
                    required={true}
                    disable={false}
                    labelText="First Name"
                    name="first_name"
                />

                <CustomInput 
                    type="text"
                    required={true}
                    disable={false}
                    labelText="Last Name"
                    name="last_name"
                />

            </div>
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                <CustomInput 
                    type="email"
                    required={true}
                    disable={false}
                    labelText="Email"
                    name="email"
                />

                <CustomInput 
                    type="text"
                    required={true}
                    disable={false}
                    labelText="Address"
                    name="address"
                />
            </div>
            <div className="flex flex-col gap-1 my-4 gap-y-2">
                <label htmlFor="Password Changes" className="text-gray-950">Password Changes</label>
                <input 
                    className="px-1 border-b border-b-gray-400 text-sm p-1"
                    placeholder="Current Password"
                    type="password"
                    required
                />
                 <input 
                    className="px-1 border-b border-b-gray-400 text-sm p-1"
                    placeholder="New Password"
                    type="password"
                    required
                />
                 <input 
                    className="px-1 border-b border-b-gray-400 text-sm p-1"
                    placeholder="Confirm Password"
                    type="password"
                    required
                />
            </div>
            <div className="flex justify-between md:justify-end gap-x-2">
                <CustomButton  
                    style="text-sm"
                    description="Cancel"
                />
                <CustomButton
                    type="submit" 
                    style="bg-[#DB4444] py-1 px-3 rounded-md text-white text-sm"
                    description="Save Changes"
                />
            </div>
        </div>
    )
}

export default Profile