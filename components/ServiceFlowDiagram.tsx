"use client";

import SlideUp from "@/components/SlideUp";

interface StepItem {
  number: string;
  title: string;
  desc: string;
  color: string;
}

export function ServiceFlowDiagram() {
  const steps: StepItem[] = [
    { number: "01", title: "Monitor", desc: "24/7 real-time infrastructure monitoring", color: "from-blue-700 to-blue-900" },
    { number: "02", title: "Detect", desc: "Automated anomaly & threat detection", color: "from-indigo-700 to-indigo-900" },
    { number: "03", title: "Respond", desc: "Rapid incident response & remediation", color: "from-emerald-600 to-emerald-800" },
    { number: "04", title: "Optimize", desc: "Continuous tuning & performance gains", color: "from-amber-600 to-red-700" },
  ];

  const boxClass =
    "w-full max-w-[260px] rounded-lg p-3 shadow-md border border-white/10 bg-gradient-to-br";

  /* ---------------- BOX ---------------- */
  const Box = ({ step }: { step: StepItem }) => (
    <SlideUp>
      <div className={`${boxClass} ${step.color}`}>
        <p className="text-[10px] text-gray-300 mb-1 tracking-wider">
          STEP {step.number}
        </p>
        <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
        <p className="text-xs text-gray-200 leading-snug">{step.desc}</p>
      </div>
    </SlideUp>
  );

  const ArrowDown = () => (
    <div className="flex flex-col items-center my-2">
      <div className="h-6 w-[2px] bg-red-500/40" />
      <div className="w-2 h-2 rotate-45 bg-red-400 -mt-1" />
    </div>
  );

  const ArrowLine = () => (
  <div className="flex items-center w-16 shrink-0">
    <div className="flex-1 h-[2px] bg-red-500/40 relative">
      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-red-400" />
    </div>
  </div>
);

const ArrowLeft = () => (
  <div className="flex items-center w-16 shrink-0">
    <div className="flex-1 h-[2px] bg-red-500/40 relative">
      <span className="absolute left-0 top-1/2 -translate-y-1/2
        w-2 h-2 rotate-45 bg-red-400" />
    </div>
  </div>
);
const ArrowDownPC = () => (
  <div className="flex justify-center h-10 shrink-0">
    <div className="relative w-[2px] bg-red-500/40 h-full">
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2
        w-2 h-2 rotate-45 bg-red-400" />
    </div>
  </div>
);



  /* ---------------- UI ---------------- */
  return (
    <>
      {/* MOBILE (VERTICAL) */}
      <div className="flex md:hidden flex-col items-center">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-col items-center">
            <Box step={step} />
            {i < steps.length - 1 && <ArrowDown />}
          </div>
        ))}
      </div>

      {/* DESKTOP (ZIG-ZAG) */}
      <div className="hidden md:flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
  <Box step={steps[0]} />
  <ArrowLine />
  <Box step={steps[1]} />
</div>

        <div className="w-full h-10 relative">
          <div className="absolute right-[18%]">
            <ArrowDownPC />
          </div>
        </div>

        <div className="flex items-center gap-4">
  <Box step={steps[3]} />
  <ArrowLeft />
  <Box step={steps[2]} />
</div>
      </div>
    </>
  );
}
