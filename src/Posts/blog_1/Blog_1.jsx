import React, {useEffect} from 'react';
import Page, {Header_1, Header_2, Label, Block, Media, Reference, Credit} from '../../components/Page.jsx';
import database from './database.jpg';
import hacker from './hacker.jpg';
import id from './id cards.png';

function Blog_1(){

  var text_1 = 'We tread a fine line between privacy and security. Whether we like it or not, we trade a fraction of our integrity to help regulate the people who threaten the rest of it. A data broker is one such example, they are ‘an individual or company that specializes in collecting personal data or data about people, mostly from public records but sometimes sourced privately, and selling or licensing such information to third parties for a variety of uses’ [1] , but once compromised they become a hacker’s paradise and that is exactly what happened to National Public Data as of April 2024.';
  var text_2 = 'National Public Data is a data broker based in Florida that specialises in credit and criminal background checks [2] . They are operated by Jerico Pictures Inc, and are used by investigators, background check websites, mobile apps etc. However, in late December 2023, there were reports of a third-party bad actor attempting to gain access to its data centre [3] . It is currently unclear who extradited the original 2.9 billion public records, however there are 3 main hacker/groups that have been headlined in its leak via the dark web.';
  var text_3 = 'A database titled “National Public Data” was attempted to be sold for $3.5 million on the 8th of April by USDoD [4] , an infamous cybercrime group associated with the breach of multiple US defence databases (hence the name being a cynical nod to US Department of Defence), spear phishing hacks in an FBI partnership organisation and the AI project “Tulip” [5] which targeted US military personnel. The database was later scooped by Fenice, a member of the ‘Breached’ hacking forum, who has publicised two text files totalling 277GB which contains 2.7 billion public records on the 6th of August [6]. However, Fenice claimed the threat actor from December to be someone called “SXUL” rather than USDoD.';
  var text_4 = 'Regardless of the origination of the leak, the release of the data has led National Public Data to recommend the victims to request credit checks from the three major credit bureaus: Equifax, Experian and TransUnion [7] . As previously mentioned, the centre housed data used by investigators and credit check companies, so it held PII such as email addresses, phone numbers, names, credit scores and social security numbers (SSNs). This in turn exposed approximately 292 million individuals [8] from the US, (and possibly) the UK and Canada. Though the records contain outdated information, thus alleviating the risk to a large portion of civilians, “ even if only 51% of the SSNs exposed hold a minimal quality to be used in identity attacks, this translates to added risk to an unprecedented 138 million people.” – Julio Casal, chief intelligence officer of Constella AI [9] .';
  var text_5 = 'To make matters worse, identity theft isn’t the only concern for those affected by the leak. Victims have been required to freeze their credit cards in fear of fraud cases, as well as keep a look out for spear phishing emails, smishing and other personalised social engineering attacks [10] . The brunt of the backlash towards National Public Data was due to their late announcement of the breach, having kept it under wraps for a week until a lawsuit was filed [11] . Data brokers aren’t held to a high enough regulatory standard, which have led to their exfiltration through the course of 8 months with minimal repercussions despite the severe lack of security audits.';
  var text_6 = 'The true scope of the breach is unknown as National Public Data have refused to confirm the severity of the leak nor provide resources to check if you may have been one of their victims. However, there are third party sites such as npd.pentester.com [12] that are available to check your digital safety.';

  var ref_1 = 'https://en.wikipedia.org/wiki/Data_broker';
  var ref_2 = 'https://eu.northjersey.com/story/news/2024/08/23/national-public-data-probably-has-your-personal-information-was-it-leaked/74916027007/';
  var ref_3 = 'https://www.cnet.com/personal-finance/check-if-your-social-security-number-is-included-in-the-national-public-data-breach/';
  var ref_4 = 'https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2024/august/national-public-data-breach/#:~:text=According%20to%20the%20suit%20and,Web%20forum%20on%208%20April';
  var ref_5 = 'https://socradar.io/unmasking-usdod-the-enigma-of-the-cyber-realm/';
  var ref_6 = 'https://www.bleepingcomputer.com/news/security/hackers-leak-27-billion-data-records-with-social-security-numbers/';
  var ref_7 = 'https://nationalpublicdata.com/Breach.html';
  var ref_8 = 'https://www.biometricupdate.com/202408/investigations-into-massive-national-public-data-breach-heat-up';
  var ref_9 = 'https://constella.ai/verifying-the-national-public-data-breach/';
  var ref_10 = 'https://www.mcafee.com/blogs/security-news/data-breach-exposes-3-billion-personal-information-records/#:~:text=Further%2C%20in%20June%2C%20The%20Register,%2C%20Canadian%2C%20and%20British%20citizens';
  var ref_11 = 'https://www.securitymagazine.com/articles/100951-security-leaders-discuss-the-national-public-data-breach#:~:text=National%20Public%20Data%2C%20a%20background,addresses%20and%20Social%20Security%20numbers';
  var ref_12 = 'https://npd.pentester.com/';

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <>
          <Page>
            <Header_1 text = 'The National Public Data breach'/>
            <Credit date='29/08/2024' author='Kyane Perera'/>
            <Block>
              <Media source={database} Width={'40%'} minWidth={'170px'} 
                             caption={'Database, photographed by Panumas Nikhomkhai'} maxWidth={'400px'} 
                             Float={'right'}/>
              <Label text={text_1}/>
              <Label text={text_2}/>
            </Block>
            <Header_2 text = 'Who were malicious actors?'/>
            <Block>
              <Media source={hacker} Width={'40%'} minWidth={'170px'} 
                             caption={'Hacker, photographed by Ashutosh Sonwani'} maxWidth={'250px'} 
                             Float={'left'}/>
              <Label text={text_3}/>
              <Header_2 text = 'How does this effects the victims?'/>
              <Label text={text_4}/>
            </Block>
            
            <Block>
              <Media source={id} Width={'40%'} minWidth={'190px'} 
                             caption={'ID cards, photgraphed by Pavel Danilyuk'} maxWidth={'350px'} 
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
          </Page>
        </>
    );
};

export default Blog_1;
