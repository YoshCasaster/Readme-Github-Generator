import React from 'react';
import { Twitter, Facebook, Instagram, MessageCircle, Linkedin, Phone, Send } from 'lucide-react';
import { ProfileData } from '../App';

interface SocialSectionProps {
  social: ProfileData['social'];
  onChange: (social: ProfileData['social']) => void;
}

function SocialSection({ social, onChange }: SocialSectionProps) {
  const handleChange = (platform: keyof ProfileData['social'], value: string) => {
    onChange({ ...social, [platform]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
            <Twitter className="h-4 w-4" />
            <span>Twitter Username</span>
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">@</span>
            </div>
            <input
              type="text"
              value={social.twitter}
              onChange={(e) => handleChange('twitter', e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="username"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
            <Facebook className="h-4 w-4" />
            <span>Facebook Username</span>
          </label>
          <input
            type="text"
            value={social.facebook}
            onChange={(e) => handleChange('facebook', e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="username"
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
            <Instagram className="h-4 w-4" />
            <span>Instagram Username</span>
          </label>
          <input
            type="text"
            value={social.instagram}
            onChange={(e) => handleChange('instagram', e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="username"
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
            <MessageCircle className="h-4 w-4" />
            <span>Discord Server ID</span>
          </label>
          <input
            type="text"
            value={social.discord}
            onChange={(e) => handleChange('discord', e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="server-id"
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn Username</span>
          </label>
          <input
            type="text"
            value={social.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="username"
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
            <Phone className="h-4 w-4" />
            <span>WhatsApp Number</span>
          </label>
          <input
            type="text"
            value={social.whatsapp}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="phone number"
          />
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
            <Send className="h-4 w-4" />
            <span>Telegram Username</span>
          </label>
          <input
            type="text"
            value={social.telegram}
            onChange={(e) => handleChange('telegram', e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="username"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialSection;