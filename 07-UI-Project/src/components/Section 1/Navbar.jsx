import "@remixicon/react"

const Navbar = () => {
  return (
    <div className="h-10 bg-red text-white flex justify-between items-center p-10">
        <h3 className="bg-black rounded-full py-2 px-5 text-[12px] uppercase font-semibold">Target Audience</h3>
        <h3 className="bg-gray-300 rounded-full font-semibold py-2 px-4 text-[12px]"> <i class="ri-corner-down-right-line"></i>Digital Banking Platform</h3>
    </div>
  )
}

export default Navbar