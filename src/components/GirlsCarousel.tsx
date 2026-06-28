"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, MessageCircle, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Girl = {
  name: string;
  age: string;
  rating: string;
  image: string;
  title: string;
  copy: string;
};

type CarouselProps = {
  girls: Girl[];
};

export function GirlsCarousel({ girls }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = containerRef.current.scrollWidth / girls.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.scrollWidth / girls.length;
    containerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const next = () => {
    const nextIdx = Math.min(activeIndex + 1, girls.length - 1);
    scrollToIndex(nextIdx);
  };

  const prev = () => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIdx);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [girls.length]);

  return (
    <div className="carousel-wrapper">
      {/* Navigation Arrows */}
      <button 
        className="carousel-arrow prev" 
        onClick={prev} 
        disabled={activeIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button 
        className="carousel-arrow next" 
        onClick={next} 
        disabled={activeIndex === girls.length - 1}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Cards Scroll Container */}
      <div className="carousel-container" ref={containerRef}>
        {girls.map((girl) => (
          <article className="girl-card carousel-slide" key={girl.name}>
            <div className="girl-image-wrap">
              <Image
                src={girl.image}
                alt={`${girl.name} Udaipur verified companion profile`}
                width={520}
                height={620}
                className="girl-card-image"
                priority={false}
              />
              <span className="girl-rating"><Star size={14} /> {girl.rating}</span>
              <span className="girl-age">{girl.age}</span>
            </div>
            <div className="girl-card-body">
              <h3>{girl.name} - <span>{girl.title}</span></h3>
              <p>{girl.copy}</p>
              <div className="girl-card-meta">
                <span><Award size={15} /> Verified 18+</span>
                <Link href="/profiles">View Profile</Link>
              </div>
              <div className="girl-card-actions">
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="button girl-whatsapp">
                  <MessageCircle size={16} /> WhatsApp
                </Link>
                <Link href={`tel:${siteConfig.phone}`} className="button girl-call">
                  <Phone size={16} /> Call Now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Progress Dots */}
      <div className="carousel-dots">
        {girls.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
