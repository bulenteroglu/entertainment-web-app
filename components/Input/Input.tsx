import SearchLogo from "../../public/assets/icon-search.svg";

export default function Input() {
  return (
    <div className="mt-[64px] flex w-full items-center">
      <div className="mr-[24px]">
        <SearchLogo />
      </div>
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="inline-block w-full bg-transparent text-white focus:outline-none"
      />
    </div>
  );
}
