
export class Post {

    constructor(PostName:string, PostDiscription:string) {
      this.postDiscription = PostDiscription;
      this.postName = PostName;
            this.style = "New post";
      
    };
    public postDiscription:string;
    public postName: string;
    public style: string;
    

  }