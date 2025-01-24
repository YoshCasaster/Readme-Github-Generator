import React from 'react';
import { ProfileData } from '../App';

interface AddonsSectionProps {
  addons: ProfileData['addons'];
  onChange: (addons: ProfileData['addons']) => void;
}

const themes = [
  'radical',
  'merko',
  'gruvbox',
  'tokyonight',
  'onedark',
  'cobalt',
  'synthwave',
  'highcontrast',
  'dracula',
];

function AddonsSection({ addons, onChange }: AddonsSectionProps) {
  const handleChange = (key: keyof ProfileData['addons'], value: boolean | string) => {
    onChange({ ...addons, [key]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={addons.showVisitorsBadge}
            onChange={(e) => handleChange('showVisitorsBadge', e.target.checked)}
            className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
          />
          <span className="text-sm font-medium text-gray-700">Display visitors count badge</span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={addons.showGithubTrophy}
            onChange={(e) => handleChange('showGithubTrophy', e.target.checked)}
            className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
          />
          <span className="text-sm font-medium text-gray-700">Display GitHub trophy</span>
        </label>

        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={addons.showGithubStats}
              onChange={(e) => handleChange('showGithubStats', e.target.checked)}
              className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-sm font-medium text-gray-700">Display GitHub stats card</span>
          </label>
          
          {addons.showGithubStats && (
            <div className="ml-7">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Theme
              </label>
              <select
                value={addons.githubStatsTheme}
                onChange={(e) => handleChange('githubStatsTheme', e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={addons.showTopSkills}
              onChange={(e) => handleChange('showTopSkills', e.target.checked)}
              className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-sm font-medium text-gray-700">Display top skills</span>
          </label>
          
          {addons.showTopSkills && (
            <div className="ml-7">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Theme
              </label>
              <select
                value={addons.topSkillsTheme}
                onChange={(e) => handleChange('topSkillsTheme', e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddonsSection;