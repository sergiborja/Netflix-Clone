export interface Film {
  cover: string;
  description: string;
  gender: Array<string>;
  name: string;
  time: string;
  ytId: string;
  __v: number;
  _id: string;
}

export interface UserMemberList {
  character: string;
  nick: string;
}

export interface Admin {
  nick: string;
  email: string;
  password: string;
  members: [
    {
      nick: string;
      character: string;
    }
  ];
  films: Array<string>;
  character: string;
}
