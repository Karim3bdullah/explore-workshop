import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import SessionList from "../components/SessionList";
import WorkshopDetails from "../components/WorkshopDetails";
import workshopsData from "../assets/workshops.json";

const WorkshopSessions = () => {
  const [sessions, setSessions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setSessions(workshopsData);
  }, []);

  const toggleFavorite = (sessionId) => {
    setFavorites((prev) =>
      prev.includes(sessionId)
        ? prev.filter((id) => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      const newFiltered = sessions.filter((session) => {
        const name = session.name?.toLowerCase() || "";
        const host = session.host?.toLowerCase() || "";
        const matchesSearch =
          name.includes(searchQuery.toLowerCase()) ||
          host.includes(searchQuery.toLowerCase());
        const matchesType =
          selectedType === "All" || session.type === selectedType;
        return matchesSearch && matchesType;
      });
      setFiltered(newFiltered);
    }, 500);
    return () => clearTimeout(delay);
  }, [sessions, searchQuery, selectedType]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={handleTypeChange}
        />
        <SessionList
          sessions={filtered}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onSelectSession={setSelectedSession}
        />
      </main>
      {selectedSession && (
        <WorkshopDetails
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </div>
  );
};

export default WorkshopSessions;
