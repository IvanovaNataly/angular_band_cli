
module.exports = (function App()
{
    function getMusicStyles()
    {
        return new Promise(function(resolve, reject) {

            resolve( ['mantras', 'new age', 'jazz', 'folk', 'new wave']);

        });
    }

    return {
        getMusicStyles:getMusicStyles
    }
})();

