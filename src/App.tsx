import React, { useState } from 'react';
import { BookOpen, Video, Music, Code } from 'lucide-react';
import { units } from './data/units';
import { TopicContent } from './components/TopicContent';
import { UnitCard } from './components/UnitCard';

function App() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    setSelectedTopic(null);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else {
      setSelectedUnit(null);
    }
  };
  const handleHome = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else {
      setSelectedUnit(null);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center">
          <div className="flex items-center">
          {(selectedUnit || selectedTopic) && (
            <button
              onClick={handleBack}
              className="px-6 py-4 text-1xl font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              ← Back
            </button>
          )}
            <BookOpen className="h-12 w-12 text-blue-800" />
            <span className="ml-4 text-5xl font-semibold text-gray-900">Multimedia Learning</span>
          </div>
          <button
              onClick={handleHome}
              className="px-6 py-4 text-3xl font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </button>

        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        {/* Units Section */}
        {!selectedUnit && (
          <div className="flex flex-col space-y-12">
            {units.map((unit) => (
              <UnitCard 
                key={unit.id} 
                unit={unit} 
                onClick={handleUnitSelect} 
                className="p-12 text-3xl w-full bg-white shadow-lg rounded-3xl cursor-pointer hover:shadow-2xl transition-shadow"
              />
            ))}
          </div>
        )}

        {/* Topics Section */}
        {selectedUnit && !selectedTopic && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-10">{selectedUnit.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {selectedUnit.topics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic)}
                  className="bg-white rounded-3xl p-12 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
                >
                  <h3 className="text-3xl font-semibold text-gray-800 mb-4">{topic.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 text-2xl">
                    {topic.videoUrl && <Video size={30} />}
                    {topic.audioUrl && <Music size={30} />}
                    {topic.quiz && <Code size={30} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Topic Content Section */}
        {selectedTopic && (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-2xl leading-relaxed">
            <TopicContent topic={selectedTopic} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

