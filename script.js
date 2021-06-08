setInterval(() => {
    d = new Date(); 
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_move = 30 * hr + min / 2; 
    min_move = 6 * min;
    sec_move = 6 * sec;
  
    hour.style.transform = `rotate(${hr_move}deg)`;
    minute.style.transform = `rotate(${min_move}deg)`;
    second.style.transform = `rotate(${sec_move}deg)`;
}, 1000);