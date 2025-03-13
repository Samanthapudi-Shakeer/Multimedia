import React from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Unit } from '../types';

interface UnitCardProps {
  unit: Unit;
  onClick: (unit: Unit) => void;
}

export function UnitCard({ unit, onClick }: UnitCardProps) {
  return (
    <div 
      onClick={() => onClick(unit)}
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl hover:scale-105 border border-gray-100"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Unit {unit.id}</h3>
          </div>
          <h4 className="text-lg text-gray-700">{unit.title}</h4>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {unit.topics.length} topics
            </span>
          </div>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
}