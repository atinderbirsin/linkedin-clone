import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({name,message,photoUrl,description,}) {
    return (
        <div className="flex flex-col border border-gray-300 rounded-xl p-2 bg-white mb-3 transition-all duration-1000">
            <div className="flex p-2 items-center">
                <div>
                    <Avatar src={photoUrl}/>
                </div>
                <div className="ml-2">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-sm font-light text-gray-500">{description}</p>
                </div>
            </div>

            <div className="mb-3 p-2 pb-0">
                <p>{message}</p>
            </div>

            <div className="flex justify-between p-2">
                <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
                <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
};

export default Post;