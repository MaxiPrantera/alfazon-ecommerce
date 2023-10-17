import Link from "next/link";
import Image from "next/image";
import alfalogo from "@/app/assets/alfalogo.png"

export default function Navbar(){
    return(
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl normal-case">
                        <Image src={alfalogo} height={40} width={40} alt="Alfazon logo"/>
                         Alfazon
                    </Link>
                </div>
                <div className="flex-nose gap-2">
                    <form>
                        <div className="form-control">
                            <input 
                            name="searchQuery"
                            placeholder="Search"
                            className="input input-bordered w-full min-w-[100px]"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}