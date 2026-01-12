// Import React to fix namespace 'React' not found error for React.ReactNode
import React from 'react';

export interface SupportCategory {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  content: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
