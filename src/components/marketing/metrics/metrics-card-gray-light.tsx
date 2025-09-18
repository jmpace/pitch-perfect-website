import { BatteryLow, CalendarDate, SlashCircle02 } from "@untitledui/icons";

export const MetricsCardGrayLight = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 rounded-2xl bg-secondary px-6 py-10 md:gap-16 md:rounded-none md:bg-transparent md:p-0">
                    <div className="flex w-full flex-col self-center text-center md:max-w-2xl">
                        <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Target the right investors with a pitch that actually resonates.</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"></p>
                    </div>

                    <dl className="flex flex-col gap-8 rounded-2xl bg-secondary md:flex-row md:p-16">
                        {[
                            {
                                title: "3X",
                                subtitle: "Triple Your Funding Success Rate",
                            },
                            {
                                title: "50%",
                                subtitle: "Reduce Investor Meetings by 50%",
                            },
                            {
                                title: "-6 Months",
                                subtitle: "Preserve 6+ Months of Runway",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col-reverse gap-5 text-center">
                                <dt className="text-lg font-semibold text-primary">{item.subtitle}</dt>
                                <dd className="flex justify-center text-display-lg font-semibold text-brand-tertiary_alt md:text-display-xl">{item.title}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
