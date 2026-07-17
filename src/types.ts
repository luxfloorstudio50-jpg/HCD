export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  priceEstimate: string;
  duration: string;
  features: string[];
  recommendedFor: string;
}

export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  isLocalGuide: boolean;
  avatarUrl?: string;
  photosCount?: number;
}

export interface DetailingEstimate {
  carSize: 'chico' | 'mediano' | 'grande' | 'suv_premium';
  servicePackage: string;
  addOns: string[];
  totalPrice: number;
}
