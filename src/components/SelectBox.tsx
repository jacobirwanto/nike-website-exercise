import { IoIosArrowDown } from "react-icons/io";

function SelectBox({ title, options }: { title: string; options: number[] }) {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 p-4 border border-gray-300 appearance-none"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 pr-3 flex-center">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default SelectBox;
