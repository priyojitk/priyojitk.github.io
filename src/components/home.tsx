import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    {
      title: "Personal",
      links: [
        { name: "Resume", ref: "/resume" },
        { name: "Test", ref: "/test" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "About", ref: "/about" },
        { name: "Terms & Condition", ref: "/tnc" },
      ],
    },
    {
      title: "About me",
      links: [{ name: "About", ref: "/about" }],
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-6 col-md" key={index}>
            <h5>{item.title}</h5>
            <ul className="list-unstyled text-small">
              {item.links.map((link, i) => (
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
  );
};

export default Home;
