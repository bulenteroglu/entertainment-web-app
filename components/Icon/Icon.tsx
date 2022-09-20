import Home from "../../public/assets/icon-nav-home.svg";
import Movies from "../../public/assets/icon-nav-movies.svg";
import Tv from "../../public/assets/icon-nav-tv-series.svg";
import Bookmarked from "../../public/assets/icon-nav-bookmark.svg";

type Props = {
  name: string;
};

const iconTypes: { [char: string]: string } = {
  trending: Home,
  movies: Movies,
  tv: Tv,
  bookmarked: Bookmarked,
};

export default function IconComponent({ name, ...props }: Props) {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
}
