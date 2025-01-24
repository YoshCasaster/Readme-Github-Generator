import React from 'react';
import { FileEdit, Copy, Check } from 'lucide-react';
import { ProfileData } from '../App';

interface PreviewProps {
  profileData: ProfileData;
  onEdit: () => void;
}

function Preview({ profileData, onEdit }: PreviewProps) {
  const [copied, setCopied] = React.useState(false);

const getSocialLink = (platform: keyof ProfileData['social'], username: string) => {
  const links = {
    twitter: `https://twitter.com/${username}`,
    facebook: `https://facebook.com/${username}`,
    instagram: `https://instagram.com/${username}`,
    discord: `https://discord.com/users/${username}`,
    linkedin: `https://linkedin.com/in/${username}`,
    whatsapp: `https://wa.me/${username}`,
    telegram: `https://t.me/${username}`,
  };
  return links[platform];
};

const getSocialBadge = (platform: string, username: string) => {
  const colors = {
    twitter: '1DA1F2',
    facebook: '1877F2',
    instagram: 'E4405F',
    discord: '7289DA',
    linkedin: '0A66C2',
    whatsapp: '25D366',
    telegram: '26A5E4',
  };
  const color = colors[platform as keyof typeof colors] || '555555';
  const link = getSocialLink(platform as keyof ProfileData['social'], username);
  
  return `[![${platform}](https://img.shields.io/badge/${platform}-${username}-${color}?style=for-the-badge&logo=${platform}&logoColor=white)](${link})`;
};

  const getSkillBadge = (skill: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'F7DF1E',
      TypeScript: '3178C6',
      Python: '3776AB',
      Java: '007396',
      'C++': '00599C',
      Ruby: 'CC342D',
      PHP: '777BB4',
      Swift: 'FA7343',
      Go: '00ADD8',
      Rust: '000000',
      'Vue.js': '4FC08D',
      React: '61DAFB',
      Svelte: 'FF3E00',
      Angular: 'DD0031',
      Bootstrap: '7952B3',
      'Node.js': '339933',
      Spring: '6DB33F',
      Express: '000000',
      GraphQL: 'E10098',
      MongoDB: '47A248',
      MySQL: '4479A1',
      PostgreSQL: '336791',
      Redis: 'DC382D',
      AWS: '232F3E',
      Docker: '2496ED',
      Kubernetes: '326CE5',
      Firebase: 'FFCA28',
      'HTML5': 'E34F26',
      'CSS3': '1572B6',
      Sass: 'CC6699',
      Webpack: '8DD6F9',
      Babel: 'F9DC3E',
      Tailwind: '38B2AC',
      Git: 'F05032',
    };
    
    const sanitizedSkill = skill.replace(/\s+/g, ''); // Remove spaces
    const color = colors[skill] || '555555';
    return `![${skill}](https://img.shields.io/badge/${sanitizedSkill}-${color}?style=for-the-badge&logo=${sanitizedSkill.toLowerCase()}&logoColor=white)`;
  };

  const generateMarkdown = () => {
    let markdown = '';

    // Banner
    if (profileData.bannerUrl) {
      markdown += `![Profile Banner](${profileData.bannerUrl})\n\n`;
    }

    // Title and Subtitle
    if (profileData.title) {
      markdown += `# ${profileData.title}\n`;
    }
    if (profileData.subtitle) {
      markdown += `### ${profileData.subtitle}\n`;
    }
    markdown += '\n';

    // About Me
    if (profileData.aboutMe) {
      markdown += `${profileData.aboutMe}\n\n`;
    }

    // Work Section
    if (profileData.work.currentProject.name) {
      markdown += `- 🔭 I'm currently working on [${profileData.work.currentProject.name}](${profileData.work.currentProject.link})\n`;
    }
    if (profileData.work.collaboration.name) {
      markdown += `- 👯 I'm looking to collaborate on [${profileData.work.collaboration.name}](${profileData.work.collaboration.link})\n`;
    }
    if (profileData.work.helpWith.name) {
      markdown += `- 🤝 I'm looking for help with [${profileData.work.helpWith.name}](${profileData.work.helpWith.link})\n`;
    }
    if (profileData.work.learning) {
      markdown += `- 🌱 I'm currently learning ${profileData.work.learning}\n`;
    }
    if (profileData.work.askMeAbout) {
      markdown += `- 💬 Ask me about ${profileData.work.askMeAbout}\n`;
    }
    if (profileData.work.email) {
      markdown += `- 📫 How to reach me: ${profileData.work.email}\n`;
    }
    if (profileData.work.portfolioLink) {
      markdown += `- 👨‍💻 All of my projects are available at [Portfolio](${profileData.work.portfolioLink})\n`;
    }
    if (profileData.work.blogLink) {
      markdown += `- 📝 I regularly write articles on [Blog](${profileData.work.blogLink})\n`;
    }
    if (profileData.work.resumeLink) {
      markdown += `- 📄 Know about my experiences [Resume](${profileData.work.resumeLink})\n`;
    }
    if (profileData.work.funFact) {
      markdown += `- ⚡ Fun fact: ${profileData.work.funFact}\n`;
    }
    markdown += '\n';

    // Skills Section
    if (profileData.skills && profileData.skills.length > 0) {
      markdown += '## 💻 Tech Stack:\n';
      markdown += profileData.skills.map(skill => getSkillBadge(skill)).join(' ') + '\n\n';
    }

    // Social Media Section
    const socialBadges = Object.entries(profileData.social)
      .filter(([_, username]) => username)
      .map(([platform, username]) => {
        return getSocialBadge(platform, username);
      });

    if (socialBadges.length > 0) {
      markdown += '## 🌐 Socials:\n';
      markdown += socialBadges.join(' ') + '\n\n';
    }

    // GitHub Stats Section
    if (profileData.addons.showVisitorsBadge) {
      markdown += '## 📊 GitHub Stats:\n';
      markdown += '![](https://komarev.com/ghpvc/?username=yourusername&label=Profile%20views&color=0e75b6&style=flat)\n\n';
    }

    if (profileData.addons.showGithubTrophy) {
      markdown += '### 🏆 GitHub Trophies\n';
      markdown += '![](https://github-profile-trophy.vercel.app/?username=yourusername)\n\n';
    }

    if (profileData.addons.showGithubStats) {
      markdown += '### 📊 GitHub Stats:\n';
      markdown += `![](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=${profileData.addons.githubStatsTheme})\n\n`;
    }

    if (profileData.addons.showTopSkills) {
      markdown += '### 💻 Most Used Languages:\n';
      markdown += `![](https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=${profileData.addons.topSkillsTheme})\n`;
    }

    return markdown;
  };

  const copyToClipboard = async () => {
    const markdown = generateMarkdown();
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        {profileData.bannerUrl && (
          <div className="w-full h-48 sm:h-64 overflow-hidden">
            <img
              src={profileData.bannerUrl}
              alt="Profile Banner"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={onEdit}
              className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <FileEdit className="h-4 w-4" />
              <span>Edit Profile</span>
            </button>

            <button
              onClick={copyToClipboard}
              className={`inline-flex items-center space-x-2 py-2 px-4 rounded-lg transition-colors ${
                copied
                  ? 'bg-green-100 text-green-700'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Markdown</span>
                </>
              )}
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {profileData.title || "Your Title"}
          </h1>
          
          <h2 className="text-xl text-gray-600 mb-6">
            {profileData.subtitle || "Your Subtitle"}
          </h2>
          
          <div className="prose max-w-none space-y-6">
            {/* About Me Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">About Me</h3>
              <p className="text-gray-700 whitespace-pre-wrap">
                {profileData.aboutMe || "Tell us about yourself..."}
              </p>
            </div>

            {/* Skills Section */}
            {profileData.skills && profileData.skills.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Work Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work</h3>
              <ul className="space-y-2 text-gray-700">
                {profileData.work.currentProject.name && (
                  <li>
                    🔭 I'm currently working on{' '}
                    <a
                      href={profileData.work.currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {profileData.work.currentProject.name}
                    </a>
                  </li>
                )}

                {profileData.work.collaboration.name && (
                  <li>
                    👯 I'm looking to collaborate on{' '}
                    <a
                      href={profileData.work.collaboration.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {profileData.work.collaboration.name}
                    </a>
                  </li>
                )}

                {profileData.work.helpWith.name && (
                  <li>
                    🤝 I'm looking for help with{' '}
                    <a
                      href={profileData.work.helpWith.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {profileData.work.helpWith.name}
                    </a>
                  </li>
                )}

                {profileData.work.learning && (
                  <li>🌱 I'm currently learning {profileData.work.learning}</li>
                )}

                {profileData.work.askMeAbout && (
                  <li>💬 Ask me about {profileData.work.askMeAbout}</li>
                )}

                {profileData.work.email && (
                  <li>
                    📫 How to reach me:{' '}
                    <a
                      href={`mailto:${profileData.work.email}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {profileData.work.email}
                    </a>
                  </li>
                )}

                {profileData.work.portfolioLink && (
                  <li>
                    👨‍💻 All of my projects are available at{' '}
                    <a
                      href={profileData.work.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {profileData.work.portfolioLink}
                    </a>
                  </li>
                )}

                {profileData.work.blogLink && (
                  <li>
                    📝 I regularly write articles on{' '}
                    <a
                      href={profileData.work.blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {profileData.work.blogLink}
                    </a>
                  </li>
                )}

                {profileData.work.resumeLink && (
                  <li>
                    📄 Know about my experiences{' '}
                    <a
                      href={profileData.work.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {profileData.work.resumeLink}
                    </a>
                  </li>
                )}

                {profileData.work.funFact && (
                  <li>⚡ Fun fact: {profileData.work.funFact}</li>
                )}
              </ul>
            </div>

            {/* Social Media Section */}
            {Object.entries(profileData.social).some(([_, value]) => value) && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(profileData.social).map(([platform, username]) => {
                    if (!username) return null;
                    return (
                      <a
                        key={platform}
                        href={getSocialLink(platform as keyof ProfileData['social'], username)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* GitHub Add-ons Section */}
            {(profileData.addons.showVisitorsBadge ||
              profileData.addons.showGithubTrophy ||
              profileData.addons.showGithubStats ||
              profileData.addons.showTopSkills) && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">GitHub Stats</h3>
                <div className="space-y-4">
                  {profileData.addons.showVisitorsBadge && (
                    <img
                      src="https://komarev.com/ghpvc/?username=yourusername&label=Profile%20views&color=0e75b6&style=flat"
                      alt="profile views"
                    />
                  )}

                  {profileData.addons.showGithubTrophy && (
                    <img
                      src="https://github-profile-trophy.vercel.app/?username=yourusername"
                      alt="github trophy"
                    />
                  )}

                  {profileData.addons.showGithubStats && (
                    <img
                      src={`https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=${profileData.addons.githubStatsTheme}`}
                      alt="github stats"
                    />
                  )}

                  {profileData.addons.showTopSkills && (
                    <img
                      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=${profileData.addons.topSkillsTheme}`}
                      alt="top languages"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;