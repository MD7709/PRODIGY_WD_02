document.addEventListener('DOMContentLoaded', (event)  => {
    let startbtn = document.getElementById('start');
    let stopbtn = document.getElementById('stop');
    let resetbtn = document.getElementById('reset');

    let hour =  0;
    let minute =  0;
    let second =  0;
    let count =  0;
    let timer =  false;

    startbtn.addEventListener('click' , function()
{
    timer = true;
    stopwatch();
});

    stopbtn.addEventListener('click', function(){
        timer = false;
    });

    resetbtn.addEventListener('click',function(){
        timer = false;
        hour =  0;
        minute =  0;
        second =  0;
        count =  0;

        updateDisplay()
    })
    
    function updateDisplay () {
    document.getElementById('hr').innerHTML = hour < 10 ? "0" + hour : hour;
    document.getElementById('min').innerHTML = minute < 10 ? "0" + minute : minute;
    document.getElementById('sec').innerHTML = second < 10 ? "0" + second : second;
    document.getElementById('count').innerHTML = count < 10 ? "0" + count : count;
}

function stopwatch()
{
    if(timer)
        {
            count++;
            
        if(count === 100)
            {
                second++;
                count = 0;
            }
            if(second === 60)
                {
                    minute++;
                    count = 0;
                }
                if(minute === 60)
                    {
                        hour++;
                        minute = 0;
                        second = 0;
                    }
                    updateDisplay();
                    setTimeout(stopwatch,10)
                }

            }
        })