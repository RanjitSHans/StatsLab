export interface ServiceItem {
  title: string;
  description: string;
  isOutlier?: boolean; // For the specific "Rose" accent requirement
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
}

export type PageView = 'home' | 'services' | 'contact';