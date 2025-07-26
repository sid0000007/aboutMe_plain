import { ExternalLink } from "lucide-react";
import Link from "next/link";
import data from "../data/data.json";
import Navigation from "./navigation";

export default function ProjectsPage() {
  const { projects } = data;

  return (
    <div className="max-w-2xl mx-auto px-8 py-8">
      <Navigation />

      {/* Main Content */}
      <div className="max-w-2xl">
        <div className="space-y-5 text-gray-800 leading-relaxed">
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
        </div>
      </div>
    </div>
  );
}
