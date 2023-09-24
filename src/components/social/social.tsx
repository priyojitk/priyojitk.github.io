function social() {
  const socials = [
    {
      title: "Github",
      icon: "bi bi-github",
      link: "//github.com/priyojitk",
      color: "black",
    },
    {
      title: "Linkedin",
      icon: "bi bi-linkedin",
      link: "//www.linkedin.com/in/priyojit-kharibam-16b138107/",
      color: "#0A66C2",
    },
    {
      title: "Facebook",
      icon: "bi bi-facebook",
      link: "//fb.com/priyojit.kharibam",
      color: "#3b5998",
    },
    {
      title: "Twitter",
      icon: "bi bi-twitter",
      link: "#",
      color: "#00acee",
    },
  ];
  return (
    <div className="row">
      <h5>Let's connect</h5>
      <ul className="d-flex list-unstyled ">
        {socials.map((social, i) => (
          <li className="mx-2" key={i}>
            <a href={social.link} target="_blank">
              <i
                className={social.icon}
                style={{
                  fontSize: "1.5rem",
                  color: `${social.color ? social.color : "blue"}`,
                }}
              ></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default social;
