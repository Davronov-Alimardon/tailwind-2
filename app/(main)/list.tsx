import { Code, Eye } from "lucide-react";
import Image from "next/image";

export const List = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-12 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-y-[20px]">
          <div className="relative aspect-square">
            <div className="absolute bg-white rounded-full p-3 z-10 top-4 left-4">
              <Image
                src="./sketch.svg"
                height={18}
                width={18}
                alt="Sketch Icon"
              />
            </div>
            <Image
              src="./image.svg"
              alt="Image"
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image src="./user.svg" alt="User" height={20} width={20} />
              <p className="text-xs">
                by <strong>Johanna Doe</strong>
              </p>
            </div>
            <div className="flex items-center gap-x-3 text-xs">
              <div className="flex items-center gap-x-1">
                <Code className="size-4 stroke-[3]" />
                22
              </div>
              <div className="flex items-center gap-x-1">
                <Eye className="size-4 stroke-[3]" />
                16
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <div className="relative aspect-square">
            <div className="absolute bg-white rounded-full p-3 z-10 top-4 left-4">
              <Image
                src="./sketch.svg"
                height={18}
                width={18}
                alt="Sketch Icon"
              />
            </div>
            <Image
              src="/image4.png"
              alt="Image"
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image src="./user.svg" alt="User" height={20} width={20} />
              <p className="text-xs">
                by <strong>Johanna Doe</strong>
              </p>
            </div>
            <div className="flex items-center gap-x-3 text-xs">
              <div className="flex items-center gap-x-1">
                <Code className="size-4 stroke-[3]" />
                22
              </div>
              <div className="flex items-center gap-x-1">
                <Eye className="size-4 stroke-[3]" />
                16
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <div className="relative aspect-square">
            <div className="absolute bg-white rounded-full p-3 z-10 top-4 left-4">
              <Image
                src="./sketch.svg"
                height={18}
                width={18}
                alt="Sketch Icon"
              />
            </div>
            <Image
              src="/image3.png"
              alt="Image"
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <Image src="./user.svg" alt="User" height={20} width={20} />
              <p className="text-xs">
                by <strong>Johanna Doe</strong>
              </p>
            </div>
            <div className="flex items-center gap-x-3 text-xs">
              <div className="flex items-center gap-x-1">
                <Code className="size-4 stroke-[3]" />
                22
              </div>
              <div className="flex items-center gap-x-1">
                <Eye className="size-4 stroke-[3]" />
                16
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
