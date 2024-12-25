const Navbar = () => {
  return (
    <header className="bg-rose-300">
      <div className="flex justify-between items-center px-10 py-2">
        <div className="font-bold">
          <span className="text-rose-600">Chach</span>
          <span className="text-rose-700">MART</span>
        </div>
        <div className="w-full mx-8">
          <form action="" className="flex border border-red-400 rounded-md p-2">
            <input type="text" placeholder="Search ..." onChange={(e) => (e.target.value) }  className="w-full bg-transparent focus:outline-none " />
            <button type="submit">🔍</button>
          </form>
        </div>
        <div className="flex text-2xl gap-4 items-center">
          <div className="border border-rose-400 p-1 rounded-full">❤️</div>
          <div className="border border-rose-400 p-1 rounded-full">🛒</div>
          <div>
            <div className="border border-rose-400 p-1 rounded-full">👤</div>
            <div></div>
          </div>
          
        </div>
      </div>
    </header>
  )
}

export default Navbar
