import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  detailedDescription?: string;
  location: string;
  gallery?: string[];
  year?: string;
  client?: string;
  area?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}