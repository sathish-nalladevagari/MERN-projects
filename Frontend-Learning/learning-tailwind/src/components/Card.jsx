
function Card() {
    return (
        <><div className="flex-center h-screen">

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://via.placeholder.com/350x150" alt="place holder" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Card</div>
                    <div className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, error.</div>
                </div>
                <button className="w-full px-3 py-2 rounded border mb-2 font-bold text-gray-700 ">
                    Buy now
                </button>

            </div>
        </div>
        </>

    )
}

export default Card

