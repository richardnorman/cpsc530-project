function worker_function() {
  console.log('Message received from main script');
}

if(window!=self)
  worker_function();
