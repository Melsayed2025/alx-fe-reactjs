import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos });

      if (!data.items || data.items.length === 0) {
        setError("No users found.");
      } else {
        setResults(data.items);
      }
    } catch (err) {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-4 rounded space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Advanced GitHub Search</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Location (e.g. Cairo)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 shadow rounded flex flex-col items-center"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
            <h3 className="font-bold mt-3">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
