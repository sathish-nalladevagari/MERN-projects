
function Navbar() {
  return (
    <>
    <div className="flex flex-col h-screen justify-between overflow-hidden">

    <div className=" mt-[5em] w-full flex items-center justify-between px-6 py-2  bg-gray-700 text-white shadow-md">
        <h1 className="font-bold text-[2rem]">Logo</h1>
        <nav className="mr-10 ">
            <ul className="flex gap-x-10">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </nav>

    </div>

    <div className=" mb-[5em] w-full flex items-center justify-around px-6 py-2  bg-gray-700 text-white shadow-md">
    <nav className="mr-10 ">
            <ul className="flex gap-x-10">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </nav>
        <h1 className="font-bold text-[2rem]">Logo</h1>
        <nav className="mr-10 ">
            <ul className="flex gap-x-10">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </nav>

    </div>
    </div>
    </>
  )
}

export default Navbar