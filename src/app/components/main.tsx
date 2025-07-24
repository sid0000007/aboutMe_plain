import { User, Twitter, Github, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";
import data from "../data/data.json";

export default function Component() {
  const { personal, navigation, workExperience, skills, projects, education } =
    data;

  // Icon mapping
  const getIcon = (iconName: string) => {
    const iconMap = {
      user: User,
      twitter: Twitter,
      github: Github,
      mail: Mail,
      phone: Phone,
    };
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={14} /> : null;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8 py-8">
        {/* Navigation */}
        <nav className="flex justify-end gap-8 mb-16">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Main Content */}
        <div className="max-w-2xl">
          {/* Header */}
          <h1 className="text-5xl font-normal text-gray-900 mb-4">
            {personal.name}
          </h1>
          <p className="text-gray-500 text-xs pb-4">{personal.tagline}</p>

          {/* Contact & Location */}
          <div className="mb-8">
            <div className="text-gray-700 mb-2 text-xs">
              {personal.location}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-gray-700 text-xs mb-2">
              {personal.contact.links.map((link, index) => (
                <div key={index} className="inline-flex items-center gap-1">
                  <Link
                    href={link.url}
                    className="hover:underline flex items-center gap-1"
                  >
                    {getIcon(link.icon)}
                  </Link>
                  {index < personal.contact.links.length - 1 && (
                    <span className="ml-1">|</span>
                  )}
                </div>
              ))}
              <div className="inline-flex items-center gap-1">
                <span>|</span>
                <a
                  href={`mailto:${personal.contact.email}`}
                  className="hover:underline flex items-center gap-1 ml-1"
                >
                  {getIcon("mail")}
                </a>
              </div>
              <div className="inline-flex items-center gap-1">
                <span>|</span>
                <span className="flex items-center gap-1 ml-1">
                  {getIcon("phone")}
                  (+91) {personal.contact.mobile}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-gray-800 leading-relaxed">
            {/* Work Experience */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Work Experience
              </h2>
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={index < workExperience.length - 1 ? "mb-4" : ""}
                >
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-sm text-gray-900">
                      {job.title}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {job.duration}
                    </span>
                  </div>
                  <div className="text-gray-500 text-xs mb-2">
                    {job.company}, {job.location}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Skills
              </h2>
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-1 text-xs">
                  <span className="font-medium text-gray-700">{category}:</span>{" "}
                  <span className="text-gray-600">{skillList}</span>
                </div>
              ))}
            </div>

            {/* Projects & Builds */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Projects & Builds
              </h2>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={index < projects.length - 1 ? "mb-4" : ""}
                >
                  <div className="flex justify-between items-baseline">
                    <span className="font-medium text-sm text-gray-900">
                      {project.title}
                    </span>
                    <Link
                      href={project.githubUrl}
                      className="text-gray-500 hover:underline text-sm"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                  <div className="text-gray-500 text-xs mb-2">
                    {project.technologies}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Education
              </h2>
              <div className="flex justify-between items-baseline">
                <span className="font-medium text-sm text-gray-900">
                  {education.institution}
                </span>
                <span className="text-gray-500 text-xs">
                  {education.duration}
                </span>
              </div>
              <div className="text-gray-500 text-xs">{education.location}</div>
              <div className="text-gray-600 text-xs">{education.degree}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
