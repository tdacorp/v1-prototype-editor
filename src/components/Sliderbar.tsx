export default function () {
   const topices = [
        "Dashboard",
        "Posts",
        "Pages",
        "Media",
        "Users",
        "Settings",
        "Analytics",
        "Comments",
        "Categories",
        "Integrations",
    ];

    return <>
        <aside className="fixed top-7 left-0 h-screen w-64 text-white bg-black shadow-sm p-4 mt-12">
            <h2 className="text-xl text-gary-900 font-semibold mb-4">Editor topice</h2>
            <ul className="space-y-2">
                {topices.map((topic)=>(
                    <li key={topic}
                      className="p-2 pl-3 rounded cursor-pointer text-sm text-gray-200 hover:bg-gray-300 hover:text-black transition"
                    >
                        {topic}
                    </li>
                ))}
            </ul>
        </aside>


    </>
}