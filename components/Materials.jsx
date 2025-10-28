import { leftItems, rightItems } from "@/lib/data";

export default function Materials() {
  return (
    <section className="pb-9">
      <h2 className="text-4xl font-normal mb-10">Course Materials</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 bg-white shadow-[0_0_20px_rgba(0,0,0,0.06)] rounded-sm px-6 py-4 text-lg text-gray-600">
        <div className="xl:border-r xl:border-gray-200 xl:pr-8">
          {leftItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex justify-between items-center py-[18px] border-b border-gray-100 last:border-b-0"
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {item.label}
                </span>
                <span>{item.value}</span>
              </div>
            );
          })}
        </div>

        <div>
          {rightItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex justify-between items-center py-[18px] border-b border-gray-100 last:border-b-0"
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {item.label}
                </span>
                <span>{item.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
