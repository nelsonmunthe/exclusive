import { CustomButtonProps } from "../interfaces/common"

const CustomButton = (button: CustomButtonProps) => {
    return <button
        className={`py-1 px-2 rounded-md ${button.style}`}
        type={button.type}
        onClick={button.onHandleClick}
    >
        {button.description}
    </button>
}

export default CustomButton