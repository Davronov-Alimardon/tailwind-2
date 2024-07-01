import { ChevronDown, Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-[#fcfcff] h-[427px] flex items-center justify-center">
      <div className="max-w-[652px] w-full flex flex-col items-center justify-center gap-y-10">
        <div className="text-center space-y-4 max-w-[580px]">
          <h1 className="font-bold text-[22px]">
            Free UI resources for everyone
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod magni
            cum quasi, quia dolorem tempore alias fuga officia? Iste, nam.
          </p>
        </div>
        <div className="flex w-full bg-white rounded-[10px] border drop-shadow-md border-indigo-50 p-2">
          <button className="flex items-center gap-x-2 px-[15px] py-[11px] border-r flex-shrink-0">
            Free Designs
            <ChevronDown className="size-6" />
          </button>
          <div className="relative w-full">
            <Search className="absolute top-3 text-muted-foreground size-5 left-[15px]" />
            <input
              className="h-full w-full pl-[45px] outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
