let arguments = process.argv.slice(2);
let posts=[{postid:1, post:"hello"},{postid:2, post:"merhaba"}];

let listPost =()=>{
posts.map((post)=>{
    console.log(post.post);
});
};

async function addPost(newPost){
    posts.push(newPost);
}
addPost({postid:arguments[0], post:arguments[1]}).then(listPost()).catch((error)=>console.log(error));
