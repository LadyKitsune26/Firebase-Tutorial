import React from 'react'
import './App.css';
import { collection, addDoc, getDocs } from "firebase/firestore"
import { auth, db, } from './Firebase/init';
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        onAuthStateChanged } from "firebase/auth"

function App() {
const [user, setUser] = React.useState({});
const [loading, setLoading] = React.useState(true)


  function createPost() {
    const post = {
      title: "Land a 100K job",
      description: "Finish Frontend Simplified",
    };
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts(){
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map(elem => elem.data());
    console.log(posts)
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      console.log(user);
      if(user) {
        setUser(user)
      }
    })
  }, [])
  
  function register(){
    console.log('register')
    createUserWithEmailAndPassword(auth, 'email@email.com', '1234test')
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function login(){
    signInWithEmailAndPassword( auth, 'email@email.com', '1234test' )
    .then(({user}) => {
      console.log(user)
      setUser(user);
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  function logout(){
    signOut(auth)
    setUser({})
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Creat Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
    </div>
  );
}

export default App;
