import { NavLink } from "react-router-dom";
import Logo from "../components/ui/Logo";
import { Moon, Search, ShoppingBag, UserRound } from "lucide-react";
import Container from "../components/Container";

const Header = () => {
    return (
        <header className="border-b border-zinc-500">
            <Container className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="">
                        <Logo />
                    </div>
                    <div className="w-[2px] h-7 bg-zinc-500"></div>
                    <div className="hidden sm:flex gap-6 text-sm pt-2">
                        <NavLink
                            to="/"
                            className="flex flex-col items-center gap-1 text-lg"
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`uppercase transition-all duration-300 ${
                                            isActive
                                                ? "text-rose-500"
                                                : "text-zinc-500"
                                        }`}
                                    >
                                        home
                                    </span>
                                    <hr
                                        className={`border-none h-[2px] rounded-full w-2/4 ${
                                            isActive
                                                ? "bg-rose-500 block animate-expand-width"
                                                : "hidden"
                                        }`}
                                    />
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/products"
                            className="flex flex-col items-center gap-1 text-lg"
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`uppercase ${
                                            isActive
                                                ? "text-rose-500"
                                                : "text-zinc-500"
                                        }`}
                                    >
                                        products
                                    </span>
                                    <hr
                                        className={`border-none h-[2px] rounded-full w-2/4 ${
                                            isActive
                                                ? "bg-rose-500 block animate-expand-width"
                                                : "hidden"
                                        }`}
                                    />
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="flex flex-col items-center gap-1 text-lg"
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`uppercase ${
                                            isActive
                                                ? "text-rose-500"
                                                : "text-zinc-500"
                                        }`}
                                    >
                                        contact
                                    </span>
                                    <hr
                                        className={`border-none h-[2px] rounded-full w-2/4 ${
                                            isActive
                                                ? "bg-rose-500 block animate-expand-width"
                                                : "hidden"
                                        }`}
                                    />
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/about"
                            className="flex flex-col items-center gap-1 text-lg"
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`uppercase ${
                                            isActive
                                                ? "text-rose-500"
                                                : "text-zinc-500"
                                        }`}
                                    >
                                        about
                                    </span>
                                    <hr
                                        className={`border-none h-[2px] rounded-full w-2/4 ${
                                            isActive
                                                ? "bg-rose-500 block animate-expand-width"
                                                : "hidden"
                                        }`}
                                    />
                                </>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button>
                        <Moon strokeWidth={1.5} />
                    </button>
                    <div className="w-[2px] h-7 bg-zinc-500"></div>
                    <button>
                        <Search strokeWidth={1.5} />
                    </button>
                    <button>
                        <UserRound strokeWidth={1.5} />
                    </button>
                    <button className="relative">
                        <ShoppingBag strokeWidth={1.5} />
                        <span className="absolute -bottom-2 -right-2 text-xs bg-rose-500 text-zinc-50 font-normal size-5 text-center pt-[2px] rounded-full">
                            +9
                        </span>
                    </button>
                </div>
            </Container>
        </header>
    );
};

export default Header;
