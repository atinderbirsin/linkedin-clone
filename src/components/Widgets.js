import GroupsIcon from '@mui/icons-material/Groups';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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

const singleNews = news.map(n => {
    return (
        <li className='pl-3 cursor-pointer hover:bg-tint-black text-gray-500'>
            <h2 className='text-gray-900 font-semibold text-[15px]'><FiberManualRecordIcon className='!text-[12px] !fill-gray-500'/> {n.title}</h2>
            <p className='text-[11px]'>{n.time} <FiberManualRecordIcon className='!text-[5px]'/> {n.readers}</p>
        </li>
    )
})

function Widgets() {
    return (
        <div>
        <div className={`flex flex-col items-center rounded-xl w-[253px] border border-gray-300 pt-3 bg-white transition-[padding] duration-1000`}>
                <div className="w-full mb-2">
                    <div className="flex items-center justify-between px-2">
                        <div className="text-md font-medium">LinkedIn News</div>
                        <div className="cursor-pointer opacity-0 hover:opacity-100 hover:bg-gray-300 hover:rounded-full"><KeyboardArrowDownIcon /></div>
                    </div>

                </div>
                <div className='mb-3'>
                    <ul>
                            {singleNews}
                    </ul>
                </div>


                <div className="w-full pl-2">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <div className="text-sm text-tint cursor-pointer font-medium hover:bg-tint-black pl-1 p-0.5 rounded-md">Show more <KeyboardArrowDownIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Widgets;