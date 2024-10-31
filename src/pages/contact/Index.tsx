import iconCall from "../../assets/images/Vector-call.png"
import iconEmail from "../../assets/images/Vector-email.png"
import CustomButton from "../../component/CustomButton";
import CustomInput from "../../component/CustomInput";

const Contact = () => {
 
    const onSumbitMessage = (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
        } catch (error) {
            console.log('error', error)
        }
       
    }

    return(
        <form className="flex flex-col  md:flex-row  md:my-10" onSubmit={(event) => onSumbitMessage(event)}>
            <div className="py-6 px-2 rounded-md border border-gray-300 m-2 md:w-[400px] md:py-6">
                <div className="flex items-center gap-x-2 my-2">
                    <div className="bg-[#DB4444]  rounded-full">
                        <img src={iconCall} alt="" />
                    </div>
                    <h5 className="text-gray-500 font-semibold text-md">Call To Us</h5>
                </div>
                <p className="text-gray-500 text-sm">We are available 24/7, 7 days a week.</p>
                <p className="text-gray-500 text-sm">Phone: +8801611112222</p>
                <div className="border border-gray-300 my-6"></div>
                <div className="flex items-center gap-x-2 my-2">
                    <div className="bg-[#DB4444] p-2 rounded-full">
                        <img src={iconEmail} alt="" />
                    </div>
                    <h5 className="text-gray-500 font-semibold text-md">Write To US</h5>
                </div>
                <p className="text-gray-500 text-sm">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-gray-500 text-sm">Emails: customer@exclusive.com</p>
                <p className="text-gray-500 text-sm">Emails: support@exclusive.com</p>
            </div>
            <div className="py-6 px-2 rounded-md border border-gray-300 m-2 flex flex-col gap-y-4 md:flex-1 ">
                <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 gap-x-2">
                    <CustomInput 
                        type="text"
                        labelText="Your Name"
                        name="name"
                        required={true}
                        disable={false}
                    />

                    <CustomInput 
                        type="email"
                        labelText="Your Email"
                        name="email"
                        required={true}
                        disable={false}
                    />

                    <CustomInput 
                        type="text"
                        labelText="Your Phone"
                        name="phone_number"
                        required={true}
                        disable={false}
                    />
                </div>

                <textarea 
                    placeholder="Your Massage"
                    className="p-1 rounded-md text-sm border-b border-b-gray-400"
                    rows={5}
                    required
                />
                <div className="flex justify-end items-center" >
                    <CustomButton 
                        style="bg-[#DB4444] rounded-md text-white px-4 py-2"
                        description="Send Massage"
                    />
                </div>

            </div>
        </form>
    )
};

export default Contact;