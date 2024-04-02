const input = {
  "object-key-1": {
    objName: "object-key-1",
    objValue: {
      type: "some-type-here",
      value: {
        firstValue: { visible: true, order: 1 },
        secondValue: { visible: true, order: 2 },
      },
    },
  },
  "object-key-2": {
    objName: "object-key-2",
    objValue: {
      type: "some-type-here",
      value: {
        thirdValue: { visible: true, order: 1 },
        fourthValue: { visible: true, order: 2 },
      },
    },
  },
};

const expectedOutPut = {
  visibility: {
    firstValue: true,
    secondValue: true,
    thirdValue: true,
    fourthValue: true,
  },
  order: {
    firstValue: 1,
    secondValue: 2,
    thirdValue: 1,
    fourthValue: 2,
  },
};

const objectValues = Object.values(input);

const formatted = objectValues.reduce(
  (acc, current) => {
    const { objValue } = current;

    const valueKeys = Object.keys(objValue.value);

    valueKeys.forEach((valueKey) => {
      const hasValidValue =
        typeof objValue.value[valueKey].visible === "boolean";
      if (!hasValidValue) return;

      acc.visibility[valueKey] = objValue.value[valueKey].visible;
      acc.order[valueKey] = objValue.value[valueKey].order;
    });

    return acc;
  },
  {
    visibility: {},
    order: {},
  }
);

const isEqualToExpected =
  JSON.stringify(formatted) === JSON.stringify(expectedOutPut);

if (isEqualToExpected) {
  console.log("YEAH, YOU MADE IT =D");
}
console.log(formatted);
