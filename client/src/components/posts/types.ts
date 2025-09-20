export interface PostT {
  id: string;
  title: string;
  comments: CommentT[];
}

export interface CommentT {
  id: string;
  content: string;
}
