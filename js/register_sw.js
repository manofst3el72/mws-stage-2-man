if (navigator.serviceWorker)
{
    navigator.serviceWorker.register('sw.js').then(function()
    {
        console.log('Succesful Registration!');
    }).catch(function() {
        console.log('Registration failed!');
    });
}