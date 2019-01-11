
export class Post {

    constructor(PostName:string, PostDescription:string) {
      this.postDescription = PostDescription;
      this.postName = PostName;
            this.style = "New post";
      
    };
    public postDescription:string;
    public postName: string;
    public style: string;
    

  }