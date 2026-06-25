"use client"; // Kwa sababu tutakuwa na hover/click effects

import Link from "next/link";

export default function CategoryNav() {
  const categories = [
    { name: "Home", path: "/" },
    { name: "Children", path: "/children" },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Shoes", path: "/shoes" },
  ];

  return (
    <nav className="border-b border-gray-200 py-4 bg-white">
      <div className="flex justify-center gap-8 md:gap-12">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            href={cat.path}
            className="text-sm md:text-base font-bold text-gray-700 hover:text-blue-900 transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}