import React from 'react';
import Page, {Header_1, Header_2, Label, Block, Media} from '../../components/Page.jsx';
import CPLD from './CPLD.jpeg';
import segment_display from './7-segment.jpeg';
import pulse from './pulse.jpeg';
import working_poxy from './working_poxy.jpeg';

function Project_2(){

    return (
        <>
          <Page>
            <Header_1 text = 'Pulse Oximeter - Year 2 project 1'/>
            <Label text = 'A key part of year 1 was developing the understanding of the principles of op-amps. In year 2, we blended it with medical photonics technology in a pulse oximeter group project.'/>
            <Media source={working_poxy} Width={'40%'} minWidth={'100px'} 
                             caption={'Figure 1 - working pulse oximeter'} maxWidth={'450px'} 
                             Float={'centre'}/>
            <Header_2 text = 'What is a pulse oximeter?'/>
            <Label text = 'A pulse oximeter measures heart rate and blood oxygen levels by shining red and infrared light through tissue (often the fingertip). Oxygenated haemoglobin absorbs more IR light, while deoxygenated haemoglobin absorbs more red light, which we can read to give readings for both. Though theoretically red LEDs can also be used to measure heart rate, the peak is significantly less pronounced than IR, so when amplifying the current signal, red LEDs will need a higher gain and thus increase the effect of noise distortion and vice versa.'/>
            <Header_2 text = 'So what was our design?'/>
            <Block>
              <Media source={pulse} Width={'40%'} minWidth={'100px'} 
                             caption={'Figure 2 - PPG trace'} maxWidth={'450px'} 
                             Float={'left'}/>
              <Label text="The preliminary design uses fast-switching red and IR LEDs through a probe, which is read using a photodiode similar to the IR LED circuit we used in the EEE bot. However, this time the LEDs were toggled in a 50% duty cycle PWM signal through BJTs and an STM32 microcontroller's PWM output. Then the small current signal from the photodiode is run through a transimpedance amplifier, providing it with enough DC offset for noticeable peaks in the 0-3.3V ADC range of the STM32, then 512 samples are used in a Fast Fourier Transform (FFT) to provide the frequency of our heartbeat. To calculate blood oxygen levels, we used the ratio of red to IR readings to their respective DC offsets, scaling it by comparing the output to an actual SPO2 reading. We then displayed the readings on a mini OLED screen using I2C from the STM32 whilst reading from serial in Putty using USART; however, in doing so, we occupied the STM32's serial port, and we weren't able to plot data using STM32CubeIDE's variable plotter. To fix this, we toggled USART output in code so we could turn on and off the plotter for demonstrations."/>
            </Block>
            <Header_2 text = 'The 7-segment display:'/>
            <Block>
              <Media source={segment_display} Width={'40%'} minWidth={'100px'} 
                             caption={'Figure 3 - 7 segment display'} maxWidth={'450px'} 
                             Float={'right'}/>
              <Label text="In addition to photonics, the project was also used as an introduction to CPLDs, where we used an Intel/Altera MAX VII to simulate a UART bus (connected through a coaxial cable) and read grey code integers to display on 2 7-segment LEDs. However, the final logic gate circuit didn't work due to an issue we later debugged where the CPLD wouldn't lock in the value for the 7-segment and instead clear (set to 0) straight after displaying the number input. Since the CPLD was operating at 100kHz using an external crystal oscillator, the successful toggling of the display wasn't noticable due to how fast it switched, which made debugging significantly more time-consuming, so my teammate suggested switching to Verilog in the end for the demonstration due to the tight time constraint. Overall, the 7-segment logic circuits and Karnaugh maps were accurate; however, their implementation wasn't possible within the time constraints due to inaccurate UART handling."/>
            </Block>
            <Media source={CPLD} Width={'40%'} minWidth={'100px'} 
                             caption={'Figure 4 - CPLD design of a UART receiver and 7 segment display'} maxWidth={'450px'} 
                             Float={'centre'}/>
            <Header_2 text = 'Improvements:'/>
            <Label text="One thing we noticed when trying to find the gain of the transimpedance amplifier was that the differential IR absorption of different skin tones meant that the device was only compatible with one skin tone. Whilst one of our group members could have a perfect PPG trace from the pulse oximeter, another could be flat-lined, so the results vary across members. One way to resolve this is to have a separate feedback loop that controls the gain of the transimpedance amp with digital potentiometers to ensure consistency. Another issue was the accuracy of the heart rate. With our sample size, FFTs didn't have the precision to handle the low frequencies of a heart rate (mainly because the internal sample rate of the ADC was too high), and the result had to be taken over a short period to not overrun demonstration times. Misrepresentative FFT readings were further scaled by 60 (beats per minute), so any minor errors in accuracy were amplified, which led to our final reading having an accuracy of +-4bpm which is... abysmal. Next time, we need to accumulate more samples when applying such a low-frequency signal to an FFT. Though it would result in significantly longer settling times for the pulse oximeter, seeing as it's medical tech, I'd imagine accuracy to be the priority."/>  
            <Label text="Aside from these severe design flaws, there are several other considerations like power consumption and the fact that the design was significantly larger that commercial probes. Since we only used the STM32 for FFTs, PWM, I2C and USART, we could switch over to smaller ESP32s like the mini M4 STM32 and condition the ADCs to provide the same results but with a smaller footprint, and at a far lower power draw."/>
          </Page>
        </>
    );
};

export default Project_2;