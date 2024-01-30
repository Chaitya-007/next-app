"use client"; // for showin lazy loading
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import leo from "@/public/images/leo.jpg";
import { Metadata } from "next";
// import HeavyComponent from "./components/HeavyComponents";
import { useState } from "react";
import dynamic from "next/dynamic";
// import _ from "lodash"; 
import HeavyComponent from "./components/HeavyComponents";

// * It doesn't makes sense to lazyload small compoents
// * We should only use this for large components
// const HeavyComponent = dynamic(
//   () => import("./components/HeavyComponents"),
//   { ssr: false, // sometimes you will try to fetch api's from browser which will be unavailable and there it may cause error while prerendering the components
//     loading: () => <p>Loading...</p> } // as an second argument we can paas loading as an argument to show loading when component is getting downloaded
// );

// export default async function Home() {
//   // * this function works both for our pages as well as for our routers
//   const session = await getServerSession(authOptions);

//   return (
//     <main className="relative h-screen">
//       {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
//       <Link href="/users">Users</Link>
//       <ProductCard/> */}
//       <h1 className="font-poppins">Hello World</h1>
//       {/* <Image src={leo} alt="This is leo image"></Image> */}

//       {/* <Image
//         src="https://bit.ly/react-cover"
//         alt="Coffee"
//         // width={300}
//         // height={170}
//         fill //it is a boolean value so just mention it to make the image responsive on all websites
//         // style={{ objectFit: "contain" }}
//         className="object-cover"
//         // sizes="100vw" // sets the width
//         sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
//         // standard breakpoint for phone is 480px and for tablet is 768px
//         quality={100}
//         priority
//       ></Image> */}
//     </main>
//   );
// }

// we will write metadata on individual page separately
// export const metadata : Metadata = {
//   title: '...'
// }

// where we typically have route or query string parameters we need to generate metadata dynamically

// export async function generateMetadata() : Promise<Metadata>
// {
// const product = await fetch(' ');

//   return
//   {
//     title: 'product.title'
//     description: 'product.description'
//   }
// }

// async function cannot be client compoents
export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1 className="font-poppins">Hello World</h1>
      {/* <button onClick={() => setVisible(true)}>Show</button> */}
      <button onClick={async () => {
// to load lodash dynamically instead of loading before prerendering the component
        const _ = (await import('lodash')).default;
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'}
        ];

        const sorted = _.orderBy(users, ['name']);
        console.log(sorted)
      }}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}
