import { Input, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return(
        <div className="bg-[#F5F5F5]  flex justify-end items-center gap-x-2 rounded-sm px-1">
            <Input placeholder="What are you looking for?" disableUnderline/>
            <SearchIcon />
        </div>
    )
}

export default Search