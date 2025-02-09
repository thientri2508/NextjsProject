import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export const ContactInfor = () => {
  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Contact Information
        </h2>

        {/* Store Address */}
        <div className="flex items-start space-x-4 mb-6">
          <FaMapMarkerAlt className="text-2xl mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Store Location
            </h3>
            <p className="text-gray-600 mt-1">Nguyen Duy Trinh Street</p>
            <p className="text-gray-600">Thu Duc City, Binh Trung Tay Ward</p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-xl" />
            <p className="text-gray-600">(076) 323-2508</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:contact@fashionstore.com"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              contact@malefashion.com
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8">
          <div className="flex items-center space-x-4 mb-4">
            <FaClock className="text-xl" />
            <h3 className="text-xl font-semibold text-gray-900">
              Business Hours
            </h3>
          </div>
          <div className="space-y-2">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between text-gray-600">
                <span>{schedule.day}</span>
                <span>{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
