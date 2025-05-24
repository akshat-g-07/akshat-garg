import { cn } from "@/lib/utils";

export default function InputField({
  id,
  type,
  label,
  error,
  required = false,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
  ...props
}) {
  return (
    <div
      className={cn(
        "w-full font-[Tajawal,sans-serif] h-fit max-w-[250px] font-semibold space-y-2 flex flex-col items-center-safe md:items-start",
        className
      )}
    >
      <label htmlFor={id} className={cn("text-xl", labelClassName)}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className={cn("relative mt-2 w-full", inputClassName)}>
        <input
          id={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className="peer text-lg bg-transparent outline-none border-none h-9 px-2 w-full"
          {...props}
        />
        <div className="w-full h-0 border-b-2 border-black absolute bottom-0 -z-10 origin-bottom transition-all duration-300 ease-in-out rounded-t-xl peer-focus:h-10 bg-[#b9b9b9bf]" />
      </div>
      {error && (
        <p className={cn("text-red-500 whitespace-pre-wrap", errorClassName)}>
          {error}
        </p>
      )}
    </div>
  );
}
