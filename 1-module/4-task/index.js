function checkSpam(str) {
    let checkStr = '1XbeT now'.toLowerCase();
    let checkStr2 = 'free xxxxx'.toLowerCase();
    
    return str.toLowerCase().includes(checkStr)||
      str.toLowerCase().includes(checkStr2);
  
}
