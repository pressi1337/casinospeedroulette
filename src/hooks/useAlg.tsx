"use client";
import { useState } from "react";

const BlackNumber = [
  2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
];
const RedNumber = [
  1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
];

const D1 = [3, 6, 9, 12, 2, 5, 8, 11, 1, 4, 7, 10];
const D2 = [15, 18, 21, 24, 14, 17, 20, 23, 13, 16, 19, 22];
const D3 = [27, 30, 33, 36, 26, 29, 32, 35, 25, 28, 31, 34];
const C1 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
const C2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const C3 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];

const useAlg = () => {
  const [oddEven, setOddEven] = useState<any>([]);
  const [evenOdd, setEvenOdd] = useState<any>([]);

  const showDozen = (value: any) => {
    if (value == 0) {
      return "0";
    } else if (D1.includes(parseInt(value))) {
      return "D1";
    } else if (D2.includes(parseInt(value))) {
      return "D2";
    } else {
      return "D3";
    }
  };

  const showColumn = (value: any) => {
    if (value == 0) {
      return "0";
    } else if (C1.includes(parseInt(value))) {
      return "C1";
    } else if (C2.includes(parseInt(value))) {
      return "C2";
    } else {
      return "D3";
    }
  };

  const showTypeDiffer = (value: any) => {
    if (value == 0) {
      return "0";
    }
    if (RedNumber.includes(parseInt(value))) {
      return "R";
    }
    return "B";
  };
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
  const BlackRed = (value: any) => {
    if (value == 0) {
      return {
        type: "zero",
        value,
      };
    } else if (RedNumber.includes(parseInt(value))) {
      return {
        type: "even",
        type_2: "black",
        value,
      };
    } else {
      return {
        type: "odd",
        type_2: "red",
        value,
      };
    }
  };

  const HighLow = (value: any) => {
    if (value == 0) {
      return {
        type: "zero",
        value,
        type_c: "even",
      };
    } else if (value <= 18) {
      return {
        type: "even",
        type_2: "low",
        type_c: "even",
        value,
      };
    } else {
      return {
        type: "odd",
        type_2: "high",
        type_c: "odd",
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

  const sanPattern = (prevOddEven: any, value: any) => {
    let OE: any = prevOddEven;
    if (!OE.length) {
      if (oddOrEven(value).type !== "zero") {
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
          if (
            (oddOrEven(arrayChunk[0]).type == "even" &&
              oddOrEven(arrayChunk[1]).type == "even") ||
            (oddOrEven(arrayChunk[0]).type == "odd" &&
              oddOrEven(arrayChunk[1]).type == "odd")
          ) {
            if (oddOrEven(value).type !== "zero") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else {
            if (
              oddOrEven(arrayChunk[1]).type == "zero" &&
              oddOrEven(value).type !== "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            } else {
              temp = {
                type: "current",
                value: value,
                index: index,
              };
            }
          }
        }

        if (arrayChunk.length === 3) {
          if (oddOrEven(value).type !== "zero") {
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

  const oddOddv4Pattern = (prevOddEven: any, value: any) => {
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
          if (oddOrEven(value).type == "odd") {
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

  const evenEvenv4Pattern = (prevOddEven: any, value: any) => {
    let OE: any = prevOddEven;

    if (!OE.length) {
      if (oddOrEven(value).type == "even") {
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
          if (oddOrEven(value).type == "even") {
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

  const OOO4V4Pattern = (prevOddEven: any, value: any) => {
    let EO: any = prevOddEven;
    if (!EO.length) {
      if (oddOrEven(value).type == "odd") {
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
          if (oddOrEven(value).type == "odd") {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          } else {
            temp = {
              type: "reset",
              value: value,
              index: index,
            };
          }
        }
        if (arrayChunk.length === 2) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }

        if (arrayChunk.length === 3) {
          if (oddOrEven(value).type == "odd") {
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
      } else if (temp.type === "reset") {
        EO.pop();
      }

      return EO;
    }
  };

  const EEE4V4Pattern = (prevOddEven: any, value: any) => {
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
          if (oddOrEven(value).type == "even") {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          } else {
            temp = {
              type: "reset",
              value: value,
              index: index,
            };
          }
        }
        if (arrayChunk.length === 2) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }

        if (arrayChunk.length === 3) {
          if (oddOrEven(value).type == "even") {
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
      } else if (temp.type === "reset") {
        EO.pop();
      }

      return EO;
    }
  };

  const oddEvenOddClose = (prevOddEven: any, value: any) => {
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
          if (oddOrEven(arrayChunk[1]).type == "zero") {
            if (oddOrEven(value).type == "odd") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          }

          if (
            oddOrEven(arrayChunk[1]).type == "even" ||
            oddOrEven(arrayChunk[1]).type == "odd"
          ) {
            if (oddOrEven(value).type == "odd") {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            }
            if (
              oddOrEven(value).type == "even" ||
              oddOrEven(value).type == "zero"
            ) {
              temp = {
                type: "current",
                value: value,
              };
            }
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
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };

  const evenOddEvenClose = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      if (oddOrEven(value).type == "even") {
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
          if (oddOrEven(arrayChunk[1]).type == "zero") {
            if (oddOrEven(value).type == "even") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          }

          if (
            oddOrEven(arrayChunk[1]).type == "even" ||
            oddOrEven(arrayChunk[1]).type == "odd"
          ) {
            if (oddOrEven(value).type == "even") {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            }
            if (
              oddOrEven(value).type == "odd" ||
              oddOrEven(value).type == "zero"
            ) {
              temp = {
                type: "current",
                value: value,
              };
            }
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
        OO.push([value]);
      } else if (temp.type == "current") {
        OO[OO.length - 1].push(temp.value);
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };

  const B1Close = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      if (oddOrEven(value).type == "even" || oddOrEven(value).type == "odd") {
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
          if (oddOrEven(value).type == "zero") {
            temp = {
              type: "current",
              value: value,
            };
          } else {
            if (oddOrEven(arrayChunk[1]).type == "zero") {
              if (
                oddOrEven(value).type == "even" ||
                oddOrEven(value).type == "odd"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (
              oddOrEven(arrayChunk[0]).type == "odd" &&
              oddOrEven(arrayChunk[1]).type == "odd"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            } else if (
              oddOrEven(arrayChunk[0]).type == "even" &&
              oddOrEven(arrayChunk[1]).type == "even"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            } else if (
              oddOrEven(arrayChunk[1]).type == "even" &&
              oddOrEven(value).type == "even"
            ) {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            } else if (
              oddOrEven(arrayChunk[1]).type == "odd" &&
              oddOrEven(value).type == "odd"
            ) {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            } else if (
              oddOrEven(arrayChunk[1]).type == "even" ||
              oddOrEven(arrayChunk[1]).type == "odd"
            ) {
              temp = {
                type: "current",
                value: value,
              };
            }
          }
        }

        if (arrayChunk.length === 3) {
          if (
            oddOrEven(arrayChunk[2]).type == "odd" ||
            oddOrEven(arrayChunk[2]).type == "even" ||
            oddOrEven(arrayChunk[2]).type == "zero"
          ) {
            if (
              oddOrEven(value).type == "even" ||
              oddOrEven(value).type == "odd"
            ) {
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
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };

  const B1CloseHL = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      if (HighLow(value).type == "even" || HighLow(value).type == "odd") {
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
          if (HighLow(value).type == "zero") {
            temp = {
              type: "current",
              value: value,
            };
          } else {
            if (HighLow(arrayChunk[1]).type == "zero") {
              if (
                HighLow(value).type == "even" ||
                HighLow(value).type == "odd"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (
              HighLow(arrayChunk[0]).type == "odd" &&
              HighLow(arrayChunk[1]).type == "odd"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            } else if (
              HighLow(arrayChunk[0]).type == "even" &&
              HighLow(arrayChunk[1]).type == "even"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            } else if (
              HighLow(arrayChunk[1]).type == "even" &&
              HighLow(value).type == "even"
            ) {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            } else if (
              HighLow(arrayChunk[1]).type == "odd" &&
              HighLow(value).type == "odd"
            ) {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            } else if (
              HighLow(arrayChunk[1]).type == "even" ||
              HighLow(arrayChunk[1]).type == "odd"
            ) {
              temp = {
                type: "current",
                value: value,
              };
            }
          }
        }

        if (arrayChunk.length === 3) {
          if (
            HighLow(arrayChunk[2]).type == "odd" ||
            HighLow(arrayChunk[2]).type == "even" ||
            HighLow(arrayChunk[2]).type == "zero"
          ) {
            if (HighLow(value).type == "even" || HighLow(value).type == "odd") {
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
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };
  const B1CloseBR = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      if (BlackRed(value).type == "even" || BlackRed(value).type == "odd") {
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
          if (BlackRed(value).type == "zero") {
            temp = {
              type: "current",
              value: value,
            };
          } else {
            if (BlackRed(arrayChunk[1]).type == "zero") {
              if (
                BlackRed(value).type == "even" ||
                BlackRed(value).type == "odd"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (
              BlackRed(arrayChunk[0]).type == "odd" &&
              BlackRed(arrayChunk[1]).type == "odd"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            } else if (
              BlackRed(arrayChunk[0]).type == "even" &&
              BlackRed(arrayChunk[1]).type == "even"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            } else if (
              BlackRed(arrayChunk[1]).type == "even" &&
              BlackRed(value).type == "even"
            ) {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            } else if (
              BlackRed(arrayChunk[1]).type == "odd" &&
              BlackRed(value).type == "odd"
            ) {
              temp = {
                type: "closeNdOpenNewSet",
                value: value,
              };
            } else if (
              BlackRed(arrayChunk[1]).type == "even" ||
              BlackRed(arrayChunk[1]).type == "odd"
            ) {
              temp = {
                type: "current",
                value: value,
              };
            }
          }
        }

        if (arrayChunk.length === 3) {
          if (
            BlackRed(arrayChunk[2]).type == "odd" ||
            BlackRed(arrayChunk[2]).type == "even" ||
            BlackRed(arrayChunk[2]).type == "zero"
          ) {
            if (
              BlackRed(value).type == "even" ||
              BlackRed(value).type == "odd"
            ) {
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
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };

  const B2Close = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      OO.push([value]);
      return OO;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [OO[OO.length - 1]];
      let previous = OO.length >= 2 ? [...OO[OO.length - 2]] : [];
      lastSubArray.map((arrayChunk, index) => {
        console.log({ arrayChunk });
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }

        if (arrayChunk.length === 2) {
          if (
            oddOrEven(arrayChunk[0]).type == "odd" &&
            oddOrEven(arrayChunk[1]).type == "even"
          ) {
            if (
              oddOrEven(value).type == "odd" ||
              oddOrEven(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (
            oddOrEven(arrayChunk[0]).type == "even" &&
            oddOrEven(arrayChunk[1]).type == "odd"
          ) {
            if (
              oddOrEven(value).type == "even" ||
              oddOrEven(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (
            previous.length &&
            oddOrEven(arrayChunk[0]).type == "zero" &&
            oddOrEven(arrayChunk[1]).type == "odd"
          ) {
            if (oddOrEven(previous[previous.length - 1]).type == "zero") {
              if (previous.length == 3) {
                if (oddOrEven(previous[previous.length - 2]).type == "odd") {
                  if (
                    oddOrEven(value).type == "even" ||
                    oddOrEven(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                } else if (
                  oddOrEven(previous[previous.length - 3]).type == "odd"
                ) {
                  if (
                    oddOrEven(value).type == "even" ||
                    oddOrEven(value).type == "zero"
                  ) {
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
              } else if (previous.length == 2) {
                if (oddOrEven(previous[previous.length - 1]).type == "odd") {
                  if (
                    oddOrEven(value).type == "even" ||
                    oddOrEven(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                }
              }
            } else if (oddOrEven(previous[previous.length - 1]).type == "odd") {
              if (
                oddOrEven(value).type == "even" ||
                oddOrEven(value).type == "zero"
              ) {
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
          } else if (
            previous.length &&
            oddOrEven(arrayChunk[0]).type == "zero" &&
            oddOrEven(arrayChunk[1]).type == "even"
          ) {
            if (oddOrEven(previous[previous.length - 1]).type == "zero") {
              if (previous.length == 3) {
                if (oddOrEven(previous[previous.length - 2]).type == "even") {
                  if (
                    oddOrEven(value).type == "odd" ||
                    oddOrEven(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                } else if (
                  oddOrEven(previous[previous.length - 3]).type == "even"
                ) {
                  if (
                    oddOrEven(value).type == "odd" ||
                    oddOrEven(value).type == "zero"
                  ) {
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
              } else if (previous.length == 2) {
                if (oddOrEven(previous[previous.length - 1]).type == "odd") {
                  if (
                    oddOrEven(value).type == "even" ||
                    oddOrEven(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                }
              }
            } else if (
              oddOrEven(previous[previous.length - 1]).type == "even"
            ) {
              if (
                oddOrEven(value).type == "odd" ||
                oddOrEven(value).type == "zero"
              ) {
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
            oddOrEven(arrayChunk[0]).type == "zero" &&
            oddOrEven(arrayChunk[1]).type == "zero" &&
            oddOrEven(arrayChunk[2]).type == "zero"
          ) {
            temp = {
              type: "newSet",
              value: value,
            };
          } else if (
            oddOrEven(arrayChunk[1]).type == "zero" &&
            oddOrEven(arrayChunk[2]).type == "zero"
          ) {
            if (oddOrEven(arrayChunk[0]).type == "odd") {
              if (
                oddOrEven(value).type == "even" ||
                oddOrEven(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (oddOrEven(arrayChunk[0]).type == "even") {
              if (
                oddOrEven(value).type == "odd" ||
                oddOrEven(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            }
          } else if (oddOrEven(arrayChunk[2]).type == "zero") {
            if (oddOrEven(arrayChunk[1]).type == "odd") {
              if (
                oddOrEven(value).type == "even" ||
                oddOrEven(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (oddOrEven(arrayChunk[1]).type == "even") {
              if (
                oddOrEven(value).type == "odd" ||
                oddOrEven(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            }
          } else if (oddOrEven(arrayChunk[2]).type == "odd") {
            if (
              oddOrEven(value).type == "even" ||
              oddOrEven(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (oddOrEven(arrayChunk[2]).type == "even") {
            if (
              oddOrEven(value).type == "odd" ||
              oddOrEven(value).type == "zero"
            ) {
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
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };
  const B2CloseHL = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      OO.push([value]);
      return OO;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [OO[OO.length - 1]];
      let previous = OO.length >= 2 ? [...OO[OO.length - 2]] : [];
      lastSubArray.map((arrayChunk, index) => {
        console.log({ arrayChunk });
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }

        if (arrayChunk.length === 2) {
          if (
            HighLow(arrayChunk[0]).type == "odd" &&
            HighLow(arrayChunk[1]).type == "even"
          ) {
            if (HighLow(value).type == "odd" || HighLow(value).type == "zero") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (
            HighLow(arrayChunk[0]).type == "even" &&
            HighLow(arrayChunk[1]).type == "odd"
          ) {
            if (
              HighLow(value).type == "even" ||
              HighLow(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (
            previous.length &&
            HighLow(arrayChunk[0]).type == "zero" &&
            HighLow(arrayChunk[1]).type == "odd"
          ) {
            if (HighLow(previous[previous.length - 1]).type == "zero") {
              if (previous.length == 3) {
                if (HighLow(previous[previous.length - 2]).type == "odd") {
                  if (
                    HighLow(value).type == "even" ||
                    HighLow(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                } else if (
                  HighLow(previous[previous.length - 3]).type == "odd"
                ) {
                  if (
                    HighLow(value).type == "even" ||
                    HighLow(value).type == "zero"
                  ) {
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
              } else if (previous.length == 2) {
                if (HighLow(previous[previous.length - 1]).type == "odd") {
                  if (
                    HighLow(value).type == "even" ||
                    HighLow(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                }
              }
            } else if (HighLow(previous[previous.length - 1]).type == "odd") {
              if (
                HighLow(value).type == "even" ||
                HighLow(value).type == "zero"
              ) {
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
          } else if (
            previous.length &&
            HighLow(arrayChunk[0]).type == "zero" &&
            HighLow(arrayChunk[1]).type == "even"
          ) {
            if (HighLow(previous[previous.length - 1]).type == "zero") {
              if (previous.length == 3) {
                if (HighLow(previous[previous.length - 2]).type == "even") {
                  if (
                    HighLow(value).type == "odd" ||
                    HighLow(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                } else if (
                  HighLow(previous[previous.length - 3]).type == "even"
                ) {
                  if (
                    HighLow(value).type == "odd" ||
                    HighLow(value).type == "zero"
                  ) {
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
              } else if (previous.length == 2) {
                if (HighLow(previous[previous.length - 1]).type == "odd") {
                  if (
                    HighLow(value).type == "even" ||
                    HighLow(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                }
              }
            } else if (HighLow(previous[previous.length - 1]).type == "even") {
              if (
                HighLow(value).type == "odd" ||
                HighLow(value).type == "zero"
              ) {
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
            HighLow(arrayChunk[0]).type == "zero" &&
            HighLow(arrayChunk[1]).type == "zero" &&
            HighLow(arrayChunk[2]).type == "zero"
          ) {
            temp = {
              type: "newSet",
              value: value,
            };
          } else if (
            HighLow(arrayChunk[1]).type == "zero" &&
            HighLow(arrayChunk[2]).type == "zero"
          ) {
            if (HighLow(arrayChunk[0]).type == "odd") {
              if (
                HighLow(value).type == "even" ||
                HighLow(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (HighLow(arrayChunk[0]).type == "even") {
              if (
                HighLow(value).type == "odd" ||
                HighLow(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            }
          } else if (HighLow(arrayChunk[2]).type == "zero") {
            if (HighLow(arrayChunk[1]).type == "odd") {
              if (
                HighLow(value).type == "even" ||
                HighLow(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (HighLow(arrayChunk[1]).type == "even") {
              if (
                HighLow(value).type == "odd" ||
                HighLow(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            }
          } else if (HighLow(arrayChunk[2]).type == "odd") {
            if (
              HighLow(value).type == "even" ||
              HighLow(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (HighLow(arrayChunk[2]).type == "even") {
            if (HighLow(value).type == "odd" || HighLow(value).type == "zero") {
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
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };

  const B2CloseBR = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      OO.push([value]);
      return OO;
    } else {
      let temp: any = {
        type: undefined,
        value: undefined,
        index: undefined,
      };

      let lastSubArray = [OO[OO.length - 1]];
      let previous = OO.length >= 2 ? [...OO[OO.length - 2]] : [];
      lastSubArray.map((arrayChunk, index) => {
        console.log({ arrayChunk });
        if (arrayChunk.length === 1) {
          temp = {
            type: "current",
            value: value,
            index: index,
          };
        }

        if (arrayChunk.length === 2) {
          if (
            BlackRed(arrayChunk[0]).type == "odd" &&
            BlackRed(arrayChunk[1]).type == "even"
          ) {
            if (
              BlackRed(value).type == "odd" ||
              BlackRed(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (
            BlackRed(arrayChunk[0]).type == "even" &&
            BlackRed(arrayChunk[1]).type == "odd"
          ) {
            if (
              BlackRed(value).type == "even" ||
              BlackRed(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (
            previous.length &&
            BlackRed(arrayChunk[0]).type == "zero" &&
            BlackRed(arrayChunk[1]).type == "odd"
          ) {
            if (BlackRed(previous[previous.length - 1]).type == "zero") {
              if (previous.length == 3) {
                if (BlackRed(previous[previous.length - 2]).type == "odd") {
                  if (
                    BlackRed(value).type == "even" ||
                    BlackRed(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                } else if (
                  BlackRed(previous[previous.length - 3]).type == "odd"
                ) {
                  if (
                    BlackRed(value).type == "even" ||
                    BlackRed(value).type == "zero"
                  ) {
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
              } else if (previous.length == 2) {
                if (BlackRed(previous[previous.length - 1]).type == "odd") {
                  if (
                    BlackRed(value).type == "even" ||
                    BlackRed(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                }
              }
            } else if (BlackRed(previous[previous.length - 1]).type == "odd") {
              if (
                BlackRed(value).type == "even" ||
                BlackRed(value).type == "zero"
              ) {
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
          } else if (
            previous.length &&
            BlackRed(arrayChunk[0]).type == "zero" &&
            BlackRed(arrayChunk[1]).type == "even"
          ) {
            if (BlackRed(previous[previous.length - 1]).type == "zero") {
              if (previous.length == 3) {
                if (BlackRed(previous[previous.length - 2]).type == "even") {
                  if (
                    BlackRed(value).type == "odd" ||
                    BlackRed(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                } else if (
                  BlackRed(previous[previous.length - 3]).type == "even"
                ) {
                  if (
                    BlackRed(value).type == "odd" ||
                    BlackRed(value).type == "zero"
                  ) {
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
              } else if (previous.length == 2) {
                if (BlackRed(previous[previous.length - 1]).type == "odd") {
                  if (
                    BlackRed(value).type == "even" ||
                    BlackRed(value).type == "zero"
                  ) {
                    temp = {
                      type: "newSet",
                      value: value,
                    };
                  }
                }
              }
            } else if (BlackRed(previous[previous.length - 1]).type == "even") {
              if (
                BlackRed(value).type == "odd" ||
                BlackRed(value).type == "zero"
              ) {
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
            BlackRed(arrayChunk[0]).type == "zero" &&
            BlackRed(arrayChunk[1]).type == "zero" &&
            BlackRed(arrayChunk[2]).type == "zero"
          ) {
            temp = {
              type: "newSet",
              value: value,
            };
          } else if (
            BlackRed(arrayChunk[1]).type == "zero" &&
            BlackRed(arrayChunk[2]).type == "zero"
          ) {
            if (BlackRed(arrayChunk[0]).type == "odd") {
              if (
                BlackRed(value).type == "even" ||
                BlackRed(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (BlackRed(arrayChunk[0]).type == "even") {
              if (
                BlackRed(value).type == "odd" ||
                BlackRed(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            }
          } else if (BlackRed(arrayChunk[2]).type == "zero") {
            if (BlackRed(arrayChunk[1]).type == "odd") {
              if (
                BlackRed(value).type == "even" ||
                BlackRed(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            } else if (BlackRed(arrayChunk[1]).type == "even") {
              if (
                BlackRed(value).type == "odd" ||
                BlackRed(value).type == "zero"
              ) {
                temp = {
                  type: "newSet",
                  value: value,
                };
              }
            }
          } else if (BlackRed(arrayChunk[2]).type == "odd") {
            if (
              BlackRed(value).type == "even" ||
              BlackRed(value).type == "zero"
            ) {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (BlackRed(arrayChunk[2]).type == "even") {
            if (
              BlackRed(value).type == "odd" ||
              BlackRed(value).type == "zero"
            ) {
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
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };

  const nDoze = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      if (showDozen(value) !== "0") {
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
          if (showDozen(arrayChunk[1]) == "0") {
            if (showDozen(value) !== "0") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (showDozen(arrayChunk[0]) == showDozen(arrayChunk[1])) {
            temp = {
              type: "newSet",
              value: value,
            };
          } else {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          }
        }

        if (arrayChunk.length === 3) {
          if (showDozen(value) !== "0") {
            temp = {
              type: "newSet",
              value: value,
            };
          }
        }
      });

      if (temp.type == "newSet") {
        OO.push([value]);
      } else if (temp.type == "current") {
        OO[OO.length - 1].push(temp.value);
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };
  const nColumn = (prevOddEven: any, value: any) => {
    let OO: any = prevOddEven;
    if (!OO.length) {
      if (showColumn(value) !== "0") {
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
          if (showColumn(arrayChunk[1]) == "0") {
            if (showColumn(value) !== "0") {
              temp = {
                type: "newSet",
                value: value,
              };
            }
          } else if (showColumn(arrayChunk[0]) == showColumn(arrayChunk[1])) {
            temp = {
              type: "newSet",
              value: value,
            };
          } else {
            temp = {
              type: "current",
              value: value,
              index: index,
            };
          }
        }

        if (arrayChunk.length === 3) {
          if (showColumn(value) !== "0") {
            temp = {
              type: "newSet",
              value: value,
            };
          }
        }
      });

      if (temp.type == "newSet") {
        OO.push([value]);
      } else if (temp.type == "current") {
        OO[OO.length - 1].push(temp.value);
      } else if (temp.type == "closeNdOpenNewSet") {
        OO[OO.length - 1].push(temp.value);
        OO.push([value]);
      }

      return OO;
    }
  };
  return {
    oddOrEven,
    oddEven,
    evenOdd,
    oddEvenPattern,
    EvenOddPattern,
    oddOddPattern,
    evenEvenPattern,
    normalOEPattern,
    sanPattern,
    oddOddv4Pattern,
    evenEvenv4Pattern,
    OOO4V4Pattern,
    EEE4V4Pattern,
    oddEvenOddClose,
    evenOddEvenClose,
    B1Close,
    B1CloseHL,
    B1CloseBR,
    HighLow,
    showTypeDiffer,
    B2Close,
    B2CloseHL,
    B2CloseBR,
    nDoze,
    nColumn,
    showDozen,
    showColumn,
  };
};

export default useAlg;
