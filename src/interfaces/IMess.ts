export interface IMess {
  _id: string;
  messName: string;
  allMember: IMessMember[];
  totalBorder: 4;
  month: string[];
  admin: IMessMember;
  createdAt: string;
  updatedAt: string;
}

export interface IMessMember {
  _id: string;
  email: string;
  name: string;
  avatar: string;
}
