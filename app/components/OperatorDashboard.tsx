import Image from "next/image";
import LayoutContainer from "./LayoutContainer";

const pointsLeft = [
  "View all bookings",
  "View and manage all statuses",
  "Track earnings",
  "View or download transaction details",
];

const pointsRight = [
  "Update booking statuses",
  "Monitor performance insights",
  "Generate monthly invoices",
];

export default function OperatorDashboard() {
  return (
    <section id="dashboard" className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <LayoutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Dashboard Image (Visible only on Desktop) */}
          <div className="relative hidden lg:block">
            <Image
              src="/opreators-dashboard/opreator-dashboard.png"
              alt="YalaRide Operator Dashboard"
              width={800}
              height={600}
              className="w-full h-auto scale-110"
              style={{ height: 'auto' }}
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Control Center
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Transparent & Powerful<br />
              <span className="text-primary">Operator's Dashboard</span>
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-12" />

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
              Transparency is at the core of <span className="text-primary">YalaRide</span>. Our operator dashboard provides a complete and detailed inventory management system.
            </p>

            <div className="inline-flex items-center bg-black border-l-4 border-primary px-6 py-3 mb-10">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Operators can:</span>
            </div>

            {/* Mobile-only Dashboard Image */}
            <div className="relative lg:hidden mb-12">
              <Image
                src="/opreators-dashboard/opreator-dashboard.png"
                alt="YalaRide Operator Dashboard mobile"
                width={800}
                height={600}
                className="w-full h-auto"
                style={{ height: 'auto' }}
              />
            </div>

            {/* Two column list with triangle bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-12">
              <div className="space-y-4">
                {pointsLeft.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-base">{point}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {pointsRight.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer text */}
            <p className="text-gray-500 text-base lg:text-lg italic border-t border-gray-100 pt-8">
              No hidden deductions or unclear charges. Everything is visible and easy to track.
            </p>
          </div>

        </div>
      </LayoutContainer>
    </section>
  );
}
