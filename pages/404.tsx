import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        return () => {
            setTimeout(() => {
                //router.go(-1);
                router.push("/");
            }, 3000)
        };
    }, [])
    return ( 
    <div className="not-found">
        <h1>This Page cannot be found.</h1>
        <p>Go Back to the <Link href="/">HomePage
        </Link></p>
    </div> 
    );
}
 
export default NotFound;