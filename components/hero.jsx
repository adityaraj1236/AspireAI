"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

const HeroSection = () => {
    const imageRef =  useRef(null)
    
    useEffect(() => {
        const imageElement = imageRef.current;
        

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
        const scrollThreshold = 100; 
            // const scrollPosition = window.scrollY;
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return (
       <section className="w-full pt-36 md:pt-48 pb-10 text-white">
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className="text-5xl gradient-title font-bold md:text-6xl lg:text-7xl xl:text-8xl select-none">Your AI Career Coach for
                <br/>
                Professional Success
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                    Advance your carrer with personalized guidance , interview prep and AI-powered tools for job success 
                </p>
            </div>

            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                    <Button>Get Started</Button>
                </Link>
                <Link href="/dashboard">
                    <Button variant="outline" className="text-foreground">Learn More</Button>
                </Link>
            </div>

            <div className="hero-image-wrapper mt-5 md:mt-0 ">
                <div ref={imageRef} className="hero-image">
                    <Image
                        src="https://images.pexels.com/photos/8294602/pexels-photo-8294602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        width={1280}
                        height={720}
                        alt="dashboard Preview"
                        className="rounded-lg shadow-2xl border mx-auto" 
                        priority
                        /> 
                </div>
            </div>
        </div>
       </section>
    )
}

export default HeroSection