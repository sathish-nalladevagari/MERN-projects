
function Login() {
  return (
    <>
    <div className="w-full min-h-screen flex-center ">
        <div className="max-w-sm border px-4 py-2 rounded overflow-hidden shadow-lg gap-x-2">
            <h1 className="font-bold text-2xl text-center">Login</h1>
            <label className="text-sm text-center  text-gray-500 ">
                Username
            </label>
            <input type="text"
                className="w-full border rounded"
            />
            <label className="text-sm text-center  text-gray-500">
                Password
            </label>
            <input type="password"
                className="w-full border"
            />
            <button className="w-full mt-5 border  rounded-lg px-2 py-1 bg-teal-200">
                Submit
            </button>

        </div>

    </div>
    </>
  )
}

export default Login