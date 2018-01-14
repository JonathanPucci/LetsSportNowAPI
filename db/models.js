interface User {
  User_ID: int;
  User_Name: string
}

interface Event {
  Event_ID: int;
  Location_latitude: int;
  Location_longitude: int;
  Description: string;
  Photo: string;
  Date: Date;
  Host_ID: int;
  Spot_ID: int;
  Participants_min: int;
  Participants_max: int;
  Participants_number: int;
  Sport: string
}

interface Spot {
  Spot_ID: int;
  Spot_longitude : int;
  Spot_latitude : int;
  Fields : string;
}

module.exports = {
  UserModel: User;
  EventModel: Event;
  SpotModel : Spot;
};
