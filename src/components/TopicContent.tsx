import React, { useState } from 'react';
import { CheckCircle2, XCircle, Trophy, Frown, Medal } from 'lucide-react';
import { Topic } from '../types';

interface TopicContentProps {
  topic: Topic;
}

export function TopicContent({ topic }: TopicContentProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const calculateScore = () => {
    if (!topic.quiz) return 0;
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === topic.quiz?.questions[index].correctAnswer
    ).length;
    return (correctAnswers / topic.quiz.questions.length) * 100;
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    const newScore = calculateScore();
    setScore(newScore);
    setShowResults(true);
    setShowFeedback(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers([]);
    setShowResults(false);
    setShowFeedback(false);
  };

  const getFeedbackContent = () => {
    if (score === 100) {
      return {
        icon: <Trophy className="text-yellow-500 animate-bounce" size={48} />,
        message: "Perfect Score! Outstanding work!",
        description: "You've mastered this topic completely!"
      };
    } else if (score >= 80) {
      return {
        icon: <Medal className="text-blue-500" size={48} />,
        message: "Great Job!",
        description: "You're doing really well! Keep it up!"
      };
    } else {
      return {
        icon: <Frown className="text-gray-500" size={48} />,
        message: "Keep Learning!",
        description: "Don't give up! Review the material and try again."
      };
    }
  };

  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{topic.title}</h2>
        <div className="text-gray-600 space-y-4">
          {topic.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {topic.imageUrl && (
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={topic.imageUrl} 
            alt={topic.title}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {topic.videoUrl && (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={topic.videoUrl}
            className="w-full h-[400px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {topic.quiz && (
        <div className="quiz-container">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Knowledge Check</h3>
            <button
              onClick={() => {
                if (showQuiz && showResults) {
                  resetQuiz();
                }
                setShowQuiz(!showQuiz);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showQuiz ? (showResults ? 'Retry Quiz' : 'Hide Quiz') : 'Take Quiz'}
            </button>
          </div>

          {showQuiz && (
            <div className="space-y-6">
              {topic.quiz.questions.map((question, qIndex) => (
                <div key={question.id} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="font-medium text-gray-800 mb-4">{question.text}</p>
                  <div className="space-y-2">
                    {question.options.map((option, oIndex) => (
                      <label
                        key={oIndex}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
                          ${showResults
                            ? oIndex === question.correctAnswer
                              ? 'bg-green-50 text-green-700'
                              : selectedAnswers[qIndex] === oIndex
                              ? 'bg-red-50 text-red-700'
                              : ''
                            : selectedAnswers[qIndex] === oIndex
                            ? 'bg-blue-50 text-blue-700'
                            : ''
                          }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          checked={selectedAnswers[qIndex] === oIndex}
                          onChange={() => handleAnswerSelect(qIndex, oIndex)}
                          disabled={showResults}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>{option}</span>
                        {showResults && oIndex === question.correctAnswer && (
                          <CheckCircle2 className="text-green-500 ml-2" size={20} />
                        )}
                        {showResults && selectedAnswers[qIndex] === oIndex && oIndex !== question.correctAnswer && (
                          <XCircle className="text-red-500 ml-2" size={20} />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              {!showResults && selectedAnswers.length === topic.quiz.questions.length && (
                <button
                  onClick={handleSubmitQuiz}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Answers
                </button>
              )}

              {showFeedback && (
                <div className="mt-8 text-center p-6 bg-white rounded-xl shadow-md">
                  {getFeedbackContent().icon}
                  <h4 className="text-xl font-bold mt-4">{getFeedbackContent().message}</h4>
                  <p className="text-gray-600 mt-2">{getFeedbackContent().description}</p>
                  <p className="text-2xl font-bold mt-4">{score}%</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}