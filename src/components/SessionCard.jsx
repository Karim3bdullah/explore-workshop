import React from "react";
import { User, Calendar, Clock, Bookmark } from "lucide-react";

const SessionCard = ({ session, isFavorite, onToggleFavorite }) => {
  const typeColors = {
    Technical: "bg-blue-100 text-blue-700",
    Creative: "bg-purple-100 text-purple-700",
    Business: "bg-green-100 text-green-700"
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800">{session.name}</h3>
        <button onClick={() => onToggleFavorite(session.id)}>
          <Bookmark
            size={20}
            className={isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
          />
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <User size={16} className="mr-2" />
          <span>{session.host}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar size={16} className="mr-2" />
          <span>{session.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={16} className="mr-2" />
          <span>{session.time}</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[session.type]}`}>
          {session.type}
        </span>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SessionCard;
