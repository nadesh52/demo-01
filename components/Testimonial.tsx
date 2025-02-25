import React from "react";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="min-h-[50vh] bg-white px-8 py-16 text-secondary"
    >
      <div className="space-y-2">
        <h2 className="text-center text-3xl font-medium">
          What Our Clients Say
        </h2>
        <p className="text-md text-center">
          ลูกค้าของเราพูดถึงคุณภาพและผลลัพธ์ที่ได้รับ
        </p>
      </div>
      <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-white scrollbar-track mt-8 flex items-center justify-start gap-6 overflow-x-scroll py-6">
        <div className="testimonial-box">
          <p>&quot;เว็บเร็วมาก ดีไซน์ดูมืออาชีพ!&quot;</p>
          <p className="text-right text-sm italic">- คุณสมชาย, เจ้าของธุรกิจ</p>
        </div>
        <div className="testimonial-box">
          <p>&quot;SEO แรงจริงๆ เว็บไซต์ติดอันดับ Google แล้ว!&quot;</p>
          <p className="text-right text-sm italic">- คุณมานี, Blogger</p>
        </div>
        <div className="testimonial-box">
          <p>&quot;ทีมงานมืออาชีพมาก แก้ไขเว็บให้ตรงความต้องการได้หมด!&quot;</p>
          <p className="text-right text-sm italic">
            - คุณวิชัย, เจ้าของร้านค้าออนไลน์
          </p>
        </div>
        <div className="testimonial-box">
          <p>&quot;เว็บสวย โหลดเร็ว ลูกค้าชอบมาก ทำให้ยอดขายเพิ่มขึ้น!&quot;</p>
          <p className="text-right text-sm italic">
            - คุณอารยา, เจ้าของแบรนด์เครื่องสำอาง
          </p>
        </div>
        <div className="testimonial-box">
          <p>&quot;รองรับทุกอุปกรณ์จริงๆ ใช้บนมือถือก็ลื่นไหลไม่มีสะดุด&quot;</p>
          <p className="text-right text-sm italic">
            - คุณปกรณ์, นักธุรกิจออนไลน์
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
