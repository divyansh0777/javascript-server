import * as express from 'express';

let trainee = [
  {
    id: 1,
    name: 'harry'
  },

  {
    id: 2,
    name: 'micheal'
  }
]

export default () => {
  const app = express;

    app.get('/', (request, response) => {
      response.send("Hello welcome to Successive");
    })

    app.get('/trainee', (request, response) => {
      response.send().json(trainee);
    })

    app.post('/postTest/:empId', (err,request, response) => {
      response.send('This is post request');
      trainee.forEach((key) =>{
        if(key.id===request.params.empId)
          response.send(key)
        else
          response.send('Nothing');
      })
      if(!err)
        response.send("trainee");
      else
        response.send(err);
    })

    app.delete('/deleteTest/:empId', (err,request, response) => {
      response.send('This is delete request');
      trainee.filter((value) => {
        return (value.id === request.params.empId) ? true : false;
      })
      console.log(trainee);
      trainee.forEach((key) =>{
        if(key.id===request.params.empId)
          response.send(key)
        else
          response.send('Nothing');
      })
      if(!err)
        response.send("trainee");
      else
        response.send(err);
    })
    app.get('/errorTest', (request, response, next) => {
      throw new Error('This is an error');
    })
  }
