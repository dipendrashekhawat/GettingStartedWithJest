export function calculateSum(a,b){
    return a+b;
}

export const validateNumbers = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
      return false;
    }
    return true;
  }