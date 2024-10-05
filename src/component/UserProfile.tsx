import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Search from './Search';

const UserProfile = () => {
    let isLogin = false;
    
    return (
        <div className='flex items-center gap-x-2 text-sm'>
            <Search />
            
            {isLogin && <FavoriteBorderIcon />}
            {isLogin && <AddShoppingCartIcon />}
            {isLogin && <div className='bg-[#DB4444] rounded-xl'>
                <PersonOutlineIcon  className='text-white' />
            </div>
            }
        </div>
    )
}

export default UserProfile