"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Realtor",
    review:
      "The training completely changed how I understand real estate. Everything was practical and easy to follow.",
    rating: 5,
  },
  {
    name: "David Michael",
    role: "Property Investor",
    review:
      "Joining the WhatsApp community gave me confidence. I learned things I couldn't find on YouTube.",
    rating: 5,
  },
  {
    name: "Grace Emmanuel",
    role: "New Realtor",
    review:
      "I started with zero experience and now I understand property sales and client management.",
    rating: 5,
  },
  {
    name: "John Peter",
    role: "Entrepreneur",
    review:
      "Highly recommended for anyone who wants to build a career in real estate.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">

      <SectionHeader
        badge="SUCCESS STORIES"
        title="What Our Students Say"
        description="Real feedback from people who have started or grown their real estate journey through our mentorship and training."
      />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

    </Section>
  );
}