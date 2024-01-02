// components/SmoothScroll.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.documentElement.style.scrollBehavior = "smooth";
    };

    const handleRouteComplete = () => {
      document.documentElement.style.scrollBehavior = "auto";
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  return <>{children}</>;
};

export default SmoothScroll;
