import { CustomInputProps } from "../interfaces/common"

const CustomInput = (input: CustomInputProps ) => {
    return <div className="flex flex-col w-full gap-0">
        <div className="flex mx-1 items-center">
            <label htmlFor={input.name} className="text-[12px] text-sm text-gray-600">{input.labelText}</label>
            {input.required && <label htmlFor={input.name} className="text-red-600">*</label>}
        </div>
        <input 
            type={input.type}
            required={input.required}
            max={input.max}
            min={input.min}
            disabled={input.disable}
            className="p-1 border-b border-b-gray-400 text-sm"
            name={input.name}
        />
    </div>
}

export default CustomInput