import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="h-[120px] border-b border-indigo-50">
      <div className="max-w-screen-2xl mx-auto h-full flex justify-between items-center px-12">
        <Image width={140} height={40} src="./logo.svg" alt="Logo" />
        <div className="flex items-center gap-x-2">
          <button className="bg-indigo-50 px-[15px] py-[10px] rounded-[32px]">
            Free Designs
          </button>
          <button className="bg-transparent px-[15px] py-[10px] rounded-[32px] text-slate-600">
            Licence
          </button>
          <button className="bg-transparent px-[15px] py-[10px] rounded-[32px] text-slate-600">
            Articles
          </button>
          <button className="bg-transparent px-[15px] py-[10px] rounded-[32px] text-slate-600">
            Contributors
          </button>
          <button className="bg-transparent px-[15px] py-[10px] rounded-[32px] text-slate-600">
            About
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <button className="bg-transparent rounded-[10px] px-[30px] py-[15px]">
            Login
          </button>
          <button className="bg-slate-800 rounded-[10px] px-[30px] py-[15px] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
