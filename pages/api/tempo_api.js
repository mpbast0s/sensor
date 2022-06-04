function tempo(request, response){
  const dynamicDate = new Date(); 
  
  response.json({
      data: dynamicDate.toGMTString()
  })
}

export default tempo;