"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryNav() {
  const pathname = usePathname();

  const categories = [
    { name: "Home", path: "/" },
    { name: "Children", path: "/children" },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Shoes", path: "/shoes" },
  ];

  return (
    <nav className="border-b border-gray-200 py-3 bg-white">
      <div className="flex justify-center gap-8 md:gap-12">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.path}
            className={`text-sm md:text-base font-bold transition-all duration-150 underline-offset-4
              ${pathname === cat.path
                ? 'text-yellow-500 underline'
                : 'text-gray-700 hover:text-yellow-500 hover:underline'
              }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
