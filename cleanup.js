var init = function()

{
    requestAnimationFrame(init);
    update();
    paint();
}   
 window.setInterval(update, 10);
 calculated_time_in_ms = getCurrentTimeInMs();

 while(game_is_running) {
     paint();
     while(calculated_time_in_ms < getCurrentTimeInMs()) {
          update();
          calculated_time_in_ms += 10;
     }
 }
