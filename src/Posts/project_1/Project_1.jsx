import React, {useEffect} from 'react';
import Page, {Header_1, Header_2, Label, Block, Media, Reference, Credit} from '../../components/Page.jsx';
import chasis from './EEE chasis.jfif';
import event from './main event.png';
import hsv from './hsv.png';

function Project_1(){

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <>
          <Page>
            <Header_1 text = 'The EEE Bot'/>
            <Credit date='28/08/2024' author='Kyane Perera'/>
            <Label text = 'As part of my first year project, I built an RC car using 2 ESP32s [1] communicating on two layers of PCBs which made up the chassis to which it was built up to then support live symbol recognition and manual programmability. '/>
            <Header_2 text = 'Building the first stage of the EEE bot'/>
            <Label text = 'It initially started off as an introductory project to introduce us to I2C, a communication protocol which consists of timing the transmission of data between a master and slave IoT device according to an internal clock signal.'/>
            <Block>
              <Media source={chasis} Width={'30%'} minWidth={'200px'} 
                             caption={'Bottom deck board for the EEE bot'} maxWidth={'450px'} 
                             Float={'left'}/>
              <Label text='Using the Arduino IDE, I coded the ESP32 with C++ and wired everything in my university lab. We assigned the top deck microcontroller to be the master, gathering data from ultrasonic sensors [2] / infrared LEDs and detectors [3] (coupled with op-amps [4] ), and an IMU [5] to then control how far/fast the car travelled. The bottom deck microcontroller was the slave, it received data from the master ESP32 to then turn the motors a fixed amount per main-loop-cycle which should’ve been determined by rotary encoders, but I was only able to ever get one working at a time… so I ditched them in place for SUVAT equations computed using the IMU. We also used servo motors to turn a parallel steering mechanism,  though personally I think it would’ve been better to use Ackermann geometry [6].'/>
              <Label text='The initial coding step was simple, only requiring importing Adafruit libraries to gather data and then use I2C to transmit the processed data to the bottom deck. But the building process was a whole different story, I spent 2 weeks trying to find out why my bot only worked half the time only to realise I broke a fuse before soldering it in and now I’m mortally wounded by my stupidity.'/>
            </Block>
            <Header_2 text = 'Adding computer vision and a keypad'/>
            <Label text='Anyways, we then amped it up a bit to now include computer vision using a Raspberry Pi 4B [7] and a keypad [8] for manual control. Those were implemented on a 3rd deck which was manually plugged into the master ESP on the 2nd deck. To test out the initial connection we flashed a flavour of Raspbian and edited it to connect to the lab’s LAN, then installing Node-RED [9] onto it for us to check if we can connect the Pi via I2C. Once that was checked, we were able to read off data from the IMU and display them on a Node-RED dashboard which we connected to via the local IPv4 address.'/>
            <Block>
              <Media source={hsv} Width={'30%'} minWidth={'150px'} 
                             caption={'Detection of a symbol using the pi camera'} maxWidth={'450px'} 
                             Float={'right'}/>
              <Label text='Then came the interesting part, our task was to identify symbols on the floor using a mounted Pi Camera [10] to switch which colour of track the bot would follow. To do that, we used OpenCV to first detect the line it was meant to follow, then filter which colour it wants to see using HSV values. To detect the symbol, we first detected a box around symbol, and if whatever shape was inside met a threshold of recognition, it would trigger a switch in the colour path the bot should follow.'/>
              <Label text='As for the keypad, I mapped the 3x4 membrane to a grid corresponding to each value. It would first take a value for the direction it moves, then takes another for how many degrees/cm it should move. Commands could then be displayed on an LCD screen, deleted using  “#” and  run using “*”.'/>
            </Block>
            <Label text='The only thing that was left was the showcase, where we took our bots to the track to get graded on their performance in navigating a foam maze and a series of paths laid out by the EEE faculty.'/>
            <Block>
              <Media source={event} Width={'40%'} minWidth={'323px'} 
                             caption={'University end of year 1 showcase'} maxWidth={'450px'} 
                             Justify={'center'}/>
            </Block>
            <Reference refCount='1' source='https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf'/>
            <Reference refCount='2' source='https://www.adafruit.com/product/3942'/>
            <Reference refCount='3' source='https://www.amazon.co.uk/Gikfun-Infrared-Emitter-Receiver-Arduino/dp/B01HGIQ8NG/ref=asc_df_B01HGIQ8NG/?tag=googshopuk-21&linkCode=df0&hvadid=696285193871&hvpos=&hvnetw=g&hvrand=18282025146024140141&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9045907&hvtargid=pla-2281435176898&psc=1&mcid=33d9a6e2b23b3cd7b5b5ca007ca15e4a&hvocijid=18282025146024140141-B01HGIQ8NG-&hvexpln=74&gad_source=1'/>
            <Reference refCount='4' source='https://www.ti.com/product/MCP6292'/>
            <Reference refCount='5' source='https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf'/>
            <Reference refCount='6' source='https://en.wikipedia.org/wiki/Ackermann_steering_geometry'/>
            <Reference refCount='7' source='https://datasheets.raspberrypi.com/rpi4/raspberry-pi-4-datasheet.pdf'/>
            <Reference refCount='8' source='https://lastminuteengineers.com/arduino-keypad-tutorial/'/>
            <Reference refCount='9' source='https://nodered.org'/>
            <Reference refCount='10' source='https://www.raspberrypi.com/products/camera-module-v2/'/>
          </Page>
        </>
    );
};

export default Project_1;
