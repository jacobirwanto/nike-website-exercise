import Nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "./Constant";
import SelectBox from "./SelectBox";

function ShoeDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={Nike1} alt="nikeshoes1" />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Airmax 270</div>
        <div className="font-medium md:text-xl">Lorem ipsum dolor sit amet</div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">100$</div>
          <SelectBox title={"QTY"} options={QTY} />
          <SelectBox title={"SIZES"} options={SIZES} />
        </div>

        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetail;
