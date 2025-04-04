export const PRESET_OPTIONS = {
  classic: {
    speed: 10000,
    amplitude: 40,
    frequency: 0.002,
    waveCount: 16,
    lineWidth: 1.5,
    amplitudeStagger: 2.5,
    phaseStagger: 0.2,
    yOffsetStagger: 8,
    centerAmplitudeBoost: true,
    waveDirectionMode: "opposite",
  },
  calm: {
    speed: 15000,
    amplitude: 25,
    frequency: 0.0015,
    waveCount: 10,
    lineWidth: 1.8,
    amplitudeStagger: 1.5,
    phaseStagger: 0.1,
    yOffsetStagger: 12,
    centerAmplitudeBoost: false,
    waveDirectionMode: "opposite",
  },
  sharp: {
    speed: 8000,
    amplitude: 50,
    frequency: 0.0035,
    waveCount: 20,
    lineWidth: 1.2,
    amplitudeStagger: 1.0,
    phaseStagger: 0.3,
    yOffsetStagger: 5,
    centerAmplitudeBoost: true,
    waveDirectionMode: "opposite",
  },
  uniform: {
    speed: 12000,
    amplitude: 35,
    frequency: 0.002,
    waveCount: 12,
    amplitudeStagger: 0,
    phaseStagger: 0,
    yOffsetStagger: 15,
    centerAmplitudeBoost: false,
    waveDirectionMode: "forward",
  },
  spaced: {
    speed: 20000,
    amplitude: 60,
    frequency: 0.001,
    waveCount: 6,
    lineWidth: 2,
    amplitudeStagger: 5,
    phaseStagger: 0.5,
    yOffsetStagger: 40,
    centerAmplitudeBoost: true,
    waveDirectionMode: "opposite",
  },
};

/** @type {Required<WaveOptions>} - Base defaults if no preset selected */
export const BASE_DEFAULT_OPTIONS = {
  preset: "classic", // Default preset selection
  speed: 10000,
  baseColor: "123, 59, 174",
  lineWidth: 1.5,
  waveCount: 16,
  amplitude: 40,
  frequency: 0.002,
  canvasHeight: 400, // Use fixed height for CodePen demo simplicity
  rotation: 0,
  overflowMargin: 100,
  amplitudeStagger: 2.5,
  phaseStagger: 0.2,
  yOffsetStagger: 8,
  centerAmplitudeBoost: true,
  waveDirectionMode: "opposite",
  minOpacity: 0.1, // New: Minimum wave opacity
  maxOpacity: 0.9, // New: Maximum wave opacity
  useFullScreenHeight: true, // Default to full screen height
  // Removed heightSourceSelector for simplicity in this demo
};

export const TWO_PI = Math.PI * 2;
