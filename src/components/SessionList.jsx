import React from "react";

const SessionList = ({ sessions, favorites, onToggleFavorite, onSelectSession }) => {
  if (!sessions || sessions.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
         لا توجد ورش مطابقة للبحث الحالي.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
        >
          {/* workshop image */}
          {session.image && (
            <img
              src={session.image}
              alt={session.name}
              className="w-full h-40 object-cover rounded-xl mb-3"
            />
          )}

          {/* workshop name */}
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {session.name || "ورشة بدون اسم"}
          </h3>

          {/* host */}
          <p className="text-sm text-gray-500 mb-2">
            👤 المضيف:{" "}
            <span className="font-medium">{session.host || "غير محدد"}</span>
          </p>

          {/* type */}
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
            {session.type || "نوع غير معروف"}
          </span>

          {/*date & time */}
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
            <div className="flex items-center gap-1">
              <i className="fa-regular fa-calendar"></i>
              <span>{session.date || "—"}</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-regular fa-clock"></i>
              <span>{session.time || "—"}</span>
            </div>
          </div>

          {/* buttons */}
          <div className="flex justify-between items-center mt-auto pt-2">
            <button
              onClick={() => onToggleFavorite(session.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                favorites.includes(session.id)
                  ? "bg-pink-100 text-pink-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {favorites.includes(session.id) ? "❤️ مفضلة" : "🤍 أضف للمفضلة"}
            </button>

          
            <button
              onClick={() => onSelectSession(session)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              التفاصيل
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionList;
