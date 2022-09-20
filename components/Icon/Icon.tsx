import Trending from "../../public/assets/icon-play.svg";
import Movies from "../../public/assets/icon-play.svg";
import Tv from "../../public/assets/icon-play.svg";
import Bookmarked from "../../public/assets/icon-play.svg";

type Props = {
  name: string;
};

const iconTypes: { [char: string]: string } = {
  trending: Trending,
  movies: Movies,
  tv: Tv,
  bookmarked: Bookmarked,
};

export default function IconComponent({ name, ...props }: Props) {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
}
