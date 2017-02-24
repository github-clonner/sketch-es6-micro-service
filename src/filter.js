export function filter([ head, ...tail ], fn) {
  const newHead = fn(head) ? [ head ] : [];
  return tail.length ? [ ...newHead, ...(filter(tail, fn)) ] : newHead;
}

function bbb() {
  return new Promise(function(resolve, reject){
      //We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
      //In this example, we use setTimeout(...) to simulate async code. 
      //In reality, you will probabally using something like XHR or an HTML5 API.
      setTimeout(function(){
          resolve("Success!"); //Yay! Everything went well!
      }, 250);
  });
}

async function a() {
  const result = await bbb();
  console.log(result);
}

a();