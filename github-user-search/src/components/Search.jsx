import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(query);
      setUser(data); // نجح
    } catch (err) {
      setError(true); // فشل
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ابحث عن مستخدم GitHub"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">بحث</button>
      </form>

      {/* حالة التحميل */}
      {loading && <p>Loading...</p>}

      {/* حالة الخطأ */}
      {error && <p>"Looks like we cant find the user"</p>}

      {/* حالة النجاح */}
      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt="User avatar"
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
