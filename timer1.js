//process the arguments list and parse into a list of integer values for each timer, skipping not valid numbers
const createTimers = function(argList) {
  const soln = [];
  for (const argument of argList) {
    //(an empty string with spaces will register as 0)
    if (argument !== "") {
      if ((!isNaN(Number(argument))) && (Number(argument) >= 0)) {
        soln.push(Number(argument));
      }
    }
  }
  return soln;
};

const setTimers = function(timers) {
  timers.forEach(timer => {
    const timeInSeconds = timer * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timeInSeconds);
  });
  
};

const timer1 = function(argList) {
  //case there are no arguments given
  if (argList.length <= 0) return;

  //otherwise create timers for valid values
  const timers = createTimers(argList);
  setTimers(timers);
};

timer1(process.argv.slice(2));