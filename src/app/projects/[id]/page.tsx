'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import { titleFont } from "@/config/fonts"
import { useParams } from "next/navigation"

import 'swiper/css';
import 'swiper/css/effect-cards';

export default function ProjectPage() {

  const { id } = useParams()

  return (
    <div>
      <div className="relative mt-16 mb-2">
        <span className="absolute -ml-3 -top-[7px] text-4xl text-black-secondary">{"{"}</span>
        <h2 className={`${titleFont.className} text-lg pl-1`}>project { id }</h2>
      </div>

      <h1 className="mt-8 text-4xl font-bold">North Amazonian Birds Perú</h1>
      <p className="text-secondary text-lg mt-4">
        Me apasiona todo el proceso de creación de productos digitales y con el uso de nuevas tecnologias, mis conocimientos en desarrollo, diseño y ux, ayudo a mis clientes a dar vida a sus ideas o mejorar sus productos digitale.
      </p>

      <div className="mt-8">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  )
}