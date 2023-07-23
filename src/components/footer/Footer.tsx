import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../config";

export default function footer() {
  const footers = [
    {
      title: "Links",
      links: [
        { name: "UUID Tools", ref: "/uuid" },
        { name: "test", ref: "/test" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About", ref: "/about" },
        { name: "Terms & Condition", ref: "/tnc" },
      ],
    },
    {
      title: "About",
      links: [{ name: "About", ref: "/about" }],
    },
  ];
  return (
    <footer className="pt-4 border-top bg-light">
      <div className="container">
        <div className="row">
          {footers.map((footer, index) => (
            <div className="col-6 col-md" key={index}>
              <h5>{footer.title}</h5>
              <ul className="list-unstyled text-small">
                {footer.links.map((link, i) => (
                  <li key={i}>
                    <Link className="text-muted" to={link.ref}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid bg-dark">
        <div className="text-white text-center pt-2 pb-2">
          &copy; {CURRENT_YEAR}{" "}
        </div>
      </div>
    </footer>
  );
}
