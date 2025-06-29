import Links from "./Links";

const Navbar = () => {
  return (
    <div className="navbar w-10/12 mx-auto text-white">
      <div className="navbar-start">
        <a className="text-xl md:text-4xl">GOLAM ROBBANI</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {<Links />}
          </ul>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{<Links />}</ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
