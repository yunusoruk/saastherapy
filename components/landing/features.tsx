import { Particles } from "./particles";
import ReactWrapBalancer from "react-wrap-balancer";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const Features: React.FC = () => {
    return (
        <section
            id="features"
            className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Why Choose SaaS Therapy?
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    At SaaS Therapy, we bring together advanced technology and a commitment to mental well-being.
                    With our innovative approach, you can practice, learn, and seek support, all within a secure and judgment-free environment.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Icons.library size={48} />
                        </CardTitle>
                        <h3 className="font-bold py-2">Practice and Learn</h3>
                        <CardDescription>
                            Psychology students, here&apos;s your chance to gain valuable experience.
                        </CardDescription>
                        <CardDescription>
                            Our AI-driven patient and psychologist companions provide a safe environment for you to practice therapeutic sessions, offering real-world scenarios to enhance your skills.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Icons.heartHandshake size={48} />
                        </CardTitle>
                        <h3 className="font-bold py-2">Support for Depression</h3>
                        <CardDescription>
                            If you&apos;re feeling down, overwhelmed, or just need someone to talk to, our AI psychologists are here to lend an understanding ear.
                        </CardDescription>
                        <CardDescription>
                            Our empathetic AI psychologists are always available, ensuring you have a caring companion.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Icons.home size={48} />
                        </CardTitle>
                        <h3 className="font-bold py-2">Safe and Private Environment</h3>
                        <CardDescription>
                            Your mental health and privacy are of utmost importance to us.
                        </CardDescription>
                        <CardDescription>
                            SaaS Therapy offers a secure and confidential space for all interactions.
                            Ensuring that your personal information and emotional well-being remain protected.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Icons.sunmoon size={48} />
                        </CardTitle>
                        <h3 className="font-bold py-2">24/7 Availability</h3>
                        <CardDescription>
                        </CardDescription>
                        <CardDescription>
                            SaaS Therapy is accessible anytime, anywhere.
                            Our AI companions are available round the clock, providing support and practice opportunities whenever you need them.
                            Whether it&apos;s a late-night study session or an early morning moment of reflection.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Icons.book size={48} />
                        </CardTitle>
                        <h3 className="font-bold py-2">Various Scenarios</h3>
                        <CardDescription>
                        </CardDescription>
                        <CardDescription>
                            SaaS Therapy offers a diverse selection of scenarios for psychology students to work with, allowing you to experience and master various therapeutic situations. Gain valuable insights into your progress.
                            Experiment with different cases to become a well-rounded practitioner.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <Icons.person size={48} />
                        </CardTitle>
                        <h3 className="font-bold py-2">Community Support and Forums</h3>
                        <CardDescription>
                        </CardDescription>
                        <CardDescription>
                            Connect with a community of like-minded individuals.
                            Our forums and discussion boards provide a platform for sharing insights and engaging in meaningful conversations. Foster connections with fellow psychology enthusiasts and those on their mental health journey.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </section>
    );
};