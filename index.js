addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  //hanndle all .jpg routes
  if (request.url.endsWith('.jpg') || request.url.endsWith('.png') || request.url.endsWith('.gif')) {

    //get the image from the url
    var imageName= request.url.split("/images")[1];

    var url = `https://kj234.github.io/portfolio/images${imageName}`;

    //fetch image
    let res = await fetch(url);

    //return image
    return res;
    


  }





  //handle /script.js route
  if (request.url.includes('/script.js')) {

  //fetch https://kj234.github.io/portfolio/script.js
    const response = await fetch('https://kj234.github.io/portfolio/script.js')
    const text = await response.text()

    return new Response(text, {
      headers:{
        'Content-Type': 'text/javascript'
      }
    });
  }

  //handle /style.css route
  if (request.url.includes('/style.css')) {
      
    //fetch https://kj234.github.io/portfolio/style.css
    const response = await fetch('https://kj234.github.io/portfolio/style.css')
    const text = await response.text()

    return new Response(text, {
      headers:{
        'Content-Type': 'text/css'
      }
    });

  }
    //fetch html https://kj234.github.io/portfolio/
    const response = await fetch('https://kj234.github.io/portfolio/');
    const html = await response.text();
    //return html
    return new Response(html, {
        headers: {
            'Content-Type': 'text/html'
        }
    });

  // return new Response('Hello worker!', {
  //   headers: { 'content-type': 'text/plain' },
  // })
}
