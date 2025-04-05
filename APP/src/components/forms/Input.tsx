export const Input = ({
  className,
  ...props
}: React.HTMLProps<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`border rounded-lg p-2 w-full mt-2 border-gray-300 text-sm ${className}`}
    />
  );
};
