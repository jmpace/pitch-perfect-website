"use client";

import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

export const UntitledLogo = (props: HTMLAttributes<HTMLImageElement>) => {
    return (
        <img
            {...props}
            src="/logo.png"
            alt="Logo"
            className={cx("h-8 w-auto", props.className)}
        />
    );
};
