import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    link?:string;
    isIcon?: boolean;
}

const Button: FC<ButtonProps> = ({ children,  className, link, isIcon }) => {
    return (
        <>
            {
                link ? (
                    <Link href={link} className={cn(className,'w-10 h-10 cursor-pointer')}>
                        <ButtonBody className={className} isIcon={isIcon}>
                            {children}
                        </ButtonBody>
                    </Link>
                ) : (
                    <ButtonBody className={className} isIcon={isIcon}>
                        {children}
                    </ButtonBody>
                )
            }
        </>
    )
}

interface ButtonBodyProps {
    children: React.ReactNode;
    className?: string;
    isIcon?: boolean;
}

const ButtonBody: FC<ButtonBodyProps> = ({ children, className, isIcon }) => {
    return (
        <div className={cn("cursor-pointer flex-none w-auto h-full")}>
            <div className={cn(
                "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100",
                className,
                isIcon ? "h-10 w-max px-3" : "h-full w-max px-3 py-2"
                )}>
                {children}
            </div>
        </div>
    )
}

export default Button;