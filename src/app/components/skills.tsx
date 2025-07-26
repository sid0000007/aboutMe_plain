import { User, Twitter, Github, Mail, Phone, ExternalLink } from "lucide-react";

import data from "../data/data.json";
import Navigation from "./navigation";

export default function SkillsPage() {
  const { personal, navigation, skills } = data;

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
    <div className="max-w-2xl mx-auto px-8 py-8">
      <Navigation />

      {/* Main Content */}
      <div className="max-w-2xl">
        <div className="space-y-5 text-gray-800 leading-relaxed">
          {/* Skills */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Skills
            </h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium text-sm text-gray-900">
                    {category}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {skillList}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
