import Image  from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signOut,useSession } from 'next-auth/client';


function Header() {
    const[session] =  useSession();

    const headerIcon = (Icon, active) => {
        return (
        <div className="flex items-center rounded-xl cursor-pointer sm:px-3 md:px-4 lg:px-8 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
            <Icon src={Icon} className={`text-gray-500 h-5 sm:h-7 mx-auto text-center group-hover:text-blue-500 ${active && "text-blue-500" }`} />
        </div>
        ) 
    }
    const active = true;

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md" >
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />

                <div className=" hidden sm:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input type="text" placeholder="Search Facebook" className="hidden md:inline-flex bg-transparent  ml-2 items-center outline-none placeholder-gray-500 flex-shrink " />
                </div>
            </div>

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    {headerIcon(HomeIcon, active)}
                    {headerIcon(FlagIcon)}
                    {headerIcon(PlayIcon)}
                    {headerIcon(ShoppingCartIcon)}
                    {headerIcon(UserGroupIcon)}
                </div>
            </div>

            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile pic */}
                <Image
                    onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                />

                <p className="font-semibold whitespace-nowrap pr-3 hidden md:inline-flex ">{session.user.name}</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header
