import Header from "@/components/navigation/header/header"
import { Glow, GlowCapture } from "@codaworks/react-glow"
function Landing() {
  return (
    
    <div className="relative h-screen overflow-hidden p-8 ">
        
    <GlowCapture>
    <Glow color="#1de9b6">
    <Header />
        </Glow>
        </GlowCapture>
    </div>
  )
}

export default Landing