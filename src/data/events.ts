interface Event {
    name: string;
    date: string;
    price: number;
    quantity: number;
  }
  
  const events: Event[] = [
    {
      name: "Music Festival",
      date: "2023-06-15",
      price: 100,
      quantity: 500
    },
    {
      name: "Charity Run",
      date: "2023-07-04",
      price: 30,
      quantity: 2000
    },
    {
      name: "Art Exhibition",
      date: "2023-08-21",
      price: 50,
      quantity: 300
    },
    {
      name: "Tech Conference",
      date: "2023-09-11",
      price: 250,
      quantity: 1000
    },
    {
      name: "Wine Tasting",
      date: "2023-10-05",
      price: 75,
      quantity: 150
    },
    {
      name: "Comedy Show",
      date: "2023-10-18",
      price: 60,
      quantity: 300
    },
    {
      name: "Cooking Class",
      date: "2023-11-08",
      price: 100,
      quantity: 20
    },
    {
      name: "Book Fair",
      date: "2023-11-25",
      price: 10,
      quantity: 10000
    },
    {
      name: "Yoga Retreat",
      date: "2023-12-12",
      price: 500,
      quantity: 50
    },
    {
      name: "New Year's Eve Party",
      date: "2023-12-31",
      price: 150,
      quantity: 400
    }
  ];
  
  export default events;
  