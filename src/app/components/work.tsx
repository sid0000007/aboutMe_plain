import data from "../data/data.json";
import Navigation from "./navigation";

export default function WorkPage() {
  const { workExperience } = data;

  return (
    <div className="max-w-2xl mx-auto px-8 py-8">
      <Navigation />

      {/* Main Content */}
      <div className="max-w-2xl">
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
                  <span className="text-gray-500 text-xs">{job.duration}</span>
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
        </div>
      </div>
    </div>
  );
}
