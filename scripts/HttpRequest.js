/**
 * A class to perform HTTP requests using the XMLHttpRequest . 
 */
class HttpRequest {
    
        /**
         * Performs a HTTP GET request to the specified URL.
         * 
         * Returns: The response text after being parsed to JSON.s
         * @param {string} url 
         */
        static PerformGetRequest(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(JSON.parse(this.responseText));
                };
                xhr.onerror = reject;
                xhr.open('GET', url);
                xhr.send();
            });
        }
    }