import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Terminal,
} from "lucide-react";

const CONFIG_URL =
  "https://raw.githubusercontent.com/Shubhamzanzad/portfolio/main/config.json";

const sampleConfig = {
  personal: {
    name: "Shubham",
    title: "Associate Software Engineer",
    phone: "+91-7387335258",
    email: "zanzadshubham25@gmail.com",
    location: "Bengaluru, India",
    github: "https://github.com/Shubhamzanzad",
    linkedin: "https://www.linkedin.com/in/shubham-zanzad",
    bio: "Proactive Software Development Engineer with experience developing backend systems for the Josh app's recommendation team and LogEasy backend using Java, Python, and Golang. Experienced in designing and maintaining high-performance backend services, optimizing data pipelines, and ensuring low-latency APIs for large-scale user engagement.",
    resumeURL:
      "https://drive.google.com/file/d/1kjAFOzzzfoRjpNAKpEoxtVuTMkbuOhxC/view?usp=sharing",
  },
  education: [
    {
      degree: "M.Tech. (CSE)",
      institution:
        "International Institute of Information Technology, Bangalore (IIIT B)",
      duration: "2023 - 2025",
      location: "Bengaluru, Karnataka",
      cgpa: "7.75",
    },
    {
      degree: "B.E. (IT)",
      institution: "Sinhgad Academy of Engineering",
      duration: "2018 - 2022",
      location: "Pune, Maharashtra",
      cgpa: "8.87",
    },
  ],
  experience: [
    {
      position: "Associate Software Engineer",
      company: "Verse Innovation",
      duration: "July 2025 – Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Took full ownership of backend REST APIs for LogEasy, a scalable logging and observability platform, using Python (FastAPI), SQL, and Apache Kafka, delivering high-performance, object-oriented solutions for seamless and fault-tolerant operations.",
        "Implemented an in-memory caching layer for APIs, improving latency by 35%, introduced GitLab CI pipelines to eliminate unnecessary VMs, reducing deployment costs, and simplifying the deployment process.",
        "Architected a high-throughput log ingestion pipeline processing over 350 GB/day using Apache Kafka for real-time processing, integrating an intelligent parsing system with Drain3 and Google Vertex AI to efficiently handle unstructured log formats.",
        "Implemented end-to-end authentication and authorization for a distributed web application using JWT-based tokens and React.js, designing dynamic groups and permissions to enhance security and scalability.",
      ],
    },
    {
      position: "Intern",
      company: "Verse Innovation",
      duration: "Jan 2025 – June 2025",
      location: "Bengaluru, India",
      responsibilities: [
        "Developed a Natural Language to SQL conversion system using Large Language Models (LLMs) (Claude 3.5 Sonnet, Gemini 2.0 Flash), creating query systems with automated database profiling and schema generation to enhance customer experience.",
        "Built a Go-based code evaluation service integrated with SonarQube, analyzing 100% of the codebase for vulnerabilities on every merge request, reducing production bugs by 25% and incorporating automated rollbacks triggered by Grafana alerts.",
        "Developed a cloud-based monitoring service using Spring Boot to track hourly creation of SST files (trending content and creator metadata) in the JOSH app and trigger alerts in Google Chat.",
        "Deployed Airflow DAGs in Google Cloud Composer to run PySpark jobs, comparing training and prediction data of JOSH recommendations in real-time, with daily logging and chat-based discrepancy alerts to ensure system reliability.",
      ],
    },
  ],
  projects: [
    {
      name: "MediSync - Healthcare Portal",
      url: "https://github.com/Shubhamzanzad/HAD",
      technologies: [
        "Spring Boot",
        "React.js",
        "MySQL",
        "RabbitMQ",
        "JWT",
        "Server-Sent Events",
      ],
      description: [
        "Developed a healthcare portal for health record transfers using ABDM APIs and FHIR standards in a microservices architecture, used RabbitMQ for inter-service communication.",
        "Designed Figma mockups, built backend APIs with Spring Boot, frontend with React.js, and contributed to database schema design.",
        "Enabled real-time updates with Server-Sent Events, inter-service communication with RabbitMQ, and secure access using JWT-based authorization and authentication and role-based access control.",
      ],
    },
    {
      name: "LeagueFit - DevOps Project",
      url: "https://github.com/Shubhamzanzad/SS-Mini-Project",
      technologies: [
        "Jenkins",
        "Ansible",
        "Docker Compose",
        "ELK Stack",
        "FastAPI",
        "Streamlit",
      ],
      description: [
        "Developed a web application recommending top five football clubs using cosine similarity.",
        "Created Jenkins CI/CD pipeline, configured Ansible playbook, managed Docker containers with Docker Compose, and set up ELK Stack for monitoring and logging.",
        "Developed using FastAPI and Streamlit, containerizing it into separate backend, frontend, and dataset containers.",
      ],
    },
    {
      name: "CLI-Based Course Registration System",
      url: "https://github.com/Shubhamzanzad/LeagueFit",
      technologies: [
        "C",
        "Socket Programming",
        "File Locking",
        "Process Synchronization",
      ],
      description: [
        "Developed a multithreaded course registration system with concurrency control via file-locking mechanisms, handling concurrent socket-based client requests using process synchronization techniques.",
      ],
    },
  ],
  achievements: [
    "Secured All India Rank of 1517 in GATE CSE 2023",
    "Solved over 700+ coding problems across various platforms: LeetCode, Codeforces, CodeChef, Coding Ninjas, and GeeksForGeeks",
  ],
  skills: {
    languages: ["Java", "Python", "C", "C++", "Golang", "JavaScript"],
    frameworks: [
      "Spring Boot",
      "FastAPI",
      "React.js",
      "Kafka",
      "Vertex AI",
      "Redis",
      "Git",
      "GitHub",
      "GitLab",
    ],
    databases: ["MySQL", "NoSQL", "PostgreSQL"],
    tools: [
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Ansible",
      "Argo CD",
      "SonarQube",
      "Google Cloud Platform(GCP)",
    ],
  },
  codingProfiles: [
    {
      platform: "LeetCode",
      username: "Zanzad_shubham",
      url: "https://leetcode.com/Zanzad_shubham",
      problemsSolved: 378,
      rating: null,
    },
    {
      platform: "CodeForces",
      username: "Zanzad_shubham",
      url: "https://codeforces.com/profile/Zanzad_shubham",
      problemsSolved: 91,
      rating: "Pupil - 1426",
    },
    {
      platform: "CodeChef",
      username: "zanzadshubham",
      url: "https://www.codechef.com/users/zanzadshubham",
      problemsSolved: 29,
      rating: "1 star - 1340",
    },
    {
      platform: "Coding Ninjas",
      username: "zanzadShubham",
      url: "https://www.naukri.com/code360/profile/c3a07f5c-afc2-46cf-9d45-ad13f2c7a62d",
      problemsSolved: 210,
      rating: null,
    },
    {
      platform: "GeeksforGeeks",
      username: "zanzadshubham25",
      url: "https://www.geeksforgeeks.org/user/zanzadshubham25/",
      problemsSolved: 155,
      rating: null,
    },
  ],
};

const navigationItems = [
  { id: "about", label: "About", icon: "👤" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "open", label: "Open Source", icon: "⚡️" },
  { id: "achievements", label: "Achievements", icon: "🏆" },
  { id: "coding", label: "Coding", icon: "💻" },
];

const IconButton = ({ children, href, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-slate-800/60 hover:bg-slate-700 transition-transform transform hover:scale-105 ring-1 ring-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
  >
    {children}
  </a>
);

const SectionHeader = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#A78BFA] to-[#F472B6]">
    {children}
  </h2>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-md border border-purple-600/10 rounded-2xl p-6 shadow-xl ${className}`}
  >
    {children}
  </div>
);

const Portfolio = () => {
  const [config, setConfig] = useState(sampleConfig);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sanitizeJSON = (raw) => {
      let s = raw;
      s = s.replace(/,\s*([}\]])/g, "$1");
      s = s.replace(/([}\]])(\s*)(\r?\n\s*)(")/g, "$1,$2$3$4");
      return s;
    };

    const fetchConfig = async () => {
      try {
        const response = await fetch(CONFIG_URL);
        if (response.ok) {
          const text = await response.text();
          try {
            const data = JSON.parse(text);
            setConfig(data);
          } catch (parseErr) {
            const sanitized = sanitizeJSON(text);
            try {
              const data = JSON.parse(sanitized);
              setConfig(data);
            } catch (err) {
              console.error("Error in reading config.json - ", err);
              setConfig(sampleConfig);
            }
          }
        }
      } catch (error) {
        console.error("Error in reading config.json - ", error);
        setConfig(sampleConfig);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.08), transparent), linear-gradient(180deg,#05060a 0%, #0b0f1a 100%)",
        }}
      >
        <div className="text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full animate-spin border-4 border-t-transparent border-purple-500/60"></div>
          <div className="text-gray-300">Loading portfolio…</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-white"
      style={{
        fontFamily:
          "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        background:
          "radial-gradient(900px 400px at 10% 10%, rgba(99,102,241,0.06), transparent), linear-gradient(180deg,#05060a 0%, #0b0f1a 100%)",
      }}
    >
      {/* Sidebar - Desktop */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="space-y-3">
          {navigationItems
            .filter((item) => (item.id === "open" ? !!config.openSource : true))
            .map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? "true" : "false"}
                className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all transform ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-purple-700/40 to-pink-500/20 scale-105 ring-1 ring-purple-400/20"
                    : "bg-slate-900/40 hover:bg-slate-800/40"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-purple-300"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
        </div>
      </aside>

      {/* Top nav - Mobile */}
      <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-sm z-40 border-b border-purple-700/10 lg:hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#A78BFA] to-[#F472B6]">
              {config.personal.name.split(" ")[0]}
            </div>
            <div className="flex items-center gap-3">
              {navigationItems
                .filter((item) =>
                  item.id === "open" ? !!config.openSource : true
                )
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`p-2 rounded-md transition-transform ${
                      activeSection === item.id ? "scale-110" : "opacity-60"
                    }`}
                    title={item.label}
                  >
                    {item.icon}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 lg:pl-32">
        {/* About / Hero */}
        <section id="about" className="flex items-center px-6 lg:px-12 pt-8">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#FCA5A5]">
                  {config.personal.name}
                </h1>
                <p className="mt-2 text-xl text-purple-200 font-medium">
                  {config.personal.title}
                </p>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                {config.personal.bio}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href={`mailto:${config.personal.email}`}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-purple-700/30 bg-gradient-to-r from-slate-800/40 to-slate-800/30 hover:from-purple-700/20 hover:to-pink-500/10 transition"
                >
                  <Mail size={18} />
                  <span className="text-sm font-medium">
                    {config.personal.email}
                  </span>
                </a>

                <a
                  href={`tel:${config.personal.phone}`}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-purple-700/20 bg-slate-900/30 hover:bg-slate-900/40 transition"
                >
                  <Phone size={18} />
                  <span className="text-sm font-medium">
                    {config.personal.phone}
                  </span>
                </a>

                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/30 border border-slate-800 text-sm">
                  <MapPin size={18} />
                  <span>{config.personal.location}</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <IconButton href={config.personal.github} title="GitHub">
                  <Github size={18} />
                </IconButton>
                <IconButton href={config.personal.linkedin} title="LinkedIn">
                  <Linkedin size={18} />
                </IconButton>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md">
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-700 to-pink-500 flex items-center justify-center text-3xl font-bold shadow-lg"
                    aria-hidden
                  >
                    {config.personal.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {config.personal.name}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {config.personal.title}
                    </p>
                  </div>

                  <div className="w-full mt-2 border-t border-purple-600/10 pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>Location</span>
                      <span className="text-purple-300 font-medium">
                        {config.personal.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>Available</span>
                      <span className="text-purple-300 font-medium">
                        Open to opportunities
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 hover:cursor-pointer">
                      <span>Resume</span>
                      <a
                        href={config.personal.resumeURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 rounded-full bg-purple-600/30 hover:bg-purple-600/50 transition"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/* Education (NEW SECTION placed after Projects & Skills) */}
        <section id="education" className="py-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader>Education</SectionHeader>
            <div className="grid md:grid-cols-2 gap-6">
              {config.education.map((edu, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-purple-400" size={24} />
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-sm text-gray-300">{edu.institution}</p>
                      <div className="mt-1 text-xs text-gray-400">
                        {edu.duration} • {edu.location}
                      </div>
                      <div className="mt-2 text-purple-300 font-semibold text-sm">
                        CGPA: {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Experience */}
        <section id="experience" className="py-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>Work Experience</SectionHeader>
            <div className="space-y-8">
              {config.experience.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex md:flex-row flex-col md:items-start items-center gap-6">
                    <div className="flex-shrink-0">
                      <Briefcase className="text-purple-400" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {exp.position}
                          </h3>
                          <p className="text-sm text-purple-300">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-sm text-gray-400">
                          {exp.duration}
                        </div>
                      </div>

                      <p className="mt-3 text-gray-300 leading-relaxed">
                        <span className="text-gray-400 mr-2">
                          {exp.location} •
                        </span>
                      </p>

                      <ul className="mt-4 space-y-2 list-none">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 items-start text-gray-300"
                          >
                            <span className="mt-1 text-purple-400">▸</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Open Source */}{" "}
        {config.openSource && config.openSource !== null ? (
          <section id="open" className="py-20 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <SectionHeader>Open Source Contributions</SectionHeader>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {config.projects.map((project, index) => (
                  <Card key={index} className="flex flex-col">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Code className="text-purple-400" size={22} />
                        <h4 className="text-lg font-semibold">
                          {project.orgName || project.name}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-slate-800/60 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-2">
                        {project.description.map((d, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-300 flex gap-2"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-4 flex justify-center">
                      <a
                        href={project.url || config.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/40 to-pink-500/20 hover:from-purple-600/60 hover:to-pink-500/30 transition"
                      >
                        GitHub Link
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <></>
        )}
        {/* Projects & Skills */}
        <section id="projects" className="py-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>Personal Projects</SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.projects.map((project, index) => (
                <Card key={index} className="flex flex-col">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="text-purple-400" size={22} />
                      <h4 className="text-lg font-semibold">{project.name}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-800/60 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {project.description.map((d, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-300 flex gap-2"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 flex justify-center">
                    <a
                      href={project.url || config.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/40 to-pink-500/20 hover:from-purple-600/60 hover:to-pink-500/30 transition"
                    >
                      GitHub URL
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-12">
              <Card>
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Technical Skills
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-purple-300 font-medium mb-3">
                      Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {config.skills.languages.map((s, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-800/60 px-3 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-3">
                      Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {config.skills.frameworks.map((s, i) => (
                        <span
                          key={i}
                          className="text-sm bg-slate-800/30 px-3 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-3">
                      Databases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {config.skills.databases.map((s, i) => (
                        <span
                          key={i}
                          className="text-sm bg-slate-800/30 px-3 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-3">DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {config.skills.tools.map((s, i) => (
                        <span
                          key={i}
                          className="text-sm bg-slate-800/30 px-3 py-1 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        {/* Achievements */}
        <section id="achievements" className="py-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <SectionHeader>Achievements</SectionHeader>
            <div className="space-y-4">
              {config.achievements.map((a, i) => (
                <Card key={i} className="flex items-center gap-4">
                  <Award className="text-purple-400" size={28} />
                  <p className="text-gray-300">{a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Coding Profiles */}
        <section id="coding" className="py-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionHeader>Competitive Coding Profiles</SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.codingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="h-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Terminal className="text-purple-400" size={22} />
                        <h4 className="text-lg font-semibold">
                          {profile.platform}
                        </h4>
                      </div>
                      <ExternalLink className="text-gray-400" size={18} />
                    </div>

                    <div className="space-y-2">
                      {profile.rating && (
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Rating</span>
                          <span className="text-purple-300 font-medium">
                            {profile.rating}
                          </span>
                        </div>
                      )}
                      {profile.problemsSolved && (
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Problems</span>
                          <span className="text-purple-300 font-medium">
                            {profile.problemsSolved}+
                          </span>
                        </div>
                      )}
                      <p className="text-xs text-gray-500 mt-3">
                        @{profile.username}
                      </p>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-12 px-6 lg:px-12 border-t border-purple-700/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 mb-2">
              Built with React.js & Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {config.personal.name}. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
