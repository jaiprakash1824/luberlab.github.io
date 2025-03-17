

import { createContext, useState } from 'react';

export const ResearchContext = createContext();

export const ResearchProvider = ({ children }) => {
  const [research] = useState({
    sections: {
      biosciences: {
        title: "Health and Biosciences",
        content: [
          "Our lab is dedicated to improving human health through cutting-edge research that combines biology with advanced computer technologies. We study the tiny microbes living in our bodies, particularly in our gut, to understand how they affect our health and even our physical performance. Using powerful DNA sequencing tools, we're discovering new types of bacteria and exploring how they might be used to develop new treatments.",
          "We're also making strides in cancer research, using artificial intelligence to analyze medical images and genetic information. This helps us better understand cancer risks and how tumors develop, potentially leading to more accurate diagnoses and personalized treatments.",
          "Our work extends to studying human genetics across different populations, looking at how our DNA influences our health and susceptibility to diseases. We're even peering into humanity's past by examining ancient DNA, which gives us insights into how diseases have evolved over time.",
          "In addition, we're developing new ways to look at tissues and cells using advanced imaging techniques. These tools allow doctors to see diseases in incredible detail, potentially catching problems earlier and more accurately.",
          "All of this research is supported by our work in bioinformatics – essentially, using computers to make sense of vast amounts of biological data. We're creating new software tools that help scientists visualize and understand complex genetic information.",
        ]
      },
      hci: {
        title: "Human-Computer Interaction and Interactive Visualization",
        content: [
          "This category explores the intersection of AI, machine learning, and user interfaces. It focuses on creating intuitive tools and platforms for visualizing complex datasets like genome interaction maps and other multi-dimensional data, enabling users to interact with and explore data insights.",
          "It covers web-based visualizations, immersive VR tools, and interfaces designed for both scientific and clinical applications, enhancing user engagement and decision-making through AI-driven visual analytics."
        ]
      },
      ai: {
        title: "Core Machine Learning & AI",
        content: [
          "This category covers foundational AI and machine learning techniques across various domains. It includes Vision-Based Machine Learning, which focuses on applying machine learning to visual data like images and medical scans for tasks such as classification, segmentation, and diagnosis.",
          "Generative AI and Deep Learning explores the development of deep neural networks for generating synthetic data, images, and text, focusing on models like GANs and VAEs.",
          "Responsible AI emphasizes ethical considerations, fairness, and bias mitigation in AI, ensuring that models are transparent, explainable, and equitable in their predictions and decisions."
        ]
      }
    }
  });

  return (
    <ResearchContext.Provider value={{ research }}>
      {children}
    </ResearchContext.Provider>
  );
};
