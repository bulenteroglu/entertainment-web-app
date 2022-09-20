import Link from "next/link";
import IconComponent from "../Icon/Icon";

export default function Sidebar() {
  const navigationOptions = [
    { name: "trending", link: "/" },
    { name: "movies", link: "/movies" },
    { name: "tv", link: "/tv-series" },
    { name: "bookmarked", link: "/bookmarked-movies" },
  ];

  return (
    <div className="m-[32px] inline-block rounded-3xl bg-semi-dark-blue px-[38px] py-[32px]">
      <div className="flex flex-col space-y-[40px]">
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
    </div>
  );
}
