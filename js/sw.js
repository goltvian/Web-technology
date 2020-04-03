window.onload = function() {
    document.getElementById('SuperButton').onclick = function()
    {
        if(document.body.className != 'dark')
        {
            document.body.className = 'dark';
        }
        else
        {
            document.body.className = '';
        }
    }
}