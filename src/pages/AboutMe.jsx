import React, {useEffect} from 'react';
import './AboutMe.css';
import Footer from '../components/Footer';
import google from '../Assets/google.png';
import matlab from '../Assets/matlab.png';
import about_me_transparent from '../Assets/about-me-transparent.png';
import matlab_onramp from '../Assets/matlab-onramp.pdf';

function AboutMe(){

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  var sum_1 = 'Undergraduate electronic and computer engineering student pursuing a career in cyber security, with aspirations of being an ethical hacker.';
  var sum_2 = 'Skilled at C, C++, Python, JavaScript and HTML/CSS with experience developing Discord bots, file management tools, NLP with NLTK, image processing with OpenCV, developing firmware for embedded IoT systems and web development. Devoted to expanding current skillset with Linux-based network capture tools, Active Directory and MS Azure.';

  var text_1 = 'In an ideal world, every server, every network and every program would abide by Kerckhoff’s principle. But what can we do if civilisation’s thirst for growth is in a quantum state between a kernel virus and a feature? We build on layers of already fragile technological infrastructure, growing our threat landscape faster than we can patch it. So now I want to help hold down the front line. The closer we get to ideality, the closer we are to digital safety.' 
  var text_2 = 'My name is Kyane Perera and I’m an Electronic and Computer Engineering undergrad at the University of Nottingham with aspirations of being a cyber security analyst and one day becoming an ethical hacker. ';
  var text_3 = 'The first thing that set me on the path to tech was my first time solving a Rubik’s cube. It became a fad in primary school for a short while, but I was unbelievably stubborn and hell bent on devoting my life’s work (2 weeks) to solving it… and completely forgetting about homework in the process but thankfully cramming exists. I worked my way up from 3x3, to 4x4, to megaminx (dodecahedron) and even the 4x4 megaminx, and eventually found myself into speed cubing and suddenly my entire YouTube feed became an ad for MoYu. But I realised through all of that, I love puzzles! And more importantly, I took that love for puzzles to supplement my problem-solving skills and I finally got decent at maths. During this time, I also got seriously into making Minecraft Redstone doors which I still do to this day as well as Minecraft logic circuits and an embarrassing amount of building, but I didn’t realise how much it overlapped with computer science at the time and faster forward 3 years; I chose computer science for my GCSEs.';
  var text_4 = 'I initially started off being interested in programming, teaching myself to code in python and C++ to work on GUIs and Arduino LED arrays which later graduated to several discord bots (JavaScript and Python), websites (HTML/CSS), a robotic arm (C++) and machine learning (NLTK/ OpenCV – python) later in sixth form. ';
  var text_5 = 'I did the vast majority of my projects back then during lockdown, I was practically glued to my computer and in doing so I had more time to figure out the ins-and-outs of the Discord API. I also began to focus a lot more energy into playing my guitar, which became a way to stop my fidgeting and dissociate from a task to then loop back into it with a fresh mind. I mean, nobody was there to stop me from playing it during online lessons… I’d also like to issue an apology to all my teachers from y9-10, I promise I was paying attention… mostly.';
  var text_6 = 'I was always fascinated by how insecure my projects were. One time, I had my personal email clearly visible in the inspect html source code of one of my websites… Safe to say I took that link down as soon as I realised… But I loved how fun it was to take apart my own website and look for vulnerabilities.';
  var text_7 = 'After starting uni, I found myself with less time to do coding projects and geared myself more towards electronics where we built an RC car with implemented computer vision, and  IR/ ultrasonic guided steering. I also picked up old hobbies again like volleyball and long-distance running, which consumed a lot of my free time too. Back in school, I used to play volleyball for Malory Eagles Juniors and my secondary school team but now I have the chance to play for my university team too!';
  var text_8 = 'Later, through experimentation of hosting websites of an ESP32 and research on the Flipper Zero, I started to veer back into programming but with a brighter spark for cyber security. I researched more about things like Raspberry Pi rubber duckies and Kali Linux, and my eyes were opened to the hardware side of offensive security.';
  var text_9 = 'I hope you’ll follow me in my journey into cyber security! You can navigate to “projects” to see what I’ve been working on lately, and if you want to see what’s been happening lately in cyber sec then check out “blog”.';
 
    return (
        <>
          <div className='about-me-fullscreen'>
            <div className='about-me-container'>
              <div className='general-contents'>
                <div className='about-me-bio'>
                  <img className='about-me-img' src={about_me_transparent}></img>
                  <h2 className='title-text'>Short Summary</h2>
                  <p className='about-me-bio-text'>{sum_1}</p>
                  <p className='about-me-bio-text'>{sum_2}</p>
                  <h2 className='title-text'>General</h2>
                  <p className='about-me-bio-text'>{text_1}</p>
                  <p className='about-me-bio-text'>{text_2}</p>
                  <p className='about-me-bio-text'>{text_3}</p>
                  <p className='about-me-bio-text'>{text_4}</p>
                  <p className='about-me-bio-text'>{text_5}</p>
                  <p className='about-me-bio-text'>{text_6}</p>
                  <p className='about-me-bio-text'>{text_7}</p>
                  <p className='about-me-bio-text'>{text_8}</p>
                  <p className='about-me-bio-text'>{text_9}</p>
                </div>
                <div className='certs'>
                  <a href = 'https://coursera.org/share/6a106e21d19f58474e75ec9b074375f0' className='cert-link'>
                    <img src={google} className='cert-ico'/>
                    <p className='cert-name'>Google Cyber Security Professional Certificate</p>
                  </a>
                  <a href={matlab_onramp} className='cert-link'>
                    <img src={matlab} className='cert-ico'/>
                    <p className='cert-name'>Matlab On Ramp Certificate</p>
                  </a>
                </div>
              </div>
            </div>
            <div className='about-me-footer'><Footer/></div>
          </div>
        </>
    );
};

export default AboutMe;
