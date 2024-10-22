import iconCall from "../../assets/images/Vector-call.png"
import iconEmail from "../../assets/images/Vector-email.png"

const Contact = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-[100px] md:my-10">
            <div className="p-2 rounded-md border border-gray-300 m-2">
                <div className="flex items-center gap-x-2 my-4">
                    <div className="bg-[#DB4444] p-2 rounded-full">
                        <img src={iconCall} alt="" />
                    </div>
                    <h5>Call To Us</h5>
                </div>
                <p className="text-gray-500">We are available 24/7, 7 days a week.</p>
                <p className="text-gray-500">Phone: +8801611112222</p>
                <div className="border border-gray-300 my-3"></div>
                <div className="flex items-center gap-x-2 my-4">
                    <div className="bg-[#DB4444] p-2 rounded-full">
                        <img src={iconEmail} alt="" />
                    </div>
                    <h5>Write To US</h5>
                </div>
                <p className="text-gray-500">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-gray-500">Emails: customer@exclusive.com</p>
                <p className="text-gray-500">Emails: support@exclusive.com</p>
            </div>
            <div className="p-2 rounded-md border border-gray-300 m-2 flex flex-col gap-y-2">
                <div className="grid grid-cols-1 gap-y-2">
                    <input 
                        type="text" 
                        placeholder="Your Name *"
                        className="bg-gray-50 p-1 rounded-sm text-sm"
                    />
                    <input 
                        type="text" 
                        placeholder="Your Email *"
                        className="bg-gray-50 p-1 rounded-sm text-sm"
                    />
                    <input 
                        type="text" 
                        placeholder="Your Phone *"
                        className="bg-gray-50 p-1 rounded-sm text-sm"
                    />
                </div>

                <textarea 
                    placeholder="Your Massage"
                    className="bg-gray-50 p-1 rounded-sm text-sm"
                    rows={5}
                />
                <div className="flex justify-end items-center" >
                    <button className="bg-[#DB4444] rounded-md text-white p-1">
                        Send Massage
                    </button>
                </div>

            </div>
        </div>
    )
};

export default Contact;