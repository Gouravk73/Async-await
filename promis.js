console.log("Person1: show ticket");
console.log("Person2: show ticket");

const preMovie =async ()=>{
    const promiseWifeBringsTickets=new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    });
    const getPopcorn=new Promise((resolve, reject)=>resolve(`popcorn` ));
    const addButter= new Promise((resolve, reject) => resolve(`butter`) );
    const getColdDrinks= new Promise((resolve, reject) => resolve(`butter`) );

    let ticket = await promiseWifeBringsTickets;
        console.log('wife:I have the tickets');
        console.log('Husband: we should go in');
        console.log('wife:no i am hungry');

    let popcorn=await getPopcorn;



    console.log("Husband: I got some popcorn ");
    console.log("Husband: we should go in");
    console.log("Wife:no I need butter on my popcorn");

    let butter = await addButter;
    console.log("Husband: I got some butter on popcorn ");
    console.log("Husband: anything else darling?");
    console.log("Wife: Yeah i need cold drink too");
    console.log("Husband: Sure wait");

    let coldDrink = await getColdDrinks;

    console.log("Husband: I got cold drinks ");
    console.log("Husband: anything else darling?");
    console.log("Wife: lets go we are getting late");
    console.log("Husband:thank you for reminder");

    
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

