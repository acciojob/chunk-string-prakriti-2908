function stringChop(str, size) {
  // your code here
	let arr = [];
	if(str.length==0){
		return arr;
	}
  let count = 0;
  let s = "";
  for(let i=0;i<str.length;i++){
      s+=str.charAt(i);
      count++;
      if(count==size){
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
