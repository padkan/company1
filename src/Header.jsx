import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-8 shadow">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <div className="grid text-lg">
          <Link to="/home" className="font-semibold">
            Lars-Beratung.de
          </Link>
          <div className="text-sm font-light">
            Leitung | Analyse | Recherche | Strategie
          </div>
          <div className="my-1 text-sm font-bold">
            خدمات مشاوره‌ای مالی لارس
          </div>
        </div>
        <nav className="flex space-x-14">
          <Link to="/roles" className="ml-4 text-gray-700 hover:text-blue-500">
            خدمات
          </Link>
          <Link
            to="/conditions"
            className="ml-4 text-gray-700 hover:text-blue-500"
          >
            شرایط مشاوره
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
