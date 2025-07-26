import Link from "next/link";
import data from "../data/data.json";

export default function Navigation() {
  const { navigation } = data;
  return (
    <nav className="flex justify-end gap-8 mb-16">
      {navigation.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
