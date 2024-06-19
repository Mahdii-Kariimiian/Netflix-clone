import { forwardRef } from "react";

const InputWithoutButton = forwardRef((props, ref) => {
    const { form, name, register, errors, isState, setIsState, children , labelText} =
        props;
    return (
        <div >
            <div
                ref={ref}
                className={`relative p-2 flex-1 border rounded-md bg-black opacity-50 min-w-[235px] cursor-text ${
                    errors[name] ? "border-red-700" : "border-white"
                }`}
                onClick={() => setIsState(true)}
            >
                <label
                    className={`${
                        isState || form.watch(name)
                            ? "cursor-text transition-all absolute text-sm top-2 left-5"
                            : "cursor-text transition-all text-lg absolute top-[17px] md:top-[13px] left-5"
                    }`}
                >
                    {labelText}
                </label>
                <input
                    className={`w-full mt-2 p-2 pb-0  rounded bg-transparent focus:outline-none`}
                    type={name}
                    id={name}
                    {...register(name, children)}
                />
            </div>

            <p className="text-red-500 text-sm text-start">
                {errors[name]?.message}
            </p>
        </div>
    );
});

export default InputWithoutButton;
