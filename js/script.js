function show_menu() {
  var menu_bttn = document.getElementById('hidden_menu');
  var search_bttn = document.getElementById('hidden_search');

  if((menu_bttn.className == "hidden_list hide_menu")||(menu_btn.className == "")) {
    if(search_bttn.className == "hiddensearch shown_search")
    {
      search_bttn.className = "hide_search"
    }
    menu_bttn.className = "hidden_list show_list";
  }
  else {
    menu_bttn.className = "hidden_list hide_menu";
  }
}
function show_search() {
  var menu_bttn = document.getElementById('hidden_menu');
  var search_bttn = document.getElementById('hidden_search');

  if((search_bttn.className == "hiddensearch hide_search")||(menu_btn.className == "")) {
    if(menu_bttn.className == "hidden_list show_list")
    {
      menu_bttn.className = "hide_menu"
    }
    search_bttn.className = "hiddensearch shown_search";
  }
  else {
    search_bttn.className = "hiddensearch hide_search";
  }
}
