function stringChop(str, size) {
  // your code here
	let arr = [];
  let count = 0;
  let s = "";
  for(let i=0;i<str.length;i++){
      if(count<size){
          s+=str.charAt(i);
          count++;
      }else if(count==size){
          count = 0;
          arr.push(s);
          s="";
      }
  }
  if(s.length!=0){
      arr.push(s);
  }
  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
