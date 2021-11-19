import React, { FC } from "react";
//Icons
import { GiRooster} from "react-icons/gi";
//Next components
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="container mx-auto px-6 mb-6">
      <div className="border-b w-full inline-block boder-grey-400 py-6">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <div>
              <a className="text-gray-300 cursor-pointer hover:text-purple-400 transform nav-links transition ease-in-out duration-700">
              <GiRooster />
                COG
              </a>
              <span className="font-extrabold nav-links hover:text-purple-400 transition ease-in-out duration-700 cursor-pointer">
                Blog
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents ">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug} passHref>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-light cursor-pointer transform hover:scale-125 hover:-translate-y-1 nav-links transition ease-in-out duration-700 hover:text-purple-400 mt-6">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
