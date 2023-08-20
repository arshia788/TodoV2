import { BiSolidHand } from "react-icons/bi";
import Link from 'next/link';
import { VscListSelection } from 'react-icons/vsc';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';

function Layout({ children }) {
    return (
        <div>
            <header className="bg-blue-800 pb-20 pt-4">
                
                <p className="font-semibold text-lg text-white">Todo-App</p>

            </header>

            <div className="grid grid-cols-12 h-screen">

                <aside className="col-span-2 p-1 relative bottom-12 bg-zinc-50 rounded-r-lg">

                    <div className="flex items-center">
                        <p className="flex items-center mr-2">Welcome</p>
                        <BiSolidHand className="mt-1"/>
                    </div>

                    <ul className="my-4 flex flex-col gap-y-4">
                        <li className=" gap-x-2 flex items-center text-gray-500">
                            <VscListSelection />
                            <Link href="/">Todos</Link>
                        </li>


                        <li className=" gap-x-2 flex items-center text-gray-500 ">
                            <BiMessageSquareAdd />
                            <Link href="/add-todo">Add Todo</Link>
                        </li>


                        <li className="gap-x-2 flex items-center text-gray-500">
                            <RxDashboard />
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                </aside>

                <section className="bg-zinc-300 col-span-10">
                    {children}
                </section>

            </div>

        </div>
    )
}

export default Layout