import { Typography } from "@mui/material";

type BarSignProps = {
    description : string
}

const BarSign: React.FC<BarSignProps> = ({description}) => {
    return(
        <div className="flex items-center gap-x-1">
             <div className="w-[10px] h-[20px] bg-[#DB4444]"></div>
             <Typography fontSize={12} style={{color: "#DB4444"}}>{description}</Typography>
        </div>
    )
}

export default BarSign;