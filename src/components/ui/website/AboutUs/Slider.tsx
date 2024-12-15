/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Heading from "@/components/shared/Heading";


interface Testimonial {
    id: number;
    title1: string;
    title2: string;
    description: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        title1: "Our riders are ",
        title2: "Our Heroes",
        description: "As the backbone of our food delivery service, they ensure that delicious meals reach our customers quickly and safely. Whether rain or shine, our riders go the extra mile to make sure every delivery is on time and in perfect condition. Join us and be part of a team that’s not just about delivering food, but creating moments of joy for people every day.",
        image: "/ourrider.svg",
    },
    {
        id: 2,
        title1: "Our riders are ",
        title2: "Our Heroes",
        description: "As the backbone of our food delivery service, they ensure that delicious meals reach our customers quickly and safely. Whether rain or shine, our riders go the extra mile to make sure every delivery is on time and in perfect condition. Join us and be part of a team that’s not just about delivering food, but creating moments of joy for people every day.",
        image: "/ourrider.svg",
    },
    {
        id: 3,
        title1: "Our riders are ",
        title2: "Our Heroes",
        description: "As the backbone of our food delivery service, they ensure that delicious meals reach our customers quickly and safely. Whether rain or shine, our riders go the extra mile to make sure every delivery is on time and in perfect condition. Join us and be part of a team that’s not just about delivering food, but creating moments of joy for people every day.",
        image: "/ourrider.svg",
    },
];

const Slider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center", // Ensures the slides are centered
        skipSnaps: false,
    });

    useEffect(() => {
        if (emblaApi) {
            const autoplay = setInterval(() => {
                emblaApi.scrollNext();
            }, 5000);

            return () => clearInterval(autoplay);
        }
    }, [emblaApi]);
    return (
        <section className=" bg-gradient-to-r from-[#fcede4] to-[#fbe0d1] py-[100px]">
            <div className="mx-auto  ">


                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex  ">
                        {testimonials.map((heroes) => (
                            <div
                                key={heroes.id}
                                className="embla__slide flex-[0_0_100%] min-w-0  "
                            >
                                <div className=' container flex lg:flex-row flex-col items-center justify-between gap-x-5    '>


                                    <div className=' w-full '>
                                        <img src={heroes?.image} alt='' className=' lg:h-[382px] h-full lg:w-[588px] w-[100%] lg:mt-5 ' />
                                    </div>

                                    <div className='  w-[100%] mb-3 lg:mb-0   '>
                                        <Heading className='lg:py-7 py-3   ' title1={heroes?.title1} title2=' Tweet ' />
                                        <p className=' text-[#5C5C5C] font-[400] lg:text-[16px] text-[14px]  '>{heroes?.description}</p>
                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className="w-2.5 h-2.5 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/50"
                                onClick={() => emblaApi?.scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Slider;