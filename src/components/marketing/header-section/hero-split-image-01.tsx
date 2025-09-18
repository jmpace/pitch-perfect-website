"use client";

import { Fragment } from "react";
import { ArrowRight } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Header } from "@/components/marketing/header-navigation/header";

export const HeroSplitImage01 = () => {
    return (
        <Fragment>
            <Header className="bg-primary" />

            <section className="relative bg-primary py-16 lg:flex lg:min-h-180 lg:items-center lg:py-24">
                <div className="mx-auto flex w-full max-w-container items-center px-4 md:px-8">
                    <div className="flex flex-col items-start md:max-w-3xl lg:w-1/2 lg:pr-8">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="We're hiring!" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Join our remote team
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="We're hiring!" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Join our remote team
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                        We can't make investors say yes, but we know exactly why they say no.
                        </h1>
                        <p className="mt-4 text-lg text-balance text-tertiary md:mt-6 md:max-w-lg md:text-xl">
                        Pitch Perfect is the fundraising intelligence system for pre-seed founders that diagnoses why investors ghost you, without wasting months in dead-end meetings, so you can fix what matters and close your round faster.
                        </p>

                        <Form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const email = formData.get('email') as string;
                                
                                try {
                                    const response = await fetch('/api/subscribe', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({ email }),
                                    });

                                    const result = await response.json();
                                    
                                    if (response.ok) {
                                        alert('Thanks! We\'ll notify you when we launch.');
                                        e.currentTarget.reset();
                                    } else {
                                        alert('Something went wrong. Please try again.');
                                    }
                                } catch (error) {
                                    console.error('Error submitting email:', error);
                                    alert('Something went wrong. Please try again.');
                                }
                            }}
                            className="mt-8 flex w-full flex-col items-stretch gap-4 md:mt-12 md:max-w-120 md:flex-row md:items-start"
                        >
                            <Input
                                isRequired
                                size="md"
                                name="email"
                                type="email"
                                wrapperClassName="py-0.5"
                                placeholder="Enter your email"
                                hint={
                                    <span>
                                        We care about your data in our{" "}
                                        <a
                                            href="#"
                                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            privacy policy
                                        </a>
                                        .
                                    </span>
                                }
                            />
                            <Button type="submit" size="xl">
                                Get notified
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="relative mt-16 h-60 w-full px-4 md:h-95 md:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-1/2 lg:px-0">
                    <img className="inset-0 size-full object-cover lg:absolute" src="https://www.untitledui.com/marketing/spirals.webp" alt="Spirals" />
                </div>
            </section>
        </Fragment>
    );
};
