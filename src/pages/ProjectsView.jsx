import React, {useEffect} from 'react';
import PostBlock, {Thumbnail} from '../components/PostBlock.jsx';
import eee_bot from '../Posts/project_1/thumbnail.jpg';
import pulse_oxy from '../Posts/project_2/working_poxy.jpeg';

function ProjectsView(){

  const bg_color = '#292121';
  const accent_color = 'rgb(149, 119, 137)';
  const title_color = 'rgb(179, 149, 167)';
  const Title = 'Projects';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'KyanePerera | Projects';
  }, [])

    return (
        <>
          <PostBlock pageColor={bg_color} accentColor={title_color} title={Title}>
            <Thumbnail 
              thumbnail_src={eee_bot}
              title='The EEE Bot - Year 1 project'
              page_src='/projects/project-1'
              accentColor={accent_color}
              publish='29/08/2024'/>
            <Thumbnail 
              thumbnail_src={pulse_oxy}
              title='Pulse oximeter - Year 2 project 1'
              page_src='/projects/project-2'
              accentColor={accent_color}
              publish='26/07/2025'/>
          </PostBlock>
        </>
    );
};

export default ProjectsView;