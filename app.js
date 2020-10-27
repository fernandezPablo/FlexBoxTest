jQuery(() => {
    var btnShowSidebar = $('#show-sidebar');
    var btnHiddenSidebar = $('#hidden-sidebar');
    var sidebar = $('#users-panel');
    btnHiddenSidebar.on('click', ()=>{
        btnShowSidebar.css('display','block');
        btnHiddenSidebar.css('display','none');
        sidebar.css('display','none');
    });
    btnShowSidebar.on('click', ()=>{
        btnHiddenSidebar.css('display','block');
        btnShowSidebar.css('display','none');
        sidebar.css('display','block');
    });
});