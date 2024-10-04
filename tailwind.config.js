/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "390px",
      md: "740px",
      lg: "1100px",
      xl: "1280px",
      xxl: "1536px",
    },

    extend: {
      fontFamily: {
        oswaldregular: ["oswaldregular", "sans-serif"],
        oswaldbold: ["oswaldbold", "sans-serif"],
        oswaldextralight: ["oswaldextralight", "sans-serif"],
        oswaldlight: ["oswaldlight", "sans-serif"],
        oswaldmedium: ["oswaldmedium", "sans-serif"],
        oswaldsemibold: ["oswaldsemibold", "sans-serif"],
        oswaldvariable: ["oswaldvariable", "sans-serif"],
      },

      colors: {
        customPurple: "#00CAE0",
        customGreen: "#00CAE0",
      },

      fontSize: {
        "2xs": ".625rem",
        "3xs": ".5rem",
        "4xs": ".375rem",
        "5xs": ".25rem",
        "6xs": ".125rem",
      },

      spacing: {
        0.1: "0.025rem",
        0.2: "0.05rem",
        0.25: "0.0625rem",
        0.3: "0.075rem",
        0.4: "0.1rem",
        0.5: "0.125rem",
        0.6: "0.15rem",
        0.7: "0.175rem",
        0.8: "0.2rem",
        0.9: "0.225rem",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        34: "8.5rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        42: "10.5rem",
        44: "11rem",
        46: "11.5rem",
        48: "12rem",
        50: "12.5rem",
        52: "13rem",
        54: "13.5rem",
        56: "14rem",
        58: "14.5rem",
        60: "15rem",
        62: "15.5rem",
        64: "16rem",
        66: "16.5rem",
        68: "17rem",
        70: "17.5rem",
        72: "18rem",
        74: "18.5rem",
        76: "19rem",
        78: "19.5rem",
        80: "20rem",
        82: "20.5rem",
        84: "21rem",
        86: "22rem",
        88: "23rem",
        90: "24rem",
        92: "25rem",
        94: "26rem",
        96: "27rem",
        98: "28rem",
        100: "29rem",
        102: "30rem",
        104: "31rem",
        106: "32rem",
        108: "33rem",
        110: "34rem",
        112: "35rem",
        114: "36rem",
        116: "37rem",
        118: "38rem",
        120: "39rem",
        122: "40rem",
        124: "41rem",
        126: "42rem",
        128: "43rem",
        130: "44rem",
        132: "45rem",
        134: "46rem",
        136: "47rem",
        138: "48rem",
        140: "49rem",
        142: "50rem",
        144: "51rem",
        146: "52rem",
        148: "53rem",
        150: "54rem",
        152: "55rem",
        154: "56rem",
        156: "57rem",
        158: "58rem",
        160: "59rem",
        162: "60rem",
        164: "61rem",
        166: "62rem",
        168: "63rem",
        170: "64rem",
        172: "65rem",
        174: "66rem",
        176: "67rem",
        178: "68rem",
        180: "69rem",
        182: "70rem",
        184: "71rem",
        186: "72rem",
        188: "73rem",
        190: "74rem",
        192: "75rem",
        194: "76rem",
        196: "77rem",
        198: "78rem",
        200: "79rem",
        "5%": "5%",
        "8%": "8%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
        "65%": "65%",
        "70%": "70%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        "100%": "100%",
        "120%": "120%",
        "140%": "140%",
        "160%": "160%",
        "5vh": "5vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "100vh": "100vh",
        screen2: "78vh",
        screen3: "89vh",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-purple": {
          textShadow: "3px 3px 8px #00CAE0", // Blue glow
        },
        ".text-stroke-purple": {
          "-webkit-text-stroke": "0.2px #A755E9", // Custom purple stroke
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
