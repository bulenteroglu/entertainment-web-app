import IconComponent from "../Icon/Icon";

export default function Sidebar() {
  const navigationOptions = [
    { label: "Trending", name: "trending" },
    { label: "Movies", name: "movies" },
    { label: "TV Series", name: "tv" },
    { label: "Bookmarked Movies", name: "bookmarked" },
  ];

  return (
    <div className="flex flex-col bg-semi-dark-blue">
      {navigationOptions.map((option, index) => {
        return (
          <div key={`navigation-key-${index}`}>
            {option.label}
            <IconComponent name={option.name} />
          </div>
        );
      })}
    </div>
  );
}
