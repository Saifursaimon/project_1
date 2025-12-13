import Image from "next/image";
import Link from "next/link";

const RecentProjectCard = ({ p }) => {
  return (
    <Link
      href={`/project/${p.id}`}
      className=" rounded-xl overflow-hidden
      bg-[#e0e0e0] hover:shadow-md transition"
    >
      <div className="relative h-[180px] bg-[#b3b3b3] flex items-center justify-center">
        {p.thmbnl ? (
          <Image src={p.thmbnl} alt={p.name} fill className="object-cover" />
        ) : (
          <span className="text-white text-sm">image</span>
        )}
      </div>

      <div className="bg-[#e6e6e6] p-4">
        <p className="font-semibold text-[15px] truncate mb-2">{p.name}</p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-sm text-gray-700">{p.date}</span>

          <span className="bg-[#c4c4c4] px-3 py-1 rounded-md text-sm">
            {p.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecentProjectCard;
