console.log("Person1: show ticket");
console.log("Person2: show ticket");

const preMovie =async ()=>{
    const promiseWifeBringsTickets=new Promise((resolve, reject)=>{
        setTimeout(()=>reject('ticket'),3000)
    });

    let ticket;
    try{
        ticket = await promiseWifeBringsTickets;
    }
    catch(e){
        ticket = 'Sad face';
    }


   /* const getPopcorn=new Promise((resolve, reject)=>resolve(`popcorn` ));
    const getCandy= new Promise((resolve, reject) => resolve(`Candy`) );
    const getCoke= new Promise((resolve, reject) => resolve(`Coke`) );

    let ticket = await promiseWifeBringsTickets;
       

    let [popcorn,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke]);
    console.log(`${popcorn} ${candy} ${coke}`);*/
    return ticket;
};

preMovie().then((m)=>console.log(`person3: shows ${m}`));




/*
const promiseWifeBringsTickets=new Promise((resolve, reject) =>{
    setTimeout(()=>{
    resolve('ticket');
    },3000)
});

const getPopcorn=promiseWifeBringsTickets.then((t)=>{
    console.log('wife:I have the tickets');
    console.log('Husband: we should go in');
    console.log('wife:no i am hungry');
    return new Promise((resolve, reject)=>{
        resolve(`${t} popcorn`);
    });
});

const butter=getPopcorn.then((t)=>{
    console.log("Husband: I got some popcorn ");
    console.log("Husband: we should go in");
    console.log("Wife:no I need butter on my popcorn");
    return new Promise((resolve, reject)=>resolve(`${t} Butter`));
});

butter.then((t)=> {
    console.log(`${t}`);
});
*/
console.log("Person4: show ticket");
console.log("Person5: show ticket");

