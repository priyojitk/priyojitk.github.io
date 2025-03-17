export default function Home() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-10">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Kharibam Priyojit</h1>
        <p className="text-gray-600">Platform Engineer</p>
        <p className="text-gray-500 mt-2">
          <a
            href="https://priyojitk.github.io/"
            className="text-blue-600 hover:underline"
          >
            priyojitk.github.io
          </a>{" "}
          | 9862096718
        </p>
        <p className="text-gray-500">
          priyojitkharibam@gmail.com |{" "}
          <a
            href="https://www.linkedin.com/in/priyojit-kharibam-16b138107/"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </header>

      {/* Experience */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
        {[
          {
            role: "Platform Engineer 2",
            company: "Milestone Technologies",
            date: "Sep 2022 - present",
            client: "Paysafe Group",
          },
          {
            role: "Member of Technical Staff 3 Platform Engineer",
            company: "Paysafe Group",
            date: "Feb 2022 - Aug 2022",
          },
          {
            role: "Platform Engineer",
            company: "Arise Global Services Pvt Ltd",
            date: "Aug 2020 - Feb 2022",
            client: "Paysafe Group",
          },
        ].map((job, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-semibold text-gray-700">
              {job.role} - {job.company}
            </h3>
            <p className="text-sm text-gray-500">{job.date}</p>
            {job.client && (
              <p className="text-gray-600">Client: {job.client}</p>
            )}
          </div>
        ))}
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Built REST APIs for microservices.</li>
          <li>
            Integrated payment and withdrawal features with multiple providers.
          </li>
          <li>Developed audit log processing and common reporting services.</li>
          <li>Created a configurable request-response simulator.</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Education</h2>
        {[
          {
            degree: "M.Tech Software Engineering",
            school: "IIIT Allahabad",
            year: "2018 - 2020",
            gpa: "8.1",
          },
          {
            degree: "B.Tech Computer Science & Engineering",
            school: "NIT Manipur",
            year: "2013 - 2017",
            gpa: "7.6",
          },
        ].map((edu, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-semibold text-gray-700">{edu.degree}</h3>
            <p className="text-sm text-gray-500">
              {edu.school} | {edu.year}
            </p>
            <p className="text-gray-600">Cumulative GPA: {edu.gpa}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
        {[
          {
            name: "Music WebApp",
            details:
              "Enables users to upload, play, and download music. Hosted on GoDaddy using PHP and MySQL.",
          },
          {
            name: "T&P Web Portal",
            details:
              "Maintains records of training and placement activities. Built with PHP, MySQL & JavaScript.",
          },
        ].map((project, index) => (
          <div key={index} className="mt-2">
            <h3 className="font-semibold text-gray-700">{project.name}</h3>
            <p className="text-gray-600">{project.details}</p>
          </div>
        ))}
      </section>

      {/* Skills & Languages */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            "C++",
            "Java",
            "JavaScript",
            "Spring Boot",
            "ReactJS",
            "MySQL",
            "OracleDB",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 px-3 py-1 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Interests</h2>
        <p className="text-gray-700">
          Swimming, Full Stack Development, Cycling
        </p>
      </section>
    </div>
  );
}
