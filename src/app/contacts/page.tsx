import { ContactForm } from "./widgets/ContactForm";
import { ContactInfor } from "./widgets/ContactInfor";
import { HeroBanner } from "./widgets/HeroBanner";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Map */}
      <HeroBanner />

      <div className="max-w-[1220px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ContactInfor />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
