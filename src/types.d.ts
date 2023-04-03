export interface IRoomPhotoPhoto {
  pk: number;
  file: string;
  description: string;
}

export interface IRoomList {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IRoomPhotoPhoto[];
}

export interface IRoomOwner {
  name: string;
  avatar: string;
  username: string;
}

export interface IAmenity {
  pk: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface IRoomDetail extends IRoomList {
  created_at: string;
  updated_at: string;
  rooms: number;
  toilets: number;
  description: string;
  address: string;
  pet_friendly: true;
  kind: string;
  is_owner: boolean;
  is_liked: boolean;
  category: {
    pk: number;
    name: string;
    kind: string;
  };
  owner: IRoomOwner;
  amenities: IAmenity[];
}
