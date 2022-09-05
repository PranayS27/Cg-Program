function isprime(n:number):boolean
{
    let n:number;
    let flag:boolean=true;
    for(i=2;i<n;i++)
    {
        if(n%i==0)
        { flag=false;
            break;
        }
        if(flag==flase)
        {
            return(false);
        }
        else
        {
            return(true);
        }
        
        
    }
}
   let n1:number=5;
   console.log(isprime(n1));