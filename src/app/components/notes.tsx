import Navigation from "./navigation";
import MainHeader from "./main-header";

export default function NotesPage() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-8">
      <Navigation />
      {/* Main Content */}
      <div className="max-w-2xl">
        <MainHeader />
        <div className="space-y-5 text-gray-800 leading-relaxed">
          {/* Notes Content */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              Notes
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Coming soon... This is where I'll share my thoughts on technology,
              development, and other interesting topics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
