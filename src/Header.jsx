import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mb-8 shadow">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <div className="grid text-lg">
          <div className="hidden text-sm font-light md:block">
            Lars-Beratung.de
          </div>
          <div className="hidden text-sm font-light lg:block">
            Leitung | Analyse | Recherche | Strategie
          </div>
          <div className="my-1 text-sm font-bold">
            <Link to="/home" className="font-semibold ">
              خدمات مشاوره‌ای مالی لارس
            </Link>
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
