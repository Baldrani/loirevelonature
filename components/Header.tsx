import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";

const SwitchLang: React.FC = () => {
    return (
        <div className="flex items-center">
            <button className="mr-2">EN</button>
            <button>ES</button>
        </div>
    );
};

const Header: React.FC<{ data: unknown }> = ({ data }) => {
    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b">
            <Container>
                <div className="relative px-4 sm:px6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Link href="/" className="ml-4 lg:ml-0">
                            <h1 className="text-xl">STORE NAME</h1>
                        </Link>
                    </div>
                    <div className="flex space-x-3">
                        <Button>Réserver</Button>
                        <SwitchLang />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
