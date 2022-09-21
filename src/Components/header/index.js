import "./header.css";
import logoCty from "../../image/cong-ty-co-phan-giai-phap-cong-nghe-gd-viet-nam1649725085.jpg";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((o) => !o);
  };

  const isMobileController = () => {
    if (window.innerWidth < 845) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", isMobileController);
    return () => {
      window.removeEventListener("resize", isMobileController);
    };
  }, []);

  return (
    <>
      <header className=" bg-blue-100 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto">
          {open && (
            <button onClick={handleMenu} className="float-left w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          )}
          <div className="flex justify-center">
            <div className="text-lg font-bold">
              CTY GIẢI PHÁP CÔNG NGHỆ GDVN
            </div>
          </div>
        </div>
      </header>

      <aside
        className={`${
          open ? "closeMenu" : "openMenu"
        } fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <button onClick={handleMenu} className="float-right mt-2 mr-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none">
                <Link to="/" className="font-bold text-xl text-indigo-600">
                  <img className="w-24 m-0 m-auto" src={logoCty} />
                </Link>
              </h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/" end
                    // className="flex items-center bg-blue-600 rounded-xl font-bold text-sm text-white py-3 px-4"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/employee"
                    // className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>
                    Employee
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;
