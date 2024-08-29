import React from 'react';
import Page, {Header_1, Header_2, Label, Block, Media, Reference, Download} from '../../components/Page.jsx';
import pi_cluster from './pi_cluster.jpg';

function Project_0(){

    return (
        <>
          <Page>
            <Header_1 text = 'Header For This Project'/>
            <Label text = 'ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb'/>
            <Header_2 text = 'Subheader For This Project'/>
            <Label text = 'ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb'/>
            <Block>
              <Media source={pi_cluster} Width={'40%'} minWidth={'100px'} 
                             caption={'hehehhe'} maxWidth={'450px'} 
                             Float={'left'}/>
              <Label text='ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb '/>
              <Label text='adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb ad bjadn blanbadbj adnblanb adbjadnb anbadbja dnblanba dbjadnbl anbadbj adn blanbadbj adnblan bad bja  dnb lanbadb jadnbla nbadbja dnbl an badbj adnblanb adbjadnb lan badbja dnbla nbadbja dnb la nbadbj adnb lanb'/>
            </Block>
            <Download text='download.txt' source={pi_cluster}/>
            <Reference source='https://www.kali.org/docs/arm/raspberry-pi-5/#:~:text=The%20Raspberry%20Pi%205%20has,similar%20to%20most%20other%20platforms.' refCount='1'/>
            <Reference source='https://react.dev/learn/passing-props-to-a-component' refCount='2'/>
          </Page>
        </>
    );
};

export default Project_0;
