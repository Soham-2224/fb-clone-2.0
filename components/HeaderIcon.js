function HeaderIcon({ Icon, active }) {
    return (
        <div>
            <div className="flex items-center rounded-xl cursor-pointer sm:px-3 md:px-4 lg:px-8 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
                <Icon src={Icon} className={`text-gray-500 h-5 sm:h-7 mx-auto text-center group-hover:text-blue-500 ${active && "text-blue-500" }`} />
            </div>
        </div>
    )
}

export default HeaderIcon
