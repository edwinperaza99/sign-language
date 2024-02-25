import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
	return (
		<nav className="flex items-center place-content-between">
			<h1 className="text-3xl">App Logo</h1>
			<ul className="flex flex-row gap-6 items-center border-2 border-green-400 p-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/quiz">Quiz</Link>
				</li>
				<li>
					<Link href="/">Practice ASL with AI</Link>
				</li>
				<li>
					<Link href="/">Video Call</Link>
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
