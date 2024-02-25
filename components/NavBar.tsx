import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
	return (
		<nav className="flex items-center place-content-between">
			<h1 className="text-3xl">App Logo</h1>
			<ul className="flex flex-row gap-6 items-center">
				<li className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
					<Link href="/">Home</Link>
				</li>
				<li className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
					<Link href="/quiz">Quiz</Link>
				</li>
				<li className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
					<Link href="/practice">Practice ASL with AI</Link>
				</li>
				<li className="w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
					<Link href="/video-call">Video Call</Link>
				</li>
				<li>
					<Link href="/">
						<UserButton />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
