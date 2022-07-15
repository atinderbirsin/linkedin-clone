import { Avatar } from "@mui/material";

function HeaderOption({avatar , Icon, text}) {
    return (
        <div className="flex flex-col items-center text-gray-400 hover:text-black cursor-pointer">
            {Icon && <Icon />}
            {avatar && <Avatar src={avatar} className="!h-8 !w-8" />}
            <h3 className="text-sm font-normal">{text}</h3>
        </div>
    )
};

export default HeaderOption;