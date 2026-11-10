
import { useState } from "react";
import "./Projects.css";

import restaurantImage from "./assets/restaurant image.jpeg";
import srmKattankulathur from "./assets/SRM-Kattankulathur.jpg";
import oopspic from "./assets/oopspic.jpg";
import interfacesAbstraction from "./assets/interfacesAbstraction.png";
import inheritance from "./assets/inheritance.png";
import pythonImage from "./assets/pythonImage.jpg";
import pythonadvanced from "./assets/pythonadvanced.png";

function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Web", "Java", "Python"];

  const filterLabels = {
    All: "All",
    Web: "Web Dev",
    Java: "Java / OOPs",
    Python: "Python",
  };

  const projects = [
    {
      num: "01",
      title: "Food Restaurant Website",
      category: "Web",
      language: "HTML / CSS",
      image: restaurantImage,
      description:
        "A fully designed restaurant web page displaying menu, services, and location details. Built with semantic HTML and custom CSS layout.",
      tags: ["HTML", "CSS", "Responsive", "UI Design"],
      link: "https://github.com/srimathi200821-boop/Web-Technology/tree/main/Unit-5",
    },
    {
      num: "02",
      title: "College Website",
      category: "Web",
      language: "HTML / CSS",
      image: srmKattankulathur,
      description:
        "A fully designed college management website providing information about courses, faculty, facilities, events, and contact details.",
      tags: ["HTML", "CSS", "Responsive", "UI Design"],
      link: "https://github.com/srimathi200821-boop/College-Management-System",
    },
    {
      num: "03",
      title: "OOP Foundations",
      category: "Java",
      language: "Java",
      image: oopspic,
      description:
        "Introduction to OOP in Java covering classes, objects, constructors and method overloading.",
      tags: ["Java", "Classes & Objects", "Constructors"],
      link: "https://github.com/srimathi200821-boop/OOPS",
    },
    {
      num: "04",
      title: "Inheritance & Polymorphism",
      category: "Java",
      language: "Java",
      image: inheritance,
      description:
        "Inheritance hierarchies, method overriding and polymorphism in Java.",
      tags: ["Java", "Inheritance", "Polymorphism"],
      link: "https://github.com/srimathi200821-boop/OOPS/tree/main/UNIT-3",
    },
    {
      num: "05",
      title: "Interfaces & Abstraction",
      category: "Java",
      language: "Java",
      image: interfacesAbstraction,
      description:
        "Abstract classes and interfaces in Java with practical examples.",
      tags: ["Java", "Interfaces", "Abstraction"],
      link: "https://github.com/srimathi200821-boop/OOPS/tree/main/UNIT-3",
    },
    {
      num: "06",
      title: "Python Fundamentals",
      category: "Python",
      language: "Python",
      image: pythonImage,
      description:
        "Variables, loops, functions and control flow in Python.",
      tags: ["Python", "Data Types", "Control Flow"],
      link: "https://github.com/srimathi200821-boop/PYTHON/tree/main/UNIT-1",
    },
    {
      num: "07",
      title: "Python Advanced Concepts",
      category: "Python",
      language: "Python",
      image: pythonadvanced,
      description:
        "Lists, dictionaries, file handling and modules with practical exercises.",
      tags: ["Python", "Data Structures", "File Handling"],
      link: "https://github.com/srimathi200821-boop/PYTHON/tree/main/UNIT-2",
    },
  ];

  const visibleProjects = projects.filter(
    (project) =>
      filter === "All" || project.category === filter
  );

  return (
    <section id="projects-section">
      <div className="projects-header">
        <h2>
          Things I've <span>Built</span>
        </h2>

        <div className="divider"></div>

        <p style={{ maxWidth: "560px", margin: "0 auto 2rem" }}>
          *Real projects from my GitHub — web development, Java OOP units, and
          Python fundamentals, all built hands-on.
        </p>
      </div>

      <div className="proj-filters reveal">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-btn ${
              filter === f ? "active" : ""
            }`}
            onClick={() => setFilter(f)}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <div className="proj-card" key={project.num}>
            <div className="proj-thumb-placeholder">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="proj-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span className="proj-num">
                  {project.num}
                </span>

                <span className="proj-lang">
                  {project.language}
                </span>
              </div>

              <div className="proj-title">
                {project.title}
              </div>

              <p className="proj-desc">
                {project.description}
              </p>

              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span
                    className="proj-tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="proj-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="center reveal">
        <a
          href="https://github.com/srimathi200821-boop"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          View All Repositories
        </a>
      </div>
    </section>
  );
}

export default Projects;
