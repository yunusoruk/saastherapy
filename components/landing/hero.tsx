import { Particles } from "./particles";
import ReactWrapBalancer from "react-wrap-balancer";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";

export const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        <Particles className="absolute inset-0 -z-10 " />
        <div className="pt-16 sm:pt-32 pb-16 md:pt-52 md:pb-32">
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <Link
                href="/companion"
                className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium cursor-pointer"
              >
                <span>Explore the World of SaaS Therapy</span>
                <Icons.arrowRight className="ml-1 h-4 w-4 hidden sm:inline" />
              </Link>
            </div>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-4" data-aos="fade-down">
              <ReactWrapBalancer>
                Practice Therapy Sessions,
                Seek Psychologist Guidance.
              </ReactWrapBalancer>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground " data-aos="fade-down" data-aos-delay="200">
              Empower Psychology Students with AI-Powered Practice Sessions
            </p>
            <div className="flex flex-col items-center justify-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link href="/login" className={cn(buttonVariants({ size: 'lg', variant: 'outline', className: "w-[180px] bg-primary" }))}>
                Get Started
              </Link>
              <Link href={siteConfig.links.twitter} target="_blank" className={cn(buttonVariants({ size: "lg", variant: 'outline', className: "w-[180px]" }))}>
                <span className="hidden sm:inline">
                  Fallow along on X
                </span>
                <span className="inline sm:hidden">
                  Fallow on X
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};