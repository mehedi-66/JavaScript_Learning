

// default parameter

function addTwo(a, b)
{
    return a + b;
}

const ans = addTwo(4, 5);
console.log(ans); // 9


// set default parameters

function addTwo(a, b = 5)
{
    return a + b;
}

const ans1 = addTwo(4);
console.log(ans1); // 9