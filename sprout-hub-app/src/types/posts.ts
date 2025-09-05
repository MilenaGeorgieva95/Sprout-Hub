export interface Post {
  title: string;
  category: string;
  text: "string";
  imageUrl: string;
  details: string;
  rating: number
}

export interface DbPost extends Post {
  objectId: string;
  ownerId: Pointer;
  _createdOn: number;
}
interface Pointer {
  __type: "Pointer";
  className: string;
  objectId: string;
}
