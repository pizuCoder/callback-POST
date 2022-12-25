
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
    ];
function getPosts() {
    setTimeout(() => {
        let output = ""; 
        posts.forEach((post) => {
        output +=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    }, 1000);
}

const asyncPosts = async() => {


    function createPost (post) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Somethign went wrong');
            }
            }, 1000);
            
        });
    }

    function deletePost(){
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
            if (posts.length > 0) {
            posts.pop();
            resolve();
            } else {
            reject('Error: The array is already empty');
            }
            }, 1000);
        });
    }

    const updateLastUserActivityTime = Promise.resolve(new Date().getTime())

    return await Promise.all([createPost({ title: 'Post three', body: 'This is post three' }),getPosts(), updateLastUserActivityTime, deletePost(), getPosts() ])
}
asyncPosts().then(console.log(posts))

// createPost({ title: 'Post Three', body: 'This is post three' })
// .then(getPosts)
// .catch(err => console.log(err))

// createPost({ title: 'Post Four', body: 'This is post four' })
// .then(getPosts)
// .then(deletePost)
// .then(getPosts)
// .catch(err => console.log(err))



// deletePost().catch(err => console.log(err))

// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise ((resolve, reject) =>
// setTimeout(resolve, 2000, 'Goodbye')
// );
// Promise.all( [promise1, promise2, promise3]).then(values => console.log(values));



// createPost({ title: 'Post Three', body: 'This is post three' })
// .then(getPosts)
// .then(updateLastUserActivityTime)
// .catch(err => console.log(err))

// Promise.all([createPost({ title: 'Post Five', body: 'This is post five' }),getPosts(), updateLastUserActivityTime, deletePost(), getPosts()]).then(console.log(posts, updateLastUserActivityTime));