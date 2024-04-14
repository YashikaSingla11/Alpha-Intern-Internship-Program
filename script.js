let h=0;//for hour 
let m=0;//for min
let s=0;//for sec
let count=0;//last

let timer=false;//its show->timer is stop when its true it means timer is on
function start(){
    timer=true;//when someone start time then timer is true and call the stopwatch
    stopwatch();
}
function pause(){
    //   when someone  stop time then timer is false
    timer=false;
}
function reset(){
        timer=false;
        h=0;//for hour 
        m=0;//for min
        s=0;//for sec
        count=0;//last
        document.getElementById('hr').innerHTML="00";
        document.getElementById('min').innerHTML="00";
        document.getElementById('sec').innerHTML="00";
        document.getElementById('count').innerHTML="00";
        
}
function stopwatch(){
    if(timer==true){
        count++;//after 10 sec increase by 1
        if(count==100){
            s++;
            count=0;
        }
        if(s==60){
            m++;
            s=0;
        }
        if(m==60){
            h++;
            m=0;
            s=0;
        }
        let hstr=h;
        let mstr=m;
        let sstr=s;
        let countstr=count;
        // when its in single digit
        if(h<10){
            hstr="0"+hstr;
        }
        if(m<10){
            mstr="0"+mstr;
        }
        if(s<10){
            sstr="0"+sstr
        }
        if(h<10){
            countstr="0"+countstr
        }
        // document.getElementById('hr').innerHTML=h;
        // document.getElementById('min').innerHTML=m;
        // document.getElementById('sec').innerHTML=s;
        
        // document.getElementById('count').innerHTML=count;
        document.getElementById('hr').innerHTML=hstr;
        document.getElementById('min').innerHTML=mstr;
        document.getElementById('sec').innerHTML=sstr;
        
        document.getElementById('count').innerHTML=countstr;
        setTimeout("stopwatch()",10);//wait 10 milisecond
    }
}

     