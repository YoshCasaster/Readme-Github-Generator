import React, { useState } from 'react';
import { Github, FileEdit, Eye } from 'lucide-react';
import Form from './components/Form';
import Preview from './components/Preview';

export interface ProfileData {
  bannerUrl: string;
  title: string;
  subtitle: string;
  aboutMe: string;
  skills: string[];
  work: {
    currentProject: {
      name: string;
      link: string;
    };
    collaboration: {
      name: string;
      link: string;
    };
    helpWith: {
      name: string;
      link: string;
    };
    learning: string;
    askMeAbout: string;
    email: string;
    portfolioLink: string;
    blogLink: string;
    resumeLink: string;
    funFact: string;
  };
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
    discord: string;
    linkedin: string;
    whatsapp: string;
    telegram: string;
  };
  addons: {
    showVisitorsBadge: boolean;
    showGithubTrophy: boolean;
    showGithubStats: boolean;
    githubStatsTheme: string;
    showTopSkills: boolean;
    topSkillsTheme: string;
  };
}

function App() {
  const [page, setPage] = useState<'form' | 'preview'>('form');
  const [profileData, setProfileData] = useState<ProfileData>({
    bannerUrl: '',
    title: '',
    subtitle: '',
    aboutMe: '',
    skills: [],
    work: {
      currentProject: { name: '', link: '' },
      collaboration: { name: '', link: '' },
      helpWith: { name: '', link: '' },
      learning: '',
      askMeAbout: '',
      email: '',
      portfolioLink: '',
      blogLink: '',
      resumeLink: '',
      funFact: '',
    },
    social: {
      twitter: '',
      facebook: '',
      instagram: '',
      discord: '',
      linkedin: '',
      whatsapp: '',
      telegram: '',
    },
    addons: {
      showVisitorsBadge: false,
      showGithubTrophy: false,
      showGithubStats: false,
      githubStatsTheme: 'radical',
      showTopSkills: false,
      topSkillsTheme: 'radical',
    },
  });

  return (
    <div className="min-h-screen">
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url(https://about.prinsh.com/prinsley.jpg)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Github className="h-6 w-6 text-gray-900" />
                <h1 className="text-xl font-bold text-gray-900">Profile Generator</h1>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setPage('form')}
                  className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    page === 'form'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileEdit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => setPage('preview')}
                  className={`flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    page === 'preview'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-28 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {page === 'form' ? (
            <Form
              profileData={profileData}
              setProfileData={setProfileData}
              onPreview={() => setPage('preview')}
            />
          ) : (
            <Preview 
              profileData={profileData} 
              onEdit={() => setPage('form')}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <a 
              href="https://github.com/YoshCasaster"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <span>Made with ❤️ by</span>
              <span className="font-medium">YoshCasaster</span>
              <Github className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;