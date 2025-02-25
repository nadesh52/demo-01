import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[50vh] bg-primary p-8 text-white">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold">Let&apos;s Work Together</h1>
            <p>บอกเราว่าคุณต้องการอะไร แล้วเราจะช่วยให้เป็นจริง</p>
          </div>
          <div className="mt-16 flex flex-col gap-2">
            <h4 className="text-xl font-medium">
              Email: contact@yourwebsite.com
            </h4>
            <h4 className="text-xl font-medium">Location: Bangkok, Thailand</h4>
            <a href="#" className="cta">
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-[370px] place-self-center sm:mt-0 mt-8">
          <Image
            src="assets/images/map.jpg"
            height={0}
            width={384}
            alt="map"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
