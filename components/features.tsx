import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
    return (
        <section className="relative">
            <div
                className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
                aria-hidden="true"
            >
                <Image
                    className="max-w-none"
                    src={BlurredShapeGray}
                    width={760}
                    height={668}
                    alt="Blurred shape"
                />
            </div>
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
                aria-hidden="true"
            >
                <Image
                    className="max-w-none"
                    src={BlurredShape}
                    width={760}
                    height={668}
                    alt="Blurred shape"
                />
            </div>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
                    {/* Section header */}
                    <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                From problem to product
              </span>
                        </div>
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Designing PhotoPeek around real workflows
                        </h2>
                        <p className="text-lg text-indigo-200/65">
                            This project combines UX methods (research, mapping, prototyping
                            and testing) with a technical stack (C#, .NET, file system
                            indexing and AI) to solve a very concrete problem: keeping large
                            photo libraries usable over time.
                        </p>
                    </div>

                    {/* Optional illustration */}
                    <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
                        <Image
                            className="max-w-none"
                            src={FeaturesImage}
                            width={1104}
                            height={384}
                            alt="High-level information architecture for PhotoPeek"
                        />
                    </div>

                    {/* Items */}
                    <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
                        {/* Problem */}
                        <article>
                            <svg
                                className="mb-3 fill-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                            >
                                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                                <path
                                    fillOpacity=".48"
                                    d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                                />
                            </svg>
                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                                The Problem
                            </h3>
                            <p className="text-indigo-200/65">
                                Users store photos across multiple drives, folders and cloud
                                accounts. Duplicates pile up, and moving files feels risky.
                                Existing tools often force a new structure instead of respecting
                                the one users already have.
                            </p>
                        </article>

                        {/* Tools */}
                        <article>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-6 text-[#615fff]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"/>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>

                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                                Tools & Technologies
                            </h3>
                            <p className="text-indigo-200/65">
                                UX: Figma for wireframes and prototypes, Miro for empathy maps
                                and user journeys, Google Forms for surveys, Notion for
                                documenting insights. Build: C# / .NET for the desktop app,
                                local file indexing for performance, and AI models for duplicate
                                detection and similarity search.
                            </p>
                        </article>

                        {/* Information architecture */}
                        <article>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-6 text-[#615fff]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"/>
                            </svg>

                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                                Information Architecture
                            </h3>
                            <p className="text-indigo-200/65">
                                I mapped typical tasks (finding trips, client projects, family
                                events) into a structure with sources, virtual collections and
                                saved filters. This keeps navigation close to users&apos; mental
                                models instead of exposing technical details like file paths.
                            </p>
                        </article>

                        {/* Heuristics */}
                        <article>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-6 text-[#615fff]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                            </svg>

                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                                Usability Heuristics
                            </h3>
                            <p className="text-indigo-200/65">
                                I explicitly reviewed the flows against Nielsen&apos;s
                                heuristics: visibility of system status (progress while scanning
                                sources), match between system and real-world terms, user
                                control and freedom (non-destructive operations), consistency in
                                filters and labels, and error prevention when deleting or
                                deduplicating photos.
                            </p>
                        </article>

                        {/* Duplicate handling */}
                        <article>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-6 text-[#615fff]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/>
                            </svg>

                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                                AI-assisted duplicate handling
                            </h3>
                            <p className="text-indigo-200/65">
                                The AI duplicate finder is designed as a review step, not an
                                automatic &quot;clean up&quot; button. Users see clear
                                comparisons and can replace duplicates with a single virtual
                                reference, reducing clutter without losing trust in the system.
                            </p>
                        </article>

                        {/* Export & sharing */}
                        <article>
                            <svg
                                className="mb-3 fill-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                            >
                                <path
                                    fillOpacity=".48"
                                    d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                                />
                                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
                            </svg>
                            <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                                Task-focused export & sharing
                            </h3>
                            <p className="text-indigo-200/65">
                                Export flows are built around real tasks from interviews:
                                sending a zipped selection to a client, preparing images for a
                                cloud share or moving a curated set to another drive. This keeps
                                the UI focused on outcomes, not just file operations.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
