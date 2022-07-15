import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

const headerOptions = [
    {
        icon : HomeIcon,
        text : "Home",
    },
    {
        icon : SupervisorAccountIcon,
        text : "My Network",
    },
    {
        icon : BusinessCenterIcon,
        text : "Jobs",
    },
    {
        icon : CommentIcon,
        text : "Messaging",
    },
    {
        icon : NotificationsIcon,
        text : "Notification",
    },
    {
        avatar : "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80",
        text : "me"
    }
];

function Header() {
    return (
        <div className="sticky flex justify-evenly py-2 border-b border-b-logo-gray top-0 z-50">
            <div className='flex items-center'>
                <img className="object-contain h-10 mr-3" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"/>

                <div className='flex pl-3 h-10 items-center bg-logo-gray rounded-sm'>
                    {/* {header-icon} */}
                    <SearchIcon />
                    <input type="text" className='outline-none border-none bg-transparent h-5' placeholder='Search'/>
                </div>
            </div>

            <div className='flex gap-5'>
                {
                    headerOptions.map(item => {
                        return (
                            <HeaderOption  key={item.text} text={item.text} Icon={item.icon} avatar={item.avatar}/>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Header;