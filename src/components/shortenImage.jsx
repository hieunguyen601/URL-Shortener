import { useState } from "react";
import './shortenImage.css';

export default function ShortenImage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {

    setError("");
    setShortUrl("");
    setUrl("");

    if (!url.trim()) {
      setError("Please enter a URL!");
      return;
    }

    setLoading(true);
    try {

      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

      if (response.ok) {
        const data = await response.text();
        if (data.startsWith("Error")) {
          setError(data);
        } else {
          setShortUrl(data); 
        }
      } else {
        setError(`Failed to shorten URL. Server responded with status: ${response.status}`);
      }
    } catch (err) {
      setError("Network Error: Could not connect to the shortening service. Please check your internet connection or try again later.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (shortUrl) {
      const textArea = document.createElement("textarea");
      textArea.value = shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setTimeout(() => setError(""), 2000);
      } catch (err) {
        setError("Failed to copy URL.");
        console.error("Copy failed:", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <h1 className="title">
          URL Shortener
        </h1>

        <div className="shortening">
          <input
            type="text"
            className="shortening-input"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
          />
          <button
            className="shorten-button"
            onClick={handleShorten}
            disabled={loading}
          >
            {loading ? "Shortening..." : "Shorten It!"}
          </button>
        </div>

        {error && (
          <p className={`result ${error.includes("Copied") ? "success-message" : "error-message"}`}>
            {error}
          </p>
        )}

        {shortUrl && !error.includes("Copied") && (
          <div className="short-url-display">
            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
              className="short-url-link"
            >
              {shortUrl}
            </a>
            <button
              onClick={copyToClipboard}
              className="copy-button"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}