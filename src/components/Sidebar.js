import { Avatar } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';

function Sidebar() {

    const sidebarOption = item => {
        return (
            <div className="text-xs text-gray-500 cursor-pointer flex px-2 items-center gap-2 hover:bg-tint-black hover:text-black">
                <GroupsIcon />  {item}
            </div>
        )
    }

    return (
        <div className="flex flex-col flex-2">
            <div className="flex flex-col items-center rounded-xl border border-gray-300 mb-2 bg-white">
                <img className="w-full h-14 rounded-t-xl -mb-15" src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                <Avatar />

                <div className="text-center p-2 mb-2">
                    <p className="mt-4 cursor-pointer border-b border-b-transparent hover:border-black font-semibold pb-0">Atinderbir Singh</p>

                    <p className="text-sm font-light text-gray-500">Student at saint soldier technical institute</p>
                </div>

                <div className="py-3 w-full border-t">
                    <div className="flex cursor-pointer justify-between px-2 hover:bg-tint-black">
                        <div>
                            <span className="text-sm font-light text-gray-500">Connections</span>
                            <p className="text-sm">Connect with alumni</p>
                        </div>
                        <div className="text-blue-70">
                            <p>29</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t">
                    <div className="flex cursor-pointer justify-between p-2 hover:bg-tint-black">
                        <div>
                            <span className="text-sm font-light text-gray-500">Access exclusive tools & insights</span>
                            <p className="text-sm">Connect with alumni</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t">
                    <div className="flex cursor-pointer justify-between p-2 hover:bg-tint-black hover:text-blue-70">
                        <div>
                            <span className="text-sm font-light !text-gray-500">Access exclusive tools & insights</span>
                            <p className="text-sm flex items-center gap-1"><InventoryIcon  className="!text-lg !fill-yellow-500"/>Try Premium for free</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t">
                    <div className="flex cursor-pointer justify-between p-2 hover:bg-tint-black">
                        <div>
                            <p className="text-sm flex items-center gap-1"><BookmarkIcon />My items</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-gray-300 pt-3 bg-white">
                <div className="w-full mb-2">
                    <div className="flex items-center justify-between px-2">
                        <div className="text-sm">Recent</div>
                        <div className="cursor-pointer opacity-0 hover:opacity-100 hover:bg-gray-300 hover:rounded-full"><KeyboardArrowDownIcon /></div>
                    </div>

                    <div className="mb-4">
                        {sidebarOption("javascript")}
                        {sidebarOption("The Spark Foundation Network")}
                        {sidebarOption("The Frontend Developer Group")}
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex items-center justify-between px-2">
                        <div className="text-sm text-blue-70 font-medium">Groups</div>
                        <div className="cursor-pointer opacity-0 hover:opacity-100 hover:bg-gray-300 hover:rounded-full"><KeyboardArrowDownIcon /></div>
                    </div>

                    <div className="mb-4">
                        {sidebarOption("javascript")}
                        {sidebarOption("The Spark Foundation Network")}
                        {sidebarOption("The Frontend Developer Group")}
                        {sidebarOption("See all")}
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <div className="text-sm text-blue-70 font-medium hover:border-b hover:border-blue-70">Events</div>
                        <div className="cursor-pointer opacity-0 hover:opacity-100 hover:bg-gray-300 hover:rounded-full"><AddIcon /></div>
                    </div>

                    <div className="flex items-center justify-between px-2 mb-2">
                        <div className="text-sm text-blue-70 font-medium border-transparent border-b hover:border-blue-70">Followed Hashtags</div>
                    </div>
                </div>

                <div className="w-full border-t flex items-center justify-center p-3 cursor-pointer">
                    <p className="text-sm font-semibold text-gray-500">Discover more</p>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;