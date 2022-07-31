import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/user/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const headerOptions = [
  {
    icon: HomeIcon,
    text: 'Home',
  },
  {
    icon: SupervisorAccountIcon,
    text: 'My Network',
  },
  {
    icon: BusinessCenterIcon,
    text: 'Jobs',
  },
  {
    icon: CommentIcon,
    text: 'Messaging',
  },
  {
    icon: NotificationsIcon,
    text: 'Notification',
  },
];

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();
  const user = useSelector(selectUser);

  const onSignoutClick = () => {
    dispatch(logout());
    signOut(auth);
  };

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    });

    return () => {
      window.removeEventListener('click', () => {});
    };
  }, [ref]);

  return (
    <div className="sticky flex justify-evenly py-2 border-b border-b-logo-gray top-0 z-50 bg-white">
      <div className="flex items-center">
        <img
          className="object-contain h-10 mr-3"
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="logo"
        />

        <div className="flex pl-3 h-10 items-center bg-logo-gray rounded-sm">
          <SearchIcon />
          <input
            type="text"
            className="outline-none border-none bg-transparent h-5"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="flex gap-5">
        {headerOptions.map((item) => {
          return (
            <HeaderOption
              key={item.text}
              text={item.text}
              Icon={item.icon}
              avatar={item.avatar}
            />
          );
        })}

        <div
          ref={ref}
          className="flex flex-col items-center text-gray-400 relative hover:text-black cursor-pointer"
        >
          <div onClick={() => setIsVisible(!isVisible)}>
            <Avatar
              src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
              className="!h-8 !w-8"
            />
            <h3 className="text-sm font-normal">
              me <ArrowDropDownIcon />
            </h3>
          </div>

          <div
            className={`absolute top-[72px] right-[14%] text-black border  z-50 w-64 bg-white rounded-l-lg rounded-br-lg ${
              isVisible ? 'block' : 'hidden'
            }`}
          >
            <div className="flex gap-3 p-3 pb-0">
              <Avatar
                src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
                className="!h-14 !w-14"
              />
              <div>
                <h1 className="font-medium">{user.displayName}</h1>
                <p className="text-[15px]">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="p-3">
              <button className=" hover:ring-inset hover:ring-2 hover:bg-blue-50  w-full text-center ring-1 ring-inset rounded-full border-blue-70 text-blue-70">
                View Profile
              </button>
            </div>

            <div className="border-y p-3 border-tint-black">
              <p className="font-medium">Account</p>
              <p className="text-sm flex items-center gap-2 font-medium text-tint hover:text-blue-70 cursor-pointer my-2">
                <InventoryIcon className="!text-lg !fill-yellow-500" />
                Try Premium for free
              </p>

              <p className="text-sm w-max text-tint hover:border-b border-b border-transparent hover:border-tint cursor-pointer my-2">
                Setting & Privacy
              </p>

              <p className="text-sm w-max text-tint hover:border-b border-b border-transparent hover:border-tint cursor-pointer my-2">
                Help
              </p>

              <p className="text-sm w-max text-tint hover:border-b border-b border-transparent hover:border-tint cursor-pointer my-2">
                Language
              </p>
            </div>

            <div className="p-3 border-b border-tint-black">
              <p className="font-medium">Manage</p>

              <p className="text-sm w-max text-tint hover:border-b border-b border-transparent hover:border-tint cursor-pointer my-2">
                Post & Activity
              </p>

              <p className="text-sm w-max text-tint hover:border-b border-b border-transparent hover:border-tint cursor-pointer my-2">
                Job Posting Account
              </p>
            </div>

            <div className="py-1 px-3" onClick={onSignoutClick}>
              <p className="text-sm w-max text-tint hover:border-b border-b border-transparent hover:border-tint cursor-pointer my-2">
                Sign out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
