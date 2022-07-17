import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function Feed() {
    const onFormSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => {
        async function getCities() {
            const citiesCol = collection(db, 'cities');
            const citySnapshot = await getDocs(citiesCol);
            const cityList = citySnapshot.docs.map(doc => doc.data());
            return cityList;
        }

        getCities();
    },[])


    return (
        <div className="flex-6 bg-white mx-3">
            <div className="rounded-xl border border-gray-300">
                <div className="flex items-center pt-3 px-3 pb-1 gap-2">
                    <Avatar />
                    <form className="w-full" onSubmit={onFormSubmit}>
                        <input type="text" placeholder="Ask your network for advice" 
                        className="w-full p-3 rounded-full border border-gray-400 cursor-pointer focus:outline-none hover:bg-tint-black"/>
                        <button type="submit" className="hidden">Submit</button>
                    </form>
                </div>

                <div className="flex pb-1 justify-evenly">
                    <InputOption Icon={ImageIcon} color="#1976d2" title="Photo" />
                    <InputOption Icon={YouTubeIcon} color="#5f9b41" title="Video" />
                    <InputOption Icon={EventIcon} color="#c37d16" title="Event" />
                    <InputOption Icon={ArticleIcon} color="#e16745" title="Write article" />
                </div>                
            </div>
        </div>
    )
};

export default Feed;