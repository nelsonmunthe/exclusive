import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Search from './Search';

const UserProfile = () => {
    const accessToken = localStorage.getItem('accessToken')
    
    return (
        <div className='flex items-center gap-x-2 text-sm'>
            <Search />
            
            {accessToken && <FavoriteBorderIcon />}
            {accessToken && <AddShoppingCartIcon />}
            {accessToken && (
                <div className='bg-[#DB4444] rounded-xl'>
                    <PersonOutlineIcon  className='text-white' />
                </div>
            )
            }
        </div>
    )
}

export default UserProfile