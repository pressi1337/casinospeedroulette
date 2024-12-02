"use client";
import { useState } from "react";

const useAlg = () => {
  const [oddEven, setOddEven] = useState<any>([]);
  const [evenOdd, setEvenOdd] = useState<any>([]);

  const oddOrEven = (value: any) => {
    if (value == 0) {
      return {
        type: "zero",
        value,
      };
    } else if (value % 2 == 0) {
      return {
        type: "even",
        value,
      };
    } else {
      return {
        type: "odd",
        value,
      };
    }
  };

  const oddEvenPattern = (prevOddEven: any, value: any) => {
    let OE: any = prevOddEven;

    if (!OE.length) {
      if (oddOrEven(value).type == "odd") {
        OE.push([value]);
      }

      return OE;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [OE[OE.length - 1]];
      lastSubArray.map((arrayChunk, index) => {
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }
        if (arrayChunk.length === 2) {
          if (oddOrEven(arrayChunk[1]).type == "even") {
            if (oddOrEven(value).type == "odd") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          }
        }

        if (arrayChunk.length === 3) {
          if (oddOrEven(arrayChunk[2]).type == "even") {
            if (oddOrEven(value).type == "odd") {
              // OE.push([value]);

              temp = {
                type: "newSet",
                value: value,
              };
            }
          }
          if (
            oddOrEven(arrayChunk[2]).type == "odd" ||
            oddOrEven(arrayChunk[2]).type == "zero"
          ) {
            if (oddOrEven(value).type == "even") {
              temp = {
                type: "current",
                value: value,
                index: index,
              };
            }
          }
        }

        if (arrayChunk.length === 4) {
          if (
            oddOrEven(arrayChunk[3]).type == "even" &&
            oddOrEven(value).type == "odd"
          ) {
            // OE.push([value]);
            temp = {
              type: "newSet",
              value: value,
            };
          }
        }
      });

      if (temp.type == "newSet") {
        OE.push([value]);
      } else if (temp.type == "current") {
        OE[OE.length - 1].push(temp.value);
      }

      return OE;
    }
  };

  const EvenOddPattern = (prevOddEven: any, value: any) => {
    let EO: any = prevOddEven;
    if (!EO.length) {
      if (oddOrEven(value).type == "even") {
        EO.push([value]);
      }
      return EO;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [EO[EO.length - 1]];
      lastSubArray.map((arrayChunk, index) => {
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }
        if (arrayChunk.length === 2) {
          if (oddOrEven(arrayChunk[1]).type == "odd") {
            if (oddOrEven(value).type == "even") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          }
        }

        if (arrayChunk.length === 3) {
          if (oddOrEven(arrayChunk[2]).type == "odd") {
            if (oddOrEven(value).type == "even") {
              // OE.push([value]);

              temp = {
                type: "newSet",
                value: value,
              };
            }
          }
          if (
            oddOrEven(arrayChunk[2]).type == "even" ||
            oddOrEven(arrayChunk[2]).type == "zero"
          ) {
            if (oddOrEven(value).type == "odd") {
              temp = {
                type: "current",
                value: value,
                index: index,
              };
            }
          }
        }

        if (arrayChunk.length === 4) {
          if (
            oddOrEven(arrayChunk[3]).type == "odd" &&
            oddOrEven(value).type == "even"
          ) {
            // OE.push([value]);
            temp = {
              type: "newSet",
              value: value,
            };
          }
        }
      });

      if (temp.type == "newSet") {
        EO.push([value]);
      } else if (temp.type == "current") {
        EO[EO.length - 1].push(temp.value);
      }

      return EO;
    }
  };

  const oddOddPattern = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      if (oddOrEven(value).type == "odd") {
        OO.push([value]);
      }
      return OO;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [OO[OO.length - 1]];
      lastSubArray.map((arrayChunk, index) => {
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }
        if (arrayChunk.length === 2) {
          if (oddOrEven(arrayChunk[1]).type == "odd") {
            if (oddOrEven(value).type == "odd") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          }
        }

        if (arrayChunk.length === 3) {
          if (
            oddOrEven(arrayChunk[2]).type == "odd" ||
            oddOrEven(arrayChunk[2]).type == "even" ||
            oddOrEven(arrayChunk[2]).type == "zero"
          ) {
            if (oddOrEven(value).type == "odd") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          }
        }
      });

      if (temp.type == "newSet") {
        OO.push([value]);
      } else if (temp.type == "current") {
        OO[OO.length - 1].push(temp.value);
      }

      return OO;
    }
  };

  const evenEvenPattern = (prevOddEven: any, value: any) => {
    let EE: any = prevOddEven;
    if (!EE.length) {
      if (oddOrEven(value).type == "even") {
        EE.push([value]);
      }
      return EE;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [EE[EE.length - 1]];
      lastSubArray.map((arrayChunk, index) => {
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }
        if (arrayChunk.length === 2) {
          if (oddOrEven(arrayChunk[1]).type == "even") {
            if (oddOrEven(value).type == "even") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          }
        }

        if (arrayChunk.length === 3) {
          if (
            oddOrEven(arrayChunk[2]).type == "odd" ||
            oddOrEven(arrayChunk[2]).type == "even" ||
            oddOrEven(arrayChunk[2]).type == "zero"
          ) {
            if (oddOrEven(value).type == "even") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          }
        }
      });

      if (temp.type == "newSet") {
        EE.push([value]);
      } else if (temp.type == "current") {
        EE[EE.length - 1].push(temp.value);
      }

      return EE;
    }
  };

  const normalOEPattern = (prevOddEven: any, value: any) => {
    let OE: any = prevOddEven;
    if (!OE.length) {
      if (value != 0) {
        OE.push([value]);
      }

      return OE;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [OE[OE.length - 1]];
      lastSubArray.map((arrayChunk, index) => {
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }
        if (arrayChunk.length === 2) {
          if (value != 0) {
            temp = {
              type: "newSet",
              value: value,
            };
          }
        }
      });

      if (temp.type == "newSet") {
        OE.push([value]);
      } else if (temp.type == "current") {
        OE[OE.length - 1].push(temp.value);
      }

      return OE;
    }
  };

  return {
    oddEven,
    evenOdd,
    oddEvenPattern,
    EvenOddPattern,
    oddOddPattern,
    evenEvenPattern,
    normalOEPattern,
  };
};

export default useAlg;
