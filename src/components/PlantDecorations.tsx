
import React from 'react';

// Enhanced elegant plant SVG component with better animations
const ElegantPlantSvg = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 500 500" 
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    role="presentation"
    className={`w-full h-full ${className}`}
  >
    <g className="plant-main">
      {/* Main stem */}
      <g className="plant-stem" transform="matrix(0.8725888729095459,0,0,0.8029109239578247,229.20486450195312,168.60198974609375)" opacity="1">
        <g opacity="1" transform="matrix(1,0,0,1,14.196999549865723,156.9499969482422)">
          <path 
            fill="hsl(var(--verde-musgo))" 
            fillOpacity="0.3" 
            d="M-3.947000026702881,156.6999969482422 C-3.947000026702881,156.6999969482422 3.947000026702881,156.6999969482422 3.947000026702881,156.6999969482422 C9.470000267028809,156.6999969482422 13.946999549865723,152.2220001220703 13.946999549865723,146.6999969482422 C13.946999549865723,146.6999969482422 13.946999549865723,-146.6999969482422 13.946999549865723,-146.6999969482422 C13.946999549865723,-152.22300720214844 9.470000267028809,-156.6999969482422 3.947000026702881,-156.6999969482422 C3.947000026702881,-156.6999969482422 -3.947000026702881,-156.6999969482422 -3.947000026702881,-156.6999969482422 C-9.470000267028809,-156.6999969482422 -13.946999549865723,-152.22300720214844 -13.946999549865723,-146.6999969482422 C-13.946999549865723,-146.6999969482422 -13.946999549865723,146.6999969482422 -13.946999549865723,146.6999969482422 C-13.946999549865723,152.2220001220703 -9.470000267028809,156.6999969482422 -3.947000026702881,156.6999969482422z"
            className="leaf-shimmer"
          />
        </g>
      </g>
      
      {/* Left leaf */}
      <g className="plant-leaf-left" transform="matrix(1.1806845664978027,-0.2144390195608139,0.2144390195608139,1.1806845664978027,68.80899047851562,211.4380340576172)" opacity="1">
        <g opacity="1" transform="matrix(1,0,0,1,59.61399841308594,59.61399841308594)">
          <path 
            fill="hsl(var(--verde-claro))" 
            fillOpacity="0.25" 
            d="M-59.36399841308594,-59.36399841308594 C-59.36399841308594,-59.36399841308594 -39.26900100708008,-59.36399841308594 -39.26900100708008,-59.36399841308594 C15.204999923706055,-59.36399841308594 59.36399841308594,-15.204000473022461 59.36399841308594,39.26900100708008 C59.36399841308594,39.26900100708008 59.36399841308594,59.36399841308594 59.36399841308594,59.36399841308594 C59.36399841308594,59.36399841308594 39.26900100708008,59.36399841308594 39.26900100708008,59.36399841308594 C-15.204000473022461,59.36399841308594 -59.36399841308594,15.204999923706055 -59.36399841308594,-39.26900100708008 C-59.36399841308594,-39.26900100708008 -59.36399841308594,-59.36399841308594 -59.36399841308594,-59.36399841308594z"
            className="leaf-shimmer"
          />
        </g>
      </g>
      
      {/* Right leaf */}
      <g className="plant-leaf-right" transform="matrix(0.978573739528656,0.2058967649936676,-0.2058967649936676,0.978573739528656,272.50274658203125,129.28280639648438)" opacity="1">
        <g opacity="1" transform="matrix(1,0,0,1,59.61399841308594,59.6150016784668)">
          <path 
            fill="hsl(var(--verde-claro))" 
            fillOpacity="0.25" 
            d="M59.36399841308594,-59.3650016784668 C59.36399841308594,-59.3650016784668 39.26900100708008,-59.3650016784668 39.26900100708008,-59.3650016784668 C-15.204000473022461,-59.3650016784668 -59.36399841308594,-15.204000473022461 -59.36399841308594,39.26900100708008 C-59.36399841308594,39.26900100708008 -59.36399841308594,59.3650016784668 -59.36399841308594,59.3650016784668 C-59.36399841308594,59.3650016784668 -39.26900100708008,59.3650016784668 -39.26900100708008,59.3650016784668 C15.204999923706055,59.3650016784668 59.36399841308594,15.204000473022461 59.36399841308594,-39.27000045776367 C59.36399841308594,-39.27000045776367 59.36399841308594,-59.3650016784668 59.36399841308594,-59.3650016784668z"
            className="leaf-shimmer"
          />
        </g>
      </g>
    </g>
  </svg>
);

// Enhanced monstera leaf SVG component
const MonsteraLeafSvg = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 500 500" 
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    role="presentation"
    className={`w-full h-full ${className}`}
  >
    <path
      d="M250,50 C150,50 50,150 50,250 C50,350 100,450 250,450 C400,450 450,350 450,250 C450,150 350,50 250,50 Z M250,100 C350,100 400,150 400,250 C400,350 350,400 250,400 C150,400 100,350 100,250 C100,150 150,100 250,100 Z"
      fill="hsl(var(--verde-musgo))" 
      fillOpacity="0.15"
      className="leaf-path leaf-shimmer"
    />
    <path
      d="M150,200 C150,200 200,150 250,150 C300,150 350,200 350,200"
      stroke="hsl(var(--verde-claro))"
      strokeWidth="5"
      strokeOpacity="0.2"
      fill="none"
      className="leaf-vein"
    />
    <path
      d="M150,250 C150,250 200,200 250,200 C300,200 350,250 350,250"
      stroke="hsl(var(--verde-claro))"
      strokeWidth="5"
      strokeOpacity="0.2"
      fill="none"
      className="leaf-vein"
    />
    <path
      d="M150,300 C150,300 200,250 250,250 C300,250 350,300 350,300"
      stroke="hsl(var(--verde-claro))"
      strokeWidth="5"
      strokeOpacity="0.2"
      fill="none"
      className="leaf-vein"
    />
  </svg>
);

// Enhanced fern leaf SVG component
const FernLeafSvg = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 500 500" 
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    role="presentation"
    className={`w-full h-full ${className}`}
  >
    <path
      d="M250,50 C250,50 200,100 200,150 C200,200 250,250 250,250 C250,250 300,200 300,150 C300,100 250,50 250,50 Z"
      fill="hsl(var(--verde-claro))"
      fillOpacity="0.15"
      className="fern-path leaf-shimmer"
    />
    <path
      d="M250,250 C250,250 200,300 200,350 C200,400 250,450 250,450 C250,450 300,400 300,350 C300,300 250,250 250,250 Z"
      fill="hsl(var(--verde-claro))"
      fillOpacity="0.15"
      className="fern-path leaf-shimmer"
    />
    <line
      x1="250"
      y1="50"
      x2="250"
      y2="450"
      stroke="hsl(var(--verde-musgo))"
      strokeWidth="5"
      strokeOpacity="0.2"
      className="fern-stem"
    />
  </svg>
);

const PlantDecorations = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Bottom left elegant plant */}
      <div className={`absolute bottom-0 left-0 w-64 h-64 opacity-40 ${!prefersReducedMotion ? 'plant-sway' : ''}`}>
        <ElegantPlantSvg />
      </div>
      
      {/* Bottom right elegant plant */}
      <div className={`absolute bottom-0 right-0 w-56 h-56 opacity-40 ${!prefersReducedMotion ? 'plant-float' : ''}`}>
        <ElegantPlantSvg />
      </div>
      
      {/* Top right monstera leaf */}
      <div className={`absolute top-0 right-0 w-96 h-96 opacity-30 ${!prefersReducedMotion ? 'plant-gentle-sway' : ''}`}>
        <MonsteraLeafSvg />
      </div>
      
      {/* Mid-left fern leaf */}
      <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-40 h-80 opacity-35 ${!prefersReducedMotion ? 'plant-breathe' : ''}`}>
        <FernLeafSvg />
      </div>
      
      {/* Mid-right monstera leaf with delayed animation */}
      <div className={`absolute top-1/3 right-0 w-80 h-80 opacity-30 ${!prefersReducedMotion ? 'plant-gentle-sway-delayed' : ''}`}>
        <MonsteraLeafSvg />
      </div>
      
      {/* Additional elegant plant - middle bottom */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-40 ${!prefersReducedMotion ? 'plant-breathe' : ''}`}>
        <ElegantPlantSvg />
      </div>
    </div>
  );
};

export default PlantDecorations;
