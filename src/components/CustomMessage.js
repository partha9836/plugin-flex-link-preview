// src/components/CustomMessage.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomMessage.css"; // Assuming the CSS file is in the same folder as CustomMessage.js

const CustomMessage = ({ message }) => {
  const [linkPreviews, setLinkPreviews] = useState([]);

  useEffect(() => {
    // Extract all URLs from the message body
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = message.source.body.match(urlRegex) || []; // Handle no matches

    // Use the API key from the environment variable
    const apiKey = process.env.REACT_APP_LINK_PREVIEW_API_KEY;

    const fetchLinkPreview = async (url) => {
      try {
        const response = await axios.get(
          `https://api.linkpreview.net?key=${apiKey}&q=${encodeURIComponent(
            url
          )}`
        );
        return response.data; // Return the link preview data
      } catch (error) {
        console.error("Error fetching link preview:", error);
        return null; // Return null in case of error
      }
    };

    const fetchAllLinkPreviews = async () => {
      const previews = await Promise.all(urls.map(fetchLinkPreview));
      // Filter out any null results
      setLinkPreviews(previews.filter(Boolean));
    };

    // Fetch all link previews
    if (urls.length > 0) {
      fetchAllLinkPreviews();
    }
  }, [message.source.body]);

  return (
    <div className="custom-message">
      <p>{message.source.body}</p>

      {linkPreviews.map((linkPreview, index) => (
        <div className="link-preview" key={index}>
          {linkPreview.image && (
            <img src={linkPreview.image} alt={linkPreview.title} />
          )}
          <h4>{linkPreview.title}</h4>
          <p>{linkPreview.description}</p>
          <a href={linkPreview.url} target="_blank" rel="noopener noreferrer">
            {linkPreview.url}
          </a>
        </div>
      ))}
    </div>
  );
};

export default CustomMessage;
