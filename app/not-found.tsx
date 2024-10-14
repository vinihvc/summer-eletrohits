import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";

const LottiePlayer = dynamic(() => import("@/components/ui/lottie"), {
  ssr: false,
});

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="relative container max-w-screen-md flex flex-col flex-1 py-20">
        <div className="flex flex-col gap-5 order-2">
          <div>
            <output className="text-sm font-medium">Error 404</output>

            <h2 className="font-bold text-2xl md:text-5xl">Hey Buddy</h2>
          </div>

          <p className="text-balance">
            We can't seem to find the page
            <br />
            you are looking for.
          </p>

          <div>
            <Button className="font-semibold" size="lg" asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>

        <LottiePlayer
          className="sm:absolute inset-0 -z-[1] size-full order-1"
          path="/lottie/astronaut.lottie"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
