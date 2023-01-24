const head=0;const tail=1;
let headcount=0;let tailCount=0;
while((headcount<11)||(tailCount<11))
{
    let flip=Math.floor(Math.random()*10)%2;
    console.log(flip);
    if(flip == 0)
    {
        console.log("it is heads");
        headcount++;
        if(headcount==11)
        {
            console.log("Headcount = "+headcount)
        }
    }
    else
    {
        console.log("it is tails");
        tailCount++;
        if(tailCount==11)
        {
            console.log("tailcount = "+tailCount)
        }
    }
}