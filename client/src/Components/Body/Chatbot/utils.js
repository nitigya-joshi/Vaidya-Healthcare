const stepifyScript = script =>
  script.map(step => {
    if (step.options) {
      return {
        ...step,
        options: step.options.map((option, idx) => ({
          ...option,
          value: idx
        }))
      };
    } else {
      return step;
    }
  });

export { stepifyScript };
