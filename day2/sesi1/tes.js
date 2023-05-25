// split params


const url = 'https://www.domain.com/page?id=10&name=Adam'

function getParam (iniparams) {
  const params = new URLSearchParams(url.split('?')[1])
  return params.get(iniparams)
}


console.log(getParam("id"))



// object


