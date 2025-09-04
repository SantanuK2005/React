import React, {useId} from "react";

function Select({
    options, label, className, ...props
}, ref){
    const id = useId();
    return(
        <div className="w-full">
            {label && <label htmlFor={id} className="">{label}</label>}
            <select 
            {...props}
            id={id}
            ref={ref}
            className={``}
            >
                {options?.map((options) => (
                    <option key={options} value={options}>
                        {options}
                    </option>
                ))}  
            </select>
        </div>
    )
}

export default React.forwardRef(Select);