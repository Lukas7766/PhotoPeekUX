"use client";

export default function Testimonials() {
    const insights = [
        {
            role: "Hobby photographer",
            quote:
                "For the first time, I wasn’t worried something would happen to my originals. PhotoPeek made it clear that nothing gets moved, which finally gave me the confidence to import years of messy folders.",
            focus: "Visibility of system status & onboarding",
        },
        {
            role: "Power user with multiple drives",
            quote:
                "Being able to build a collection from two different drives without moving anything feels safe. I always know I can undo actions.",
            focus: "Non-destructive model & user control",
        },
        {
            role: "Casual user with messy library",
            quote:
                "The duplicate suggestions were clear. I liked that the app asked me to confirm and showed both images side by side.",
            focus: "Duplicate flow & error prevention",
        },
    ];

    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                {/* Section header */}
                <div className="mx-auto max-w-3xl pb-12 text-center">
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                        What I learned from user testing
                    </h2>
                    <p className="text-lg text-indigo-200/65">
                        I ran small, task-based usability sessions to validate the
                        navigation, duplicate handling and export flows. Here are a few
                        representative insights that influenced the design.
                    </p>
                </div>

                {/* Cards */}
                <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-3">
                    {insights.map((item) => (
                        <article
                            key={item.role}
                            className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                        >
                            <p className="mb-4 text-sm text-indigo-200/75 before:content-['“'] after:content-['”']">
                                {item.quote}
                            </p>
                            <div className="text-xs font-medium uppercase tracking-wide text-indigo-300">
                                {item.role}
                            </div>
                            <div className="text-xs text-slate-400">{item.focus}</div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
