import about from "../../assets/images/about.png"
import IconShopping  from "../../assets/images/Icon-Shopping bag.png"
import IconMoneybag  from "../../assets/images/Icon-Moneybag.png"
import IconSale  from "../../assets/images/Icon-Sale.png"
import iconSHop  from "../../assets/images/icon_shop.png"
import tomCruise from "../../assets/images/tom-cruise.png"
import emmaWatson from "../../assets/images/emma_watso.png"
import willSmith from "../../assets/images/will_smith.png"
import iconTwitter from "../../assets/images/Icon-Twitter.png"
import iconInstagram from "../../assets/images/icon-instagram.png"
import iconLinkedin from "../../assets/images/Icon-Linkedin.png"
import iconDelivery from "../../assets/images/icon-delivery.png"
import iconSecure from "../../assets/images/Icon-secure.png"
import iconCustomerServices from "../../assets/images/Icon-Customer service.png"

const About = () => {
    return(
        <div className="flex flex-col m-2 p-2  gap-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <div className="flex flex-col gap-y-4 justify-center">
                    <h1 className="text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Our Story</h1>
                    <p className="text-md text-gray-500" >Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p className="text-md text-gray-500" >Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={about} alt="about-image" className="rounded-md object-contain md:h-[400px]"/>
                </div>
               
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-20">
                <div className="flex flex-col justify-center items-center p-2 border border-gray-300 rounded-md gap-y-2 bg-white">
                    <div className="bg-gray-300 p-2 rounded-full w-fit">
                        <div className="flex  justify-center items-center flex-col p-2 border border-gray-200  bg-black rounded-full">
                            <img src={iconSHop} alt="about-service" className="object-cover " />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">10.5k </h4>
                    <p className="text-sm text-gray-400">Sallers active our site</p>
                </div>

                <div className="flex flex-col justify-center items-center p-2 border border-gray-300 rounded-md gap-y-2 bg-[#DB4444]">
                    <div className="bg-gray-300 p-2 rounded-full w-fit">
                        <div className="flex  justify-center items-center flex-col p-2 border border-gray-200  bg-black rounded-full">
                            <img src={iconSHop} alt="about-service" className="object-cover " />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-white md:text-3xl dark:text-white">33k </h4>
                    <p className="text-sm text-white">Monthly Produduct Sale</p>
                </div>

                <div className="flex flex-col justify-center items-center p-2 border border-gray-300 rounded-md gap-y-2">
                    <div className="bg-gray-300 p-2 rounded-full w-fit">
                        <div className="flex  justify-center items-center flex-col p-2 border border-gray-200  bg-black rounded-full">
                            <img src={IconShopping} alt="about-service" className="object-cover " />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">10.5k </h4>
                    <p className="text-sm text-gray-400">Sallers active our site</p>
                </div>

                <div className="flex flex-col justify-center items-center p-2 border border-gray-300 rounded-md gap-y-2">
                    <div className="bg-gray-300 p-2 rounded-full w-fit">
                        <div className="flex  justify-center items-center flex-col p-2 border border-gray-200  bg-black rounded-full">
                            <img src={IconMoneybag} alt="about-service" className="object-cover " />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">10.5k </h4>
                    <p className="text-sm text-gray-400">Sallers active our site</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3">
                <div className="flex flex-col gap-y-1 ">
                    <div className="bg-gray-200 flex justify-center items-center rounded-md p-2 mb-2">
                        <img src={tomCruise} alt="tom crouse" className="object-fill h-[390px]"/>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Tom Cruise </h4>
                    <p className="text-sm text-gray-400 font-semibold">Founder & Chairman</p>
                    <div className="flex gap-x-3">
                        <img src={iconTwitter} alt=""  className="hover:cursor-pointer" />
                        <img src={iconInstagram} alt=""  className="hover:cursor-pointer" />
                        <img src={iconLinkedin} alt=""  className="hover:cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 ">
                    <div className="bg-gray-200 flex justify-center items-center rounded-md p-2 mb-2">
                        <img src={emmaWatson} alt="tom crouse" className="object-fill h-[390px]"/>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Tom Cruise </h4>
                    <p className="text-sm text-gray-400 font-semibold">Founder & Chairman</p>
                    <div className="flex gap-x-3">
                        <img src={iconTwitter} alt=""  className="hover:cursor-pointer" />
                        <img src={iconInstagram} alt=""  className="hover:cursor-pointer" />
                        <img src={iconLinkedin} alt=""  className="hover:cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="bg-gray-200 flex justify-center items-center rounded-md p-2 mb-2">
                        <img src={willSmith} alt="tom crouse" className="object-fill h-[390px]"/>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Tom Cruise </h4>
                    <p className="text-sm text-gray-400 font-semibold">Founder & Chairman</p>
                    <div className="flex gap-x-3">
                        <img src={iconTwitter} alt=""  className="hover:cursor-pointer" />
                        <img src={iconInstagram} alt=""  className="hover:cursor-pointer" />
                        <img src={iconLinkedin} alt=""  className="hover:cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 mx-4 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mx-[50px] lg:my-8">
                <div className="flex flex-col justify-center items-center gap-y-2"> 
                    <div className="bg-gray-300 p-2 rounded-full w-fit my-2">
                        <div className="flex  justify-center items-center flex-col p-2 border border-gray-200  bg-black rounded-full">
                            <img src={iconDelivery} alt="about-service" className="object-cover " />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl dark:text-white">FREE AND FAST DELIVERY </h4>
                    <p className="text-sm text-gray-400">Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2"> 
                    <div className="bg-gray-300 p-2 rounded-full w-fit my-2">
                        <div className="flex  justify-center items-center flex-col p-2 border border-gray-200  bg-black rounded-full">
                            <img src={iconCustomerServices} alt="about-service" className="object-cover " />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl dark:text-white">24/7 CUSTOMER SERVICE </h4>
                    <p className="text-sm text-gray-400">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2"> 
                    <div className="bg-gray-300 p-2 rounded-full w-fit my-2">
                        <div className="flex  justify-center items-center flex-col p-2 border border-gray-200  bg-black rounded-full">
                            <img src={iconSecure} alt="about-service" className="object-cover " />
                        </div>
                    </div>
                    <h4 className="text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl dark:text-white">MONEY BACK GUARANTEE </h4>
                    <p className="text-sm text-gray-400">We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default About;