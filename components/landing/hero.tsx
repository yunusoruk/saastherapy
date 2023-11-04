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
    <section>
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        <Particles className="absolute inset-0 -z-10 " />
        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">

              <Link
                href="/companion"
                className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium cursor-pointer"
              >
                <span className="sm:hidden">Explore the World of SaaS Therapy</span>
                <span className="hidden sm:inline ">
                  Explore the World of SaaS Therapy{" "}
                </span>
                <Icons.arrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl pb-4" data-aos="fade-down">
              <ReactWrapBalancer>
                Practice Therapy Sessions,
                Seek Psychologist Guidance.
              </ReactWrapBalancer>
            </h1>
            <p className="mb-8 text-lg " data-aos="fade-down" data-aos-delay="200">
              Empower Psychology Students with AI-Powered Practice Sessions
            </p>
            <div className="space-x-4">
              <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                Get Started
              </Link>
              <Link href={siteConfig.links.twitter} target="_blank" className={cn(buttonVariants({ size: "lg", variant: 'outline' }))}>
                Fallow along on X
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};