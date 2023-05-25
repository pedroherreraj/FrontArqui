export interface ApiPagination {
    pages: number;
    current: number;
    total: number;
  }
  export interface Event {
    name: string;
    date: string;
    price: number;
    quantity: number;
    location: string;
    latitude: number;
    longitude: number;
    event_id: string;
  }
  
  export interface Request {
    event: Event;
    quantity: number;
    status: string;
  }