import React from "react";
import { User, Briefcase, GraduationCap, Code, Award } from "lucide-react";

const Sidebar = ({ activeSection, onSectionChange }) => {
  const navigationItems = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "achievements", label: "Achievements", icon: Award },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 p-4">
      <div className="space-y-6">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
