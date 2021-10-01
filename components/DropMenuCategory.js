const DropMenuCategory = ({payload,number}) => {
    console.log(payload , number)

    
    return (
        <>
            {<div className="absolute top-6 -left-4 bg-white w-64 rounded-md border-t-8 border-primary-color">
            <ul className="ml-4 font-medium ">
                <li className="hover:bg-primary-color hover:text-white transition ease-in-out duration-300 py-3">
                    asdas
                </li>
                <li className="hover:bg-primary-color hover:text-white transition ease-in-out duration-300 py-3">
                    asdas
                </li>
                <li className="hover:bg-primary-color hover:text-white transition ease-in-out duration-300 py-3">
                    asdas
                </li>
            </ul>
        </div>}
        </>
    )
}

export default DropMenuCategory
