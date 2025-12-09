import { categories } from "@/data/categories";

const Sidebar = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className=" w-[262px] bg-[#f8f8f8] pt-[34px] ">
      <div className="flex flex-col gap-5">
        {categories.map((c) => {
          return (
            <div
              key={c.id}
              onClick={() => onSelectCategory(c.id)}
              className={`
                w-full flex items-center gap-5 px-3 py-2 transition cursor-pointer
                ${
                  selectedCategory === c.id
                    ? "bg-[#ebebeb]"
                    : "hover:bg-[#ebebeb]"
                }
              `}
            >
              <div className="h-8 w-8 bg-[#bfbfbf]" />
              <p className="text-xl">{c.name_zh}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
