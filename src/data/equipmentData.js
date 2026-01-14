export const equipmentData = [
  {
    id: 'ht-11a',
    category: 'Urinalysis Analyzer',
    name: 'HT-11A Urinalysis Analyzer',
    subtitle: 'Automated Urine Analysis System',
    image: process.env.PUBLIC_URL + '/urinalysis-analyzer.jpg',
    description: 'High reliability urinalysis analyzer with bright cold light source, compact design, and user-friendly interface for accurate urine testing.',
    features: [
      'High Reliability with extended service life',
      'Compact design with advanced optical sensor',
      'Simple operation with user-friendly interface',
      'Easy maintenance with automated fault detection',
      'Suitable for small to medium laboratories',
      'Built-in self-test for accurate performance'
    ],
    specifications: [
      { label: 'Test Items', value: 'LEU, NIT, URO, PRO, pH, BLD, SG, KET, BIL, GLU, VC, Ca, CRE, MCA, AC' },
      { label: 'Applicable Test Paper', value: '8A, 10A, 11A, 12A, 13A, 14A' },
      { label: 'Principle', value: 'Optoelectronic technology and microprocessor technology' },
      { label: 'Test Speed', value: '60/120 reports/hour' },
      { label: 'Input Mode', value: 'Touch screen' },
      { label: 'Report Storage', value: '2000 reports' },
      { label: 'Display', value: '192×64 dots screen' },
      { label: 'Power', value: 'AC220±22V, 50±1Hz' },
      { label: 'Dimensions', value: '285mm×237mm×171mm' },
      { label: 'Weight', value: '1.8kg' }
    ]
  },
  {
    id: 'xray-stationary',
    category: 'X-Ray System',
    name: 'ICEN Stationary X-Ray with DR System',
    subtitle: 'Complete DR Radiography Solution',
    image: process.env.PUBLIC_URL + '/stationary-xray.jpg',
    description: 'Complete stationary X-ray system with DR (Digital Radiography) for comprehensive diagnostic imaging capabilities.',
    features: [
      'Amorphous Silicon Detector Technology',
      'CsI Scintillator for superior image quality',
      '17 x 17 inch active area',
      'High-resolution 3072 x 3072 effective array',
      '3.6 lp/mm spatial resolution',
      'Gigabit Ethernet data transmission',
      'Complete installation and training support'
    ],
    specifications: [
      { label: 'Detector Technology', value: 'Amorphous Silicon' },
      { label: 'Scintillator', value: 'CsI' },
      { label: 'Active Area', value: '17 x 17 inch' },
      { label: 'Effective Array', value: '3072 x 3072' },
      { label: 'Pixel Pitch', value: '139μm' },
      { label: 'X-Ray Energy', value: '40-125kV' },
      { label: 'Fill Factor', value: '70%' },
      { label: 'Spatial Resolution', value: '3.6 lp/mm' },
      { label: 'A/D Conversion', value: '16 bit' },
      { label: 'Preview Image Time', value: '3 seconds' },
      { label: 'Full Image Time', value: '8 seconds' },
      { label: 'Generator Output Power', value: '32KW' },
      { label: 'Power Voltage', value: '220V' },
      { label: 'kV Range', value: '40~125kV' },
      { label: 'mA Range', value: '12~500mA' },
      { label: 'Exposure Type', value: '3 Phase 12 Pulse' },
      { label: 'Anode Heat Storage', value: '150KHU' }
    ],
    inclusions: [
      '1 Monitor (24 inch)',
      '1 CPU',
      '1 Mouse',
      '1 Keyboard',
      'Photo paper good for 1 month use',
      'Formulation of floor plan and assistance to corporate setup',
      'Assistance on government permits (PTC, Mayor\'s, DENR, etc.)',
      'Assistance for licensing and DOH compliance (FDA, LTO, Drug Testing)',
      'Assistance on marketing of the laboratory',
      'Assistance on hiring personnel (Med Tech, etc.)',
      'Initial laboratory training for owners and employees'
    ]
  },
  {
    id: 'xray-portable',
    category: 'X-Ray System',
    name: 'ICEN High Frequency Portable X-Ray Machine',
    subtitle: '4KW Digital Portable System',
    image: process.env.PUBLIC_URL + '/portable-xray.jpg',
    description: '4KW digital portable high frequency X-ray machine for medical diagnosis. Used for human limbs checking, diagnosing, especially in field operations, battlefield, playgrounds, pet clinics, rescue diagnosis, etc.',
    features: [
      'Deft and Concise Design',
      '6 Periods of Digital LED Display',
      '48 Kinds of Presupposed Anatomy Memory Pattern Choices',
      'Accuracy Control Methods of Simulation and Double Digital Loops',
      'High Precision Control of Tube Voltage and Tube Current',
      'Failure Self-Protection and Self Diagnosis'
    ],
    specifications: [
      { label: 'Power', value: 'AC220V ± 22V' },
      { label: 'Generator', value: '5kW' },
      { label: 'Working Frequency', value: '56 KHU' },
      { label: 'Voltage', value: '40 - 110 kV' },
      { label: 'mA Range', value: '0.2 - 200 mAs' },
      { label: 'Exposure Time', value: '0.01S - 4S' },
      { label: 'Focus', value: '1.8mm' },
      { label: 'Inherent Filtration', value: '1 MM AI/ 75 Kv' },
      { label: 'Anode Heat Storage', value: '1000 kHz' },
      { label: 'Touch Screen', value: '10.4 inch' },
      { label: 'Weight', value: '19 kg' },
      { label: 'Dimensions', value: '290 x 265 x 230mm' }
    ],
    inclusions: [
      '1 Monitor (24 inch)',
      '1 CPU',
      '1 Mouse',
      '1 Keyboard',
      'Photo paper good for 1 month use'
    ]
  },
  {
    id: 'ht-300',
    category: 'Hematology Analyzer',
    name: 'HIGHTOP HT-300',
    subtitle: '3 Part Hematology Analyzer',
    image: process.env.PUBLIC_URL + '/hematology-analyzer.jpg',
    description: 'A compact 3-part hematology analyzer that delivers fast, accurate results with minimal sample use. Easy to operate, reliable, and built for efficient lab workflows.',
    features: [
      'Compact design for space-efficient laboratories',
      'Fast and accurate 3-part differential analysis',
      'Minimal sample volume required',
      'User-friendly operation interface',
      'Reliable performance for consistent results',
      'Built for high-volume lab workflows'
    ],
    specifications: [
      { label: 'Test Parameters', value: 'WBC, RBC, HGB, HCT, MCV, MCH, MCHC, PLT' },
      { label: 'Sample Volume', value: 'Minimal volume required' },
      { label: 'Throughput', value: 'High-speed analysis' },
      { label: 'Certification', value: 'CE Certified' }
    ]
  },
  {
    id: 'htsh-2000',
    category: 'Chemistry Analyzer',
    name: 'HIGHTOP HTSH-2000',
    subtitle: 'Full Auto Chem Analyzer',
    image: process.env.PUBLIC_URL + '/chemistry-analyzer.jpg',
    description: 'Boost efficiency with the Hightop HTSH-2000 – a fully automatic chemical processor built for precision, speed, and safety. Minimal input, maximum performance.',
    features: [
      'Fully Automatic – Saves time with minimal manual work',
      'High Precision – Delivers accurate, consistent results',
      'Fast & Reliable – Boosts productivity every cycle',
      'Safe Design – Built with operator protection in mind',
      'Durable & Low-Maintenance – Long-lasting with minimal upkeep',
      'Efficient Workflow – Simplifies operations for maximum output',
      'Trusted Quality – Backed by Hightop innovation'
    ],
    specifications: [
      { label: 'Reagent & Sample Handling', value: 'Special coating to avoid contamination; quantitative sample adding; automatic washing' },
      { label: 'Stirring & Monitoring', value: 'Stirring mechanism; liquid-level sensor; anti-collision functionality' },
      { label: 'Cleaning System', value: 'Fully automatic; eight-section reaction cup washing; self-cleaning probe' },
      { label: 'Reagent Positions', value: '40 positions' },
      { label: 'Sample Positions', value: '48 positions (mixed types)' },
      { label: 'Reaction Positions', value: '50 positions' },
      { label: 'Temperature Control', value: '37 °C ± 0.1 °C with real-time monitoring' },
      { label: 'Throughput/Speed', value: 'Up to 200 tests per hour' },
      { label: 'Dimensions', value: '622 mm × 428 mm × 527 mm' },
      { label: 'Weight', value: '47.5 kg' },
      { label: 'Certification', value: 'CE Certified' },
      { label: 'Software', value: 'Intelligent test programs; high-speed fiber transmission; user-friendly interface' }
    ]
  },
  {
    id: 'ecg-rn8003',
    category: 'ECG Machine',
    name: 'RN8003+ ECG Machine',
    subtitle: '3-Channel ECG with Interpretation',
    image: process.env.PUBLIC_URL + '/ecg-machine.jpg',
    description: 'The RN8003+ ECG machine delivers accurate ECG waveforms with digital components and high-resolution thermal printer. Advanced technology ensures stable performance for hospital and home use.',
    features: [
      'Compact, Ergonomic, and Portable Design',
      '80mm, 3-Channel Recording with Interpretation',
      'Three Modes: Auto, Manual, Arrhythmia Analysis',
      'High-Accuracy Digital Filter with Automatic Baseline Adjustment',
      'Simultaneous 7-Lead Collection and Display',
      '7" Color LCD (480×272) for detailed ECG info',
      'Stores up to 100 ECG cases',
      'Supports 110-230V, 50/60Hz power',
      'Rechargeable Ni-MH Battery (3+ hours)',
      'RS232/USB Interface'
    ],
    specifications: [
      { label: 'Lead Standard', value: '7 leads' },
      { label: 'Lead Acquisition', value: '24bit/1000Hz (synchronously 7 leads)' },
      { label: 'Work Mode', value: 'Auto, Auto 2, Man, Analysis' },
      { label: 'Filter', value: 'AC Filter: 50Hz/60Hz, EMG Filter: 35Hz/45Hz, Anti-Drift Filter: 0.15Hz' },
      { label: 'Noise Level', value: '< 15µVp-p' },
      { label: 'CMMR', value: '>100dB (with AC Filter)' },
      { label: 'Input Impedance', value: '≥ 50MΩ' },
      { label: 'Voltage Tolerance', value: '≤ ±500mV' },
      { label: 'Time Constant', value: '≥ ~3.2s' },
      { label: 'Frequency Response', value: '0.05–150Hz (-3dB)' },
      { label: 'Sensitivity', value: 'Auto, 2.5, 5, 10, 20 mm/mV' },
      { label: 'Recording Mode', value: '1ch+V, 3ch, 3ch+V' },
      { label: 'Paper Speed', value: '5, 10, 12.5, 25, 50mm/s (±3%)' },
      { label: 'Paper', value: '80mm × 20m roll paper' },
      { label: 'Power Supply', value: 'AC: 110–230V, 50/60Hz; DC: Rechargeable Ni-MH battery' },
      { label: 'Dimensions & Weight', value: '310mm × 260mm × 85mm, 1.4kgs' }
    ]
  },
  {
    id: 'dp-10',
    category: 'Ultrasound',
    name: 'DP-10 Digital Ultrasonic Diagnostic Imaging System',
    subtitle: 'Advanced Ultrasound with PW Doppler',
    image: process.env.PUBLIC_URL + '/ultrasound.jpg',
    description: 'Best-in-class performance meets ergonomic design. Exceptional image quality with PW Doppler imaging and auto-measurement intelligence for enhanced diagnostic confidence.',
    features: [
      '12.1" High-Resolution LED Display',
      'Full-Screen Interface for simplified workflow',
      '30° Adjustable Monitor for operator comfort',
      'Dual Universal Transducer Ports',
      'Backlit Control Panel',
      'Portable Compact Design',
      'Integrated Tutorial System',
      'Instant Image & Report Transfer',
      'One-Touch Full-Screen Zoom',
      'Extended 1.5-Hour Battery Life',
      '500GB Storage Capacity',
      'PW Doppler with Auto Trace',
      'Tissue Harmonic Imaging',
      'Speckle Reduction Technology',
      '3-Year Warranty & Calibration',
      'Free Training & Certification',
      'Nationwide Service & Delivery'
    ],
    specifications: [
      { label: 'Display', value: '12.1" High-Resolution LED' },
      { label: 'Monitor Adjustment', value: '30° Adjustable' },
      { label: 'Transducer Ports', value: 'Dual Universal' },
      { label: 'Battery Life', value: '1.5 Hours (rechargeable)' },
      { label: 'Storage', value: '500GB' },
      { label: 'Doppler', value: 'PW Doppler with Auto Trace' },
      { label: 'Imaging Technologies', value: 'Tissue Harmonic, Speckle Reduction' },
      { label: 'Warranty', value: '3 Years with Calibration' }
    ],
    inclusions: [
      '24" Monitor',
      'CPU',
      'Mouse',
      'Keyboard',
      'Ultrasound Gel',
      'Medical Condom',
      '3-Year Warranty & Calibration',
      'Free Training & Certification'
    ]
  }
];
