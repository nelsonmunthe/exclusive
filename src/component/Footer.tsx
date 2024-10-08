import { Input, Typography } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import barcode from  "../assets/images/Qr_Code.png"
import AppStore from  "../assets/images/AppStore.png"
import GooglePlay from  "../assets/images/GooglePlay.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return(
        <div className="bg-[#363738] flex flex-col  px-[100px]" >
            <div className="flex flex-1 gap-x-2  py-10 justify-between">
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Exclusive</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>Subscribe</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                    <div className="border border-white rounded-sm">
                        <Input placeholder="Enter your email" className="text-sm px-1"/>
                        <PlayArrowIcon sx={{color: "white"}}/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Support</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>exclusive@gmail.com</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>+88015-88888-9999</Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Account</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>My Account</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Login / Register</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Cart</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Wishlist</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Shop</Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Quick Link</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>Privacy Policy</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Terms Of User</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>FAQ</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Contact</Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Download App</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Save $3 with App New User Only</Typography>
                    <div className="flex justify-between">
                        <div className="w-full">
                            <img src={barcode} alt="Italian Trulli" />
                        </div>
                        <div className="flex flex-col w-full gap-y-2">
                            <div className="w-full">
                                <img src={AppStore} alt="Italian Trulli" />
                            </div>
                            <div className="w-full">
                                <img src={GooglePlay} alt="Italian Trulli" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-1 justify-between">
                        <FacebookIcon sx={{color: 'white'}}/>
                        <TwitterIcon sx={{color: 'white'}} />
                        <InstagramIcon sx={{color: 'white'}} />
                        <LinkedInIcon sx={{color: 'white'}} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <Typography fontSize={12} sx={{color: '#FAFAFA'}}>&copy; Copyright Rimel 2022. All right reserved</Typography>
            </div>
        </div>
       
    )
}

export default Footer