import { Typography } from "@mui/material"

const Footer = () => {
    return(
        <div className="bg-[#363738] flex flex-col  px-[100px]" >
            <div className="flex flex-1 gap-x-4  py-10 justify-between">
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Exclusive</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>Subscribe</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Exclusive</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>Subscribe</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Exclusive</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>Subscribe</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Exclusive</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>Subscribe</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                </div>
                <div className="flex flex-col gap-y-2">
                    <Typography fontSize={14} sx={{color: '#FAFAFA'}}>Exclusive</Typography>
                    <Typography fontSize={12} sx={{color: '#FAFAFA'}}>Subscribe</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                    <Typography fontSize={10} sx={{color: '#FAFAFA'}}>Get 10% off your first order</Typography>
                </div>
            </div>
            <div className="flex justify-center items-center mb-4">
                <Typography fontSize={12} sx={{color: '#FAFAFA'}}>&copy; Copyright Rimel 2022. All right reserved</Typography>
            </div>
        </div>
       
    )
}

export default Footer