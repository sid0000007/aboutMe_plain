import React from "react";
import { User, Twitter, Github, Mail, Phone } from "lucide-react";
import data from "../data/data.json";
import Link from "next/link";

const Contact = () => {
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

  const { personal } = data;
  return (
    <div className="mb-8">
      <div className="text-gray-700 mb-2 text-xs">{personal.location}</div>
      <div className="flex flex-wrap items-center gap-1 text-gray-700 text-xs mb-2">
        {personal.contact.links.map((link, index) => (
          <div key={index} className="inline-flex items-center">
            <Link href={link.url} className="hover:underline flex items-center">
              {getIcon(link.icon)}
            </Link>
            {index < personal.contact.links.length - 1 && (
              <span className="ml-1">|</span>
            )}
          </div>
        ))}
        <div className="inline-flex items-center ">
          <a
            href={`mailto:${personal.contact.email}`}
            className="hover:underline flex items-center mr-1"
          >
            {getIcon("mail")}
            <span className="ml-1">{personal.contact.email}</span>
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
  );
};

export default Contact;
