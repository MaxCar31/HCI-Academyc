import React from 'react';
import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    name: "teamMembers.maria.name",
    role: "teamMembers.maria.role",
    description: "teamMembers.maria.description",
    imageUrl: "InstructorHome1.jpg",
    linkedinUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "teamMembers.daniel.name",
    role: "teamMembers.daniel.role",
    description: "teamMembers.daniel.description",
    imageUrl: "InstructorHome2.png",
    linkedinUrl: "#",
    instagramUrl: "#",
  },
  {
    name: "teamMembers.emilia.name",
    role: "teamMembers.emilia.role",
    description: "teamMembers.emilia.description",
    imageUrl: "InstructorHome3.jpg",
    linkedinUrl: "#",
    instagramUrl: "#",
  },
];

const TeamSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-24" id="team">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900">{t('teamSection.title')}</h2>
          <p className="text-gray-700 mt-4">{t('teamSection.description')}</p>
        </div>

        {/* Profesores */}
        <div className="mb-0">
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className={`w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-4 animate-fade-in-delay-${index + 1}`}>
                <div className="flex flex-col items-center">
                  <a href="#" className="mx-auto">
                    <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src={member.imageUrl} alt={t(member.name)} />
                  </a>
                  <div className="text-center mt-6">
                    <h4 className="text-gray-900 text-xl font-bold">{t(member.name)}</h4>
                    <p className="text-gray-700 font-light mb-2">{t(member.role)}</p>
                    <p className="text-sm text-gray-600">{t(member.description)}</p>
                    {/* Social Icons */}
                    <div className="flex space-x-3 opacity-50 hover:opacity-100 transition-opacity duration-300 mt-4">
                      <a href={member.linkedinUrl} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                        <i className="fab fa-linkedin text-indigo-500 mx-auto mt-2"></i>
                      </a>
                      <a href={member.instagramUrl} className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                        <i className="fab fa-instagram text-blue-300 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;