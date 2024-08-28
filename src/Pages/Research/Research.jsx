
import React, { useState, useEffect } from 'react'; 
import { Card, Typography } from 'antd'; 
import './Research.css';
import Papa from 'papaparse';

const { Title } = Typography;

function ResearchPage() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}/research.csv`); 
        if (!response.ok) throw new Error('Network response was not ok'); 
        const text = await response.text(); 
        const results = Papa.parse(text, { header: true, skipEmptyLines: true });
        setPublications(results.data.slice(0, 3)); 
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    }

    fetchPublications();
  }, []);

  return (
    <div className="page-container">
      <div className="research-publication-container">
        <Card className="research-card">
          <Title level={4} className="main-title">Generative Artificial Intelligence</Title>
          <p>At the forefront of technological innovation, our research into Generative AI is transforming how machines interact with the world. From crafting human-like text and art to generating solutions across industries, Generative AI represents the next evolution of artificial intelligence. Our team explores cutting-edge techniques in deep learning, neural networks, and natural language processing to create AI systems capable of autonomous creativity</p>
        </Card>
        <Card className="publications-card" title={<h3 className="publications-title">Latest Publications in <span className="genai-text">GenAI</span></h3>}>
          <div className="publications-list">
            {publications.map((item, index) => (
              <div className="publication-item" key={index}>
                <a href={item.Link} target="_blank" rel="noopener noreferrer" className="publication-content">
                  <p className="publication-name">{item.Title}</p>
                  <p className="publication-authors">{item.Authors}</p>
                </a>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ResearchPage;




