import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaDribbble } from "react-icons/fa";
import { DotCMSDynamicForm } from "./components/DotCMSDynamicForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4fa] p-4">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl min-h-[700px] overflow-hidden">
        <div className="bg-blue-700 text-white p-8 md:p-10 flex flex-col justify-between md:w-1/3">
          <div>
            <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
            <p className="mb-8 text-blue-100">We&apos;d love to hear from you. Our friendly team is always here to chat.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-xl" />
                <div>
                  <div className="font-semibold">Chat to us</div>
                  <div className="text-blue-100 text-sm">Our friendly team is here to help.</div>
                  <a href="mailto:hi@untitledui.com" className="text-white text-sm hover:underline">hi@untitledui.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-xl" />
                <div>
                  <div className="font-semibold">Office</div>
                  <div className="text-blue-100 text-sm">Come say hello at our office HQ.</div>
                  <div className="text-white text-sm font-semibold">100 Smith Street<br />Collingwood VIC 3066 AU</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-xl" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-blue-100 text-sm">Mon-Fri from 8am to 5pm.</div>
                  <a href="tel:+1555000000" className="text-white text-sm hover:underline">+1 (555) 000-0000</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-10 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-blue-200"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-200"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-200"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube" className="hover:text-blue-200"><FaYoutube /></a>
            <a href="#" aria-label="Dribbble" className="hover:text-blue-200"><FaDribbble /></a>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="flex-1 p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Level up your brand</h2>
          <p className="mb-8 text-gray-600">You can reach us anytime via <a href="mailto:hi@untitledui.com" className="text-blue-700 hover:underline">hi@untitledui.com</a></p>
          <DotCMSDynamicForm formId="ContactUs" />
        </div>
      </div>
    </div>
  );
}
