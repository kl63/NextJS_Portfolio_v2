// components/chromePage/chromePage.jsx
import React, { useState } from 'react';
import styles from '../../styles/chromePage/chromePage.module.css';
import bookmarks from '../../jsonData/chromePage/chromeData.json'; // Import the JSON file

const ChromePage = () => {
  const [query, setQuery] = useState('');

  // Function to get the appropriate greeting based on the time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{`${getGreeting()}, Kevin!`}</h1>
      </header>
      <main className={styles.main}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>Google Search</button>
        </form>
        <section className={styles.bookmarks}>
          <h2>Bookmarks</h2>
          <ul className={styles.bookmarkList}>
            {bookmarks.map((bookmark) => (
              <li key={bookmark.url} className={styles.bookmarkItem}>
                <a href={bookmark.url} className={styles.bookmarkLink} target="_blank" rel="noopener noreferrer">
                  {bookmark.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Google</p>
      </footer>
    </div>
  );
};

export default ChromePage;
