import React, {useEffect} from 'react';
import Page, {Header_1, Header_2, Label, Block, Media, Reference, Credit} from '../../components/Page.jsx';
import pavel_durov from './pavel_durov.png';
import posts from './telegram_posts.png';
import app_icons from './app_icons.jpg';

function Blog_2(){

  var text_1 = 'To what extent does a lack of moderation imply compliance with cyber-crime? Pavel Durov, CEO of Telegram, has stated that ‘to be truly free, you should be ready to risk everything for freedom’ [1] , a prophecy which came true with his      arrest in France on the 25th of August. He was then released 4 days later on a €5 million bail [2] . Telegram is a cross-platform messaging app with an active user base of over 950 million members, known for its ‘multi-data centre infrastructure, [and] encryption’ [3] and self-deleting messages which enables secure, efficient cloud storage, reducing the app size to less than 100MB… Sounds like a utopia for privacy, right? Well with all things on the internet, ‘nothing is sacred’ – rule 42.';
  var text_2 = 'Telegram’s privacy features and search algorithm, alongside a history of limited disclosure of user data (most notably to New Delhi authorities involving a series of copyright infringement cases [4] ), allowed it to become a melting pot for dark web sellers [5] . Now it facilitates serious crimes, including but not limited to drug trafficking, human trafficking, weapons resale, cybercrime, fraud, and child sexual content [6] . The latter being particularly frightening over his refusal to join either the National Centre for Missing and Exploited Children (NCMEC) or the Internet Watch Foundation (IWF), both being international programs aimed at protecting children through schemes like CyberTipline- which has more than 1600 companies registered [7] . Alongside the dark web, extremist and terrorist groups thrive  amongst Telegram’s free speech ideals, hosting an estimated 40 channels associated with Hamas [8] .';
  var text_3 = 'Durov has gone on record, stating “the claims in some media that Telegram is some sort of anarchic paradise are absolutely untrue. We take down millions of harmful posts and channels every day” but this hasn’t stopped other far-right communities from flocking in from different platforms such as Parler, a retired service by Amazon Web Services (AWS) [9] . Following the closure of Parler, the number of new Telegram users surged by 15 million over the span of 3 days- an “abrupt increase” Durov said to have “caused growing pains that made it easier for criminals to abuse our platform”… Though it may not be a surprise considering his team to be made up of only 30 engineers globally and no HR staff [10] .';
  var text_4 = 'Just over a week and a half after his arrest, Durov broke his silence with a post on his updates channel [11] , “if a country is unhappy with an Internet service, the established practice is to start a legal action against the service itself”. While other companies simply got a slap on the wrist for lack of moderation (such as Twitter getting a yellow card in 2023 [12] ), he is facing up to 10 years in jail [13] which sparked controversy over ulterior motives behind the sudden arrest [14] . What’s more, French authorities placed him under formal investigation, implying there may not be enough usable evidence to convict him as of yet due to the encryption used on the platform.';
  var text_5 = 'Even if Durov is convicted, and Telegram adequately moderated, there will always be a platform dedicated to free speech- evident in the advertisement of its competitors on Reddit [15] [16] [17] . Though the arrest does spotlights our lack of regulation regarding the sanctions for platform creators, something explored in the Singaporean government through their Online Criminal Harms Act 2023 (OCHA) [18].';
  var text_6 = 'OCHA was introduced in parliament on the 8th of May 2023, having commenced on the 1st of February 2024 [19]  . It enables the governing body to stop communication, disable, restrict, block access and remove apps where a user is under reasonable suspicion of certain criminal offenses. Whilst it isn’t globally implemented, Singapore’s recent development could pave the way for a wider range of international internet safety laws, ones that can more clearly distinguish between compliance and freedom of speech.';

  var ref_1 = 'https://www.instagram.com/durov/p/BhgmhvullBv/?hl=en';
  var ref_2 = 'https://www.france24.com/en/europe/20240829-telegram-chief-durov-freed-on-bail-after-being-formally-charged-over-crime-on-messaging-app';
  var ref_3 = 'https://telegram.org/faq#q-what-is-telegram-what-do-i-do-here';
  var ref_4 = 'https://www.medianama.com/2023/01/223-telegram-5-copyright-cases-delhi-hc/#:~:text=The%20case%20that%20changed%20it,identities%20of%20the%20infringers%20too.';
  var ref_5 = 'https://www.analyticsinsight.net/apps/how-telegram-became-criminals-hub-for-illegal-activities';
  var ref_6 = 'https://www.bbc.co.uk/news/articles/c78lgzl919go';
  var ref_7 = 'https://www.bbc.co.uk/news/articles/cy54905nv0go';
  var ref_8 = 'https://yro.slashdot.org/story/24/09/07/194232/new-york-times-calls-telegram-a-playground-for-criminals-extremists-and-terrorists';
  var ref_9 = 'https://www.politico.eu/article/telegram-far-right-extremist/';
  var ref_10 = 'https://www.techradar.com/pro/telegram-confesses-it-only-employs-thirty-engineers-and-somehow-thinks-this-is-fine#:~:text=The%20founder%20of%20messaging%20platform,human%20resources%20(HR)%20department.';
  var ref_11 = 'https://tlgrm.eu/channels/@Durov/342';
  var ref_12 = 'https://www.euractiv.com/section/digital/news/twitter-gets-yellow-card-as-platforms-report-on-content-moderation/';
  var ref_13 = 'https://fortune.com/europe/2024/09/06/telegram-pavel-durov-media-claims/';
  var ref_14 = 'https://www.telegraph.co.uk/world-news/2024/09/09/telegram-arrest-could-unlock-russian-front-line-secrets/';
  var ref_15 = 'https://www.reddit.com/r/privacy/comments/1fab9rj/telegram_will_start_moderating_private_chats/';
  var ref_16 = 'https://signal.org';
  var ref_17 = 'https://simplex.chat';
  var ref_18 = 'https://thuraisingam.com/news-mentions/a-closer-look-at-criminal-activities-on-telegram';
  var ref_19 = 'https://www.globalcompliancenews.com/2024/03/20/https-insightplus-bakermckenzie-com-bm-technology-media-telecommunications_1-singapore-the-online-criminal-harms-act-commences-on-1-february-2024_03142024/';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'KyanePerera | Telegram CEO arrested';
  }, [])

    return (
        <>
          <Page>
            <Header_1 text = 'The arrest of Telegram CEO, Pavel Durov'/>
            <Credit date='10/09/2024' author='Kyane Perera'/>
            <Block>
              <Media source={pavel_durov} Width={'40%'} minWidth={'170px'} 
                             caption={'Pavel Durov at TechCrunch Disrupt, San Francisco'} maxWidth={'400px'} 
                             Float={'right'}/>
              <Label text={text_1}/>
              <Header_2 text = 'What actually goes on in Telegram?'/>
            <Label text={text_2}/>
            </Block>
            <Block>
              <Media source={posts} Width={'calc(100% - 32px)'}
                             caption={"Posts from Pavel Durov's telegram channel"} maxWidth={'450px'} 
                             Float={'left'}/>
              <Label text={text_3}/>
              <Header_2 text = 'How has Durov responded to the arrest?'/>
              <Label text={text_4}/>
            </Block>
            
            <Block>
              <Media source={app_icons} Width={'40%'} minWidth={'190px'} 
                             caption={'Photographed by LoboStudioHamburg'} maxWidth={'350px'} 
                             Float={'right'}/>
              <Label text={text_5}/>
              <Label text={text_6}/>
            </Block>
            <Reference source={ref_1} refCount='1'/>
            <Reference source={ref_2} refCount='2'/>
            <Reference source={ref_3} refCount='3'/>
            <Reference source={ref_4} refCount='4'/>
            <Reference source={ref_5} refCount='5'/>
            <Reference source={ref_6} refCount='6'/>
            <Reference source={ref_7} refCount='7'/>
            <Reference source={ref_8} refCount='8'/>
            <Reference source={ref_9} refCount='9'/>
            <Reference source={ref_10} refCount='10'/>
            <Reference source={ref_11} refCount='11'/>
            <Reference source={ref_12} refCount='12'/>
            <Reference source={ref_13} refCount='13'/>
            <Reference source={ref_14} refCount='14'/>
            <Reference source={ref_15} refCount='15'/>
            <Reference source={ref_16} refCount='16'/>
            <Reference source={ref_17} refCount='17'/>
            <Reference source={ref_18} refCount='18'/>
            <Reference source={ref_19} refCount='19'/>
          </Page>
        </>
    );
};

export default Blog_2;
