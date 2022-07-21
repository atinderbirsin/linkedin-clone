import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { setDoc } from "firebase/firestore"; 
import Post from "./Post";
import { doc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";




function Feed() {

    const onFormSubmit = e => {
        e.preventDefault();

        try {
            const newCityRef = doc(collection(db, "posts"));

            const data = {
                name: "Atinderbir Singh",
                description: "This is a test",
                message: input,
                photoUrl: '',
                createdAt: serverTimestamp(),
            }
            setInput('');

            const setData = async() => {
                await setDoc(newCityRef, data);
            };

            setData();
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const [posts,setPosts] = useState([]);
    const [input,setInput] = useState('');



    useEffect(() => {
        async function getPosts() {
            const postsCol = collection(db, 'posts');
            const queryOrder = query(postsCol, orderBy("createdAt", "desc"))
            const Documents = await getDocs(queryOrder);
            const posts = Documents.docs.map(doc => doc.data());
            setPosts(posts)
          }
          getPosts();
    },[input])


    return (
        <div className="flex-6 mx-3">
            <div className="rounded-xl border border-gray-300 mb-4 bg-white">
                <div className="flex items-center pt-3 px-3 pb-1 gap-2">
                    <Avatar />
                    <form className="w-full" onSubmit={onFormSubmit}>
                        <input type="text" value={input} onChange={(e) => (setInput(e.target.value))} placeholder="Ask your network for advice" 
                        className="w-full p-3 rounded-full border border-gray-400 cursor-pointer focus:outline-none hover:bg-tint-black"/>
                        <button type="submit" className="hidden">Submit</button>
                    </form>
                </div>

                <div className="flex pb-1 px-3 justify-between">
                    <InputOption Icon={ImageIcon} color="#1976d2" title="Photo" />
                    <InputOption Icon={YouTubeIcon} color="#5f9b41" title="Video" />
                    <InputOption Icon={EventIcon} color="#c37d16" title="Event" />
                    <InputOption Icon={ArticleIcon} color="#e16745" title="Write article" />
                </div>                
            </div>

            <div>
                {(posts.length > 0) &&  posts.map(({createdAt, name, description,message, photoUrl}) => {
                    return (
                        <Post key={createdAt} name={name} description={description} message={message} photoUrl={photoUrl}/> 
                    )
                })}
            </div>

        </div>
    )
};

export default Feed;