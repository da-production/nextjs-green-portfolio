import Button from "@/components/ui/Button"
import { Glow, GlowCapture } from "@codaworks/react-glow"

function Header() {
  return (
    <div className="w-full bg-primary-background backdrop-blur-sm glow:bg-green-600/50 glow:border-green-600 px-5 py-2 rounded-2xl border border-primary-background flex items-center justify-center md:justify-between">
        {/* Profile Component */}
        <div className="text-white ">
            <p className="text-3xl p-0 m-0">ma.</p>
            {/* <small className="text-[10px] tracking-widest font-100">Fullstack Developper</small> */}
        </div>
        <div className="hidden md:inline">
            <Button>.Hello</Button>
        </div>
    </div>
  )
}

export default Header