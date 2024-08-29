import React, {useState, useEffect} from 'react';
import './Hero.css';
import image from '../Assets/home_graphic.png';

function Hero(){

    var fontSize = 6 + window.innerWidth/250;;
    var lineDepth = window.innerHeight/fontSize * 0.5;
    var animationStart = lineDepth * 1.1;
    var typerStart = animationStart + 11;

    const calculatePID = () => {
        fontSize = 6 + window.innerWidth/250;
        lineDepth = window.innerHeight/fontSize * 0.5;
        animationStart = lineDepth * 1.1;
        typerStart = animationStart + 18;
    }

    const [temp_counter, setCounter] = useState(true);
    const [selfCorrect, setSelfCorrect] = useState(false);

    const [index, setIndex] = useState(0);
    const [logs, setLogs] = useState([]);

    const getDate = () => {
        var date = new Date();
        var millis = date.getMilliseconds();
        date = date.toLocaleTimeString().replace(" AM","").replace(" PM","")
        return `${date}.${millis}`;
    };

    function generateString() {
        var current = getDate();
        if (temp_counter){
            updateLogs(`${current} IP raspi-2b.local.ssh > raspi-5.local.apwi-rxspooler: Flags [P.], seq 3500440357:3500440553, ack 3652628334, win 18760, options [mss 1460,sackOK,TS val 3547090332 ecr 0,nop,wscale 7], length 196`);
        } else {
            updateLogs(`${current} IP raspi-5.local.apwi-rxspooler > raspi-2b.local.ssh: Flags [.], ack 196, win 64487, length 0${' '.repeat(101)}`);
        };
        setCounter(!temp_counter);
    }

    function updateLogs (stringVar){
        var temp = logs;
        temp.push(`${stringVar}`);
        if (logs.length >= lineDepth + 1){
            temp.splice(0, 1);
            if (selfCorrect){
                setSelfCorrect(!selfCorrect);
            }
        }
        else {
            setSelfCorrect(true);
        }
        setLogs(temp); 
    }

    const divStyles = {
        'font-size': `${fontSize}px`,
        color: (index > animationStart) ? '#424242': 'rgb(179, 179, 178)',
        transition: 'color 2000ms ease-in-out',
      };

    const typeStyles = {
        'font-size': `${4 + window.innerHeight*0.02 + window.innerWidth*0.04}px`,
        width: (index > typerStart-3) ? 'auto': '0',
        'border-color': (index > typerStart) ? 'orange': 'transparent',
        'animation-delay': `${88 * (typerStart)}ms`,
      };

    const containerStyles = {
        'max-height': `${window.innerHeight}`,
        overflow: 'hidden',
      };

    const moreStyles = {
        'font-size': `${6 + window.innerWidth*0.02}px`,
        display: (index > typerStart+6) ? 'block' : 'none',
        transition: 'display 300ms ease-in-out',
      };
         
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setIndex(index + 1);
            generateString();
        }, (!selfCorrect) ? 250 : 50);
         
        //Clearing the interval
        return () => clearInterval(interval);
    }, [index]);

    useEffect(() => {
        window.addEventListener('resize', calculatePID);
      });

    return (
        <>
          <div className='log-container' 
          style={containerStyles}>{logs.map(query => <pre 
          className='logs' style={divStyles}>{ query }</pre>)}
          </div> 
          <div className='typewriter-container'>
            <div class='typewriter' style={typeStyles}>
                Hi, I'm Kyane.
            </div>
            <div className='more' style={moreStyles}>
                Scroll down for more
            </div>
          </div>
          <img src={image} className='image'/>
        </>
    );
};

export default Hero;
