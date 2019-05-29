export default class Post {
    public postData: string;
    public likeCount: number;
    public subscribeCount: number;

    public commentList: [];

    constructor() {
        this.postData = '';
        this.likeCount = 0;
        this.subscribeCount = 0;

        this.commentList = [];
    }

    /** UTITLITY METHOD */
    public static getPostList(): Post[] {
        const postList: Post[] = [];

        const post1 = new Post();
        post1.postData = 'first';
        postList.push(post1);

        const post2 = new Post();
        post2.postData = 'second';
        postList.push(post2);

        return postList;
    }
}