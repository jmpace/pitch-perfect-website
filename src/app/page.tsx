import { HeroSplitImage01 } from "@/components/marketing/header-section/hero-split-image-01";
import { FeaturesAlternatingLayout01 } from "@/components/marketing/features/features-alternating-layout-01";
import { MetricsCardGrayLight } from "@/components/marketing/metrics/metrics-card-gray-light";
// import { NewsletterIPhoneMockup01 } from "@/components/marketing/newsletter-cta/newsletter-iphone-mockup-01";
import { FooterLarge01 } from "@/components/marketing/footers/footer-large-01";

export default function Page() {
    return (
        <>
            <HeroSplitImage01 />
            <MetricsCardGrayLight />
            <FeaturesAlternatingLayout01 />
            {/* <NewsletterIPhoneMockup01 /> */}
            <FooterLarge01 />
        </>
    );
}
