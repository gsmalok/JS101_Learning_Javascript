// Problem 2: Use the above function to print the Primes from 2 to a given limit

function prime_given_limit(num) {
  for (let i = 2; i < num; i++) {
    let flag = false;
    for (let j = 2; j < i; j++) {
      if(i%j==0){
              flag = true;
      break;
      }

    }
  
  if (!flag) {
    console.log(i);
  }
  }
}

prime_given_limit(20);