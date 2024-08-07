/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wwwbrilliantearthcom-alto": "#d3d3d3",
        "wwwbrilliantearthcom-gable-green": "#183e40",
        "wwwbrilliantearthcom-mine-shaft": "#333",
        "wwwbrilliantearthcom-nero": "#fff",
        "wwwbrilliantearthcom-mercury": "#e4e4e4",
        "wwwbrilliantearthcom-mine-shaft1": "#2c2c2c",
        "wwwbrilliantearthcom-wild-sand": "#f7f7f7",
        "wwwbrilliantearthcom-mercury1": "#e5e5e5",
        "wwwbrilliantearthcom-mercury2": "#e2e2e2",
      },
      spacing: {},
      fontFamily: {
        "wwwbrilliantearthcom-inter-regular-1125": "Inter",
      },
      borderRadius: {
        "9xl": "28px",
        "9980xl": "9999px",
        "681xl": "700px",
      },
    },
    fontSize: {
      "xs-6": "11.6px",
      "xs-8": "11.8px",
      "xs-3": "11.3px",
      "xs-4": "11.4px",
      "xs-1": "11.1px",
      "smi-5": "12.5px",
      "smi-3": "12.3px",
      "sm-8": "13.8px",
      "smi-4": "12.4px",
      "smi-1": "12.1px",
      "smi-8": "12.8px",
      "sm-7": "13.7px",
      "smi-2": "12.2px",
      "smi-6": "12.6px",
      smi: "13px",
      "sm-6": "13.6px",
      "sm-9": "13.9px",
      "smi-7": "12.7px",
      sm: "14px",
      "smi-9": "12.9px",
      "base-1": "15.1px",
      "11xl-9": "30.9px",
      lgi: "19px",
      "6xl": "25px",
      "sm-5": "13.5px",
      "sm-1": "13.1px",
      "12xl-3": "31.3px",
      "sm-3": "13.3px",
      "11xl-1": "30.1px",
      lg: "18px",
      "5xl": "24px",
      mini: "15px",
      "11xl": "30px",
      "11xl-6": "30.6px",
      "base-9": "15.9px",
      "mid-2": "17.2px",
      "11xl-3": "30.3px",
      "mid-7": "17.7px",
      "5xs-3": "7.3px",
      "base-4": "15.4px",
      base: "16px",
      "mid-3": "17.3px",
      "11xl-4": "30.4px",
      "mini-6": "14.6px",
      "base-3": "15.3px",
      "mini-5": "14.5px",
      "base-5": "15.5px",
      "17xl-2": "36.2px",
      "3xl": "22px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1900: {
        raw: "screen and (max-width: 1900px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
