import Link from "next/link";
import IconComponent from "../Icon/Icon";

import Logo from "../../public/assets/logo.svg";

import Image from "next/image";

export default function Sidebar() {
  const navigationOptions = [
    { name: "trending", link: "/" },
    { name: "movies", link: "/movies" },
    { name: "tv", link: "/tv-series" },
    { name: "bookmarked", link: "/bookmarked-movies" },
  ];

  return (
    <div className="h-full p-[32px]">
      <div className="inline-block h-full rounded-3xl bg-semi-dark-blue px-[38px] py-[32px]">
        <div className="flex h-full flex-col items-center">
          <div className="mb-[75px]">
            <Logo />
          </div>
          <div className="flex flex-1 flex-col items-center space-y-[40px]">
            {navigationOptions.map((option, index) => {
              return (
                <Link key={`navigation-key-${index}`} href={option.link}>
                  <div className="cursor-pointer">
                    <IconComponent name={option.name} />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mb-auto">
            <Image
              src={"/assets/image-avatar.png"}
              width={40}
              height={40}
              alt="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
