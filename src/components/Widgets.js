import GroupsIcon from '@mui/icons-material/Groups';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';


const sidebarOption = item => {
    return (
        <div className="text-xs text-gray-500 cursor-pointer flex px-2 items-center gap-2 hover:bg-tint-black hover:text-black">
            <GroupsIcon />  {item}
        </div>
    )
}

const news = [
    {
        title: 'Apexon plans to hire 1,000',
        time: '4h ago',
        readers: '58,405 readers'
    },
    {
        title: 'WFH attracts more women to work',
        time: '4h ago',
        readers: '3,842 readers'
    },
    {
        title: 'Meet the highest-paid IT CEO"s',
        time: '4h ago',
        readers: '12,345 readers'
    },
    {
        title: 'Shopify laying of 10% of workforce',
        time: '4h ago',
        readers: '58,405 readers'
    },
    {
        title: 'Neu problems for tata',
        time: '4h ago',
        readers: '58,405 readers'
    },
]

function Widgets() {
    return (
        <div>
        <div className={`flex flex-col items-center rounded-xl w-[253px] border border-gray-300 pt-3 bg-white transition-[padding] duration-1000`}>
                <div className="w-full mb-2">
                    <div className="flex items-center justify-between px-2">
                        <div className="text-md font-medium">LinkedIn News</div>
                        <div className="cursor-pointer opacity-0 hover:opacity-100 hover:bg-gray-300 hover:rounded-full"><KeyboardArrowDownIcon /></div>
                    </div>

                    {/* <div className="mb-4">
                        {sidebarOption("javascript")}
                        {sidebarOption("The Spark Foundation Network")}
                        {sidebarOption("The Frontend Developer Group")}
                    </div> */}
                </div>

                <div className='w-full'>

                </div>

                {/* <div className="w-full">
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
                </div> */}

                <div className="w-full">
                    {/* <div className="flex items-center justify-between px-2 mb-2">
                        <div className="text-sm text-blue-70 font-medium hover:border-b hover:border-blue-70">Events</div>
                        <div className="cursor-pointer opacity-0 hover:opacity-100 hover:bg-gray-300 hover:rounded-full"><AddIcon /></div>
                    </div> */}

                    <div className="flex items-center justify-between px-2 mb-2">
                        <div className="text-sm text-tint cursor-pointer font-medium ">Show more <KeyboardArrowDownIcon /></div>
                    </div>
                </div>

                {/* <div className="w-full border-t flex items-center justify-center p-3 cursor-pointer"> */}
                    {/* <p className="text-sm font-semibold text-gray-500">Show more</p> */}
                {/* </div> */}
            </div>
        </div>
    )
};

export default Widgets;