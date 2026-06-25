import Link from 'next/link';

export default function Breadcrumbs({ category }) {
  return (
    <nav className="text-xs font-medium text-gray-500 my-4 px-4">
      <Link href="/" className="hover:text-blue-900">HOME</Link>
      <span> / </span>
      <span className="text-gray-900 font-bold uppercase">{category}</span>
    </nav>
  );
}