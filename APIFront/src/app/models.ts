export interface User {
  User_ID: number;
  User_Name: string;
}

export interface Puppy {
  id: number;
  name: string;
  brred: string;
  age: number;
  sex: string;
}

export interface Event {
  Event_ID: number;
  Location_latitude: number;
  Location_longitude: number;
  Description: string;
  Photo: string;
  Date: Date;
  Host_ID: number;
  Spot_ID: number;
  Participants_min: number;
  Participants_max: number;
  Participants_number: number;
  Sport: string;
}
