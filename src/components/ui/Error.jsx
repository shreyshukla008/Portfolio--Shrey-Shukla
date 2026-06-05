const Error = ({ message = "Error in loading resources..." }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <img src="/assets/rb_55450.png" alt="" />
      <p className="text-[#4e45d5]">{message}</p>
    </div>
  );
};

export default Error;
