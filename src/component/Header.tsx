import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';

const Header = () => {
    return (
        <div className="bg-[#363738] py-1 px-[100px] flex justify-between text-sm">
            <div className="flex items-center justify-center text-[#FAFAFA] flex-1 gap-x-2">
                <Typography fontSize={12}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
                <Typography fontSize={14}>ShopNow</Typography>
            </div>
            <div className="flex items-center justify-center text-[#FAFAFA]">
                <Typography fontSize={12}>English</Typography>
                <KeyboardArrowDownIcon />
            </div>

        </div>
    )
};

export default Header