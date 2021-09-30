function factorial(n) {
  let result = 0;
  let counter = 0;
  if(n==1 || n == 0) result = 1
  else {
    result = n;
     do {
    ++counter;
    result *= (n-counter)*1;
  } while (counter<n-1); 
  }
  return result;
}
