type ButtonFilterProps = {
  text: string;
  link: string;
};

const ButtonFilter = ({ text, link }: ButtonFilterProps) => {
  return (
    <button className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center">
      <span>{text}</span>
      <span className="mt-1 transition-transform transform group-hover:translate-y-0">
        <div
          dangerouslySetInnerHTML={{
            __html: `<lord-icon src="${link}" trigger="hover" style="width:70px;height:20px"></lord-icon>`,
          }}
        ></div>
      </span>
    </button>
  );
};

export default ButtonFilter;
