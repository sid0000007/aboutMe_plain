import { User, Twitter, Github, Mail, Phone } from "lucide-react";
import Link from "next/link";
import data from "../data/data.json";
import Navigation from "../components/navigation";
import MainHeader from "../components/main-header";

export default function NotesPage() {
  const { personal, navigation } = data;

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
          {/* Notes Content */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Notes
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Coming soon... This is where I'll share my thoughts on technology,
              development, and other interesting topics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
