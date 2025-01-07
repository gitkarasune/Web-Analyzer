import Button from "@/Components/Button";
import Hero from "@/Components/Hero";

export default function Home() {

  const handleClick = () => alert('Button Clicked!');

  return (
    <div className="min-h-screen pt-20 pb-20 sm:p-20">
      <div className="flex pt-32 justify-center items-center text-center flex-col">
        <Hero />
      </div>

      {/* <div className="flex flex-col gap-2">
        <Button text="One Click" onClick={handleClick} variant="secondary" />
      </div> */}
    </div>
  );
}
