"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const navigate = (name)=>{
    router.push(name);
  }
  return (
    <div>
      <main>
          <h1>Basic Routing | Make New Page</h1>
          <br/>
          <Link href="/login">Go To Login Page</Link>
          <br/>
          <br/>
          <Link href="/about">Go To About Page</Link>
          <br/>
          <br/> 
          <button onClick={()=>router.push("/login")}>Go To Login Page</button>
          <br/>
          <br/>
          <button onClick={()=>navigate("/about")}>Go To About Page</button>
      </main>
    </div>
  );
}