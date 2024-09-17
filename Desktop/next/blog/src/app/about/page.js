"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = ()=>{
    const router = useRouter();
    return(
        <div>
            <h1>About Page</h1>
            <Link href="/">Go to About Page</Link>
            <br/>
            <br/>
            <button onClick={()=> router.push("/login")}>Go Button Login</button>
        </div>
    )
}

export default About;