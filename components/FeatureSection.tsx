import {
  BoltIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const FeatureSection = () => {
  return (
    <section
      id="services"
      className="min-h-[60vh] bg-background px-6 py-16 sm:h-[50vh]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="space-y-2">
          <h2 className="text-center text-3xl font-medium">What We Offer</h2>
          <p className="text-md text-center">
            บริการที่ช่วยให้ธุรกิจของคุณเติบโต
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-fit sm:flex-row sm:gap-8">
          <div className="feature-box">
            <GlobeAltIcon className="size-8 stroke-1" />
            <div>
              <p className="text-left sm:text-center">Custom Website Design</p>
              <p className="text-left text-xs sm:text-center">
                ออกแบบเว็บให้โดดเด่น สะท้อนแบรนด์ของคุณ
              </p>
            </div>
          </div>
          <div className="feature-box">
            <CogIcon className="size-8 stroke-1" />
            <div>
              <p className="text-left sm:text-center">SEO Optimization</p>
              <p className="text-left text-xs sm:text-center">
                เพิ่มโอกาสติดหน้าแรก Google ด้วยเทคนิค SEO
              </p>
            </div>
          </div>
          <div className="feature-box">
            <BoltIcon className="size-8 stroke-1" />
            <div>
              <p className="text-left sm:text-center">Responsive & Fast</p>
              <p className="text-left text-xs sm:text-center">
                โหลดเร็ว รองรับทุกอุปกรณ์ มอบประสบการณ์ที่ดี
              </p>
            </div>
          </div>
          <div className="feature-box">
            <ShoppingCartIcon className="size-8 stroke-1" />
            <div>
              <p className="text-left sm:text-center">E-Commerce Ready</p>
              <p className="text-left text-xs sm:text-center">
                ออกแบบเว็บให้โดดเด่น สะท้อนแบรนด์ของคุณ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
