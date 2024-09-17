import { cn } from '@/lib/utils'
import React from 'react'

function GrainEffect() {
    return (
        <div className={cn(
            "fixed top-0 left-0 w-full h-full",
            "before-content-none before:-top-40 before:-left-40 before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]",
            "before:fixed before:bg-grain before:opacity-10 before:bg-[length:1000px_1000px] pointer-events-none before:animate-noisy-bg"
        )}></div>
    )
}

export default GrainEffect