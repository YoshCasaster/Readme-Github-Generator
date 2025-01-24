import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProfileData } from '../App';
import SkillsSection from './SkillsSection';
import SocialSection from './SocialSection';
import AddonsSection from './AddonsSection';

interface FormProps {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  onPreview: () => void;
}

function Form({ profileData, setProfileData, onPreview }: FormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWorkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    subfield?: string
  ) => {
    const { value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      work: {
        ...prev.work,
        [field]: subfield
          ? {
              ...prev.work[field as keyof typeof prev.work],
              [subfield]: value,
            }
          : value,
      },
    }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Basic Information */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="bannerUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Banner URL
            </label>
            <input
              type="url"
              id="bannerUrl"
              name="bannerUrl"
              value={profileData.bannerUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="https://example.com/banner.jpg"
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={profileData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Hi 👋, I'm John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              value={profileData.subtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="A passionate frontend developer from Indonesia"
            />
          </div>

          <div>
            <label
              htmlFor="aboutMe"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              About Me
            </label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              value={profileData.aboutMe}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Work</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                🔭 Current Project Name
              </label>
              <input
                type="text"
                value={profileData.work.currentProject.name}
                onChange={(e) => handleWorkChange(e, 'currentProject', 'name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link
              </label>
              <input
                type="url"
                value={profileData.work.currentProject.link}
                onChange={(e) => handleWorkChange(e, 'currentProject', 'link')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                👯 Looking to Collaborate On
              </label>
              <input
                type="text"
                value={profileData.work.collaboration.name}
                onChange={(e) => handleWorkChange(e, 'collaboration', 'name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link
              </label>
              <input
                type="url"
                value={profileData.work.collaboration.link}
                onChange={(e) => handleWorkChange(e, 'collaboration', 'link')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                🤝 Looking for Help With
              </label>
              <input
                type="text"
                value={profileData.work.helpWith.name}
                onChange={(e) => handleWorkChange(e, 'helpWith', 'name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link
              </label>
              <input
                type="url"
                value={profileData.work.helpWith.link}
                onChange={(e) => handleWorkChange(e, 'helpWith', 'link')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              🌱 I'm currently learning
            </label>
            <input
              type="text"
              value={profileData.work.learning}
              onChange={(e) => handleWorkChange(e, 'learning')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="React, Vue.js, Node.js"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              💬 Ask me about
            </label>
            <input
              type="text"
              value={profileData.work.askMeAbout}
              onChange={(e) => handleWorkChange(e, 'askMeAbout')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="React, Vue.js, Web Development"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              📫 How to reach me
            </label>
            <input
              type="email"
              value={profileData.work.email}
              onChange={(e) => handleWorkChange(e, 'email')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              👨‍💻 Portfolio
            </label>
            <input
              type="url"
              value={profileData.work.portfolioLink}
              onChange={(e) => handleWorkChange(e, 'portfolioLink')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="https://myportfolio.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              📝 Blog
            </label>
            <input
              type="url"
              value={profileData.work.blogLink}
              onChange={(e) => handleWorkChange(e, 'blogLink')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="https://myblog.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              📄 Resume
            </label>
            <input
              type="url"
              value={profileData.work.resumeLink}
              onChange={(e) => handleWorkChange(e, 'resumeLink')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="https://resume.com/myresume"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ⚡ Fun fact
            </label>
            <input
              type="text"
              value={profileData.work.funFact}
              onChange={(e) => handleWorkChange(e, 'funFact')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="I think I am funny"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Skills</h2>
        <SkillsSection 
          selectedSkills={profileData.skills || []} 
          onChange={(skills) => setProfileData(prev => ({ ...prev, skills }))}
        />
      </div>

      {/* Social Media Section */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Social Media</h2>
        <SocialSection
          social={profileData.social}
          onChange={(social) => setProfileData(prev => ({ ...prev, social }))}
        />
      </div>

      {/* Add-ons Section */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Add-ons</h2>
        <AddonsSection
          addons={profileData.addons}
          onChange={(addons) => setProfileData(prev => ({ ...prev, addons }))}
        />
      </div>

      <button
        onClick={onPreview}
        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 font-medium"
      >
        <span>Preview</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Form;