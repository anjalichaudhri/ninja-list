import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            {/* <img src="/logo.jpg" alt= "logo image"/> */}
            <Image className="logo-img" src="/logo.jpg" alt= "logo image" width={100} height={50} />
            </div>
            <Link legacyBehavior href="/"><a>Home</a></Link>
            <Link legacyBehavior href="/about"><a>About</a></Link>
            <Link legacyBehavior href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
      );
}
 
export default Navbar;