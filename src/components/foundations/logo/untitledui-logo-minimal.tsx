"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

export const UntitledLogoMinimal = (props: HTMLAttributes<HTMLImageElement>) => {
    return (
        <img
            {...props}
            src="/logo.png"
            alt="Logo"
            className={cx("size-8", props.className)}
        />
    );
};
