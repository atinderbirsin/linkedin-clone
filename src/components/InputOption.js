function InputOption({Icon,title,color}) {
    console.log(color);
    return (
        <div className="cursor-pointer flex items-center gap-2 py-3 px-1 rounded-sm hover:bg-tint-black">
            <Icon className={`!fill-[${color}]`} />
            {title}
        </div>
    );
};

export default InputOption;