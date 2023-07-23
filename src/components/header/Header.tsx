import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    {
      title: "Resume",
      ref: "/resume",
    },
    {
      title: "About",
      ref: "/about",
    },
  ];
  return (
    <header className="bg-light border-bottom py-3 mb-4 ">
      <div className="container d-flex flex-wrap justify-content-center">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-emoji-smile"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>
          <span className="fs-4">&nbsp;Priyojit Kharibam</span>
        </Link>

        <ul className="nav nav-pills">
          {links.map((menu) => (
            <li className="nav-item">
              <Link to={menu.ref} className="nav-link">
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
