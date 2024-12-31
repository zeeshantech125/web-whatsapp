import React from 'react';
import { X } from 'lucide-react';
import { Settings } from '../types';

interface SettingsModalProps {
  settings: Settings;
  onClose: () => void;
  onSave: (settings: Settings) => void;
}

export function SettingsModal({ settings, onClose, onSave }: SettingsModalProps) {
  const [localSettings, setLocalSettings] = React.useState(settings);

  const handleSave = () => {
    onSave(localSettings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button onClick={onClose} className="p-1">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Image URLs (one per line)</label>
            <textarea
              value={localSettings.images.join('\n')}
              onChange={(e) => setLocalSettings({
                ...localSettings,
                images: e.target.value.split('\n').filter(Boolean)
              })}
              className="w-full h-32 p-2 border rounded"
              placeholder="https://example.com/image1.jpg"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Links (one per line)</label>
            <textarea
              value={localSettings.links.join('\n')}
              onChange={(e) => setLocalSettings({
                ...localSettings,
                links: e.target.value.split('\n').filter(Boolean)
              })}
              className="w-full h-32 p-2 border rounded"
              placeholder="https://example.com"
            />
          </div>
        </div>
        
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}