import { Link } from "react-router-dom";

const Home = () => {
  const items = [
    {
      title: "Personal",
      links: [
        {
          name: "Resume",
          ref: "/resume",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit eveniet illo. Distinctio praesentium sunt deserunt doloribus a molestias officiis.",
        },
        {
          name: "Test",
          ref: "/test",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit eveniet illo. Distinctio praesentium sunt deserunt doloribus a molestias officiis.",
        },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "About", ref: "/about", description: "Hello" },
        {
          name: "Terms & Condition",
          ref: "/tnc",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit eveniet illo. Distinctio praesentium sunt deserunt doloribus a molestias officiis.",
        },
      ],
    },
    {
      title: "About me",
      links: [
        {
          name: "About",
          ref: "/about",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit eveniet illo. Distinctio praesentium sunt deserunt doloribus a molestias officiis.",
        },
      ],
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-6" key={index}>
            <h5>{item.title}</h5>
            {item.links.map((link, i) => (
              <div className="mb-4" key={i}>
                <Link className="text-muted" to={link.ref}>
                  {link.name}
                </Link>
                <div className="card">{link.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
