type ButtonFilterProps = {
  text: string;
  link: string;
};

const ButtonFilter = ({ text, link }: ButtonFilterProps) => {
  return (
    <button className="group text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center w-[100px]">
      <span>{text}</span>
      <span className="mt-1 transition-transform transform group-hover:translate-y-0">
        <div
          dangerouslySetInnerHTML={{
            __html: `<lord-icon src="${link}" trigger="hover" ></lord-icon>`,
          }}
        ></div>
      </span>
    </button>
  );
};

export default ButtonFilter;
