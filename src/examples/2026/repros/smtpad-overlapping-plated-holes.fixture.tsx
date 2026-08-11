import type React from "react"
import { PCBViewer } from "../../../PCBViewer"
import circuitJson from "./rp2350StampBoard.json"

const SmtpadOverlappingPlatedHoles: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "20px", color: "white" }}>
      <h3>SMT pad overlapping plated holes</h3>
      <p>
        Full reported RP2350 Stamp board Circuit JSON. Each rectangular SMT pad
        overlaps two plated through-holes.
      </p>
      <p style={{ fontSize: "14px", opacity: 0.8 }}>
        Expected: two 1 mm drill holes remain visible. Current bug: the SMT pad
        is rendered after the plated holes and covers them completely.
      </p>
      <PCBViewer circuitJson={circuitJson as any} />
    </div>
  )
}

export default SmtpadOverlappingPlatedHoles
