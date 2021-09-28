function ucFirst(str) {
  let result ;
  if ((str==undefined)|| str=='') {
    result='';
  }  else {result = str[0].toUpperCase()+str.substring(1);}
  return result;
}
