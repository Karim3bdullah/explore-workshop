import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, User } from "lucide-react";

const WorkshopDetails = ({ session, onClose }) => {
  if (!session) return null;


  const handleEnroll = () => {
    alert(`✅ You have successfully enrolled in "${session.name}"!`);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 overflow-y-auto max-h-[90vh]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* image*/}
        <img
          src={session.image}
          alt={session.name}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        {/* host & address*/}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-gray-800">{session.name}</h2>
          <span className="text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
            {session.type}
          </span>
        </div>

        <p className="text-gray-600 mb-4 flex items-center gap-2">
          <User size={18} /> {session.host}
        </p>

        {/* time & location  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 mb-5">
          <p className="flex items-center gap-2">
            <Calendar size={18} /> {session.date}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={18} /> {session.time}
          </p>
          {session.location && (
            <p className="flex items-center gap-2">
              <MapPin size={18} /> {session.location}
            </p>
          )}
        </div>

        {/* description*/}
        {session.description && (
          <div className="mb-5">
            <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
            <p className="text-gray-600 leading-relaxed">{session.description}</p>
          </div>
        )}

        {/* requirements*/}
        {session.requirements && (
          <div className="mb-5">
            <h3 className="font-semibold text-gray-800 mb-1">Requirements</h3>
            <p className="text-gray-600">{session.requirements}</p>
          </div>
        )}

        {/* agenda*/}
        {session.agenda && session.agenda.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Agenda</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {session.agenda.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* buttons*/}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded-lg transition-colors"
          >
            إغلاق
          </button>

          <button
            onClick={handleEnroll}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
           سجل الآن
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkshopDetails;
